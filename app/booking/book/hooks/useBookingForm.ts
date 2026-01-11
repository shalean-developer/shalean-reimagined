'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { BookingFormData } from '@/types/booking';
import { getServiceSlugById } from '@/lib/utils/slug';
import { Service } from '@/types/quote';

const STORAGE_KEY = 'shalean_booking_form_draft';
const DISCOUNT_AMOUNT_KEY = 'shalean_booking_discount_amount';

// URL to step mapping (supports both with and without slug)
const getStepFromPath = (pathname: string): number => {
  if (pathname.startsWith('/booking/details')) return 1;
  if (pathname.startsWith('/booking/worker')) return 2;
  if (pathname.startsWith('/booking/submit')) return 3;
  return 1;
};

// Extract service slug from pathname
const extractServiceSlug = (pathname: string): string | null => {
  const match = pathname.match(/\/booking\/(details|worker|submit)\/([^/]+)/);
  return match ? match[2] : null;
};

const defaultFormData: BookingFormData = {
  // Step 1
  serviceId: '',
  bedrooms: '0',
  bathrooms: '1',
  additionalServices: [],
  cleaningEquipment: '',
  serviceDate: '',
  serviceTime: '',
  serviceDuration: 3.5,
  specialInstructions: '',
  // Carpet Cleaning specific fields
  carpetTypes: [],
  roomStatus: '',
  numberOfFittedRooms: '',
  numberOfLooseCarpets: '',
  numberOfCleaners: 1,
  
  // Step 2
  serviceAddress: '',
  serviceAptUnit: '',
  serviceSuburb: '',
  serviceCity: '',
  preferredCleanerIds: [],
  teamNumber: null,
  cleaningFrequency: 'one-time',
  
  // Step 3
  customerFirstName: '',
  customerLastName: '',
  customerEmail: '',
  customerPhone: '',
  tipAmount: 0,
  discountCode: '',
  referralCode: '',
};

export function useBookingForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState<BookingFormData>(defaultFormData);
  const [isDirty, setIsDirty] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  // Get current step from URL
  const currentStep = getStepFromPath(pathname);
  
  // Get service slug from URL
  const serviceSlug = extractServiceSlug(pathname);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedReferralCode = localStorage.getItem('shalean_referral_code');
      
      if (saved) {
        const parsed = JSON.parse(saved);
        // Migrate old preferredCleanerId to preferredCleanerIds array
        if (parsed.preferredCleanerId !== undefined && parsed.preferredCleanerIds === undefined) {
          parsed.preferredCleanerIds = parsed.preferredCleanerId ? [parsed.preferredCleanerId] : [];
          delete parsed.preferredCleanerId; // Remove old field
        }
        // Ensure preferredCleanerIds is always an array
        if (!Array.isArray(parsed.preferredCleanerIds)) {
          parsed.preferredCleanerIds = [];
        }
        // Preserve referral code from localStorage if not in saved data
        if (savedReferralCode && !parsed.referralCode) {
          parsed.referralCode = savedReferralCode;
        }
        setFormData({ ...defaultFormData, ...parsed });
      } else if (savedReferralCode) {
        // If no saved form data but referral code exists, set it
        setFormData({ ...defaultFormData, referralCode: savedReferralCode });
      }
    } catch (error) {
      console.error('Error loading form draft:', error);
    }
  }, []);

  // Auto-save to localStorage when form data changes
  useEffect(() => {
    if (isDirty) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (error) {
        console.error('Error saving form draft:', error);
      }
    }
  }, [formData, isDirty]);

  const updateFormData = useCallback((updates: Partial<BookingFormData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...updates };
      // Ensure preferredCleanerIds is always an array
      if (updated.preferredCleanerIds !== undefined && !Array.isArray(updated.preferredCleanerIds)) {
        updated.preferredCleanerIds = [];
      }
      setIsDirty(true);
      return updated;
    });
  }, []);

  const resetForm = useCallback(() => {
    setFormData(defaultFormData);
    setIsDirty(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(DISCOUNT_AMOUNT_KEY);
    } catch (error) {
      console.error('Error clearing form draft:', error);
    }
    router.push('/booking/details');
  }, [router]);

  // Get URL for a step, preserving service slug if available
  const getStepUrl = useCallback((step: number, slug?: string | null): string => {
    const stepPaths = {
      1: '/booking/details',
      2: '/booking/worker',
      3: '/booking/submit',
    };
    
    const baseUrl = stepPaths[step as keyof typeof stepPaths];
    if (!baseUrl) return '/booking/details';
    
    // Priority: provided slug > current URL slug > generate from formData > no slug
    let finalSlug = slug;
    
    // If no slug provided, use current URL slug
    if (!finalSlug) {
      finalSlug = serviceSlug;
    }
    
    // If still no slug, try to generate from formData (only if services are loaded)
    if (!finalSlug && formData.serviceId && services.length > 0) {
      finalSlug = getServiceSlugById(services, formData.serviceId) || null;
    }
    
    return finalSlug ? `${baseUrl}/${finalSlug}` : baseUrl;
  }, [formData.serviceId, services, serviceSlug]);

  const nextStep = useCallback(() => {
    if (currentStep < 3) {
      const nextStepNumber = currentStep + 1;
      const nextUrl = getStepUrl(nextStepNumber);
      // Always navigate to next step
      router.push(nextUrl);
    }
  }, [currentStep, router, getStepUrl]);

  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      const prevUrl = getStepUrl(currentStep - 1);
      router.push(prevUrl);
    }
  }, [currentStep, router, getStepUrl]);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 3) {
      const url = getStepUrl(step);
      router.push(url);
    }
  }, [router, getStepUrl]);

  const goToStepByUrl = useCallback((url: string) => {
    const step = getStepFromPath(url);
    if (step >= 1 && step <= 3) {
      router.push(url);
    }
  }, [router]);

  // Set services for slug generation
  const setServicesForSlug = useCallback((servicesList: Service[]) => {
    setServices(servicesList);
  }, []);

  // Validation for each step
  const validateStep1 = useCallback((): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!formData.serviceId) {
      errors.push('Please select a service');
    }
    if (!formData.serviceDate) {
      errors.push('Please select a date');
    }
    if (!formData.serviceTime) {
      errors.push('Please select a time');
    }
    if (formData.serviceTime && (!formData.serviceDuration || formData.serviceDuration < 3.5 || formData.serviceDuration > 10)) {
      errors.push('Service duration must be between 3.5 and 10 hours');
    }
    // Only require cleaning equipment for Standard and Airbnb services
    // Note: We can't check service name here without services data, so we'll check in the component
    // For now, we'll make it optional and validate in the component if needed

    return { valid: errors.length === 0, errors };
  }, [formData]);

  const validateStep2 = useCallback((): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!formData.serviceAddress.trim()) {
      errors.push('Please enter service address');
    }
    if (!formData.serviceSuburb.trim()) {
      errors.push('Please enter suburb');
    }
    if (!formData.serviceCity.trim()) {
      errors.push('Please enter city');
    }

    // Validate team selection if teamNumber is set
    if (formData.teamNumber !== null && formData.teamNumber !== undefined) {
      if (formData.teamNumber < 1 || formData.teamNumber > 3) {
        errors.push('Team number must be 1, 2, or 3');
      }
    }

    // Validate cleaner selection count (only for non-team bookings)
    // Team bookings use teamNumber instead of preferredCleanerIds
    if (!formData.teamNumber && formData.numberOfCleaners > 1) {
      const selectedCleaners = formData.preferredCleanerIds || [];
      if (selectedCleaners.length !== formData.numberOfCleaners) {
        errors.push(`Please select exactly ${formData.numberOfCleaners} cleaners`);
      }
    }
    // For single cleaner (numberOfCleaners === 1), no validation needed - user can select 0 or 1

    return { valid: errors.length === 0, errors };
  }, [formData]);

  const validateStep3 = useCallback((): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!formData.customerFirstName.trim()) {
      errors.push('Please enter your first name');
    }
    if (!formData.customerLastName.trim()) {
      errors.push('Please enter your last name');
    }
    if (!formData.customerEmail.trim()) {
      errors.push('Please enter your email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      errors.push('Please enter a valid email address');
    }
    if (!formData.customerPhone.trim()) {
      errors.push('Please enter your phone number');
    }

    return { valid: errors.length === 0, errors };
  }, [formData]);

  const validateCurrentStep = useCallback((): { valid: boolean; errors: string[] } => {
    switch (currentStep) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      default:
        return { valid: false, errors: ['Invalid step'] };
    }
  }, [currentStep, validateStep1, validateStep2, validateStep3]);

  // Check if a step is completed (for navigation validation)
  const isStepCompleted = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return validateStep1().valid;
      case 2:
        return validateStep1().valid && validateStep2().valid;
      case 3:
        return validateStep1().valid && validateStep2().valid && validateStep3().valid;
      default:
        return false;
    }
  }, [validateStep1, validateStep2, validateStep3]);

  // Get discount amount from localStorage
  const getDiscountAmount = useCallback((): number => {
    try {
      const saved = localStorage.getItem(DISCOUNT_AMOUNT_KEY);
      return saved ? parseFloat(saved) : 0;
    } catch (error) {
      console.error('Error reading discount amount:', error);
      return 0;
    }
  }, []);

  // Set discount amount in localStorage
  const setDiscountAmount = useCallback((amount: number) => {
    try {
      localStorage.setItem(DISCOUNT_AMOUNT_KEY, amount.toString());
    } catch (error) {
      console.error('Error saving discount amount:', error);
    }
  }, []);

  // Clear discount amount
  const clearDiscountAmount = useCallback(() => {
    try {
      localStorage.removeItem(DISCOUNT_AMOUNT_KEY);
    } catch (error) {
      console.error('Error clearing discount amount:', error);
    }
  }, []);

  return {
    currentStep,
    serviceSlug,
    formData,
    updateFormData,
    resetForm,
    nextStep,
    previousStep,
    goToStep,
    goToStepByUrl,
    getStepUrl,
    setServicesForSlug,
    isStepCompleted,
    getDiscountAmount,
    setDiscountAmount,
    clearDiscountAmount,
    validateStep1,
    validateStep2,
    validateStep3,
    validateCurrentStep,
  };
}

