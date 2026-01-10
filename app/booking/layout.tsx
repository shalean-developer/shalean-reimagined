'use client';

import { usePathname, useParams } from 'next/navigation';
import Image from 'next/image';
import { ProgressIndicator } from './book/components/ProgressIndicator';
import { BookingFormProvider, useBookingFormContext } from './book/context/BookingFormContext';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState, useEffect, useRef } from 'react';
import { getServices, getAdditionalServices } from './quote/actions';
import { getPricingRulesClient } from './book/actions-client';
import { calculatePriceBreakdownClient } from '@/lib/pricing/calculator-client';
import { BookingSummary } from './book/components/BookingSummary';
import { PriceBreakdown } from '@/types/booking';
import Footer from '@/components/Footer';
import { findServiceBySlug } from '@/lib/utils/slug';

// Get step from pathname (supports both with and without slug)
const getStepFromPath = (pathname: string): number => {
  if (pathname.startsWith('/booking/details')) return 1;
  if (pathname.startsWith('/booking/worker')) return 2;
  if (pathname.startsWith('/booking/submit')) return 3;
  return 1;
};

function BookingLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();
  const currentStep = getStepFromPath(pathname);
  const serviceSlug = params.serviceSlug as string | undefined;
  
  const {
    formData,
    updateFormData,
    isStepCompleted,
    getDiscountAmount,
    clearDiscountAmount,
    setServicesForSlug,
  } = useBookingFormContext();

  // Get discount amount from localStorage (reactive)
  // Initialize to 0 to match server render and prevent hydration mismatch
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const hasClearedDiscountRef = useRef(false);
  
  // Store functions in refs to ensure stable references
  const updateFormDataRef = useRef(updateFormData);
  const clearDiscountAmountRef = useRef(clearDiscountAmount);
  
  // Always update refs to latest functions (they should be stable due to useCallback)
  updateFormDataRef.current = updateFormData;
  clearDiscountAmountRef.current = clearDiscountAmount;

  // Clear discount code and amount on page refresh/initial load
  // This only runs once on mount (page refresh), not during client-side navigation
  useEffect(() => {
    if (!hasClearedDiscountRef.current) {
      // Clear discount code from formData
      updateFormDataRef.current({ discountCode: '' });
      // Clear discount amount from localStorage
      clearDiscountAmountRef.current();
      setDiscountAmount(0);
      hasClearedDiscountRef.current = true;
    }
  }, []); // Empty array - refs ensure we always have access to latest functions

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

  // Track previous serviceId to detect changes
  const previousServiceIdRef = useRef<string | undefined>(formData.serviceId);

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
    }

    // Update the ref for next comparison
    previousServiceIdRef.current = currentServiceId;
  }, [formData.serviceId, updateFormData]);

  // Fetch services for service name
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

  // Validate and set service from slug if present
  useEffect(() => {
    if (serviceSlug && services.length > 0) {
      const service = findServiceBySlug(services, serviceSlug);
      if (service && (!formData.serviceId || formData.serviceId !== service.id)) {
        updateFormData({ serviceId: service.id });
      }
    }
  }, [serviceSlug, services, formData.serviceId, updateFormData]);

  // Fetch and cache pricing rules (only fetched once)
  const { data: pricingRules = [] } = useQuery({
    queryKey: ['pricing-rules'],
    queryFn: getPricingRulesClient,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
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
  // IMPORTANT: All formData properties that affect pricing are in the dependency array below to ensure real-time updates
  const priceBreakdown = useMemo<PriceBreakdown>(() => {
    // For carpet cleaning, we don't need bedrooms/bathrooms
    // For other services, we need bedrooms/bathrooms
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
        subtotal: 0,
        frequencyDiscountPercent: 0,
        frequencyDiscountAmount: 0,
        discountAmount,
        serviceFee: 0,
        totalAmount: 0,
      };
    }

    // Filter additional services to only include those relevant to the selected service type
    // This ensures the price calculation matches what's displayed in the summary
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
    // This ensures real-time updates when additionalServices array contents change
    JSON.stringify(formData.additionalServices),
    formData.cleaningFrequency, // This triggers real-time recalculation when frequency changes
    formData.numberOfFittedRooms,
    formData.numberOfLooseCarpets,
    formData.cleaningEquipment, // Track equipment selection for price updates
    formData.numberOfCleaners, // Track number of cleaners for price updates
    discountAmount,
    isCarpetCleaning,
    // additionalServices from query - React Query manages cache stability
    // We track it to detect when available services change for the selected service
    additionalServices,
    selectedService?.name,
  ]);

  // Check if we're on the confirmation page
  const isConfirmationPage = pathname.startsWith('/booking/confirmation');

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header - Hidden on confirmation page */}
      {!isConfirmationPage && (
        <div className="sticky top-0 z-50 bg-white border-b border-border mb-8">
          <div className="container mx-auto px-4 md:px-6 py-4 max-w-7xl">
            <div className="relative flex items-center justify-center">
              <div className="flex items-center gap-2 absolute left-0">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Shalean Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="hidden md:inline font-bold text-xl text-foreground">Shalean</span>
              </div>
              <ProgressIndicator 
                currentStep={currentStep}
                serviceSlug={serviceSlug || null}
                isStepCompleted={isStepCompleted}
              />
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
        {isConfirmationPage ? (
          // On confirmation page, render children directly without grid layout
          children
        ) : (
          // On other booking pages, use grid layout with sidebar
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {children}
            </div>

            {/* Sidebar Summary */}
            <div className="hidden lg:block lg:col-span-1">
              <BookingSummary
                formData={formData}
                priceBreakdown={priceBreakdown}
                serviceName={selectedService?.name}
                additionalServices={additionalServices}
                pricingRules={pricingRules}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer - Hidden on confirmation page */}
      {!isConfirmationPage && <Footer />}
    </div>
  );
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingFormProvider>
      <BookingLayoutContent>{children}</BookingLayoutContent>
    </BookingFormProvider>
  );
}

