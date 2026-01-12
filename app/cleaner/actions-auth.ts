'use server';

import { createAdminClient } from '@/lib/supabase/server-admin';
import { verifyPassword } from '@/lib/utils/password';
import { Cleaner } from '@/types/booking';

/**
 * Authenticate cleaner using database password
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
    if (!phone || !password) {
      return { success: false, error: 'Phone number and password are required' };
    }

    // Normalize phone number (same logic as create-cleaner)
    const normalizedPhone = phone.replace(/\s+/g, '').trim();
    let phoneWithPlus: string;
    if (normalizedPhone.startsWith('+')) {
      phoneWithPlus = normalizedPhone;
    } else if (normalizedPhone.startsWith('0')) {
      phoneWithPlus = `+27${normalizedPhone.substring(1)}`;
    } else {
      phoneWithPlus = `+27${normalizedPhone}`;
    }

    const supabaseAdmin = createAdminClient();

    // Fetch cleaner by phone
    const { data: cleaner, error: cleanerError } = await supabaseAdmin
      .from('cleaners')
      .select('*')
      .eq('phone', phoneWithPlus)
      .eq('is_active', true)
      .maybeSingle();

    if (cleanerError || !cleaner) {
      return { success: false, error: 'Invalid phone number or password' };
    }

    // Check if cleaner has a password_hash
    if (!cleaner.password_hash) {
      return { success: false, error: 'Password not set. Please contact admin to set your password.' };
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, cleaner.password_hash);

    if (!isValidPassword) {
      return { success: false, error: 'Invalid phone number or password' };
    }

    // Return cleaner data (without password_hash)
    const { password_hash, ...cleanerWithoutPassword } = cleaner;
    return { success: true, cleaner: cleanerWithoutPassword as Cleaner };
  } catch (error) {
    console.error('Error in authenticateCleaner:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}
