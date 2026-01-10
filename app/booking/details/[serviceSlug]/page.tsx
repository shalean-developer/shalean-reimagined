'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useBookingFormContext } from '../../book/context/BookingFormContext';
import { Step1ServiceDetails } from '../../book/components/Step1ServiceDetails';
import { getPricingRulesClient } from '../../book/actions-client';
import { getServices } from '../../quote/actions';
import { findServiceBySlug } from '@/lib/utils/slug';
import { toast } from 'sonner';

function BookingDetailsPageWithSlugContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceSlug = params.serviceSlug as string;
  
  const {
    formData,
    updateFormData,
    validateCurrentStep,
    nextStep,
    setServicesForSlug,
  } = useBookingFormContext();

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

  // Fetch and cache pricing rules
  const { data: pricingRules = [] } = useQuery({
    queryKey: ['pricing-rules'],
    queryFn: getPricingRulesClient,
    staleTime: 10 * 60 * 1000,
  });

  // Validate service slug and set service if valid
  useEffect(() => {
    if (services.length > 0 && serviceSlug) {
      const service = findServiceBySlug(services, serviceSlug);
      if (service) {
        // Set service if not already set or if different
        if (!formData.serviceId || formData.serviceId !== service.id) {
          updateFormData({ serviceId: service.id });
        }
      } else {
        // Invalid slug, redirect to details page
        toast.error('Invalid service selected');
        router.replace('/booking/details');
      }
    }
    // Only run when services are loaded and slug changes, not on every formData change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceSlug, services.length]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    const validation = validateCurrentStep();
    console.log('handleNext - Validation:', validation, 'FormData:', formData, 'serviceSlug:', serviceSlug);
    
    if (!validation.valid) {
      validation.errors.forEach((error) => toast.error(error));
      return;
    }
    
    // Navigate directly using the service slug from params
    if (serviceSlug) {
      const refCode = formData.referralCode || searchParams.get('ref');
      const nextUrl = refCode 
        ? `/booking/worker/${serviceSlug}?ref=${refCode}`
        : `/booking/worker/${serviceSlug}`;
      console.log('Navigating to:', nextUrl, 'Current path:', window.location.pathname);
      // Use router.replace to avoid adding to history and potential redirect loops
      router.replace(nextUrl);
    } else {
      console.log('No serviceSlug, using nextStep');
      // Fallback to hook's nextStep if no slug
      nextStep();
    }
  };

  return (
    <>
      <Step1ServiceDetails
        formData={formData}
        updateFormData={updateFormData}
        pricingRules={pricingRules}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-[576px] mx-auto mt-6">
        <div></div>
        <div className="ml-auto">
          <Button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNext(e);
            }} 
            type="button"
          >
            Continue
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default function BookingDetailsPageWithSlug() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <BookingDetailsPageWithSlugContent />
    </Suspense>
  );
}

