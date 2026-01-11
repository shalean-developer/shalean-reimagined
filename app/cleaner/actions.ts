'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/server-admin';
import { Booking } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import {
  calculateCleanerTenure,
  calculateTotalHours,
  getEarningsPercentage,
  calculateTotalEarningsFromBooking,
  calculateCleanerEarnings,
  calculateTipPerCleaner,
} from '@/lib/utils/cleaner-earnings';

/**
 * Get cleaner by phone number
 */
export async function getCleanerByPhone(phone: string): Promise<{
  success: boolean;
  cleaner?: Cleaner;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    
    // Normalize phone number (remove spaces, dashes, etc.)
    const normalizedPhone = phone.replace(/\s+/g, '').trim();
    
    const { data, error } = await supabase
      .from('cleaners')
      .select('*')
      .or(`phone.eq.${normalizedPhone},phone.eq.+${normalizedPhone}`)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      console.error('Error fetching cleaner by phone:', error);
      return { success: false, error: error.message };
    }

    if (!data) {
      return { success: false, error: 'Cleaner not found' };
    }

    return { success: true, cleaner: data as Cleaner };
  } catch (error) {
    console.error('Error in getCleanerByPhone:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cleaner',
    };
  }
}

/**
 * Authenticate cleaner with phone and password
 * Uses Supabase Auth - expects email format: {phone}@cleaners.shalean.local
 * Admin should create auth accounts with this email format when creating cleaner accounts
 */
export async function authenticateCleaner(
  phone: string,
  password: string
): Promise<{
  success: boolean;
  cleaner?: Cleaner;
  error?: string;
}> {
  try {
    // First, find the cleaner by phone to verify they exist
    const cleanerResult = await getCleanerByPhone(phone);
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Invalid phone number or password' };
    }

    const cleaner = cleanerResult.cleaner;

    // Use phone-based email format for login
    // Format: {phone}@cleaners.shalean.local
    // Normalize phone (remove spaces, keep + if present)
    const normalizedPhone = phone.replace(/\s+/g, '').trim();
    const authEmail = `${normalizedPhone}@cleaners.shalean.local`;

    // Authenticate with Supabase Auth using client-side (this should be called from client)
    // Note: This function should ideally be called from a client component
    // For server-side, we'll return the cleaner info and let client handle auth
    const supabase = await createClient();
    
    // Try to authenticate
    const { data, error } = await supabase.auth.signInWithPassword({
      email: authEmail,
      password,
    });

    if (error) {
      console.error('Authentication error:', error);
      return { success: false, error: 'Invalid phone number or password' };
    }

    if (!data.user) {
      return { success: false, error: 'Authentication failed' };
    }

    // Update cleaner's auth_user_id if not set
    if (!cleaner.auth_user_id) {
      try {
        const adminSupabase = createAdminClient();
        await adminSupabase
          .from('cleaners')
          .update({ auth_user_id: data.user.id })
          .eq('id', cleaner.id);
      } catch (updateError) {
        // Log but don't fail - auth_user_id update is optional
        console.warn('Could not update auth_user_id:', updateError);
      }
    }

    return { success: true, cleaner };
  } catch (error) {
    console.error('Error in authenticateCleaner:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}

/**
 * Get current authenticated cleaner
 */
export async function getCurrentCleaner(): Promise<{
  success: boolean;
  cleaner?: Cleaner;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Try to find cleaner by auth_user_id first
    let cleanerQuery = supabase
      .from('cleaners')
      .select('*')
      .eq('auth_user_id', user.id)
      .eq('is_active', true)
      .maybeSingle();

    let { data: cleaner, error: cleanerError } = await cleanerQuery;

    // If not found by auth_user_id, try to match by phone from email
    if (!cleaner && !cleanerError && user.email) {
      // Extract phone from email format: {phone}@cleaners.shalean.local
      const phoneMatch = user.email.match(/^(.+)@cleaners\.shalean\.local$/);
      if (phoneMatch) {
        const phone = phoneMatch[1];
        const phoneResult = await getCleanerByPhone(phone);
        if (phoneResult.success && phoneResult.cleaner) {
          cleaner = phoneResult.cleaner;
        }
      }
    }

    if (cleanerError || !cleaner) {
      return { success: false, error: 'Cleaner profile not found' };
    }

    return { success: true, cleaner: cleaner as Cleaner };
  } catch (error) {
    console.error('Error in getCurrentCleaner:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get cleaner',
    };
  }
}

/**
 * Get bookings assigned to the authenticated cleaner
 */
export async function getCleanerBookings(
  filter?: 'all' | 'today' | 'upcoming' | 'past' | 'on_my_way' | 'started'
): Promise<{
  success: boolean;
  bookings?: Booking[];
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();
    
    // Fetch bookings where cleaner is assigned via preferred_cleaner_id (single)
    let singleQuery = supabase
      .from('bookings')
      .select('*')
      .eq('preferred_cleaner_id', cleanerId);

    // Fetch bookings with preferred_cleaner_ids (array) - fetch all with arrays, then filter
    let arrayQuery = supabase
      .from('bookings')
      .select('*')
      .not('preferred_cleaner_ids', 'is', null);

    // Apply filters to both queries
    if (filter && filter !== 'all') {
      const today = new Date().toISOString().split('T')[0];
      
      switch (filter) {
        case 'today':
          singleQuery = singleQuery.eq('service_date', today);
          arrayQuery = arrayQuery.eq('service_date', today);
          break;
        case 'upcoming':
          singleQuery = singleQuery.gte('service_date', today)
                      .in('status', ['pending', 'confirmed', 'on_my_way', 'started']);
          arrayQuery = arrayQuery.gte('service_date', today)
                      .in('status', ['pending', 'confirmed', 'on_my_way', 'started']);
          break;
        case 'past':
          singleQuery = singleQuery.lt('service_date', today)
                      .or('status.eq.completed,status.eq.cancelled');
          arrayQuery = arrayQuery.lt('service_date', today)
                      .or('status.eq.completed,status.eq.cancelled');
          break;
        case 'on_my_way':
          singleQuery = singleQuery.eq('status', 'on_my_way');
          arrayQuery = arrayQuery.eq('status', 'on_my_way');
          break;
        case 'started':
          singleQuery = singleQuery.eq('status', 'started');
          arrayQuery = arrayQuery.eq('status', 'started');
          break;
      }
    }

    // Execute both queries
    const [singleResult, arrayResult] = await Promise.all([
      singleQuery.order('service_date', { ascending: true }).order('service_time', { ascending: true }),
      arrayQuery.order('service_date', { ascending: true }).order('service_time', { ascending: true })
    ]);

    if (singleResult.error) {
      console.error('Error fetching cleaner bookings (single):', singleResult.error);
      return { success: false, error: singleResult.error.message };
    }

    if (arrayResult.error) {
      console.error('Error fetching cleaner bookings (array):', arrayResult.error);
      return { success: false, error: arrayResult.error.message };
    }

    // Debug logging
    console.log('[getCleanerBookings] Fetched bookings:', {
      cleanerId,
      filter,
      singleBookingsCount: singleResult.data?.length || 0,
      arrayBookingsCount: arrayResult.data?.length || 0,
    });

    // Filter bookings where preferred_cleaner_ids array contains this cleanerId
    // Normalize UUIDs for comparison (handle case differences and string formats)
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);
    
    const filteredArrayBookings = (arrayResult.data || []).filter((booking: any) => {
      if (!booking.preferred_cleaner_ids || !Array.isArray(booking.preferred_cleaner_ids)) {
        return false;
      }
      // Check if array is empty
      if (booking.preferred_cleaner_ids.length === 0) {
        return false;
      }
      // Check if any ID in the array matches the cleanerId (case-insensitive)
      return booking.preferred_cleaner_ids.some((id: string) => normalizeUuid(id) === normalizedCleanerId);
    });

    // Combine results and remove duplicates
    const allBookings = [
      ...(singleResult.data || []),
      ...filteredArrayBookings
    ];

    // Remove duplicates by booking ID
    const uniqueBookingsMap = new Map<string, Booking>();
    allBookings.forEach((booking: any) => {
      if (booking.id && !uniqueBookingsMap.has(booking.id)) {
        uniqueBookingsMap.set(booking.id, booking as Booking);
      }
    });

    const bookings = Array.from(uniqueBookingsMap.values());

    // Sort by service_date and service_time
    bookings.sort((a, b) => {
      const dateCompare = a.service_date.localeCompare(b.service_date);
      if (dateCompare !== 0) return dateCompare;
      return a.service_time.localeCompare(b.service_time);
    });

    return { success: true, bookings };
  } catch (error) {
    console.error('Error in getCleanerBookings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch bookings',
    };
  }
}

/**
 * Calculate cleaner earnings for a specific booking
 * This helper function is used to display earnings on booking details page
 */
export async function calculateBookingEarnings(bookingId: string): Promise<{
  success: boolean;
  earnings?: {
    baseEarnings: number;
    tipAmount: number;
    totalEarnings: number;
    earningsPercentage: number;
  };
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();

    // Get cleaner info for tenure calculation
    const { data: cleaner, error: cleanerError } = await supabase
      .from('cleaners')
      .select('created_at')
      .eq('id', cleanerId)
      .maybeSingle();

    if (cleanerError || !cleaner) {
      return { success: false, error: 'Cleaner not found' };
    }

    // Get the booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (bookingError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Calculate tenure and total hours to determine percentage
    // For single booking display, we need all paid completed bookings to calculate hours
    // Use the same approach as getCleanerStats
    const { data: singleBookings } = await supabase
      .from('bookings')
      .select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids')
      .eq('preferred_cleaner_id', cleanerId);

    const { data: allMultiBookings } = await supabase
      .from('bookings')
      .select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids')
      .not('preferred_cleaner_ids', 'is', null);

    // Filter bookings assigned to this cleaner
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);

    const arrayBookings = (allMultiBookings || []).filter((b: any) => {
      if (!b.preferred_cleaner_ids || !Array.isArray(b.preferred_cleaner_ids)) {
        return false;
      }
      if (b.preferred_cleaner_ids.length === 0) {
        return false;
      }
      return b.preferred_cleaner_ids.some((id: string) => normalizeUuid(id) === normalizedCleanerId);
    });

    // Combine and remove duplicates
    const allBookingsMap = new Map<string, any>();
    (singleBookings || []).forEach((b: any) => {
      if (b.id) {
        allBookingsMap.set(b.id, b);
      }
    });
    arrayBookings.forEach((b: any) => {
      if (b.id && !allBookingsMap.has(b.id)) {
        allBookingsMap.set(b.id, b);
      }
    });

    const cleanerBookings = Array.from(allBookingsMap.values());

    const tenureMonths = calculateCleanerTenure(cleaner.created_at);
    const totalHours = calculateTotalHours(cleanerBookings);
    const earningsPercentage = getEarningsPercentage(tenureMonths, totalHours);

    // Calculate base earnings
    // Equipment fee and additional cleaners charges are excluded from cleaner earnings
    const baseEarnings = calculateCleanerEarnings(
      {
        service_type: booking.service_type || '',
        total_amount: Number(booking.total_amount) || 0,
        service_fee: Number(booking.service_fee) || 0,
        equipment_supply_price: Number(booking.equipment_supply_price) || 0,
        additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
        preferred_cleaner_ids: booking.preferred_cleaner_ids,
        preferred_cleaner_id: booking.preferred_cleaner_id,
      },
      cleanerId,
      earningsPercentage,
      booking.preferred_cleaner_ids
    );

    // Calculate tip per cleaner
    const tipAmount = calculateTipPerCleaner(
      Number(booking.tip_amount) || 0,
      booking.preferred_cleaner_ids,
      booking.preferred_cleaner_id
    );

    return {
      success: true,
      earnings: {
        baseEarnings,
        tipAmount,
        totalEarnings: baseEarnings + tipAmount,
        earningsPercentage,
      },
    };
  } catch (error) {
    console.error('Error calculating booking earnings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to calculate earnings',
    };
  }
}

/**
 * Get a specific booking by ID (only if assigned to authenticated cleaner)
 */
export async function getCleanerBookingById(
  bookingId: string
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();

    // Fetch the booking
    const { data: booking, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching booking:', fetchError);
      return { success: false, error: 'Booking not found' };
    }

    if (!booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Verify the cleaner is assigned to this booking
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);

    // Check single cleaner assignment
    const isAssignedSingle = booking.preferred_cleaner_id && 
      normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;

    // Check multiple cleaner assignment
    let isAssignedMultiple = false;
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      isAssignedMultiple = booking.preferred_cleaner_ids.some(
        (id: string) => normalizeUuid(id) === normalizedCleanerId
      );
    }

    if (!isAssignedSingle && !isAssignedMultiple) {
      return { 
        success: false, 
        error: 'Unauthorized: You are not assigned to this booking' 
      };
    }

    return { success: true, booking: booking as Booking };
  } catch (error) {
    console.error('Error in getCleanerBookingById:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch booking',
    };
  }
}

/**
 * Update booking status (with authorization check for authenticated cleaner)
 */
export async function updateBookingStatus(
  bookingId: string,
  status: Booking['status']
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();

    // First, verify the cleaner is assigned to this booking
    const { data: booking, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (fetchError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Check authorization: cleaner must be assigned to this booking
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);

    const isAssignedSingle = booking.preferred_cleaner_id && 
      normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;

    let isAssignedMultiple = false;
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      isAssignedMultiple = booking.preferred_cleaner_ids.some(
        (id: string) => normalizeUuid(id) === normalizedCleanerId
      );
    }

    const isAssigned = isAssignedSingle || isAssignedMultiple;

    if (!isAssigned) {
      return { success: false, error: 'Unauthorized: You are not assigned to this booking' };
    }

    // Validate status transition
    const validTransitions: Record<string, string[]> = {
      'pending': ['confirmed', 'cancelled'],
      'confirmed': ['on_my_way', 'cancelled'],
      'on_my_way': ['started', 'cancelled'],
      'started': ['completed', 'cancelled'],
      'completed': [],
      'cancelled': [],
    };

    const currentStatus = booking.status;
    const allowedStatuses = validTransitions[currentStatus] || [];
    
    if (!allowedStatuses.includes(status) && status !== currentStatus) {
      return { 
        success: false, 
        error: `Invalid status transition: cannot change from ${currentStatus} to ${status}` 
      };
    }

    // Update booking status
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({ 
        status,
        updated_at: new Date().toISOString(),
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating booking status:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in updateBookingStatus:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update booking status',
    };
  }
}

/**
 * Report lateness for a booking (with authorization check for authenticated cleaner)
 */
export async function reportLateness(
  bookingId: string,
  expectedArrivalTime: string, // ISO timestamp
  reason: string
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();

    // Verify authorization
    const { data: booking, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (fetchError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Check authorization: cleaner must be assigned to this booking
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);

    const isAssignedSingle = booking.preferred_cleaner_id && 
      normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;

    let isAssignedMultiple = false;
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      isAssignedMultiple = booking.preferred_cleaner_ids.some(
        (id: string) => normalizeUuid(id) === normalizedCleanerId
      );
    }

    const isAssigned = isAssignedSingle || isAssignedMultiple;

    if (!isAssigned) {
      return { success: false, error: 'Unauthorized: You are not assigned to this booking' };
    }

    // Update booking with lateness information
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({
        expected_arrival_time: expectedArrivalTime,
        lateness_reason: reason,
        updated_at: new Date().toISOString(),
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error reporting lateness:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in reportLateness:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to report lateness',
    };
  }
}

/**
 * Calculate earnings for multiple bookings at once
 * This is more efficient than calculating earnings one booking at a time
 */
export async function calculateBookingsEarnings(bookingIds: string[]): Promise<{
  success: boolean;
  earnings?: Record<string, { baseEarnings: number; tipAmount: number; totalEarnings: number }>;
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();

    if (bookingIds.length === 0) {
      return { success: true, earnings: {} };
    }

    // Get cleaner info for tenure calculation
    const { data: cleaner, error: cleanerError } = await supabase
      .from('cleaners')
      .select('created_at')
      .eq('id', cleanerId)
      .maybeSingle();

    if (cleanerError || !cleaner) {
      return { success: false, error: 'Cleaner not found' };
    }

    // Get all bookings
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('*')
      .in('id', bookingIds);

    if (bookingsError || !bookings) {
      return { success: false, error: 'Failed to fetch bookings' };
    }

    // Get all cleaner bookings to calculate hours
    const { data: singleBookings } = await supabase
      .from('bookings')
      .select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids')
      .eq('preferred_cleaner_id', cleanerId);

    const { data: allMultiBookings } = await supabase
      .from('bookings')
      .select('status, payment_status, service_duration, preferred_cleaner_id, preferred_cleaner_ids')
      .not('preferred_cleaner_ids', 'is', null);

    // Filter bookings assigned to this cleaner
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);

    const arrayBookings = (allMultiBookings || []).filter((b: any) => {
      if (!b.preferred_cleaner_ids || !Array.isArray(b.preferred_cleaner_ids)) {
        return false;
      }
      if (b.preferred_cleaner_ids.length === 0) {
        return false;
      }
      return b.preferred_cleaner_ids.some((id: string) => normalizeUuid(id) === normalizedCleanerId);
    });

    // Combine and remove duplicates
    const allBookingsMap = new Map<string, any>();
    (singleBookings || []).forEach((b: any) => {
      if (b.id) {
        allBookingsMap.set(b.id, b);
      }
    });
    arrayBookings.forEach((b: any) => {
      if (b.id && !allBookingsMap.has(b.id)) {
        allBookingsMap.set(b.id, b);
      }
    });

    const cleanerBookings = Array.from(allBookingsMap.values());

    // Calculate tenure and hours
    const tenureMonths = calculateCleanerTenure(cleaner.created_at);
    const totalHours = calculateTotalHours(cleanerBookings);
    const earningsPercentage = getEarningsPercentage(tenureMonths, totalHours);

    // Calculate earnings for each booking
    const earningsRecord: Record<string, { baseEarnings: number; tipAmount: number; totalEarnings: number }> = {};

    for (const booking of bookings) {
      const baseEarnings = calculateCleanerEarnings(
        {
          service_type: booking.service_type || '',
          total_amount: Number(booking.total_amount) || 0,
          service_fee: Number(booking.service_fee) || 0,
          equipment_supply_price: Number(booking.equipment_supply_price) || 0,
          additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
          preferred_cleaner_ids: booking.preferred_cleaner_ids,
          preferred_cleaner_id: booking.preferred_cleaner_id,
        },
        cleanerId,
        earningsPercentage,
        booking.preferred_cleaner_ids
      );

      const tipAmount = calculateTipPerCleaner(
        Number(booking.tip_amount) || 0,
        booking.preferred_cleaner_ids,
        booking.preferred_cleaner_id
      );

      earningsRecord[booking.id] = {
        baseEarnings,
        tipAmount,
        totalEarnings: baseEarnings + tipAmount,
      };
    }

    return { success: true, earnings: earningsRecord };
  } catch (error) {
    console.error('Error calculating bookings earnings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to calculate earnings',
    };
  }
}

/**
 * Get cleaner statistics for the authenticated cleaner
 */
export async function getCleanerStats(): Promise<{
  success: boolean;
  stats?: {
    totalBookings: number;
    completedBookings: number;
    upcomingBookings: number;
    todayBookings: number;
    totalEarnings: number;
    monthlyEarnings: number;
    averageRating: number;
    reliabilityScore: number;
    completionRate: number;
    onTimeRate: number;
  };
  error?: string;
}> {
  try {
    // Get authenticated cleaner first
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      return { success: false, error: 'Not authenticated or cleaner profile not found' };
    }

    const cleanerId = cleanerResult.cleaner.id;
    const supabase = await createClient();

    // Get cleaner info including created_at for tenure calculation
    const { data: cleaner, error: cleanerError } = await supabase
      .from('cleaners')
      .select('rating, reliability_score, total_bookings, completed_bookings, on_time_bookings, created_at')
      .eq('id', cleanerId)
      .maybeSingle();

    if (cleanerError || !cleaner) {
      return { success: false, error: 'Cleaner not found' };
    }

    // Get all bookings assigned to this cleaner
    // Fetch bookings with preferred_cleaner_id (single) - include all fields needed for earnings calculation
    const { data: singleBookings, error: singleError } = await supabase
      .from('bookings')
      .select('id, status, service_date, total_amount, payment_status, service_type, service_fee, subtotal, tip_amount, service_duration, equipment_supply_price, additional_cleaners_price, preferred_cleaner_id, preferred_cleaner_ids')
      .eq('preferred_cleaner_id', cleanerId);

    // Fetch bookings with preferred_cleaner_ids (array) - fetch all with arrays, then filter in JS
    const { data: allMultiBookings, error: multiError } = await supabase
      .from('bookings')
      .select('id, status, service_date, total_amount, payment_status, service_type, service_fee, subtotal, tip_amount, service_duration, equipment_supply_price, additional_cleaners_price, preferred_cleaner_ids, preferred_cleaner_id')
      .not('preferred_cleaner_ids', 'is', null);

    if (singleError || multiError) {
      console.error('Error fetching bookings for stats:', singleError || multiError);
      return { success: false, error: (singleError || multiError)?.message || 'Failed to fetch bookings' };
    }

    // Debug logging
    console.log('[getCleanerStats] Fetched bookings:', {
      cleanerId,
      singleBookingsCount: singleBookings?.length || 0,
      allMultiBookingsCount: allMultiBookings?.length || 0,
    });

    // Filter bookings where preferred_cleaner_ids array contains this cleanerId
    // Normalize UUIDs for comparison (handle case differences and string formats)
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);
    
    const arrayBookings = (allMultiBookings || []).filter((booking: any) => {
      if (!booking.preferred_cleaner_ids || !Array.isArray(booking.preferred_cleaner_ids)) {
        return false;
      }
      // Check if array is empty
      if (booking.preferred_cleaner_ids.length === 0) {
        return false;
      }
      // Check if any ID in the array matches the cleanerId (case-insensitive)
      return booking.preferred_cleaner_ids.some((id: string) => normalizeUuid(id) === normalizedCleanerId);
    });

    // Combine and remove duplicates by ID
    const allBookingsMap = new Map<string, any>();
    (singleBookings || []).forEach((booking: any) => {
      if (booking.id) {
        allBookingsMap.set(booking.id, booking);
      }
    });
    arrayBookings.forEach((booking: any) => {
      if (booking.id && !allBookingsMap.has(booking.id)) {
        allBookingsMap.set(booking.id, booking);
      }
    });
    
    const allBookings = Array.from(allBookingsMap.values());

    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    const completedBookings = allBookings.filter(b => b.status === 'completed');
    const upcomingBookings = allBookings.filter(b => 
      ['pending', 'confirmed', 'on_my_way', 'started'].includes(b.status) &&
      b.service_date >= today
    );
    const todayBookings = allBookings.filter(b => b.service_date === today);
    const paidBookings = allBookings.filter(b => b.payment_status === 'paid');
    const monthlyPaidBookings = allBookings.filter(b => 
      b.status === 'completed' && 
      b.payment_status === 'paid' && 
      b.service_date >= firstDayOfMonth
    );
    const completedPaidBookings = allBookings.filter(b => 
      b.status === 'completed' && 
      b.payment_status === 'paid'
    );

    // Calculate cleaner tenure and total hours for eligibility determination
    const tenureMonths = calculateCleanerTenure(cleaner.created_at);
    const totalHours = calculateTotalHours(allBookings);
    const earningsPercentage = getEarningsPercentage(tenureMonths, totalHours);

    // Calculate earnings using the new system
    // Only calculate earnings for paid bookings (earnings are only paid when customer has paid)
    // Equipment fee and additional cleaners charges are excluded from cleaner earnings
    const totalEarnings = completedPaidBookings.reduce((sum, booking) => {
      const earnings = calculateTotalEarningsFromBooking(
        {
          service_type: booking.service_type || '',
          total_amount: Number(booking.total_amount) || 0,
          service_fee: Number(booking.service_fee) || 0,
          equipment_supply_price: Number(booking.equipment_supply_price) || 0,
          additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
          tip_amount: Number(booking.tip_amount) || 0,
          preferred_cleaner_ids: booking.preferred_cleaner_ids,
          preferred_cleaner_id: booking.preferred_cleaner_id,
        },
        cleanerId,
        earningsPercentage
      );
      return sum + earnings;
    }, 0);

    const monthlyEarnings = monthlyPaidBookings.reduce((sum, booking) => {
      const earnings = calculateTotalEarningsFromBooking(
        {
          service_type: booking.service_type || '',
          total_amount: Number(booking.total_amount) || 0,
          service_fee: Number(booking.service_fee) || 0,
          equipment_supply_price: Number(booking.equipment_supply_price) || 0,
          additional_cleaners_price: Number(booking.additional_cleaners_price) || 0,
          tip_amount: Number(booking.tip_amount) || 0,
          preferred_cleaner_ids: booking.preferred_cleaner_ids,
          preferred_cleaner_id: booking.preferred_cleaner_id,
        },
        cleanerId,
        earningsPercentage
      );
      return sum + earnings;
    }, 0);

    const completionRate = cleaner.total_bookings 
      ? (cleaner.completed_bookings || 0) / cleaner.total_bookings * 100 
      : 0;
    
    const onTimeRate = cleaner.completed_bookings
      ? (cleaner.on_time_bookings || 0) / cleaner.completed_bookings * 100
      : 0;

    return {
      success: true,
      stats: {
        totalBookings: allBookings.length,
        completedBookings: completedBookings.length,
        upcomingBookings: upcomingBookings.length,
        todayBookings: todayBookings.length,
        totalEarnings,
        monthlyEarnings,
        averageRating: Number(cleaner.rating) || 0,
        reliabilityScore: Number(cleaner.reliability_score) || 0,
        completionRate,
        onTimeRate,
      },
    };
  } catch (error) {
    console.error('Error in getCleanerStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch stats',
    };
  }
}

/**
 * Update cleaner availability
 */
export async function updateCleanerAvailability(
  cleanerId: string,
  updates: {
    isAvailable?: boolean;
    availableMonday?: boolean;
    availableTuesday?: boolean;
    availableWednesday?: boolean;
    availableThursday?: boolean;
    availableFriday?: boolean;
    availableSaturday?: boolean;
    availableSunday?: boolean;
  }
): Promise<{
  success: boolean;
  cleaner?: Cleaner;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const updateData: any = {
      updated_at: new Date().toISOString(),
    };

    if (updates.isAvailable !== undefined) {
      updateData.is_available = updates.isAvailable;
    }
    if (updates.availableMonday !== undefined) {
      updateData.available_monday = updates.availableMonday;
    }
    if (updates.availableTuesday !== undefined) {
      updateData.available_tuesday = updates.availableTuesday;
    }
    if (updates.availableWednesday !== undefined) {
      updateData.available_wednesday = updates.availableWednesday;
    }
    if (updates.availableThursday !== undefined) {
      updateData.available_thursday = updates.availableThursday;
    }
    if (updates.availableFriday !== undefined) {
      updateData.available_friday = updates.availableFriday;
    }
    if (updates.availableSaturday !== undefined) {
      updateData.available_saturday = updates.availableSaturday;
    }
    if (updates.availableSunday !== undefined) {
      updateData.available_sunday = updates.availableSunday;
    }

    const { data: updatedCleaner, error } = await supabase
      .from('cleaners')
      .update(updateData)
      .eq('id', cleanerId)
      .select()
      .single();

    if (error) {
      console.error('Error updating cleaner availability:', error);
      return { success: false, error: error.message };
    }

    return { success: true, cleaner: updatedCleaner as Cleaner };
  } catch (error) {
    console.error('Error in updateCleanerAvailability:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update availability',
    };
  }
}
