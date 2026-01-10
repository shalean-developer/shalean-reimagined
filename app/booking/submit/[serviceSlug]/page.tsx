'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useBookingFormContext } from '../../book/context/BookingFormContext';
import { Step3ContactReview } from '../../book/components/Step3ContactReview';
import { createBookingDraft, initializePaymentForBooking, validateDiscountCode } from '../../book/actions';
import { getServices, getAdditionalServices } from '../../quote/actions';
import { getPricingRulesClient } from '../../book/actions-client';
import { calculatePriceBreakdownClient } from '@/lib/pricing/calculator-client';
import { findServiceBySlug } from '@/lib/utils/slug';
import { toast } from 'sonner';
import { PriceBreakdown } from '@/types/booking';

function BookingSubmitPageWithSlugContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceSlug = params.serviceSlug as string;
  
  const {
    formData,
    updateFormData,
    validateCurrentStep,
    previousStep,
    getDiscountAmount,
    setDiscountAmount: setDiscountAmountStorage,
    setServicesForSlug,
  } = useBookingFormContext();

  // Initialize to 0 to match server render and prevent hydration mismatch
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState<string | null>(null);

  // Track previous serviceId to detect changes
  const previousServiceIdRef = useRef<string | undefined>(formData.serviceId);

  // Fetch services to validate slug
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  // Set services in hook for slug generation
  useEffect(() => {
    if (services.length > 0) {
      setServicesForSlug(services);
    }
  }, [services, setServicesForSlug]);

  // Read and store referral code from URL parameter
  useEffect(() => {
    const refCode = searchParams.get('ref');
    if (refCode && !formData.referralCode) {
      // Store referral code in form data
      updateFormData({ referralCode: refCode });
      // Also store in localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('shalean_referral_code', refCode);
      }
    }
  }, [searchParams, formData.referralCode, updateFormData]);

  // Validate service slug and set service in form data
  useEffect(() => {
    if (services.length > 0) {
      if (!serviceSlug) {
        // No slug, redirect to details
        router.replace('/booking/details');
        return;
      }
      
      const service = findServiceBySlug(services, serviceSlug);
      if (!service) {
        // Invalid slug, redirect to details
        toast.error('Invalid service selected');
        router.replace('/booking/details');
        return;
      }

      // Ensure service is set in form data (don't redirect if not set - it will be set)
      if (!formData.serviceId || formData.serviceId !== service.id) {
        updateFormData({ serviceId: service.id });
      }
    }
    // Only run when services load or slug changes, not on every formData change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceSlug, services.length]);

  // Sync discount amount from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    const updateDiscount = () => {
      setDiscountAmount(getDiscountAmount());
    };
    // Listen for custom event when discount is updated
    window.addEventListener('discountUpdated', updateDiscount);
    // Initial load - read from localStorage after mount
    updateDiscount();
    return () => {
      window.removeEventListener('discountUpdated', updateDiscount);
    };
  }, [getDiscountAmount]);

  // Reset service-specific fields when service changes
  useEffect(() => {
    const previousServiceId = previousServiceIdRef.current;
    const currentServiceId = formData.serviceId;

    // Only reset if service actually changed (not on initial load)
    if (previousServiceId && previousServiceId !== currentServiceId) {
      updateFormData({
        additionalServices: [],
        bedrooms: '0',
        bathrooms: '1',
        carpetTypes: [],
        roomStatus: '',
        numberOfFittedRooms: '',
        numberOfLooseCarpets: '',
        cleaningEquipment: '',
        serviceDate: '',
        serviceTime: '',
        serviceDuration: 3.5,
        discountCode: '',
      });
      setDiscountAmount(0);
    }

    // Update the ref for next comparison
    previousServiceIdRef.current = currentServiceId;
  }, [formData.serviceId, updateFormData]);

  // Fetch and cache pricing rules
  const { data: pricingRules = [] } = useQuery({
    queryKey: ['pricing-rules'],
    queryFn: getPricingRulesClient,
    staleTime: 10 * 60 * 1000,
  });

  // Fetch additional services based on selected service
  const { data: additionalServices = [] } = useQuery({
    queryKey: ['additional-services', formData.serviceId],
    queryFn: () => getAdditionalServices(formData.serviceId || undefined),
    enabled: true,
    staleTime: 5 * 60 * 1000,
  });

  const selectedService = services.find((s) => s.id === formData.serviceId);

  // Check if selected service is carpet cleaning
  const isCarpetCleaning = selectedService?.name.toLowerCase().includes('carpet') ?? false;

  // Calculate price breakdown instantly using cached pricing rules
  // This is memoized and recalculates automatically when dependencies change
  // Updates in real-time when cleaningFrequency changes (weekly, bi-weekly, monthly, one-time)
  const priceBreakdown = useMemo<PriceBreakdown>(() => {
    const hasRequiredData = isCarpetCleaning
      ? formData.serviceId && pricingRules.length > 0
      : formData.serviceId && formData.bedrooms && formData.bathrooms && pricingRules.length > 0;

    if (!hasRequiredData) {
      return {
        basePrice: 0,
        bedroomsPrice: 0,
        bathroomsPrice: 0,
        fittedRoomsPrice: 0,
        looseCarpetsPrice: 0,
        additionalServicesPrice: 0,
        equipmentSupplyPrice: 0,
        additionalCleanersPrice: 0,
        subtotal: 0,
        frequencyDiscountPercent: 0,
        frequencyDiscountAmount: 0,
        discountAmount,
        serviceFee: 0,
        totalAmount: 0,
      };
    }

    const relevantAdditionalServiceIds = formData.additionalServices.filter(serviceId =>
      additionalServices.some(s => s.id === serviceId)
    );

    return calculatePriceBreakdownClient(
      pricingRules,
      formData.serviceId,
      formData.bedrooms || '0',
      formData.bathrooms || '1',
      relevantAdditionalServiceIds,
      formData.cleaningFrequency,
      discountAmount,
      formData.numberOfFittedRooms || '',
      formData.numberOfLooseCarpets || '',
      isCarpetCleaning,
      selectedService?.name,
      formData.cleaningEquipment,
      formData.numberOfCleaners || 1
    );
  }, [
    pricingRules,
    formData.serviceId,
    formData.bedrooms,
    formData.bathrooms,
    // Use JSON.stringify for array dependency to ensure proper change detection
    JSON.stringify(formData.additionalServices),
    formData.cleaningFrequency,
    formData.numberOfFittedRooms,
    formData.numberOfLooseCarpets,
    formData.cleaningEquipment, // Track equipment selection for price updates
    formData.numberOfCleaners, // Track number of cleaners for price updates
    discountAmount,
    isCarpetCleaning,
    additionalServices,
    selectedService?.name,
  ]);

  const handleValidateDiscountCode = async (code: string) => {
    if (!code.trim()) {
      toast.error('Please enter a discount code');
      return;
    }

    const subtotal = priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount;
    const result = await validateDiscountCode(code, subtotal);

    if (result.valid) {
      updateFormData({ discountCode: code });
      setDiscountAmount(result.discountAmount);
      setDiscountAmountStorage(result.discountAmount);
      window.dispatchEvent(new Event('discountUpdated'));
      toast.success('Discount code applied successfully!');
    } else {
      toast.error(result.error || 'Invalid discount code');
    }
  };

  const handleProceedToPayment = async () => {
    const validation = validateCurrentStep();
    if (!validation.valid) {
      validation.errors.forEach((error) => toast.error(error));
      return;
    }

    setIsProcessing(true);

    try {
      const draftResult = await createBookingDraft(formData);

      if (!draftResult.success || (!draftResult.bookingId && !draftResult.bookingIds)) {
        toast.error(draftResult.error || 'Failed to create booking');
        setIsProcessing(false);
        return;
      }

      // Use bookingIds if available (for recurring bookings), otherwise use single bookingId
      const bookingIds = draftResult.bookingIds || (draftResult.bookingId ? [draftResult.bookingId] : []);
      setCurrentBookingId(bookingIds[0]);

      // If user wants to use credits, deduct them first
      if (formData.useCredits && formData.creditsAmount && formData.creditsAmount > 0) {
        try {
          const creditsResponse = await fetch('/api/bookings/use-credits', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              bookingIds,
              creditsAmount: formData.creditsAmount,
            }),
          });

          const creditsData = await creditsResponse.json();

          if (!creditsResponse.ok || !creditsData.success) {
            toast.error(creditsData.error || 'Failed to use ShaleanCred');
            setIsProcessing(false);
            return;
          }

          toast.success(`Applied R${formData.creditsAmount.toFixed(2)} ShaleanCred to your booking`);
        } catch (error) {
          console.error('Error using credits:', error);
          toast.error('Failed to use ShaleanCred. Please try again.');
          setIsProcessing(false);
          return;
        }
      }

      // Initialize payment (pass array or single ID)
      // This will check for credits_used and handle full/partial payment accordingly
      const paymentResult = await initializePaymentForBooking(bookingIds.length > 1 ? bookingIds : bookingIds[0]);

      if (!paymentResult.success) {
        toast.error(paymentResult.error || 'Failed to initialize payment');
        setIsProcessing(false);
        return;
      }

      // If no authorization URL, payment is fully covered by credits - redirect to success
      if (!paymentResult.authorizationUrl) {
        toast.success('Booking confirmed! Payment completed with ShaleanCred.');
        // Redirect to booking confirmation
        router.push(`/booking/confirmation/${bookingIds[0]}`);
        return;
      }

      // Partial or full Paystack payment needed - redirect to Paystack
      window.location.href = paymentResult.authorizationUrl;
    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <Step3ContactReview
          formData={formData}
          priceBreakdown={priceBreakdown}
          updateFormData={updateFormData}
          onValidateDiscountCode={handleValidateDiscountCode}
          onProceedToPayment={handleProceedToPayment}
          isProcessing={isProcessing}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-[576px] mx-auto mt-6">
        <Button 
          variant="outline" 
          onClick={() => {
            if (serviceSlug) {
              const refCode = formData.referralCode || searchParams.get('ref');
              const backUrl = refCode 
                ? `/booking/worker/${serviceSlug}?ref=${refCode}`
                : `/booking/worker/${serviceSlug}`;
              router.push(backUrl);
            } else {
              previousStep();
            }
          }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
    </>
  );
}

export default function BookingSubmitPageWithSlug() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <BookingSubmitPageWithSlugContent />
    </Suspense>
  );
}

