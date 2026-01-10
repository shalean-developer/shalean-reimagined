'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useBookingFormContext } from '../book/context/BookingFormContext';
import { Step1ServiceDetails } from '../book/components/Step1ServiceDetails';
import { getPricingRulesClient } from '../book/actions-client';
import { getServices } from '../quote/actions';
import { getServiceSlugById } from '@/lib/utils/slug';

function BookingDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    formData,
    updateFormData,
  } = useBookingFormContext();

  // Fetch services
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  // Fetch and cache pricing rules
  const { data: pricingRules = [] } = useQuery({
    queryKey: ['pricing-rules'],
    queryFn: getPricingRulesClient,
    staleTime: 10 * 60 * 1000,
  });

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

  // Redirect to slugged URL if service is selected (preserve referral code)
  useEffect(() => {
    if (formData.serviceId && services.length > 0) {
      const slug = getServiceSlugById(services, formData.serviceId);
      if (slug) {
        const refCode = formData.referralCode || searchParams.get('ref');
        const url = refCode 
          ? `/booking/details/${slug}?ref=${refCode}`
          : `/booking/details/${slug}`;
        router.replace(url);
      }
    }
  }, [formData.serviceId, formData.referralCode, services, router, searchParams]);

  return (
    <>
      <Step1ServiceDetails
        formData={formData}
        updateFormData={updateFormData}
        pricingRules={pricingRules}
      />
    </>
  );
}

export default function BookingDetailsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <BookingDetailsContent />
    </Suspense>
  );
}

