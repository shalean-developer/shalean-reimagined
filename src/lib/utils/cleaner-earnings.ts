/**
 * Cleaner earnings calculation utilities
 * 
 * Implements tiered earnings system:
 * - Standard/Airbnb: 70% if ≥3 months AND ≥400 hours, else 60%
 * - Deep Cleaning/Move In/Out/Carpet Cleaning: R250 per cleaner (fixed)
 * - Tips are added to earnings and divided among cleaners if multiple assigned
 */

import { Booking } from '@/types/booking';

/**
 * Check if a service is team-based (Deep Cleaning, Move In/Out, Carpet Cleaning)
 * These services pay a fixed R250 per cleaner
 * 
 * @param serviceType - The service type name (case-insensitive)
 * @returns true if the service is team-based and uses fixed earnings
 */
export function isTeamBasedService(serviceType: string): boolean {
  if (!serviceType) return false;
  
  const normalized = serviceType.toLowerCase().trim();
  
  // Deep Cleaning
  if (normalized.includes('deep')) {
    return true;
  }
  
  // Move In/Out
  if (normalized.includes('move')) {
    if (normalized.includes('in/out') || 
        normalized.includes('in out') || 
        normalized.includes('inout')) {
      return true;
    }
  }
  
  // Carpet Cleaning
  if (normalized.includes('carpet')) {
    return true;
  }
  
  return false;
}

/**
 * Calculate cleaner tenure in months from created_at date
 * 
 * @param createdAt - The cleaner's created_at timestamp (ISO string or Date)
 * @returns Number of months (as a decimal, e.g., 3.5 months)
 */
export function calculateCleanerTenure(createdAt: string | Date): number {
  if (!createdAt) return 0;
  
  const createdDate = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
  const now = new Date();
  
  // Calculate difference in milliseconds
  const diffMs = now.getTime() - createdDate.getTime();
  
  // Convert to months (approximate: 30 days per month)
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const months = diffDays / 30;
  
  return Math.max(0, months);
}

/**
 * Calculate total hours worked from completed and paid bookings
 * 
 * @param bookings - Array of bookings with status, payment_status, and service_duration
 * @returns Total hours worked (sum of service_duration from completed AND paid bookings)
 */
export function calculateTotalHours(bookings: Array<{
  status: string;
  payment_status: string;
  service_duration: number;
}>): number {
  if (!bookings || bookings.length === 0) return 0;
  
  return bookings
    .filter(b => b.status === 'completed' && b.payment_status === 'paid')
    .reduce((total, booking) => {
      const duration = Number(booking.service_duration) || 0;
      return total + duration;
    }, 0);
}

/**
 * Determine earnings percentage based on cleaner eligibility
 * 
 * @param tenureMonths - Cleaner's tenure in months
 * @param totalHours - Total hours worked (completed AND paid bookings)
 * @returns 0.70 if eligible (≥3 months AND ≥400 hours), else 0.60
 */
export function getEarningsPercentage(tenureMonths: number, totalHours: number): number {
  if (tenureMonths >= 3 && totalHours >= 400) {
    return 0.70;
  }
  return 0.60;
}

/**
 * Calculate cleaner earnings for a single booking
 * 
 * Calculation steps for non-team services:
 * 1. Calculate earnings for 1 default cleaner: (total_amount - service_fee - equipment_supply_price) × earningsPercentage
 * 2. Add additional_cleaners_price to the earnings pool
 * 3. Divide the total earnings pool by the number of cleaners (including the base cleaner)
 * 
 * Equipment fee is excluded from earnings. Additional cleaners fee is added to the earnings pool
 * and then divided among all cleaners equally.
 * 
 * @param booking - The booking object
 * @param cleanerId - The cleaner's ID (for verification if needed)
 * @param earningsPercentage - The percentage to use (0.60 or 0.70) for non-team services
 * @param preferredCleanerIds - Array of cleaner IDs assigned to this booking
 * @returns The cleaner's earnings for this booking (excluding tip, which is added separately)
 */
export function calculateCleanerEarnings(
  booking: {
    service_type: string;
    total_amount: number;
    service_fee: number;
    equipment_supply_price?: number;
    additional_cleaners_price?: number;
    preferred_cleaner_ids?: string[] | null;
    preferred_cleaner_id?: string | null;
  },
  cleanerId: string,
  earningsPercentage: number,
  preferredCleanerIds?: string[] | null
): number {
  // For team-based services: fixed R250 per cleaner
  if (isTeamBasedService(booking.service_type)) {
    return 250;
  }
  
  // For other services: 
  // Step 1: Calculate earnings for 1 default cleaner (excluding only equipment and service fee)
  // Step 2: Add additional_cleaners_price to the earnings pool
  // Step 3: Divide the total by the number of cleaners (including the base cleaner)
  // Equipment fee is excluded from earnings, but additional cleaners fee is added to the earnings pool
  const equipmentPrice = Number(booking.equipment_supply_price) || 0;
  const additionalCleanersPrice = Number(booking.additional_cleaners_price) || 0;
  
  // Step 1: Calculate amount for base cleaner (excluding only equipment and service fee)
  const amountForBaseCleaner = (Number(booking.total_amount) || 0) - (Number(booking.service_fee) || 0) - equipmentPrice;
  
  // Calculate earnings for 1 cleaner
  const baseEarningsForOneCleaner = amountForBaseCleaner * earningsPercentage;
  
  // Step 2: Add additional cleaners fee to the earnings pool
  const totalEarningsPool = baseEarningsForOneCleaner + additionalCleanersPrice;
  
  // Determine number of cleaners assigned to this booking
  // Use preferred_cleaner_ids if available, otherwise check preferred_cleaner_id
  let numCleaners = 1;
  if (preferredCleanerIds && Array.isArray(preferredCleanerIds) && preferredCleanerIds.length > 0) {
    numCleaners = preferredCleanerIds.length;
  } else if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids) && booking.preferred_cleaner_ids.length > 0) {
    numCleaners = booking.preferred_cleaner_ids.length;
  } else if (booking.preferred_cleaner_id) {
    numCleaners = 1;
  }
  
  // Step 3: Divide total earnings pool equally among all assigned cleaners
  return totalEarningsPool / numCleaners;
}

/**
 * Calculate tip amount per cleaner (tips are divided equally among all cleaners)
 * 
 * @param tipAmount - Total tip amount from booking
 * @param preferredCleanerIds - Array of cleaner IDs assigned to this booking
 * @param preferredCleanerId - Single cleaner ID (for backward compatibility)
 * @returns Tip amount for this cleaner
 */
export function calculateTipPerCleaner(
  tipAmount: number,
  preferredCleanerIds?: string[] | null,
  preferredCleanerId?: string | null
): number {
  const tip = Number(tipAmount) || 0;
  if (tip <= 0) return 0;
  
  // Determine number of cleaners
  let numCleaners = 1;
  if (preferredCleanerIds && Array.isArray(preferredCleanerIds) && preferredCleanerIds.length > 0) {
    numCleaners = preferredCleanerIds.length;
  } else if (preferredCleanerId) {
    numCleaners = 1;
  }
  
  // Divide tip equally among all cleaners
  return tip / numCleaners;
}

/**
 * Calculate total earnings for a cleaner from a booking (base earnings + tip)
 * 
 * @param booking - The booking object with all required fields
 * @param cleanerId - The cleaner's ID
 * @param earningsPercentage - The percentage to use (0.60 or 0.70)
 * @returns Total earnings (base + tip) for this cleaner from this booking
 */
export function calculateTotalEarningsFromBooking(
  booking: {
    service_type: string;
    total_amount: number;
    service_fee: number;
    equipment_supply_price?: number;
    additional_cleaners_price?: number;
    tip_amount: number;
    preferred_cleaner_ids?: string[] | null;
    preferred_cleaner_id?: string | null;
  },
  cleanerId: string,
  earningsPercentage: number
): number {
  const baseEarnings = calculateCleanerEarnings(
    booking,
    cleanerId,
    earningsPercentage,
    booking.preferred_cleaner_ids || null
  );
  
  const tip = calculateTipPerCleaner(
    booking.tip_amount || 0,
    booking.preferred_cleaner_ids,
    booking.preferred_cleaner_id
  );
  
  return baseEarnings + tip;
}
