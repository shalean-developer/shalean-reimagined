'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useBookingForm } from '../hooks/useBookingForm';

interface BookingFormContextValue {
  currentStep: number;
  serviceSlug: string | null;
  formData: ReturnType<typeof useBookingForm>['formData'];
  updateFormData: ReturnType<typeof useBookingForm>['updateFormData'];
  resetForm: ReturnType<typeof useBookingForm>['resetForm'];
  nextStep: ReturnType<typeof useBookingForm>['nextStep'];
  previousStep: ReturnType<typeof useBookingForm>['previousStep'];
  goToStep: ReturnType<typeof useBookingForm>['goToStep'];
  goToStepByUrl: ReturnType<typeof useBookingForm>['goToStepByUrl'];
  getStepUrl: ReturnType<typeof useBookingForm>['getStepUrl'];
  setServicesForSlug: ReturnType<typeof useBookingForm>['setServicesForSlug'];
  isStepCompleted: ReturnType<typeof useBookingForm>['isStepCompleted'];
  getDiscountAmount: ReturnType<typeof useBookingForm>['getDiscountAmount'];
  setDiscountAmount: ReturnType<typeof useBookingForm>['setDiscountAmount'];
  clearDiscountAmount: ReturnType<typeof useBookingForm>['clearDiscountAmount'];
  validateStep1: ReturnType<typeof useBookingForm>['validateStep1'];
  validateStep2: ReturnType<typeof useBookingForm>['validateStep2'];
  validateStep3: ReturnType<typeof useBookingForm>['validateStep3'];
  validateCurrentStep: ReturnType<typeof useBookingForm>['validateCurrentStep'];
}

const BookingFormContext = createContext<BookingFormContextValue | undefined>(undefined);

export function BookingFormProvider({ children }: { children: ReactNode }) {
  const bookingForm = useBookingForm();

  return (
    <BookingFormContext.Provider value={bookingForm}>
      {children}
    </BookingFormContext.Provider>
  );
}

export function useBookingFormContext() {
  const context = useContext(BookingFormContext);
  if (context === undefined) {
    throw new Error('useBookingFormContext must be used within a BookingFormProvider');
  }
  return context;
}

