'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useBookingFormContext } from '../../book/context/BookingFormContext';
import { Step2ScheduleCleaner } from '../../book/components/Step2ScheduleCleaner';
import { getServices } from '../../quote/actions';
import { findServiceBySlug } from '@/lib/utils/slug';
import { toast } from 'sonner';

function BookingWorkerPageWithSlugContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceSlug = params.serviceSlug as string;
  
  const {
    formData,
    updateFormData,
    validateCurrentStep,
    nextStep,
    previousStep,
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

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    const validation = validateCurrentStep();
    console.log('Worker handleNext - Validation:', validation, 'FormData:', formData, 'serviceSlug:', serviceSlug);
    
    if (!validation.valid) {
      validation.errors.forEach((error) => toast.error(error));
      return;
    }
    
    // Navigate directly using the service slug from params
    if (serviceSlug) {
      const refCode = formData.referralCode || searchParams.get('ref');
      const nextUrl = refCode 
        ? `/booking/submit/${serviceSlug}?ref=${refCode}`
        : `/booking/submit/${serviceSlug}`;
      console.log('Navigating to:', nextUrl);
      router.replace(nextUrl);
    } else {
      console.log('No serviceSlug, using nextStep');
      // Fallback to hook's nextStep if no slug
      nextStep();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <Step2ScheduleCleaner formData={formData} updateFormData={updateFormData} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-[576px] mx-auto mt-6">
        <Button 
          variant="outline" 
          onClick={() => {
            if (serviceSlug) {
              const refCode = formData.referralCode || searchParams.get('ref');
              const backUrl = refCode 
                ? `/booking/details/${serviceSlug}?ref=${refCode}`
                : `/booking/details/${serviceSlug}`;
              router.push(backUrl);
            } else {
              previousStep();
            }
          }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
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

export default function BookingWorkerPageWithSlug() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <BookingWorkerPageWithSlugContent />
    </Suspense>
  );
}

