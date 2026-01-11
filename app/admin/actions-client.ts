'use client';

import { createClient } from '@/lib/supabase/client';

/**
 * Client-side authentication for admin
 * This handles the Supabase Auth sign-in from the browser
 */
export async function authenticateAdminClient(
  email: string,
  password: string
): Promise<{
  success: boolean;
  admin?: {
    id: string;
    email: string;
    name?: string;
  };
  error?: string;
}> {
  try {
    // Trim inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      return { success: false, error: 'Email and password are required' };
    }

    const supabase = createClient();

    // Authenticate with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password: trimmedPassword,
    });

    if (error) {
      console.error('[Admin Auth] Authentication failed:', error);
      if (error.message?.includes('Invalid login credentials') || error.status === 400) {
        return {
          success: false,
          error: 'Invalid email or password. Please check your credentials and try again.',
        };
      }
      return { success: false, error: error.message || 'Invalid email or password' };
    }

    if (!data.user) {
      return { success: false, error: 'Authentication failed' };
    }

    // Check if user is admin (email pattern or metadata)
    const userEmail = data.user.email;
    const userMetadata = data.user.user_metadata;

    // Check email pattern
    if (!userEmail?.includes('@admin.shalean.local') && userMetadata?.role !== 'admin') {
      // Hardcoded admin emails fallback
      const adminEmails = ['admin@shalean.local', 'admin@admin.shalean.local', 'admin@shalean.com'];
      if (!adminEmails.includes(userEmail?.toLowerCase() || '')) {
        await supabase.auth.signOut();
        return { success: false, error: 'Not an admin account' };
      }
    }

    return {
      success: true,
      admin: {
        id: data.user.id,
        email: data.user.email!,
        name: data.user.user_metadata?.name || data.user.email?.split('@')[0],
      },
    };
  } catch (error) {
    console.error('Error in authenticateAdminClient:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}
