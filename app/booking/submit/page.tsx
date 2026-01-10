'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useBookingFormContext } from '../book/context/BookingFormContext';
import { getServices } from '../quote/actions';
import { getServiceSlugById } from '@/lib/utils/slug';

export default function BookingSubmitPage() {
  const router = useRouter();
  const { formData } = useBookingFormContext();

  // Fetch services
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  // Redirect to slugged URL if service is selected, otherwise redirect to details
  useEffect(() => {
    if (services.length > 0) {
      if (formData.serviceId) {
        const slug = getServiceSlugById(services, formData.serviceId);
        if (slug) {
          router.replace(`/booking/submit/${slug}`);
        } else {
          router.replace('/booking/details');
        }
      } else {
        router.replace('/booking/details');
      }
    }
  }, [formData.serviceId, services, router]);

  return null; // Will redirect
}

