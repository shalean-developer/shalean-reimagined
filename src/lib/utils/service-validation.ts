/**
 * Service validation utilities for recurring bookings
 * 
 * Only Standard Cleaning and Airbnb Cleaning support recurring bookings.
 * All other services (Deep Cleaning, Move In/Out, Carpet Cleaning) are One-Time only.
 */

/**
 * Check if a service supports recurring bookings
 * @param serviceName - The name of the service (case-insensitive)
 * @returns true if the service supports recurring bookings, false otherwise
 */
export function supportsRecurringBookings(serviceName: string): boolean {
  if (!serviceName) return false;
  
  const normalizedName = serviceName.toLowerCase().trim();
  
  // Standard Cleaning supports recurring
  if (normalizedName.includes('standard')) {
    return true;
  }
  
  // Airbnb Cleaning supports recurring
  if (normalizedName.includes('airbnb')) {
    return true;
  }
  
  // All other services are One-Time only
  return false;
}

/**
 * Get available frequencies for a service
 * @param serviceName - The name of the service (case-insensitive)
 * @returns Array of available frequency options
 */
export function getAvailableFrequencies(
  serviceName: string
): ('one-time' | 'weekly' | 'bi-weekly' | 'monthly')[] {
  if (supportsRecurringBookings(serviceName)) {
    return ['one-time', 'weekly', 'bi-weekly', 'monthly'];
  }
  
  // Non-supported services only allow One-Time
  return ['one-time'];
}

/**
 * Check if a frequency is valid for a service
 * @param serviceName - The name of the service
 * @param frequency - The frequency to check
 * @returns true if the frequency is valid for the service
 */
export function isValidFrequencyForService(
  serviceName: string,
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
): boolean {
  const availableFrequencies = getAvailableFrequencies(serviceName);
  return availableFrequencies.includes(frequency);
}

