/**
 * Calculate service duration based on bedrooms, bathrooms, and additional services
 * 
 * Formula:
 * - Base: 3.5 hours
 * - Per bedroom: +0.5 hours
 * - Per bathroom: +0.5 hours
 * - Per extra service: +0.5 hours
 * 
 * Result is clamped between 3.5 (minimum) and 10 (maximum) hours
 * 
 * @param bedrooms - Number of bedrooms as string (e.g., '0', '1', '2')
 * @param bathrooms - Number of bathrooms as string (e.g., '1', '2', '3')
 * @param additionalServices - Array of additional service IDs
 * @returns Calculated duration in hours (clamped between 3.5 and 10)
 */
export function calculateServiceDuration(
  bedrooms: string,
  bathrooms: string,
  additionalServices: string[]
): number {
  // Base hours
  const baseHours = 3.5;
  
  // Convert bedrooms to number (handle empty string as 0)
  const bedroomCount = bedrooms ? parseInt(bedrooms, 10) || 0 : 0;
  
  // Convert bathrooms to number (handle empty string as 0)
  const bathroomCount = bathrooms ? parseInt(bathrooms, 10) || 0 : 0;
  
  // Count additional services
  const extrasCount = additionalServices.length;
  
  // Calculate duration
  const duration = baseHours + 
    (bedroomCount * 0.5) + 
    (bathroomCount * 0.5) + 
    (extrasCount * 0.5);
  
  // Clamp between 3.5 and 10 hours
  return Math.max(3.5, Math.min(10, duration));
}

