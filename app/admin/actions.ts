'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/server-admin';
import { Booking } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import { Profile } from '@/types/profile';

/**
 * Check if user is an admin
 * Admins are identified by email pattern: *@admin.shalean.local
 * or user metadata with role: 'admin'
 */
function isAdminUser(email: string | undefined, userMetadata?: any): boolean {
  if (!email) return false;
  
  // Check email pattern
  if (email.includes('@admin.shalean.local')) {
    return true;
  }
  
  // Check user metadata
  if (userMetadata?.role === 'admin') {
    return true;
  }
  
  // Hardcoded admin emails (fallback)
  const adminEmails = [
    'admin@shalean.local',
    'admin@admin.shalean.local',
    'admin@shalean.com',
  ];
  
  return adminEmails.includes(email.toLowerCase());
}

/**
 * Get current authenticated admin
 */
export async function getCurrentAdmin(): Promise<{
  success: boolean;
  admin?: {
    id: string;
    email: string;
    name?: string;
  };
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Check if user is admin
    if (!isAdminUser(user.email, user.user_metadata)) {
      return { success: false, error: 'Not an admin user' };
    }

    return {
      success: true,
      admin: {
        id: user.id,
        email: user.email!,
        name: user.user_metadata?.name || user.email?.split('@')[0],
      },
    };
  } catch (error) {
    console.error('Error in getCurrentAdmin:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get admin',
    };
  }
}

/**
 * Authenticate admin (server-side)
 * Note: Actual authentication happens client-side, this just verifies the result
 */
export async function authenticateAdmin(
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
    // Check if email matches admin pattern
    if (!isAdminUser(email)) {
      return { success: false, error: 'Not an admin email' };
    }

    // Authentication happens client-side, this is just validation
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      return { success: false, error: 'Invalid credentials' };
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
    console.error('Error in authenticateAdmin:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    };
  }
}

/**
 * Get admin statistics
 */
export async function getAdminStats(): Promise<{
  success: boolean;
  stats?: {
    totalBookings: number;
    activeBookings: number;
    totalRevenue: number;
    monthlyRevenue: number;
    totalCustomers: number;
    totalCleaners: number;
    activeCleaners: number;
    completionRate: number;
  };
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Get all bookings
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('status, total_amount, payment_status, service_date, created_at');

    if (bookingsError) {
      console.error('Error fetching bookings:', bookingsError);
      return { success: false, error: bookingsError.message };
    }

    // Get all customers (profiles)
    const { data: customers, error: customersError } = await supabase
      .from('profiles')
      .select('id');

    if (customersError) {
      console.error('Error fetching customers:', customersError);
      return { success: false, error: customersError.message };
    }

    // Get all cleaners
    const { data: cleaners, error: cleanersError } = await supabase
      .from('cleaners')
      .select('id, is_active');

    if (cleanersError) {
      console.error('Error fetching cleaners:', cleanersError);
      return { success: false, error: cleanersError.message };
    }

    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];

    const allBookings = bookings || [];
    const activeBookings = allBookings.filter(
      (b) => ['pending', 'confirmed', 'on_my_way', 'started'].includes(b.status)
    ).length;
    
    const paidBookings = allBookings.filter((b) => b.payment_status === 'paid');
    const totalRevenue = paidBookings.reduce((sum, b) => sum + (b.total_amount || 0), 0);
    
    const monthlyPaidBookings = allBookings.filter(
      (b) => b.payment_status === 'paid' && b.service_date >= firstDayOfMonth
    );
    const monthlyRevenue = monthlyPaidBookings.reduce((sum, b) => sum + (b.total_amount || 0), 0);

    const completedBookings = allBookings.filter((b) => b.status === 'completed').length;
    const completionRate = allBookings.length > 0 ? (completedBookings / allBookings.length) * 100 : 0;

    const allCleaners = cleaners || [];
    const activeCleaners = allCleaners.filter((c) => c.is_active).length;

    return {
      success: true,
      stats: {
        totalBookings: allBookings.length,
        activeBookings,
        totalRevenue,
        monthlyRevenue,
        totalCustomers: customers?.length || 0,
        totalCleaners: allCleaners.length,
        activeCleaners,
        completionRate: Math.round(completionRate * 100) / 100,
      },
    };
  } catch (error) {
    console.error('Error in getAdminStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch stats',
    };
  }
}

/**
 * Get all bookings with optional filters
 */
export async function getAllBookings(
  filter?: {
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    customerEmail?: string;
    cleanerId?: string;
  }
): Promise<{
  success: boolean;
  bookings?: Booking[];
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    let query = supabase
      .from('bookings')
      .select('*')
      .order('service_date', { ascending: false })
      .order('created_at', { ascending: false });

    if (filter) {
      if (filter.status && filter.status !== 'all') {
        query = query.eq('status', filter.status);
      }
      if (filter.dateFrom) {
        query = query.gte('service_date', filter.dateFrom);
      }
      if (filter.dateTo) {
        query = query.lte('service_date', filter.dateTo);
      }
      if (filter.customerEmail) {
        query = query.eq('customer_email', filter.customerEmail);
      }
      if (filter.cleanerId) {
        query = query.eq('preferred_cleaner_id', filter.cleanerId);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching bookings:', error);
      return { success: false, error: error.message };
    }

    return { success: true, bookings: data || [] };
  } catch (error) {
    console.error('Error in getAllBookings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch bookings',
    };
  }
}

/**
 * Get all customers
 */
export async function getAllCustomers(): Promise<{
  success: boolean;
  customers?: Profile[];
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching customers:', error);
      return { success: false, error: error.message };
    }

    return { success: true, customers: data || [] };
  } catch (error) {
    console.error('Error in getAllCustomers:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch customers',
    };
  }
}

/**
 * Get all cleaners
 */
export async function getAllCleaners(): Promise<{
  success: boolean;
  cleaners?: Cleaner[];
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('cleaners')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cleaners:', error);
      return { success: false, error: error.message };
    }

    return { success: true, cleaners: data || [] };
  } catch (error) {
    console.error('Error in getAllCleaners:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cleaners',
    };
  }
}
