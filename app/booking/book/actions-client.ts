'use client';

import { createClient } from '@/lib/supabase/client';
import { PricingRule, Cleaner, CleanerWithAvailability } from '@/types/booking';
import { calculateReliabilityScore, calculateCompletionRate, calculateOnTimeRate } from '@/lib/utils/cleaner-utils';

/**
 * Client-side action to fetch pricing rules
 * This can be called from client components and cached with React Query
 */
export async function getPricingRulesClient(): Promise<PricingRule[]> {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('pricing_rules')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching pricing rules:', error);
      return [];
    }

    return (data || []) as PricingRule[];
  } catch (error) {
    console.error('Unexpected error fetching pricing rules:', error);
    return [];
  }
}

/**
 * Client-side action to fetch available cleaners
 * This can be called from client components
 */
export async function getAvailableCleanersClient(serviceSuburb?: string): Promise<{
  success: boolean;
  cleaners?: Cleaner[];
  error?: string;
}> {
  try {
    const supabase = createClient();

    // Build query - only filter by is_active
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

    return { success: true, cleaners: cleaners as Cleaner[] };
  } catch (error) {
    console.error('Unexpected error fetching cleaners:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Check if a cleaner has a booking conflict for a specific date and time slot (client-side)
 */
export async function checkCleanerBookingConflictClient(
  cleanerId: string,
  serviceDate: string,
  serviceTime: string,
  serviceDuration: number
): Promise<boolean> {
  try {
    const supabase = createClient();

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
 * Get available cleaners with enhanced filtering criteria (client-side)
 * Filters by: Location, Availability, Booking conflicts
 * Sorts by: Reliability Score, Rating
 */
export async function getAvailableCleanersWithCriteriaClient(params: {
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
    const supabase = createClient();
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

    const { data, error } = await query
      .order('reliability_score', { ascending: false, nullsFirst: false })
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
          bookingConflict = await checkCleanerBookingConflictClient(
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

    // Sort by reliability score and rating
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

