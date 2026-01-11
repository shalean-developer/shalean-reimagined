'use client';

import { createClient } from '@/lib/supabase/client';
import { Cleaner } from '@/types/booking';

/**
 * Client-side authentication for cleaners
 * This handles the Supabase Auth sign-in from the browser
 */
export async function authenticateCleanerClient(
  phone: string,
  password: string
): Promise<{
  success: boolean;
  cleaner?: Cleaner;
  error?: string;
}> {
  try {
    // Trim and normalize inputs first
    const trimmedPhone = phone.trim();
    const trimmedPassword = password.trim();
    
    if (!trimmedPhone || !trimmedPassword) {
      return { success: false, error: 'Phone number and password are required' };
    }
    
    // Normalize phone number to match how it was stored during creation
    // If it starts with 0, convert to +27 format (South Africa)
    // If it already starts with +, use it
    // Remove + sign for email format
    let normalizedPhone = trimmedPhone.replace(/\s+/g, '');
    
    // Convert to +27 format if needed (matches creation script logic)
    if (normalizedPhone.startsWith('+')) {
      // Already has country code
    } else if (normalizedPhone.startsWith('0')) {
      // Remove leading 0 and add +27
      normalizedPhone = `+27${normalizedPhone.substring(1)}`;
    } else {
      // Assume it's already without country code, add +27
      normalizedPhone = `+27${normalizedPhone}`;
    }
    
    // For email, remove the + sign (Supabase Auth emails shouldn't have +)
    const phoneForEmail = normalizedPhone.replace(/\+/g, '');
    const authEmail = `${phoneForEmail}@cleaners.shalean.local`;

    const supabase = createClient();
    
    // Authenticate with Supabase Auth
    console.log('[Cleaner Auth] Attempting login:', { 
      inputPhone: trimmedPhone, 
      normalizedPhone, 
      phoneForEmail,
      authEmail,
      passwordLength: trimmedPassword.length,
      passwordFirst3: trimmedPassword.substring(0, 3)
    });
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: authEmail,
      password: trimmedPassword,
    });

    if (error) {
      console.error('[Cleaner Auth] Authentication failed:', {
        errorCode: error.status,
        errorMessage: error.message,
        attemptedEmail: authEmail,
        normalizedPhone,
        phoneForEmail
      });
      
      // Provide more specific error message
      if (error.message?.includes('Invalid login credentials') || error.status === 400) {
        return { 
          success: false, 
          error: 'Invalid phone number or password. Please check your credentials and try again.' 
        };
      }
      
      return { success: false, error: error.message || 'Invalid phone number or password' };
    }

    if (!data.user) {
      return { success: false, error: 'Authentication failed' };
    }

    // Fetch cleaner profile using phone
    // The phone is stored as +27824644655 in the database
    // We need to query with the normalized phone (with +)
    const { data: cleanerData, error: cleanerError } = await supabase
      .from('cleaners')
      .select('*')
      .eq('phone', normalizedPhone)  // Query with +27824644655
      .eq('is_active', true)
      .maybeSingle();

    if (cleanerError || !cleanerData) {
      // User authenticated but cleaner profile not found
      await supabase.auth.signOut(); // Sign out since profile missing
      return { success: false, error: 'Cleaner profile not found' };
    }

    // Update cleaner's auth_user_id if not set
    if (!cleanerData.auth_user_id) {
      const { error: updateError } = await supabase
        .from('cleaners')
        .update({ auth_user_id: data.user.id })
        .eq('id', cleanerData.id);

      if (updateError) {
        console.warn('Could not update auth_user_id:', updateError);
      }
    }

    return { success: true, cleaner: cleanerData as Cleaner };
  } catch (error) {
    console.error('Error in authenticateCleanerClient:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}
