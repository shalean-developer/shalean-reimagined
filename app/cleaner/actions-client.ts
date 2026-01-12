'use client';

import { Cleaner } from '@/types/booking';

/**
 * Client-side authentication for cleaners
 * Authenticates using database passwords (not Supabase Auth)
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
    // Trim inputs
    const trimmedPhone = phone.trim();
    const trimmedPassword = password.trim();
    
    if (!trimmedPhone || !trimmedPassword) {
      return { success: false, error: 'Phone number and password are required' };
    }
    
    // Call API route to authenticate and set session cookie
    const response = await fetch('/api/cleaner/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: trimmedPhone,
        password: trimmedPassword,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { 
        success: false, 
        error: data.error || 'Authentication failed' 
      };
    }

    return { success: true, cleaner: data.cleaner };
  } catch (error) {
    console.error('Error in authenticateCleanerClient:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}
