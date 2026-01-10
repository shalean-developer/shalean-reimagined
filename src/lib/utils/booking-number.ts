/**
 * Generate a unique booking number
 * Format: SHL followed by numbers only (e.g., SHL20250115123456)
 */
export function generateBookingNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Generate random 6-digit number (000000-999999)
  const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return `SHL${year}${month}${day}${randomNumber}`;
}
