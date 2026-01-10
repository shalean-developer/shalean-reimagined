'use server';

import { createClient } from '@/lib/supabase/server';
import { BookingFormData, BookingCreateInput, WorkingHour, TimeSlotAvailability, Cleaner, CleanerWithAvailability } from '@/types/booking';
import { calculatePrice } from '@/lib/pricing/calculator';
import { generateBookingNumber } from '@/lib/utils/booking-number';
import { initializePayment } from '@/lib/paystack/client';
import { revalidatePath } from 'next/cache';
import { calculateReliabilityScore, calculateCompletionRate, calculateOnTimeRate } from '@/lib/utils/cleaner-utils';
import { calculateBookingDatesForMonth, calculateNextBookingDate, formatDateForDB } from '@/lib/utils/recurring-dates';
import { isValidFrequencyForService } from '@/lib/utils/service-validation';

/**
 * Get available working hours (30-minute interval start times)
 */
export async function getWorkingHours(): Promise<WorkingHour[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('working_hours')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching working hours:', error);
      return [];
    }

    return (data || []) as WorkingHour[];
  } catch (error) {
    console.error('Unexpected error fetching working hours:', error);
    return [];
  }
}

/**
 * Get working hours from home_detail_options (backward compatibility)
 */
export async function getWorkingHoursFromOptions(): Promise<Array<{ value: string; label: string }>> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('home_detail_options')
      .select('value, label')
      .eq('option_type', 'working_hours')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching working hours from options:', error);
      return [];
    }

    return (data || []).map((item) => ({
      value: item.value,
      label: item.label,
    }));
  } catch (error) {
    console.error('Unexpected error fetching working hours from options:', error);
    return [];
  }
}

/**
 * Check cleaner availability for a specific date and time slot
 * Returns availability status and count of available cleaners
 */
export async function checkCleanerAvailabilityForSlot(
  serviceDate: string,
  serviceTime: string,
  serviceDuration: number
): Promise<TimeSlotAvailability> {
  try {
    const supabase = await createClient();

    // First, check if any active cleaners exist in the system
    const { data: activeCleaners, error: cleanersError } = await supabase
      .from('cleaners')
      .select('id')
      .eq('is_active', true);

    if (cleanersError) {
      console.error('Error checking active cleaners:', cleanersError);
      // If we can't check cleaners, assume unavailable for safety
      return { available: false, availableCleanersCount: 0 };
    }

    // If no active cleaners exist, no slots are available
    if (!activeCleaners || activeCleaners.length === 0) {
      return { available: false, availableCleanersCount: 0 };
    }

    const totalCleaners = activeCleaners.length;

    // Query bookings for the specified date that might overlap
    // We need to check for bookings where:
    // (booking_start_time < new_end_time) AND (booking_end_time > new_start_time)
    // Only consider pending or confirmed bookings (exclude cancelled/completed)
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('service_time, service_duration, preferred_cleaner_id, preferred_cleaner_ids, number_of_cleaners')
      .eq('service_date', serviceDate)
      .in('status', ['pending', 'confirmed']);

    if (bookingsError) {
      console.error('Error checking bookings:', bookingsError);
      // If we can't check bookings, assume available (optimistic approach)
      return { available: true, availableCleanersCount: totalCleaners };
    }

    if (!bookings || bookings.length === 0) {
      // No bookings for this date, all cleaners are available
      return { available: true, availableCleanersCount: totalCleaners };
    }

    // Parse the new booking start time
    const [newStartHours, newStartMinutes] = serviceTime.split(':').map(Number);
    const newStartTimeMinutes = newStartHours * 60 + newStartMinutes;
    const serviceDurationMinutes = Math.round(serviceDuration * 60);
    const newEndTimeMinutes = newStartTimeMinutes + serviceDurationMinutes;

    // Track which cleaners are booked (by ID)
    const bookedCleanerIds = new Set<string>();
    
    // Check each existing booking for overlap
    for (const booking of bookings) {
      if (!booking.service_time) continue;

      // Parse booking start time
      const [bookingStartHours, bookingStartMinutes] = booking.service_time
        .split(':')
        .slice(0, 2)
        .map(Number);
      const bookingStartTimeMinutes = bookingStartHours * 60 + bookingStartMinutes;
      
      // Parse booking duration
      const bookingDurationMinutes = Math.round(
        (typeof booking.service_duration === 'number' 
          ? booking.service_duration 
          : parseFloat(booking.service_duration || '0')) * 60
      );
      const bookingEndTimeMinutes = bookingStartTimeMinutes + bookingDurationMinutes;

      // Check for overlap: new start < existing end AND new end > existing start
      if (newStartTimeMinutes < bookingEndTimeMinutes && newEndTimeMinutes > bookingStartTimeMinutes) {
        // There's an overlap
        // Check preferred_cleaner_ids first (new multi-cleaner support)
        if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
          // Multiple cleaners are assigned
          booking.preferred_cleaner_ids.forEach((cleanerId: string) => {
            if (cleanerId) bookedCleanerIds.add(cleanerId);
          });
        } else if (booking.preferred_cleaner_id) {
          // Single cleaner assigned (backward compatibility)
          bookedCleanerIds.add(booking.preferred_cleaner_id);
        } else {
          // If no preferred cleaner, use number_of_cleaners to count generic cleaner slots
          // This handles bookings without specific cleaner assignments
          const numCleaners = booking.number_of_cleaners || 1;
          // We don't add specific IDs here, but count them in bookingsWithoutPreferredCleaner
        }
      }
    }

    // Calculate available cleaners
    // Count bookings without preferred cleaners (generic assignments)
    // These use number_of_cleaners to determine how many cleaner slots are taken
    const bookingsWithoutPreferredCleaner = bookings.filter(
      (b) => {
        const hasPreferredCleaners = (b.preferred_cleaner_ids && Array.isArray(b.preferred_cleaner_ids) && b.preferred_cleaner_ids.length > 0) || b.preferred_cleaner_id;
        if (hasPreferredCleaners) return false;
        
        // Check for time overlap
        const [hours, mins] = b.service_time.split(':').slice(0, 2).map(Number);
        const start = hours * 60 + mins;
        const duration = Math.round((typeof b.service_duration === 'number' ? b.service_duration : parseFloat(b.service_duration || '0')) * 60);
        const end = start + duration;
        return newStartTimeMinutes < end && newEndTimeMinutes > start;
      }
    ).reduce((sum, b) => {
      // Sum up the number_of_cleaners for bookings without preferred cleaners
      return sum + (b.number_of_cleaners || 1);
    }, 0);

    const unavailableCleaners = bookedCleanerIds.size + bookingsWithoutPreferredCleaner;
    const availableCleanersCount = Math.max(0, totalCleaners - unavailableCleaners);

    return {
      available: availableCleanersCount > 0,
      availableCleanersCount,
    };
  } catch (error) {
    console.error('Unexpected error checking cleaner availability:', error);
    // On error, assume unavailable for safety
    return { available: false, availableCleanersCount: 0 };
  }
}

/**
 * Check availability for all time slots for a given date
 */
export async function checkAvailabilityForAllSlots(
  serviceDate: string,
  workingHours: WorkingHour[],
  serviceDuration: number
): Promise<Record<string, TimeSlotAvailability>> {
  const availability: Record<string, TimeSlotAvailability> = {};

  // Check availability for each time slot in parallel
  // Use the service duration provided (either from form data or calculated)
  const promises = workingHours.map(async (hour) => {
    // Use the provided service duration, not the working hour's duration
    // The working hour duration is just the slot length, but the actual booking
    // will use the service duration from the form
    const slotAvailability = await checkCleanerAvailabilityForSlot(
      serviceDate,
      hour.start_time,
      serviceDuration
    );
    return { time: hour.start_time, availability: slotAvailability };
  });

  const results = await Promise.all(promises);
  
  results.forEach(({ time, availability: avail }) => {
    availability[time] = avail;
  });

  return availability;
}

/**
 * Validate discount code
 */
export async function validateDiscountCode(code: string, subtotal: number): Promise<{
  valid: boolean;
  discountAmount: number;
  error?: string;
}> {
  try {
    if (!code || !code.trim()) {
      return { valid: false, discountAmount: 0, error: 'Discount code is required' };
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('code', code.trim().toUpperCase())
      .eq('is_active', true)
      .single();

    if (error || !data) {
      return { valid: false, discountAmount: 0, error: 'Invalid discount code' };
    }

    // Check validity dates
    const now = new Date();
    const validFrom = new Date(data.valid_from);
    const validUntil = new Date(data.valid_until);

    if (now < validFrom || now > validUntil) {
      return { valid: false, discountAmount: 0, error: 'Discount code has expired' };
    }

    // Check max uses
    if (data.max_uses && data.used_count >= data.max_uses) {
      return { valid: false, discountAmount: 0, error: 'Discount code has reached maximum uses' };
    }

    // Check min purchase amount
    if (data.min_purchase_amount && subtotal < data.min_purchase_amount) {
      return { 
        valid: false, 
        discountAmount: 0, 
        error: `Minimum purchase amount of R${data.min_purchase_amount} required` 
      };
    }

    // Calculate discount amount
    let discountAmount = 0;
    if (data.discount_type === 'percentage') {
      discountAmount = (subtotal * data.discount_value) / 100;
      if (data.max_discount_amount && discountAmount > data.max_discount_amount) {
        discountAmount = data.max_discount_amount;
      }
    } else {
      discountAmount = data.discount_value;
    }

    // Ensure discount doesn't exceed subtotal
    discountAmount = Math.min(discountAmount, subtotal);

    return { valid: true, discountAmount };
  } catch (error) {
    console.error('Error validating discount code:', error);
    return { valid: false, discountAmount: 0, error: 'Error validating discount code' };
  }
}

/**
 * Create booking draft (before payment)
 */
export async function createBookingDraft(formData: BookingFormData): Promise<{
  success: boolean;
  bookingId?: string;
  bookingIds?: string[];
  totalAmount?: number;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Get current user if logged in
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id || null;

    // Get service name
    const { data: service } = await supabase
      .from('services')
      .select('name')
      .eq('id', formData.serviceId)
      .single();

    if (!service) {
      return { success: false, error: 'Service not found' };
    }

    // Validate that the selected frequency is valid for this service
    if (!isValidFrequencyForService(service.name, formData.cleaningFrequency)) {
      return { 
        success: false, 
        error: `Recurring bookings are only available for Standard Cleaning and Airbnb Cleaning services. Selected service: ${service.name}` 
      };
    }

    // Calculate pricing
    const priceBreakdown = await calculatePrice({
      serviceId: formData.serviceId,
      serviceName: service.name,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      additionalServiceIds: formData.additionalServices,
      cleaningFrequency: formData.cleaningFrequency,
      discountAmount: 0, // Will calculate discount in next step
      cleaningEquipment: formData.cleaningEquipment,
      numberOfCleaners: formData.numberOfCleaners || 1,
    });

    // Apply discount code if provided
    let discountAmount = 0;
    if (formData.discountCode) {
      const discountValidation = await validateDiscountCode(
        formData.discountCode,
        priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount
      );
      if (discountValidation.valid) {
        discountAmount = discountValidation.discountAmount;
      }
    }

    // Recalculate with discount
    const finalPriceBreakdown = await calculatePrice({
      serviceId: formData.serviceId,
      serviceName: service.name,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      additionalServiceIds: formData.additionalServices,
      cleaningFrequency: formData.cleaningFrequency,
      discountAmount,
      cleaningEquipment: formData.cleaningEquipment,
      numberOfCleaners: formData.numberOfCleaners || 1,
    });

    // Determine if this is a recurring booking
    const isRecurring = formData.cleaningFrequency !== 'one-time';

    // Calculate booking dates based on frequency
    const startDate = new Date(formData.serviceDate);
    const bookingDates = calculateBookingDatesForMonth(startDate, formData.cleaningFrequency);

    // Calculate next booking date for recurring bookings
    let nextBookingDate: Date | null = null;
    if (isRecurring && bookingDates.length > 0) {
      const lastDate = bookingDates[bookingDates.length - 1];
      nextBookingDate = calculateNextBookingDate(lastDate, formData.cleaningFrequency);
    }

    // Create bookings for all dates
    const bookingsToCreate: BookingCreateInput[] = [];

    for (let i = 0; i < bookingDates.length; i++) {
      const bookingDate = bookingDates[i];
      const bookingNumber = generateBookingNumber();

      // Tip is only applied to the first booking in a recurring series (one-time payment)
      const tipAmount = (i === 0) ? (formData.tipAmount || 0) : 0;
      
      const bookingInput: BookingCreateInput = {
        booking_number: bookingNumber,
        customer_first_name: formData.customerFirstName,
        customer_last_name: formData.customerLastName,
        customer_email: formData.customerEmail,
        customer_phone: formData.customerPhone,
        service_id: formData.serviceId,
        service_type: service.name,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        additional_services: formData.additionalServices,
        cleaning_equipment: formData.cleaningEquipment,
        preferred_cleaner_ids: formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0 
          ? formData.preferredCleanerIds 
          : null,
        preferred_cleaner_id: formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0 
          ? formData.preferredCleanerIds[0] 
          : null, // Backward compatibility: set to first cleaner
        cleaning_frequency: formData.cleaningFrequency,
        service_date: formatDateForDB(bookingDate),
        service_time: formData.serviceTime,
        service_duration: formData.serviceDuration,
        service_address: formData.serviceAddress,
        service_apt_unit: formData.serviceAptUnit || null,
        service_suburb: formData.serviceSuburb,
        service_city: formData.serviceCity,
        special_instructions: formData.specialInstructions || null,
        tip_amount: tipAmount,
        base_price: finalPriceBreakdown.basePrice,
        additional_services_price: finalPriceBreakdown.additionalServicesPrice,
        equipment_supply_price: finalPriceBreakdown.equipmentSupplyPrice,
        number_of_cleaners: formData.numberOfCleaners || 1,
        additional_cleaners_price: finalPriceBreakdown.additionalCleanersPrice,
        frequency_discount_percent: finalPriceBreakdown.frequencyDiscountPercent,
        frequency_discount_amount: finalPriceBreakdown.frequencyDiscountAmount,
        subtotal: finalPriceBreakdown.subtotal,
        service_fee: finalPriceBreakdown.serviceFee,
        total_amount: finalPriceBreakdown.totalAmount + tipAmount,
        discount_code: formData.discountCode || null,
        discount_amount: discountAmount,
        referral_code: formData.referralCode || null,
        amount_paid: 0,
        payment_status: 'pending',
        status: 'pending',
        user_id: userId,
        parent_booking_id: null, // Will be updated after first booking is created
        is_recurring: isRecurring,
        recurrence_status: isRecurring ? 'active' : undefined,
        next_booking_date: i === 0 && isRecurring && nextBookingDate ? formatDateForDB(nextBookingDate) : null,
        credits_used: 0, // Will be updated when credits are used during payment
      };

      bookingsToCreate.push(bookingInput);
    }

    // Insert all bookings
    const { data: insertedBookings, error } = await supabase
      .from('bookings')
      .insert(bookingsToCreate)
      .select('id, total_amount');

    if (error) {
      console.error('Error creating booking drafts:', error);
      return { success: false, error: error.message };
    }

    if (!insertedBookings || insertedBookings.length === 0) {
      return { success: false, error: 'Failed to create bookings' };
    }

    // Update parent_booking_id for subsequent bookings if there are multiple
    if (insertedBookings.length > 1 && isRecurring) {
      const firstBookingId = insertedBookings[0].id;
      const subsequentBookingIds = insertedBookings.slice(1).map(b => b.id);
      
      // Update all subsequent bookings to reference the first one
      const { error: updateError } = await supabase
        .from('bookings')
        .update({ parent_booking_id: firstBookingId })
        .in('id', subsequentBookingIds);

      if (updateError) {
        console.error('Error updating parent_booking_id:', updateError);
        // Don't fail, but log the error
      }
    }

    // Calculate total amount
    const totalAmount = insertedBookings.reduce((sum, booking) => sum + Number(booking.total_amount), 0);
    const bookingIds = insertedBookings.map(booking => booking.id);

    // For backward compatibility, also return single bookingId
    const bookingId = bookingIds[0];

    // If multiple bookings, return array; otherwise return single ID for backward compatibility
    if (bookingIds.length > 1) {
      return { 
        success: true, 
        bookingIds,
        totalAmount,
        bookingId // Keep for backward compatibility
      };
    }

    return { 
      success: true, 
      bookingId,
      bookingIds,
      totalAmount
    };
  } catch (error) {
    console.error('Unexpected error creating booking draft:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Initialize payment for booking(s)
 * Accepts either a single bookingId or an array of bookingIds
 */
export async function initializePaymentForBooking(
  bookingIdOrIds: string | string[]
): Promise<{
  success: boolean;
  authorizationUrl?: string;
  reference?: string;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const bookingIds = Array.isArray(bookingIdOrIds) ? bookingIdOrIds : [bookingIdOrIds];

    // Get all booking details
    const { data: bookings, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .in('id', bookingIds);

    if (fetchError || !bookings || bookings.length === 0) {
      return { success: false, error: 'Booking(s) not found' };
    }

    // Check if all bookings are in pending status
    const nonPendingBookings = bookings.filter(b => b.payment_status !== 'pending');
    if (nonPendingBookings.length > 0) {
      return { success: false, error: 'Some bookings are not in pending payment status' };
    }

    // Calculate total amount from all bookings (including tip)
    // Note: total_amount in database now includes tip for new bookings
    // For backward compatibility with existing bookings that might not have tip in total_amount, 
    // we check and add tip_amount if it's missing
    const totalAmount = bookings.reduce((sum, booking) => {
      const bookingTotal = Number(booking.total_amount) || 0;
      const tipAmount = Number(booking.tip_amount) || 0;
      const baseTotal = Number(booking.subtotal || 0) + Number(booking.service_fee || 0);
      
      // Check if tip is already included in total_amount
      // If total_amount equals baseTotal exactly, then tip is not included, so add it
      // Otherwise, total_amount already includes tip
      if (tipAmount > 0 && Math.abs(bookingTotal - baseTotal) < 0.01) {
        // Tip is not included in total_amount (backward compatibility case)
        return sum + bookingTotal + tipAmount;
      }
      // Tip is already included in total_amount (new bookings)
      return sum + bookingTotal;
    }, 0);

    // Calculate total credits used across all bookings
    const totalCreditsUsed = bookings.reduce((sum, booking) => {
      return sum + (Number(booking.credits_used) || 0);
    }, 0);

    // Calculate remaining amount after credits
    const remainingAmount = totalAmount - totalCreditsUsed;

    // Use the first booking's email and details for payment
    const firstBooking = bookings[0];

    // If credits fully cover the booking, mark as paid and skip Paystack
    if (remainingAmount <= 0) {
      // Update all bookings to mark as paid
      const { error: updateError } = await supabase
        .from('bookings')
        .update({
          payment_status: 'paid',
          amount_paid: totalAmount, // Fully paid with credits
          status: 'confirmed', // Auto-confirm when fully paid
          updated_at: new Date().toISOString(),
        })
        .in('id', bookingIds);

      if (updateError) {
        console.error('Error updating bookings payment status:', updateError);
        return { success: false, error: 'Failed to update booking payment status' };
      }

      return {
        success: true,
        // No authorizationUrl - payment fully covered by credits
      };
    }

    // Partial credit coverage or no credits - proceed with Paystack for remaining amount
    const reference = firstBooking.paystack_reference || `${firstBooking.booking_number}${Date.now()}`;
    
    // Initialize Paystack payment with remaining amount (after credits)
    const paymentResponse = await initializePayment(
      firstBooking.customer_email,
      remainingAmount, // Only charge the remaining amount
      reference,
      {
        booking_ids: bookingIds,
        booking_id: firstBooking.id, // Keep for backward compatibility
        booking_number: firstBooking.booking_number,
        customer_email: firstBooking.customer_email,
        credits_used: totalCreditsUsed, // Include in metadata for tracking
      }
    );

    if (!paymentResponse.status) {
      return { success: false, error: paymentResponse.message || 'Failed to initialize payment' };
    }

    // Use the reference that Paystack actually returned (may differ from what we sent)
    const paystackReference = paymentResponse.data.reference;

    // Update all bookings with the Paystack reference and partial payment from credits
    const { error: updateError } = await supabase
      .from('bookings')
      .update({
        paystack_reference: paystackReference,
        amount_paid: totalCreditsUsed, // Partial payment from credits, Paystack will complete it
        updated_at: new Date().toISOString(),
      })
      .in('id', bookingIds);

    if (updateError) {
      console.error('Error updating bookings with Paystack reference:', updateError);
    }

    return {
      success: true,
      authorizationUrl: paymentResponse.data.authorization_url,
      reference: paystackReference,
    };
  } catch (error) {
    console.error('Error initializing payment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to initialize payment',
    };
  }
}

/**
 * Get booking by ID
 */
export async function getBooking(bookingId: string): Promise<{
  success: boolean;
  booking?: any;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .single();

    if (error) {
      console.error('Error fetching booking:', error);
      return { success: false, error: 'Booking not found' };
    }

    return { success: true, booking: data };
  } catch (error) {
    console.error('Unexpected error fetching booking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Get available cleaners for selection
 * Optionally filter by service area/suburb
 */
export async function getAvailableCleaners(serviceSuburb?: string): Promise<{
  success: boolean;
  cleaners?: any[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Build query - only filter by is_available if the column exists
    // First, try to get all active cleaners
    let query = supabase
      .from('cleaners')
      .select('*')
      .eq('is_active', true);

    const { data, error } = await query
      .order('rating', { ascending: false })
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching cleaners:', error);
      return { success: false, error: 'Failed to fetch cleaners' };
    }

    let cleaners = data || [];

    // Filter by is_available if the column exists (client-side filter as fallback)
    cleaners = cleaners.filter((cleaner) => {
      // If is_available column doesn't exist or is null/undefined, include the cleaner
      // Otherwise, only include if is_available is true
      return cleaner.is_available !== false;
    });

    // Filter by area if suburb is provided
    // Since PostgreSQL array contains is complex in Supabase, we filter client-side
    if (serviceSuburb && cleaners.length > 0) {
      const suburbLower = serviceSuburb.toLowerCase().trim();
      cleaners = cleaners.filter((cleaner) => {
        // If cleaner has no areas specified, include them (they serve all areas)
        if (!cleaner.areas || cleaner.areas.length === 0) {
          return true;
        }
        // Check if any area matches the suburb (case-insensitive partial match)
        return cleaner.areas.some((area: string) => {
          const areaLower = area.toLowerCase();
          return areaLower.includes(suburbLower) || suburbLower.includes(areaLower);
        });
      });
    }

    return { success: true, cleaners };
  } catch (error) {
    console.error('Unexpected error fetching cleaners:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Check if a cleaner is available for a specific day of the week
 * dayOfWeek: 0 = Sunday, 1 = Monday, ..., 6 = Saturday
 */
export async function isCleanerAvailableForDay(cleaner: any, dayOfWeek: number): Promise<boolean> {
  const dayMap: Record<number, keyof typeof cleaner> = {
    0: 'available_sunday',
    1: 'available_monday',
    2: 'available_tuesday',
    3: 'available_wednesday',
    4: 'available_thursday',
    5: 'available_friday',
    6: 'available_saturday',
  };

  const dayField = dayMap[dayOfWeek];
  return cleaner[dayField] !== false && cleaner.is_available !== false;
}

/**
 * Check if a cleaner has a booking conflict for a specific date and time slot
 */
export async function checkCleanerBookingConflict(
  cleanerId: string,
  serviceDate: string,
  serviceTime: string,
  serviceDuration: number
): Promise<boolean> {
  try {
    const supabase = await createClient();

    // Query bookings for this cleaner on the specified date
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('service_time, service_duration')
      .eq('preferred_cleaner_id', cleanerId)
      .eq('service_date', serviceDate)
      .in('status', ['pending', 'confirmed']);

    if (error) {
      console.error('Error checking booking conflicts:', error);
      return false; // Assume no conflict on error
    }

    if (!bookings || bookings.length === 0) {
      return false; // No bookings, no conflict
    }

    // Parse the new booking start time
    const [newStartHours, newStartMinutes] = serviceTime.split(':').map(Number);
    const newStartTimeMinutes = newStartHours * 60 + newStartMinutes;
    const serviceDurationMinutes = Math.round(serviceDuration * 60);
    const newEndTimeMinutes = newStartTimeMinutes + serviceDurationMinutes;

    // Check each existing booking for overlap
    for (const booking of bookings) {
      if (!booking.service_time) continue;

      // Parse booking start time
      const [bookingStartHours, bookingStartMinutes] = booking.service_time
        .split(':')
        .slice(0, 2)
        .map(Number);
      const bookingStartTimeMinutes = bookingStartHours * 60 + bookingStartMinutes;

      // Parse booking duration
      const bookingDurationMinutes = Math.round(
        (typeof booking.service_duration === 'number'
          ? booking.service_duration
          : parseFloat(booking.service_duration || '0')) * 60
      );
      const bookingEndTimeMinutes = bookingStartTimeMinutes + bookingDurationMinutes;

      // Check for overlap: new start < existing end AND new end > existing start
      if (newStartTimeMinutes < bookingEndTimeMinutes && newEndTimeMinutes > bookingStartTimeMinutes) {
        return true; // Conflict found
      }
    }

    return false; // No conflicts
  } catch (error) {
    console.error('Unexpected error checking booking conflict:', error);
    return false;
  }
}

/**
 * Calculate reliability score for a cleaner (server-side wrapper)
 * This calls the database function if available, otherwise calculates client-side
 */
export async function calculateCleanerReliabilityScore(cleanerId: string): Promise<number> {
  try {
    const supabase = await createClient();

    // Try to call the database function
    const { data, error } = await supabase.rpc('calculate_cleaner_reliability_score', {
      cleaner_id: cleanerId,
    });

    if (!error && data !== null) {
      return parseFloat(data.toString());
    }

    // Fallback: fetch cleaner and calculate client-side
    const { data: cleaner, error: fetchError } = await supabase
      .from('cleaners')
      .select('*')
      .eq('id', cleanerId)
      .single();

    if (fetchError || !cleaner) {
      return 50.0; // Default score
    }

    return calculateReliabilityScore(cleaner as Cleaner);
  } catch (error) {
    console.error('Error calculating reliability score:', error);
    return 50.0; // Default score on error
  }
}

/**
 * Get available cleaners with enhanced filtering criteria
 * Filters by: Location, Availability, Booking conflicts
 * Sorts by: Reliability Score, Rating
 */
export async function getAvailableCleanersWithCriteria(params: {
  serviceSuburb?: string;
  serviceDate?: string;
  serviceTime?: string;
  serviceDuration?: number;
  minRating?: number;
  minReliabilityScore?: number;
}): Promise<{
  success: boolean;
  cleaners?: CleanerWithAvailability[];
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const {
      serviceSuburb,
      serviceDate,
      serviceTime,
      serviceDuration = 3,
      minRating = 0,
      minReliabilityScore = 0,
    } = params;

    // Build base query
    let query = supabase
      .from('cleaners')
      .select('*')
      .eq('is_active', true);

    const { data, error } = await query.order('reliability_score', { ascending: false, nullsFirst: false })
      .order('rating', { ascending: false })
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching cleaners:', error);
      return { success: false, error: 'Failed to fetch cleaners' };
    }

    let cleaners = (data || []) as Cleaner[];

    // Filter by is_available
    cleaners = cleaners.filter((cleaner) => cleaner.is_available !== false);

    // Filter by location (suburb)
    if (serviceSuburb && cleaners.length > 0) {
      const suburbLower = serviceSuburb.toLowerCase().trim();
      cleaners = cleaners.filter((cleaner) => {
        if (!cleaner.areas || cleaner.areas.length === 0) {
          return true; // Serve all areas
        }
        return cleaner.areas.some((area: string) => {
          const areaLower = area.toLowerCase();
          return areaLower.includes(suburbLower) || suburbLower.includes(areaLower);
        });
      });
    }

    // Filter by day of week availability if date is provided
    if (serviceDate) {
      const date = new Date(serviceDate);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
      cleaners = cleaners.filter((cleaner) => {
        const dayMap: Record<number, keyof Cleaner> = {
          0: 'available_sunday',
          1: 'available_monday',
          2: 'available_tuesday',
          3: 'available_wednesday',
          4: 'available_thursday',
          5: 'available_friday',
          6: 'available_saturday',
        };
        const dayField = dayMap[dayOfWeek];
        return cleaner[dayField] !== false;
      });
    }

    // Filter by minimum rating
    if (minRating > 0) {
      cleaners = cleaners.filter((cleaner) => (cleaner.rating || 0) >= minRating);
    }

    // Filter by minimum reliability score
    if (minReliabilityScore > 0) {
      cleaners = cleaners.filter((cleaner) => (cleaner.reliability_score || 0) >= minReliabilityScore);
    }

    // Enrich cleaners with availability and booking conflict information
    const enrichedCleaners: CleanerWithAvailability[] = await Promise.all(
      cleaners.map(async (cleaner) => {
        let isAvailableForSlot = true;
        let bookingConflict = false;

        // Check booking conflict if date and time are provided
        if (serviceDate && serviceTime && serviceDuration) {
          bookingConflict = await checkCleanerBookingConflict(
            cleaner.id,
            serviceDate,
            serviceTime,
            serviceDuration
          );
          isAvailableForSlot = !bookingConflict;
        }

        // Calculate reliability score if not present
        const reliabilityScore = cleaner.reliability_score ?? calculateReliabilityScore(cleaner);

        return {
          ...cleaner,
          reliability_score: reliabilityScore,
          isAvailableForSlot,
          bookingConflict,
          completionRate: calculateCompletionRate(cleaner),
          onTimeRate: calculateOnTimeRate(cleaner),
        };
      })
    );

    // Sort by reliability score and rating (already sorted by query, but ensure consistency)
    enrichedCleaners.sort((a, b) => {
      const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
      const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
      return scoreB - scoreA;
    });

    return { success: true, cleaners: enrichedCleaners };
  } catch (error) {
    console.error('Unexpected error fetching cleaners with criteria:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

