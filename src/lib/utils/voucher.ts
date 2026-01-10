/**
 * Generate a unique voucher code
 * Format: 8-12 character alphanumeric code (uppercase, excluding confusing characters like 0, O, I, L)
 */
export function generateVoucherCode(): string {
  // Characters to use (excluding 0, O, I, L for clarity)
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const codeLength = 10;
  
  let code = '';
  for (let i = 0; i < codeLength; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return code;
}

/**
 * Generate a unique voucher code with retry logic
 * This should be called from the database/webhook where we can check uniqueness
 */
export async function generateUniqueVoucherCode(
  checkUnique: (code: string) => Promise<boolean>,
  maxRetries: number = 10
): Promise<string> {
  for (let i = 0; i < maxRetries; i++) {
    const code = generateVoucherCode();
    const isUnique = await checkUnique(code);
    
    if (isUnique) {
      return code;
    }
  }
  
  // If we can't generate a unique code after max retries, add timestamp
  return generateVoucherCode() + Date.now().toString(36).substring(0, 4).toUpperCase();
}

