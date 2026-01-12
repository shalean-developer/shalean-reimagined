'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/server-admin';
import { Booking, CleanerUpdateInput, PricingRule } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import { Profile, ProfileUpdateInput } from '@/types/profile';
import { Service, AdditionalService } from '@/types/quote';

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
export async function getAdminStats(filter?: {
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  serviceType?: string;
}): Promise<{
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

    // Build bookings query with filters
    let bookingsQuery = supabase
      .from('bookings')
      .select('status, total_amount, payment_status, service_date, created_at, service_type');

    if (filter) {
      if (filter.dateFrom) {
        bookingsQuery = bookingsQuery.gte('created_at', filter.dateFrom);
      }
      if (filter.dateTo) {
        bookingsQuery = bookingsQuery.lte('created_at', filter.dateTo + 'T23:59:59');
      }
      if (filter.status) {
        bookingsQuery = bookingsQuery.eq('status', filter.status);
      }
      if (filter.serviceType) {
        bookingsQuery = bookingsQuery.eq('service_type', filter.serviceType);
      }
    }

    const { data: bookings, error: bookingsError } = await bookingsQuery;

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
    // Only divide seed data (amounts >= 10000) by 100, system-created bookings are already correct
    const totalRevenue = paidBookings.reduce((sum, b) => {
      const amount = b.total_amount || 0;
      return sum + (amount >= 10000 ? amount / 100 : amount);
    }, 0);
    
    const monthlyPaidBookings = allBookings.filter(
      (b) => b.payment_status === 'paid' && b.service_date >= firstDayOfMonth
    );
    const monthlyRevenue = monthlyPaidBookings.reduce((sum, b) => {
      const amount = b.total_amount || 0;
      return sum + (amount >= 10000 ? amount / 100 : amount);
    }, 0);

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
      // Order by year and month descending (newest months first), then by day ascending (1st to last day of month)
      .order('service_date', { ascending: false, nullsFirst: false });

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

    // Custom sort: months in descending order (newest first), days in ascending order (1st to last)
    const sortedBookings = (data || []).sort((a, b) => {
      const dateA = a.service_date ? new Date(a.service_date) : new Date(0);
      const dateB = b.service_date ? new Date(b.service_date) : new Date(0);
      
      // Get year and month for comparison
      const yearA = dateA.getFullYear();
      const monthA = dateA.getMonth();
      const yearB = dateB.getFullYear();
      const monthB = dateB.getMonth();
      
      // First, compare by year and month (descending - newest months first)
      if (yearA !== yearB) {
        return yearB - yearA; // Descending by year
      }
      if (monthA !== monthB) {
        return monthB - monthA; // Descending by month
      }
      
      // Within the same month, sort by day ascending (1st to last day)
      const dayA = dateA.getDate();
      const dayB = dateB.getDate();
      return dayA - dayB; // Ascending by day
    });

    return { success: true, bookings: sortedBookings };
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

/**
 * Get monthly user registration data for charts
 */
export async function getMonthlyUserData(filter?: {
  dateFrom?: string;
  dateTo?: string;
  serviceType?: string;
}): Promise<{
  success: boolean;
  data?: { month: string; provider: number; client: number }[];
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const now = new Date();
    const currentYear = now.getFullYear();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Build cleaners query with date filters
    let cleanersQuery = supabase
      .from('cleaners')
      .select('created_at');
    
    const dateFrom = filter?.dateFrom || `${currentYear}-01-01`;
    cleanersQuery = cleanersQuery.gte('created_at', dateFrom);
    if (filter?.dateTo) {
      cleanersQuery = cleanersQuery.lte('created_at', filter.dateTo + 'T23:59:59');
    }

    const { data: cleaners, error: cleanersError } = await cleanersQuery;

    // Build customers query with date filters
    let customersQuery = supabase
      .from('profiles')
      .select('created_at');
    
    customersQuery = customersQuery.gte('created_at', dateFrom);
    if (filter?.dateTo) {
      customersQuery = customersQuery.lte('created_at', filter.dateTo + 'T23:59:59');
    }

    const { data: customers, error: customersError } = await customersQuery;

    if (cleanersError || customersError) {
      return { success: false, error: 'Failed to fetch user data' };
    }

    // Group by month
    const monthlyData: { [key: number]: { provider: number; client: number } } = {};
    for (let i = 0; i < 12; i++) {
      monthlyData[i] = { provider: 0, client: 0 };
    }

    cleaners?.forEach((cleaner) => {
      if (cleaner.created_at) {
        const date = new Date(cleaner.created_at);
        if (date.getFullYear() === currentYear) {
          monthlyData[date.getMonth()].provider++;
        }
      }
    });

    customers?.forEach((customer) => {
      if (customer.created_at) {
        const date = new Date(customer.created_at);
        if (date.getFullYear() === currentYear) {
          monthlyData[date.getMonth()].client++;
        }
      }
    });

    const result = months.map((month, index) => ({
      month,
      provider: monthlyData[index].provider,
      client: monthlyData[index].client,
    }));

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getMonthlyUserData:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch monthly user data',
    };
  }
}

/**
 * Get booking status distribution for donut chart
 */
export async function getBookingStatusDistribution(filter?: {
  dateFrom?: string;
  dateTo?: string;
  serviceType?: string;
}): Promise<{
  success: boolean;
  data?: { status: string; count: number; percentage: number }[];
  total?: number;
  growthPercentage?: number;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    
    // Build query with filters
    let query = supabase
      .from('bookings')
      .select('status, created_at, service_type');

    if (filter) {
      if (filter.dateFrom) {
        query = query.gte('created_at', filter.dateFrom);
      }
      if (filter.dateTo) {
        query = query.lte('created_at', filter.dateTo + 'T23:59:59');
      }
      if (filter.serviceType) {
        query = query.eq('service_type', filter.serviceType);
      }
    }

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const statusCounts: { [key: string]: number } = {};
    const total = bookings?.length || 0;

    bookings?.forEach((booking) => {
      const status = booking.status || 'unknown';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });

    const result = Object.entries(statusCounts).map(([status, count]) => ({
      status: status.charAt(0).toUpperCase() + status.slice(1),
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
    }));

    // Calculate growth percentage (compare current month to previous month)
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const currentMonthStart = new Date(currentYear, currentMonth, 1);
    const previousMonthStart = new Date(previousYear, previousMonth, 1);
    const previousMonthEnd = new Date(currentYear, currentMonth, 0);

    const currentMonthBookings = bookings?.filter((booking) => {
      if (!booking.created_at) return false;
      const createdDate = new Date(booking.created_at);
      return createdDate >= currentMonthStart && createdDate < now;
    }).length || 0;

    const previousMonthBookings = bookings?.filter((booking) => {
      if (!booking.created_at) return false;
      const createdDate = new Date(booking.created_at);
      return createdDate >= previousMonthStart && createdDate <= previousMonthEnd;
    }).length || 0;

    let growthPercentage = 0;
    if (previousMonthBookings > 0) {
      growthPercentage = Math.round(((currentMonthBookings - previousMonthBookings) / previousMonthBookings) * 100);
    } else if (currentMonthBookings > 0) {
      growthPercentage = 100; // 100% growth if previous month had no bookings
    }

    return { success: true, data: result, total, growthPercentage };
  } catch (error) {
    console.error('Error in getBookingStatusDistribution:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch booking status distribution',
    };
  }
}

/**
 * Get monthly transaction/revenue data
 */
export async function getMonthlyTransactionData(filter?: {
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  serviceType?: string;
}): Promise<{
  success: boolean;
  data?: { month: string; completed: number; pending: number }[];
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const now = new Date();
    const currentYear = now.getFullYear();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Build query with filters
    let query = supabase
      .from('bookings')
      .select('created_at, payment_status, total_amount, service_type');

    const dateFrom = filter?.dateFrom || `${currentYear}-01-01`;
    query = query.gte('created_at', dateFrom);
    
    if (filter) {
      if (filter.dateTo) {
        query = query.lte('created_at', filter.dateTo + 'T23:59:59');
      }
      if (filter.status) {
        query = query.eq('status', filter.status);
      }
      if (filter.serviceType) {
        query = query.eq('service_type', filter.serviceType);
      }
    }

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const monthlyData: { [key: number]: { completed: number; pending: number } } = {};
    for (let i = 0; i < 12; i++) {
      monthlyData[i] = { completed: 0, pending: 0 };
    }

    bookings?.forEach((booking) => {
      if (booking.created_at) {
        const date = new Date(booking.created_at);
        if (date.getFullYear() === currentYear) {
          const month = date.getMonth();
          const rawAmount = booking.total_amount || 0;
          // Only divide seed data (amounts >= 10000) by 100, system-created bookings are already correct
          const amount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;
          if (booking.payment_status === 'paid') {
            monthlyData[month].completed += amount;
          } else {
            monthlyData[month].pending += amount;
          }
        }
      }
    });

    const result = months.map((month, index) => ({
      month,
      completed: Math.round(monthlyData[index].completed),
      pending: Math.round(monthlyData[index].pending),
    }));

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getMonthlyTransactionData:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch monthly transaction data',
    };
  }
}

/**
 * Get top active users (customers with most bookings)
 */
export async function getTopActiveUsers(): Promise<{
  success: boolean;
  users?: Array<{
    id: string;
    name: string;
    email: string;
    role: string;
    bookingCount: number;
    avatar?: string;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    
    // Get bookings grouped by customer
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('customer_email, customer_first_name, customer_last_name');

    if (bookingsError) {
      return { success: false, error: bookingsError.message };
    }

    // Count bookings per customer
    const customerCounts: { [key: string]: { name: string; email: string; count: number } } = {};
    bookings?.forEach((booking) => {
      const email = booking.customer_email || '';
      const name = `${booking.customer_first_name || ''} ${booking.customer_last_name || ''}`.trim();
      if (email) {
        if (!customerCounts[email]) {
          customerCounts[email] = { name: name || email, email, count: 0 };
        }
        customerCounts[email].count++;
      }
    });

    // Get top 10
    const topUsers = Object.values(customerCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
      .map((user, index) => ({
        id: `customer-${index}`,
        name: user.name,
        email: user.email,
        role: 'Customer',
        bookingCount: user.count,
      }));

    return { success: true, users: topUsers };
  } catch (error) {
    console.error('Error in getTopActiveUsers:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch top active users',
    };
  }
}

/**
 * Get service popularity data
 */
export async function getServicePopularity(filter?: {
  dateFrom?: string;
  dateTo?: string;
  status?: string;
}): Promise<{
  success: boolean;
  services?: Array<{ name: string; count: number; percentage: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    
    // Build query with filters
    let query = supabase
      .from('bookings')
      .select('service_type, created_at, status');

    if (filter) {
      if (filter.dateFrom) {
        query = query.gte('created_at', filter.dateFrom);
      }
      if (filter.dateTo) {
        query = query.lte('created_at', filter.dateTo + 'T23:59:59');
      }
      if (filter.status) {
        query = query.eq('status', filter.status);
      }
    }

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const serviceCounts: { [key: string]: number } = {};
    const total = bookings?.length || 0;

    bookings?.forEach((booking) => {
      const serviceType = booking.service_type || 'Unknown';
      serviceCounts[serviceType] = (serviceCounts[serviceType] || 0) + 1;
    });

    const result = Object.entries(serviceCounts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: total > 0 ? Math.round((count / total) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count);

    return { success: true, services: result };
  } catch (error) {
    console.error('Error in getServicePopularity:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch service popularity',
    };
  }
}

/**
 * Get rating statistics
 */
export async function getRatingStats(filter?: {
  dateFrom?: string;
  dateTo?: string;
  serviceType?: string;
}): Promise<{
  success: boolean;
  stats?: {
    averageRating: number;
    totalRatings: number;
    breakdown: { [key: number]: number };
  };
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    
    // If serviceType filter is applied, we need to filter cleaners based on their bookings
    // For simplicity, we'll just get all cleaners. Service type filtering would require
    // joining with bookings which is more complex.
    let query = supabase
      .from('cleaners')
      .select('rating, created_at');

    // Apply date filter to cleaner creation date if provided
    if (filter?.dateFrom) {
      query = query.gte('created_at', filter.dateFrom);
    }
    if (filter?.dateTo) {
      query = query.lte('created_at', filter.dateTo + 'T23:59:59');
    }

    const { data: cleaners, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const ratings = cleaners?.map((c) => c.rating || 0) || [];
    const totalRatings = ratings.length;
    const averageRating = totalRatings > 0
      ? ratings.reduce((sum, r) => sum + r, 0) / totalRatings
      : 0;

    // Count by rating (1-5)
    const breakdown: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    ratings.forEach((rating) => {
      const rounded = Math.round(rating);
      if (rounded >= 1 && rounded <= 5) {
        breakdown[rounded]++;
      }
    });

    return {
      success: true,
      stats: {
        averageRating: Math.round(averageRating * 10) / 10,
        totalRatings,
        breakdown,
      },
    };
  } catch (error) {
    console.error('Error in getRatingStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch rating stats',
    };
  }
}

/**
 * Get service type distribution for subscription chart
 */
export async function getServiceTypeDistribution(filter?: {
  dateFrom?: string;
  dateTo?: string;
  status?: string;
}): Promise<{
  success: boolean;
  data?: Array<{ type: string; count: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    
    // Build query with filters
    let query = supabase
      .from('bookings')
      .select('service_type, cleaning_frequency, created_at, status');

    if (filter) {
      if (filter.dateFrom) {
        query = query.gte('created_at', filter.dateFrom);
      }
      if (filter.dateTo) {
        query = query.lte('created_at', filter.dateTo + 'T23:59:59');
      }
      if (filter.status) {
        query = query.eq('status', filter.status);
      }
    }

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    // Group by frequency type: One-Time, Weekly, Bi-Weekly, Monthly
    const frequencyCounts: { [key: string]: number } = {
      'One-Time': 0,
      'Weekly': 0,
      'Bi-Weekly': 0,
      'Monthly': 0,
    };

    bookings?.forEach((booking) => {
      const frequency = booking.cleaning_frequency || 'one-time';
      if (frequency === 'one-time') {
        frequencyCounts['One-Time']++;
      } else if (frequency === 'weekly') {
        frequencyCounts['Weekly']++;
      } else if (frequency === 'bi-weekly') {
        frequencyCounts['Bi-Weekly']++;
      } else if (frequency === 'monthly') {
        frequencyCounts['Monthly']++;
      }
    });

    const result = Object.entries(frequencyCounts)
      .map(([type, count]) => ({ type, count }));

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getServiceTypeDistribution:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch service type distribution',
    };
  }
}

/**
 * Update cleaner details
 */
export async function updateCleaner(
  cleanerId: string,
  data: CleanerUpdateInput
): Promise<{
  success: boolean;
  cleaner?: Cleaner;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Build update object with only provided fields
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.is_active !== undefined) updateData.is_active = data.is_active;
    if (data.bio !== undefined) updateData.bio = data.bio;
    if (data.areas !== undefined) updateData.areas = data.areas;
    if (data.specialties !== undefined) updateData.specialties = data.specialties;
    if (data.years_experience !== undefined) updateData.years_experience = data.years_experience;
    if (data.available_monday !== undefined) updateData.available_monday = data.available_monday;
    if (data.available_tuesday !== undefined) updateData.available_tuesday = data.available_tuesday;
    if (data.available_wednesday !== undefined) updateData.available_wednesday = data.available_wednesday;
    if (data.available_thursday !== undefined) updateData.available_thursday = data.available_thursday;
    if (data.available_friday !== undefined) updateData.available_friday = data.available_friday;
    if (data.available_saturday !== undefined) updateData.available_saturday = data.available_saturday;
    if (data.available_sunday !== undefined) updateData.available_sunday = data.available_sunday;

    const { data: cleaner, error } = await supabase
      .from('cleaners')
      .update(updateData)
      .eq('id', cleanerId)
      .select()
      .single();

    if (error) {
      console.error('Error updating cleaner:', error);
      return { success: false, error: error.message };
    }

    return { success: true, cleaner: cleaner as Cleaner };
  } catch (error) {
    console.error('Error in updateCleaner:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update cleaner',
    };
  }
}

/**
 * Reset cleaner password
 * Stores password hash in database (not Supabase Auth)
 */
export async function resetCleanerPassword(
  cleanerId: string,
  newPassword: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    // Validate password
    if (!newPassword || newPassword.trim().length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long' };
    }

    const supabase = createAdminClient();

    // Fetch cleaner to verify they exist
    const { data: cleaner, error: cleanerError } = await supabase
      .from('cleaners')
      .select('id, name')
      .eq('id', cleanerId)
      .single();

    if (cleanerError || !cleaner) {
      console.error('Error fetching cleaner:', cleanerError);
      return { success: false, error: 'Cleaner not found' };
    }

    // Hash the new password
    const { hashPassword } = await import('@/lib/utils/password');
    const passwordHash = await hashPassword(newPassword);

    // Update cleaner password_hash in database
    const { error: updateError } = await supabase
      .from('cleaners')
      .update({ password_hash: passwordHash })
      .eq('id', cleanerId);

    if (updateError) {
      console.error('Error resetting password:', updateError);
      return { success: false, error: updateError.message || 'Failed to reset password' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in resetCleanerPassword:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to reset password',
    };
  }
}

/**
 * Update customer profile
 */
export async function updateCustomer(
  customerId: string,
  data: ProfileUpdateInput
): Promise<{
  success: boolean;
  customer?: Profile;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Validate required fields
    if (!data.first_name?.trim()) {
      return { success: false, error: 'First name is required' };
    }
    if (!data.last_name?.trim()) {
      return { success: false, error: 'Last name is required' };
    }
    if (!data.email?.trim()) {
      return { success: false, error: 'Email is required' };
    }

    const { data: customer, error } = await supabase
      .from('profiles')
      .update({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone || null,
        avatar_url: data.avatar_url || null,
      })
      .eq('id', customerId)
      .select()
      .single();

    if (error) {
      console.error('Error updating customer:', error);
      return { success: false, error: error.message };
    }

    return { success: true, customer: customer as Profile };
  } catch (error) {
    console.error('Error in updateCustomer:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update customer',
    };
  }
}

/**
 * Get bookings available for assignment (exclude completed and cancelled)
 */
export async function getBookingsForAssignment(filter?: {
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
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
      .not('status', 'in', '(completed,cancelled)')
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
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching bookings for assignment:', error);
      return { success: false, error: error.message };
    }

    return { success: true, bookings: data || [] };
  } catch (error) {
    console.error('Error in getBookingsForAssignment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch bookings',
    };
  }
}

/**
 * Assign cleaners to bookings (supports multi-select)
 */
export async function assignCleanersToBookings(
  cleanerIds: string[],
  bookingIds: string[]
): Promise<{
  success: boolean;
  updated?: number;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!cleanerIds || cleanerIds.length === 0) {
      return { success: false, error: 'At least one cleaner must be selected' };
    }

    if (!bookingIds || bookingIds.length === 0) {
      return { success: false, error: 'At least one booking must be selected' };
    }

    const supabase = createAdminClient();

    // Verify cleaners exist
    const { data: cleaners, error: cleanersError } = await supabase
      .from('cleaners')
      .select('id')
      .in('id', cleanerIds);

    if (cleanersError) {
      return { success: false, error: 'Failed to verify cleaners' };
    }

    if (!cleaners || cleaners.length !== cleanerIds.length) {
      return { success: false, error: 'One or more cleaners not found' };
    }

    // Verify bookings exist
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('id, preferred_cleaner_id, preferred_cleaner_ids')
      .in('id', bookingIds);

    if (bookingsError) {
      return { success: false, error: 'Failed to verify bookings' };
    }

    if (!bookings || bookings.length !== bookingIds.length) {
      return { success: false, error: 'One or more bookings not found' };
    }

    // Update each booking
    let updatedCount = 0;
    const errors: string[] = [];

    for (const booking of bookings) {
      // Get existing cleaner IDs
      const existingIds: string[] = [];
      
      // Add from preferred_cleaner_id if exists
      if (booking.preferred_cleaner_id) {
        existingIds.push(booking.preferred_cleaner_id);
      }
      
      // Add from preferred_cleaner_ids array if exists
      if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
        booking.preferred_cleaner_ids.forEach((id: string) => {
          if (id && !existingIds.includes(id)) {
            existingIds.push(id);
          }
        });
      }

      // Merge with new cleaner IDs (avoid duplicates)
      const allCleanerIds = [...new Set([...existingIds, ...cleanerIds])];

      // Determine preferred_cleaner_id (first cleaner for backward compatibility)
      const preferredCleanerId = allCleanerIds[0] || null;

      // Update booking
      const { error: updateError } = await supabase
        .from('bookings')
        .update({
          preferred_cleaner_id: preferredCleanerId,
          preferred_cleaner_ids: allCleanerIds,
        })
        .eq('id', booking.id);

      if (updateError) {
        errors.push(`Failed to update booking ${booking.id}: ${updateError.message}`);
      } else {
        updatedCount++;
      }
    }

    if (errors.length > 0) {
      return {
        success: updatedCount > 0,
        updated: updatedCount,
        error: `Some bookings failed to update: ${errors.join('; ')}`,
      };
    }

    return { success: true, updated: updatedCount };
  } catch (error) {
    console.error('Error in assignCleanersToBookings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to assign cleaners to bookings',
    };
  }
}

/**
 * Helper function to check if service type allows multiple cleaners
 */
function allowsMultipleCleaners(serviceType: string): boolean {
  if (!serviceType) return true; // Default to allowing multiple
  
  const normalized = serviceType.toLowerCase().trim();
  
  // Deep Cleaning and Move In/Out always allow multiple
  if (normalized.includes('deep') || 
      (normalized.includes('move') && (normalized.includes('in/out') || normalized.includes('in out') || normalized.includes('inout')))) {
    return true;
  }
  
  // Standard and Airbnb allow multiple (more than 1)
  if (normalized.includes('standard') || normalized.includes('airbnb')) {
    return true;
  }
  
  // Other services also allow multiple
  return true;
}

/**
 * Update booking details
 */
export async function updateBooking(
  bookingId: string,
  updateData: {
    service_date?: string;
    service_time?: string;
    service_address?: string;
    service_apt_unit?: string | null;
    service_suburb?: string;
    service_city?: string;
    customer_first_name?: string;
    customer_last_name?: string;
    customer_email?: string;
    customer_phone?: string;
    special_instructions?: string | null;
    bedrooms?: string;
    bathrooms?: string;
    service_type?: string;
  }
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!bookingId) {
      return { success: false, error: 'Booking ID is required' };
    }

    const supabase = createAdminClient();

    // Verify booking exists
    const { data: existingBooking, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (fetchError || !existingBooking) {
      return { success: false, error: 'Booking not found' };
    }

    // Update booking
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update(updateData)
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating booking:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in updateBooking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update booking',
    };
  }
}

/**
 * Update booking status
 */
export async function updateBookingStatus(
  bookingId: string,
  status: Booking['status']
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!bookingId) {
      return { success: false, error: 'Booking ID is required' };
    }

    // Validate status
    const validStatuses: Booking['status'][] = ['pending', 'confirmed', 'on_my_way', 'started', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return { success: false, error: 'Invalid status' };
    }

    const supabase = createAdminClient();

    // Verify booking exists
    const { data: existingBooking, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (fetchError || !existingBooking) {
      return { success: false, error: 'Booking not found' };
    }

    // Update status
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating booking status:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in updateBookingStatus:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update booking status',
    };
  }
}

/**
 * Assign cleaners to a single booking
 */
export async function assignCleanersToBooking(
  bookingId: string,
  cleanerIds: string[],
  replaceExisting: boolean = false
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!bookingId) {
      return { success: false, error: 'Booking ID is required' };
    }

    if (!cleanerIds || cleanerIds.length === 0) {
      return { success: false, error: 'At least one cleaner must be selected' };
    }

    const supabase = createAdminClient();

    // Verify booking exists and get service type
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('id, service_type, preferred_cleaner_id, preferred_cleaner_ids')
      .eq('id', bookingId)
      .maybeSingle();

    if (bookingError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Validate service type allows multiple cleaners if more than 1 cleaner is being assigned
    if (cleanerIds.length > 1 && !allowsMultipleCleaners(booking.service_type)) {
      return { success: false, error: 'This service type does not support multiple cleaners' };
    }

    // Verify cleaners exist
    const { data: cleaners, error: cleanersError } = await supabase
      .from('cleaners')
      .select('id')
      .in('id', cleanerIds);

    if (cleanersError) {
      return { success: false, error: 'Failed to verify cleaners' };
    }

    if (!cleaners || cleaners.length !== cleanerIds.length) {
      return { success: false, error: 'One or more cleaners not found' };
    }

    // Determine final cleaner IDs
    let finalCleanerIds: string[];
    if (replaceExisting) {
      finalCleanerIds = cleanerIds;
    } else {
      // Get existing cleaner IDs
      const existingIds: string[] = [];
      if (booking.preferred_cleaner_id) {
        existingIds.push(booking.preferred_cleaner_id);
      }
      if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
        booking.preferred_cleaner_ids.forEach((id: string) => {
          if (id && !existingIds.includes(id)) {
            existingIds.push(id);
          }
        });
      }
      // Merge with new cleaner IDs (avoid duplicates)
      finalCleanerIds = [...new Set([...existingIds, ...cleanerIds])];
    }

    // Determine preferred_cleaner_id (first cleaner for backward compatibility)
    const preferredCleanerId = finalCleanerIds[0] || null;

    // Update booking
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({
        preferred_cleaner_id: preferredCleanerId,
        preferred_cleaner_ids: finalCleanerIds,
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error assigning cleaners to booking:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in assignCleanersToBooking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to assign cleaners to booking',
    };
  }
}

/**
 * Remove cleaner from booking
 */
export async function removeCleanerFromBooking(
  bookingId: string,
  cleanerId: string
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!bookingId || !cleanerId) {
      return { success: false, error: 'Booking ID and Cleaner ID are required' };
    }

    const supabase = createAdminClient();

    // Get booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('id, preferred_cleaner_id, preferred_cleaner_ids')
      .eq('id', bookingId)
      .maybeSingle();

    if (bookingError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Get existing cleaner IDs
    const existingIds: string[] = [];
    if (booking.preferred_cleaner_id) {
      existingIds.push(booking.preferred_cleaner_id);
    }
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      booking.preferred_cleaner_ids.forEach((id: string) => {
        if (id && !existingIds.includes(id)) {
          existingIds.push(id);
        }
      });
    }

    // Remove the cleaner ID
    const normalizedCleanerId = cleanerId.toLowerCase().trim();
    const updatedIds = existingIds.filter(id => id.toLowerCase().trim() !== normalizedCleanerId);

    if (updatedIds.length === existingIds.length) {
      return { success: false, error: 'Cleaner not found in booking assignment' };
    }

    // Determine preferred_cleaner_id (first cleaner for backward compatibility)
    const preferredCleanerId = updatedIds.length > 0 ? updatedIds[0] : null;

    // Update booking
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({
        preferred_cleaner_id: preferredCleanerId,
        preferred_cleaner_ids: updatedIds.length > 0 ? updatedIds : null,
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error removing cleaner from booking:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in removeCleanerFromBooking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to remove cleaner from booking',
    };
  }
}

/**
 * Update cleaner earnings for a booking
 */
export async function updateCleanerEarnings(
  bookingId: string,
  cleanerId: string,
  earnings: {
    baseEarnings: number;
    tipAmount: number;
    totalEarnings: number;
  } | null
): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!bookingId || !cleanerId) {
      return { success: false, error: 'Booking ID and Cleaner ID are required' };
    }

    const supabase = createAdminClient();

    // Get booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('id, cleaner_earnings_override, preferred_cleaner_id, preferred_cleaner_ids')
      .eq('id', bookingId)
      .maybeSingle();

    if (bookingError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Verify cleaner is assigned to booking
    const normalizeUuid = (id: any): string => {
      if (!id) return '';
      return String(id).toLowerCase().trim();
    };
    const normalizedCleanerId = normalizeUuid(cleanerId);

    const isAssignedSingle = booking.preferred_cleaner_id && 
      normalizeUuid(booking.preferred_cleaner_id) === normalizedCleanerId;

    let isAssignedMultiple = false;
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      isAssignedMultiple = booking.preferred_cleaner_ids.some(
        (id: string) => normalizeUuid(id) === normalizedCleanerId
      );
    }

    if (!isAssignedSingle && !isAssignedMultiple) {
      return { success: false, error: 'Cleaner is not assigned to this booking' };
    }

    // Get existing override or create new
    let override: Record<string, { baseEarnings: number; tipAmount: number; totalEarnings: number }> = {};
    if (booking.cleaner_earnings_override && typeof booking.cleaner_earnings_override === 'object') {
      override = { ...booking.cleaner_earnings_override };
    }

    // Update or remove override
    if (earnings === null) {
      // Remove override for this cleaner
      delete override[cleanerId];
      // If no overrides left, set to null
      if (Object.keys(override).length === 0) {
        override = null as any;
      }
    } else {
      // Set override for this cleaner
      override[cleanerId] = earnings;
    }

    // Update booking
    const { data: updatedBooking, error: updateError } = await supabase
      .from('bookings')
      .update({
        cleaner_earnings_override: override,
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating cleaner earnings:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, booking: updatedBooking as Booking };
  } catch (error) {
    console.error('Error in updateCleanerEarnings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update cleaner earnings',
    };
  }
}

/**
 * Get booking with cleaner details
 */
export async function getBookingWithCleaners(
  bookingId: string
): Promise<{
  success: boolean;
  booking?: Booking;
  cleaners?: Array<{
    id: string;
    name: string;
    email?: string | null;
    phone?: string | null;
  }>;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (!bookingId) {
      return { success: false, error: 'Booking ID is required' };
    }

    const supabase = createAdminClient();

    // Get booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .maybeSingle();

    if (bookingError || !booking) {
      return { success: false, error: 'Booking not found' };
    }

    // Get cleaner IDs
    const cleanerIds: string[] = [];
    if (booking.preferred_cleaner_id) {
      cleanerIds.push(booking.preferred_cleaner_id);
    }
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      booking.preferred_cleaner_ids.forEach((id: string) => {
        if (id && !cleanerIds.includes(id)) {
          cleanerIds.push(id);
        }
      });
    }

    // Get cleaner details
    let cleaners: Array<{ id: string; name: string; email?: string | null; phone?: string | null }> = [];
    if (cleanerIds.length > 0) {
      const { data: cleanersData, error: cleanersError } = await supabase
        .from('cleaners')
        .select('id, name, email, phone')
        .in('id', cleanerIds);

      if (!cleanersError && cleanersData) {
        cleaners = cleanersData;
      }
    }

    return { success: true, booking: booking as Booking, cleaners };
  } catch (error) {
    console.error('Error in getBookingWithCleaners:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch booking with cleaners',
    };
  }
}

/**
 * Get all services (including inactive), ordered by display_order
 */
export async function getAllServices(): Promise<{
  success: boolean;
  services?: Service[];
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching services:', error);
      return { success: false, error: error.message };
    }

    return { success: true, services: (data || []) as Service[] };
  } catch (error) {
    console.error('Error in getAllServices:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch services',
    };
  }
}

/**
 * Get all additional services (including inactive), ordered by display_order
 */
export async function getAllAdditionalServices(): Promise<{
  success: boolean;
  additionalServices?: AdditionalService[];
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('additional_services')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching additional services:', error);
      return { success: false, error: error.message };
    }

    return { success: true, additionalServices: (data || []) as AdditionalService[] };
  } catch (error) {
    console.error('Error in getAllAdditionalServices:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch additional services',
    };
  }
}

/**
 * Create a new main service
 */
export async function createService(data: {
  name: string;
  icon_name: string;
  display_order: number;
  is_active?: boolean;
}): Promise<{
  success: boolean;
  service?: Service;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    if (!data.name?.trim()) {
      return { success: false, error: 'Name is required' };
    }
    if (!data.icon_name?.trim()) {
      return { success: false, error: 'Icon name is required' };
    }

    const { data: service, error } = await supabase
      .from('services')
      .insert({
        name: data.name.trim(),
        icon_name: data.icon_name,
        display_order: data.display_order ?? 0,
        is_active: data.is_active ?? true,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating service:', error);
      return { success: false, error: error.message };
    }

    return { success: true, service: service as Service };
  } catch (error) {
    console.error('Error in createService:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create service',
    };
  }
}

/**
 * Update an existing main service
 */
export async function updateService(
  serviceId: string,
  data: {
    name?: string;
    icon_name?: string;
    display_order?: number;
    is_active?: boolean;
  }
): Promise<{
  success: boolean;
  service?: Service;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name.trim();
    if (data.icon_name !== undefined) updateData.icon_name = data.icon_name;
    if (data.display_order !== undefined) updateData.display_order = data.display_order;
    if (data.is_active !== undefined) updateData.is_active = data.is_active;

    const { data: service, error } = await supabase
      .from('services')
      .update(updateData)
      .eq('id', serviceId)
      .select()
      .single();

    if (error) {
      console.error('Error updating service:', error);
      return { success: false, error: error.message };
    }

    return { success: true, service: service as Service };
  } catch (error) {
    console.error('Error in updateService:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update service',
    };
  }
}

/**
 * Delete a main service
 */
export async function deleteService(serviceId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', serviceId);

    if (error) {
      console.error('Error deleting service:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteService:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete service',
    };
  }
}

/**
 * Create a new additional service
 */
export async function createAdditionalService(data: {
  name: string;
  icon_name: string;
  display_order: number;
  requires_quantity?: boolean;
  is_active?: boolean;
}): Promise<{
  success: boolean;
  additionalService?: AdditionalService;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    if (!data.name?.trim()) {
      return { success: false, error: 'Name is required' };
    }
    if (!data.icon_name?.trim()) {
      return { success: false, error: 'Icon name is required' };
    }

    const { data: additionalService, error } = await supabase
      .from('additional_services')
      .insert({
        name: data.name.trim(),
        icon_name: data.icon_name,
        display_order: data.display_order ?? 0,
        requires_quantity: data.requires_quantity ?? false,
        is_active: data.is_active ?? true,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating additional service:', error);
      return { success: false, error: error.message };
    }

    return { success: true, additionalService: additionalService as AdditionalService };
  } catch (error) {
    console.error('Error in createAdditionalService:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create additional service',
    };
  }
}

/**
 * Update an existing additional service
 */
export async function updateAdditionalService(
  additionalServiceId: string,
  data: {
    name?: string;
    icon_name?: string;
    display_order?: number;
    requires_quantity?: boolean;
    is_active?: boolean;
  }
): Promise<{
  success: boolean;
  additionalService?: AdditionalService;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name.trim();
    if (data.icon_name !== undefined) updateData.icon_name = data.icon_name;
    if (data.display_order !== undefined) updateData.display_order = data.display_order;
    if (data.requires_quantity !== undefined) updateData.requires_quantity = data.requires_quantity;
    if (data.is_active !== undefined) updateData.is_active = data.is_active;

    const { data: additionalService, error } = await supabase
      .from('additional_services')
      .update(updateData)
      .eq('id', additionalServiceId)
      .select()
      .single();

    if (error) {
      console.error('Error updating additional service:', error);
      return { success: false, error: error.message };
    }

    return { success: true, additionalService: additionalService as AdditionalService };
  } catch (error) {
    console.error('Error in updateAdditionalService:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update additional service',
    };
  }
}

/**
 * Delete an additional service
 */
export async function deleteAdditionalService(additionalServiceId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { error } = await supabase
      .from('additional_services')
      .delete()
      .eq('id', additionalServiceId);

    if (error) {
      console.error('Error deleting additional service:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteAdditionalService:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete additional service',
    };
  }
}

/**
 * Get additional services linked to a main service
 */
export async function getServiceRules(serviceId: string): Promise<{
  success: boolean;
  additionalServiceIds?: string[];
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('service_additional_service_rules')
      .select('additional_service_id')
      .eq('service_id', serviceId);

    if (error) {
      console.error('Error fetching service rules:', error);
      return { success: false, error: error.message };
    }

    const additionalServiceIds = (data || []).map((rule: any) => rule.additional_service_id);

    return { success: true, additionalServiceIds };
  } catch (error) {
    console.error('Error in getServiceRules:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch service rules',
    };
  }
}

/**
 * Update relationships between main service and additional services
 */
export async function updateServiceRules(
  serviceId: string,
  additionalServiceIds: string[]
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Delete existing rules
    const { error: deleteError } = await supabase
      .from('service_additional_service_rules')
      .delete()
      .eq('service_id', serviceId);

    if (deleteError) {
      console.error('Error deleting service rules:', deleteError);
      return { success: false, error: deleteError.message };
    }

    // Insert new rules
    if (additionalServiceIds.length > 0) {
      const rules = additionalServiceIds.map((additionalServiceId) => ({
        service_id: serviceId,
        additional_service_id: additionalServiceId,
      }));

      const { error: insertError } = await supabase
        .from('service_additional_service_rules')
        .insert(rules);

      if (insertError) {
        console.error('Error inserting service rules:', insertError);
        return { success: false, error: insertError.message };
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updateServiceRules:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update service rules',
    };
  }
}

/**
 * Get pricing rule for a service (base_price)
 */
export async function getServicePrice(serviceId: string): Promise<{
  success: boolean;
  pricingRule?: PricingRule;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('pricing_rules')
      .select('*')
      .eq('rule_type', 'base_price')
      .eq('service_id', serviceId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching service price:', error);
      return { success: false, error: error.message };
    }

    return { success: true, pricingRule: data as PricingRule | undefined };
  } catch (error) {
    console.error('Error in getServicePrice:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch service price',
    };
  }
}

/**
 * Update or create pricing rule for a service (base_price)
 */
export async function updateServicePrice(
  serviceId: string,
  price: number
): Promise<{
  success: boolean;
  pricingRule?: PricingRule;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Check if pricing rule exists
    const { data: existing, error: checkError } = await supabase
      .from('pricing_rules')
      .select('*')
      .eq('rule_type', 'base_price')
      .eq('service_id', serviceId)
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking service price:', checkError);
      return { success: false, error: checkError.message };
    }

    if (existing) {
      // Update existing pricing rule
      const { data, error } = await supabase
        .from('pricing_rules')
        .update({ price, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating service price:', error);
        return { success: false, error: error.message };
      }

      return { success: true, pricingRule: data as PricingRule };
    } else {
      // Create new pricing rule
      // Get service to determine display_order
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('display_order')
        .eq('id', serviceId)
        .single();

      if (serviceError) {
        console.error('Error fetching service:', serviceError);
        return { success: false, error: serviceError.message };
      }

      const { data, error } = await supabase
        .from('pricing_rules')
        .insert({
          rule_type: 'base_price',
          service_id: serviceId,
          price,
          is_active: true,
          display_order: service.display_order || 0,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating service price:', error);
        return { success: false, error: error.message };
      }

      return { success: true, pricingRule: data as PricingRule };
    }
  } catch (error) {
    console.error('Error in updateServicePrice:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update service price',
    };
  }
}

/**
 * Get pricing rule for an additional service
 */
export async function getAdditionalServicePrice(additionalServiceId: string): Promise<{
  success: boolean;
  pricingRule?: PricingRule;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('pricing_rules')
      .select('*')
      .eq('rule_type', 'additional_service')
      .eq('additional_service_id', additionalServiceId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching additional service price:', error);
      return { success: false, error: error.message };
    }

    return { success: true, pricingRule: data as PricingRule | undefined };
  } catch (error) {
    console.error('Error in getAdditionalServicePrice:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch additional service price',
    };
  }
}

/**
 * Update or create pricing rule for an additional service
 */
export async function updateAdditionalServicePrice(
  additionalServiceId: string,
  price: number
): Promise<{
  success: boolean;
  pricingRule?: PricingRule;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Check if pricing rule exists
    const { data: existing, error: checkError } = await supabase
      .from('pricing_rules')
      .select('*')
      .eq('rule_type', 'additional_service')
      .eq('additional_service_id', additionalServiceId)
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking additional service price:', checkError);
      return { success: false, error: checkError.message };
    }

    if (existing) {
      // Update existing pricing rule
      const { data, error } = await supabase
        .from('pricing_rules')
        .update({ price, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating additional service price:', error);
        return { success: false, error: error.message };
      }

      return { success: true, pricingRule: data as PricingRule };
    } else {
      // Create new pricing rule
      // Get additional service to determine display_order
      const { data: additionalService, error: serviceError } = await supabase
        .from('additional_services')
        .select('display_order')
        .eq('id', additionalServiceId)
        .single();

      if (serviceError) {
        console.error('Error fetching additional service:', serviceError);
        return { success: false, error: serviceError.message };
      }

      const { data, error } = await supabase
        .from('pricing_rules')
        .insert({
          rule_type: 'additional_service',
          additional_service_id: additionalServiceId,
          price,
          is_active: true,
          display_order: additionalService.display_order || 0,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating additional service price:', error);
        return { success: false, error: error.message };
      }

      return { success: true, pricingRule: data as PricingRule };
    }
  } catch (error) {
    console.error('Error in updateAdditionalServicePrice:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update additional service price',
    };
  }
}

// ==================== REVENUE ANALYTICS ====================

/**
 * Get revenue trends (daily/weekly/monthly) with growth percentages
 */
export async function getRevenueTrends(filter?: {
  dateFrom?: string;
  dateTo?: string;
  period?: 'daily' | 'weekly' | 'monthly';
}): Promise<{
  success: boolean;
  data?: Array<{ period: string; revenue: number; bookings: number; growth?: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const period = filter?.period || 'monthly';
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    let query = supabase
      .from('bookings')
      .select('created_at, total_amount, payment_status')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59')
      .eq('payment_status', 'paid');

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const revenueByPeriod: { [key: string]: { revenue: number; bookings: number } } = {};

    bookings?.forEach((booking) => {
      if (!booking.created_at) return;
      const date = new Date(booking.created_at);
      const rawAmount = booking.total_amount || 0;
      const amount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

      let periodKey: string;
      if (period === 'daily') {
        periodKey = date.toISOString().split('T')[0];
      } else if (period === 'weekly') {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        periodKey = weekStart.toISOString().split('T')[0];
      } else {
        periodKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      }

      if (!revenueByPeriod[periodKey]) {
        revenueByPeriod[periodKey] = { revenue: 0, bookings: 0 };
      }
      revenueByPeriod[periodKey].revenue += amount;
      revenueByPeriod[periodKey].bookings += 1;
    });

    const sortedPeriods = Object.keys(revenueByPeriod).sort();
    const result = sortedPeriods.map((periodKey, index) => {
      const current = revenueByPeriod[periodKey];
      const previous = index > 0 ? revenueByPeriod[sortedPeriods[index - 1]] : null;
      const growth = previous && previous.revenue > 0
        ? ((current.revenue - previous.revenue) / previous.revenue) * 100
        : undefined;

      return {
        period: periodKey,
        revenue: Math.round(current.revenue),
        bookings: current.bookings,
        growth: growth !== undefined ? Math.round(growth * 10) / 10 : undefined,
      };
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getRevenueTrends:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch revenue trends',
    };
  }
}

/**
 * Get revenue breakdown by service type
 */
export async function getRevenueByServiceType(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{ serviceType: string; revenue: number; bookings: number; percentage: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    let query = supabase
      .from('bookings')
      .select('service_type, total_amount, payment_status')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59')
      .eq('payment_status', 'paid');

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const revenueByService: { [key: string]: { revenue: number; bookings: number } } = {};
    let totalRevenue = 0;

    bookings?.forEach((booking) => {
      const serviceType = booking.service_type || 'Unknown';
      const rawAmount = booking.total_amount || 0;
      const amount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

      if (!revenueByService[serviceType]) {
        revenueByService[serviceType] = { revenue: 0, bookings: 0 };
      }
      revenueByService[serviceType].revenue += amount;
      revenueByService[serviceType].bookings += 1;
      totalRevenue += amount;
    });

    const result = Object.entries(revenueByService)
      .map(([serviceType, data]) => ({
        serviceType,
        revenue: Math.round(data.revenue),
        bookings: data.bookings,
        percentage: totalRevenue > 0 ? Math.round((data.revenue / totalRevenue) * 100 * 10) / 10 : 0,
      }))
      .sort((a, b) => b.revenue - a.revenue);

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getRevenueByServiceType:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch revenue by service type',
    };
  }
}

/**
 * Get revenue by payment status
 */
export async function getRevenueByPaymentStatus(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{ status: string; revenue: number; bookings: number; percentage: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    let query = supabase
      .from('bookings')
      .select('payment_status, total_amount')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59');

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const revenueByStatus: { [key: string]: { revenue: number; bookings: number } } = {};
    let totalRevenue = 0;

    bookings?.forEach((booking) => {
      const status = booking.payment_status || 'unknown';
      const rawAmount = booking.total_amount || 0;
      const amount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

      if (!revenueByStatus[status]) {
        revenueByStatus[status] = { revenue: 0, bookings: 0 };
      }
      revenueByStatus[status].revenue += amount;
      revenueByStatus[status].bookings += 1;
      totalRevenue += amount;
    });

    const result = Object.entries(revenueByStatus)
      .map(([status, data]) => ({
        status: status.charAt(0).toUpperCase() + status.slice(1),
        revenue: Math.round(data.revenue),
        bookings: data.bookings,
        percentage: totalRevenue > 0 ? Math.round((data.revenue / totalRevenue) * 100 * 10) / 10 : 0,
      }))
      .sort((a, b) => b.revenue - a.revenue);

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getRevenueByPaymentStatus:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch revenue by payment status',
    };
  }
}

/**
 * Get average order value (AOV) trends over time
 */
export async function getAverageOrderValue(filter?: {
  dateFrom?: string;
  dateTo?: string;
  period?: 'daily' | 'weekly' | 'monthly';
}): Promise<{
  success: boolean;
  data?: Array<{ period: string; aov: number; bookings: number; growth?: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const period = filter?.period || 'monthly';
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    let query = supabase
      .from('bookings')
      .select('created_at, total_amount, payment_status')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59')
      .eq('payment_status', 'paid');

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const aovByPeriod: { [key: string]: { total: number; count: number } } = {};

    bookings?.forEach((booking) => {
      if (!booking.created_at) return;
      const date = new Date(booking.created_at);
      const rawAmount = booking.total_amount || 0;
      const amount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

      let periodKey: string;
      if (period === 'daily') {
        periodKey = date.toISOString().split('T')[0];
      } else if (period === 'weekly') {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        periodKey = weekStart.toISOString().split('T')[0];
      } else {
        periodKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      }

      if (!aovByPeriod[periodKey]) {
        aovByPeriod[periodKey] = { total: 0, count: 0 };
      }
      aovByPeriod[periodKey].total += amount;
      aovByPeriod[periodKey].count += 1;
    });

    const sortedPeriods = Object.keys(aovByPeriod).sort();
    const result = sortedPeriods.map((periodKey, index) => {
      const current = aovByPeriod[periodKey];
      const aov = current.count > 0 ? current.total / current.count : 0;
      const previous = index > 0 ? aovByPeriod[sortedPeriods[index - 1]] : null;
      const previousAov = previous && previous.count > 0 ? previous.total / previous.count : 0;
      const growth = previousAov > 0 ? ((aov - previousAov) / previousAov) * 100 : undefined;

      return {
        period: periodKey,
        aov: Math.round(aov * 100) / 100,
        bookings: current.count,
        growth: growth !== undefined ? Math.round(growth * 10) / 10 : undefined,
      };
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getAverageOrderValue:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch average order value',
    };
  }
}

/**
 * Get revenue forecast based on trends
 */
export async function getRevenueForecast(filter?: {
  periods?: number;
  period?: 'daily' | 'weekly' | 'monthly';
}): Promise<{
  success: boolean;
  data?: Array<{ period: string; forecast: number; lowerBound: number; upperBound: number }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    // Get historical data
    const historicalResult = await getRevenueTrends({
      period: filter?.period || 'monthly',
    });

    if (!historicalResult.success || !historicalResult.data || historicalResult.data.length < 2) {
      return { success: false, error: 'Insufficient historical data for forecasting' };
    }

    const historical = historicalResult.data;
    const periods = filter?.periods || 3;

    // Simple linear regression for forecasting
    const n = historical.length;
    const sumX = (n * (n + 1)) / 2;
    const sumY = historical.reduce((sum, item) => sum + item.revenue, 0);
    const sumXY = historical.reduce((sum, item, index) => sum + (index + 1) * item.revenue, 0);
    const sumX2 = (n * (n + 1) * (2 * n + 1)) / 6;

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Calculate standard deviation for confidence intervals
    const residuals = historical.map((item, index) => {
      const predicted = intercept + slope * (index + 1);
      return item.revenue - predicted;
    });
    const variance = residuals.reduce((sum, r) => sum + r * r, 0) / (n - 2);
    const stdDev = Math.sqrt(variance);

    // Generate forecast
    const forecast: Array<{ period: string; forecast: number; lowerBound: number; upperBound: number }> = [];
    const lastPeriod = historical[historical.length - 1].period;

    for (let i = 1; i <= periods; i++) {
      const futureIndex = n + i;
      const predicted = intercept + slope * futureIndex;
      const confidenceInterval = 1.96 * stdDev; // 95% confidence

      // Generate period key (simplified - would need proper date handling in production)
      let periodKey: string;
      if (filter?.period === 'daily') {
        const lastDate = new Date(lastPeriod);
        lastDate.setDate(lastDate.getDate() + i);
        periodKey = lastDate.toISOString().split('T')[0];
      } else if (filter?.period === 'weekly') {
        const lastDate = new Date(lastPeriod);
        lastDate.setDate(lastDate.getDate() + i * 7);
        periodKey = lastDate.toISOString().split('T')[0];
      } else {
        const lastDate = new Date(lastPeriod + '-01');
        lastDate.setMonth(lastDate.getMonth() + i);
        periodKey = `${lastDate.getFullYear()}-${String(lastDate.getMonth() + 1).padStart(2, '0')}`;
      }

      forecast.push({
        period: periodKey,
        forecast: Math.max(0, Math.round(predicted)),
        lowerBound: Math.max(0, Math.round(predicted - confidenceInterval)),
        upperBound: Math.round(predicted + confidenceInterval),
      });
    }

    return { success: true, data: forecast };
  } catch (error) {
    console.error('Error in getRevenueForecast:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate revenue forecast',
    };
  }
}

// ==================== CLEANER PERFORMANCE ====================

/**
 * Get cleaner performance metrics
 */
export async function getCleanerPerformanceMetrics(filter?: {
  cleanerId?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{
    cleanerId: string;
    cleanerName: string;
    totalBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    completionRate: number;
    onTimeRate: number;
    averageRating: number;
    totalEarnings: number;
    averageEarningsPerBooking: number;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    // Get all cleaners
    let cleanersQuery = supabase.from('cleaners').select('id, name, rating');
    if (filter?.cleanerId) {
      cleanersQuery = cleanersQuery.eq('id', filter.cleanerId);
    }
    const { data: cleaners, error: cleanersError } = await cleanersQuery;

    if (cleanersError) {
      return { success: false, error: cleanersError.message };
    }

    // Get bookings with cleaner assignments
    let bookingsQuery = supabase
      .from('bookings')
      .select('id, status, preferred_cleaner_id, preferred_cleaner_ids, total_amount, payment_status, cleaner_earnings_override, service_date, service_time, expected_arrival_time, created_at')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59');

    const { data: bookings, error: bookingsError } = await bookingsQuery;

    if (bookingsError) {
      return { success: false, error: bookingsError.message };
    }

    // Process cleaner performance
    const cleanerStats: { [key: string]: {
      cleanerId: string;
      cleanerName: string;
      totalBookings: number;
      completedBookings: number;
      cancelledBookings: number;
      onTimeBookings: number;
      totalEarnings: number;
      ratings: number[];
    } } = {};

    cleaners?.forEach((cleaner) => {
      cleanerStats[cleaner.id] = {
        cleanerId: cleaner.id,
        cleanerName: cleaner.name,
        totalBookings: 0,
        completedBookings: 0,
        cancelledBookings: 0,
        onTimeBookings: 0,
        totalEarnings: 0,
        ratings: cleaner.rating ? [cleaner.rating] : [],
      };
    });

    bookings?.forEach((booking) => {
      const cleanerIds: string[] = [];
      if (booking.preferred_cleaner_id) {
        cleanerIds.push(booking.preferred_cleaner_id);
      }
      if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
        booking.preferred_cleaner_ids.forEach((id: string) => {
          if (id && !cleanerIds.includes(id)) {
            cleanerIds.push(id);
          }
        });
      }

      cleanerIds.forEach((cleanerId) => {
        if (!cleanerStats[cleanerId]) return;

        cleanerStats[cleanerId].totalBookings += 1;

        if (booking.status === 'completed') {
          cleanerStats[cleanerId].completedBookings += 1;
        } else if (booking.status === 'cancelled') {
          cleanerStats[cleanerId].cancelledBookings += 1;
        }

        // Check on-time performance
        if (booking.status === 'completed' && booking.expected_arrival_time && booking.service_time) {
          const expected = new Date(`${booking.service_date}T${booking.expected_arrival_time}`);
          const scheduled = new Date(`${booking.service_date}T${booking.service_time}`);
          if (expected <= scheduled || Math.abs(expected.getTime() - scheduled.getTime()) <= 15 * 60 * 1000) {
            cleanerStats[cleanerId].onTimeBookings += 1;
          }
        }

        // Calculate earnings
        if (booking.payment_status === 'paid') {
          const rawAmount = booking.total_amount || 0;
          const totalAmount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

          // Check for earnings override
          let earnings = 0;
          if (booking.cleaner_earnings_override && typeof booking.cleaner_earnings_override === 'object') {
            const override = booking.cleaner_earnings_override[cleanerId];
            if (override) {
              earnings = override.totalEarnings || 0;
            }
          } else {
            // Default: 70% of total amount (can be adjusted)
            earnings = totalAmount * 0.7;
          }

          cleanerStats[cleanerId].totalEarnings += earnings;
        }
      });
    });

    const result = Object.values(cleanerStats).map((stats) => {
      const completionRate = stats.totalBookings > 0
        ? (stats.completedBookings / stats.totalBookings) * 100
        : 0;
      const onTimeRate = stats.completedBookings > 0
        ? (stats.onTimeBookings / stats.completedBookings) * 100
        : 0;
      const averageRating = stats.ratings.length > 0
        ? stats.ratings.reduce((sum, r) => sum + r, 0) / stats.ratings.length
        : 0;
      const averageEarningsPerBooking = stats.completedBookings > 0
        ? stats.totalEarnings / stats.completedBookings
        : 0;

      return {
        cleanerId: stats.cleanerId,
        cleanerName: stats.cleanerName,
        totalBookings: stats.totalBookings,
        completedBookings: stats.completedBookings,
        cancelledBookings: stats.cancelledBookings,
        completionRate: Math.round(completionRate * 10) / 10,
        onTimeRate: Math.round(onTimeRate * 10) / 10,
        averageRating: Math.round(averageRating * 10) / 10,
        totalEarnings: Math.round(stats.totalEarnings * 100) / 100,
        averageEarningsPerBooking: Math.round(averageEarningsPerBooking * 100) / 100,
      };
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getCleanerPerformanceMetrics:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cleaner performance metrics',
    };
  }
}

/**
 * Get top performing cleaners by various metrics
 */
export async function getTopPerformers(filter?: {
  metric?: 'completionRate' | 'earnings' | 'bookings' | 'rating';
  limit?: number;
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{
    cleanerId: string;
    cleanerName: string;
    metric: string;
    value: number;
    rank: number;
  }>;
  error?: string;
}> {
  try {
    const performanceResult = await getCleanerPerformanceMetrics({
      dateFrom: filter?.dateFrom,
      dateTo: filter?.dateTo,
    });

    if (!performanceResult.success || !performanceResult.data) {
      return { success: false, error: 'Failed to fetch performance data' };
    }

    const metric = filter?.metric || 'earnings';
    const limit = filter?.limit || 10;

    let sorted = [...performanceResult.data];
    if (metric === 'completionRate') {
      sorted.sort((a, b) => b.completionRate - a.completionRate);
    } else if (metric === 'earnings') {
      sorted.sort((a, b) => b.totalEarnings - a.totalEarnings);
    } else if (metric === 'bookings') {
      sorted.sort((a, b) => b.totalBookings - a.totalBookings);
    } else if (metric === 'rating') {
      sorted.sort((a, b) => b.averageRating - a.averageRating);
    }

    const result = sorted.slice(0, limit).map((item, index) => {
      let value: number;
      if (metric === 'completionRate') {
        value = item.completionRate;
      } else if (metric === 'earnings') {
        value = item.totalEarnings;
      } else if (metric === 'bookings') {
        value = item.totalBookings;
      } else {
        value = item.averageRating;
      }

      return {
        cleanerId: item.cleanerId,
        cleanerName: item.cleanerName,
        metric: metric.charAt(0).toUpperCase() + metric.slice(1),
        value: Math.round(value * 100) / 100,
        rank: index + 1,
      };
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getTopPerformers:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch top performers',
    };
  }
}

/**
 * Get cleaner earnings report
 */
export async function getCleanerEarningsReport(filter?: {
  cleanerId?: string;
  dateFrom?: string;
  dateTo?: string;
  period?: 'daily' | 'weekly' | 'monthly';
}): Promise<{
  success: boolean;
  data?: Array<{
    period: string;
    cleanerId: string;
    cleanerName: string;
    earnings: number;
    bookings: number;
    averageEarnings: number;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const period = filter?.period || 'monthly';
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    // Get cleaners
    let cleanersQuery = supabase.from('cleaners').select('id, name');
    if (filter?.cleanerId) {
      cleanersQuery = cleanersQuery.eq('id', filter.cleanerId);
    }
    const { data: cleaners, error: cleanersError } = await cleanersQuery;

    if (cleanersError) {
      return { success: false, error: cleanersError.message };
    }

    // Get bookings
    let bookingsQuery = supabase
      .from('bookings')
      .select('id, created_at, preferred_cleaner_id, preferred_cleaner_ids, total_amount, payment_status, cleaner_earnings_override')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59')
      .eq('payment_status', 'paid');

    const { data: bookings, error: bookingsError } = await bookingsQuery;

    if (bookingsError) {
      return { success: false, error: bookingsError.message };
    }

    const earningsByPeriod: { [key: string]: { [cleanerId: string]: { earnings: number; bookings: number; name: string } } } = {};

    bookings?.forEach((booking) => {
      if (!booking.created_at) return;
      const date = new Date(booking.created_at);
      let periodKey: string;
      if (period === 'daily') {
        periodKey = date.toISOString().split('T')[0];
      } else if (period === 'weekly') {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        periodKey = weekStart.toISOString().split('T')[0];
      } else {
        periodKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      }

      const cleanerIds: string[] = [];
      if (booking.preferred_cleaner_id) {
        cleanerIds.push(booking.preferred_cleaner_id);
      }
      if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
        booking.preferred_cleaner_ids.forEach((id: string) => {
          if (id && !cleanerIds.includes(id)) {
            cleanerIds.push(id);
          }
        });
      }

      const rawAmount = booking.total_amount || 0;
      const totalAmount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

      cleanerIds.forEach((cleanerId) => {
        const cleaner = cleaners?.find(c => c.id === cleanerId);
        if (!cleaner) return;

        if (!earningsByPeriod[periodKey]) {
          earningsByPeriod[periodKey] = {};
        }
        if (!earningsByPeriod[periodKey][cleanerId]) {
          earningsByPeriod[periodKey][cleanerId] = {
            earnings: 0,
            bookings: 0,
            name: cleaner.name,
          };
        }

        let earnings = 0;
        if (booking.cleaner_earnings_override && typeof booking.cleaner_earnings_override === 'object') {
          const override = booking.cleaner_earnings_override[cleanerId];
          if (override) {
            earnings = override.totalEarnings || 0;
          }
        } else {
          earnings = totalAmount * 0.7; // Default 70%
        }

        earningsByPeriod[periodKey][cleanerId].earnings += earnings;
        earningsByPeriod[periodKey][cleanerId].bookings += 1;
      });
    });

    const result: Array<{
      period: string;
      cleanerId: string;
      cleanerName: string;
      earnings: number;
      bookings: number;
      averageEarnings: number;
    }> = [];

    Object.entries(earningsByPeriod).forEach(([period, cleanerData]) => {
      Object.entries(cleanerData).forEach(([cleanerId, data]) => {
        result.push({
          period,
          cleanerId,
          cleanerName: data.name,
          earnings: Math.round(data.earnings * 100) / 100,
          bookings: data.bookings,
          averageEarnings: data.bookings > 0
            ? Math.round((data.earnings / data.bookings) * 100) / 100
            : 0,
        });
      });
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getCleanerEarningsReport:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cleaner earnings report',
    };
  }
}

/**
 * Get cleaner booking statistics
 */
export async function getCleanerBookingStats(filter?: {
  cleanerId?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{
    cleanerId: string;
    cleanerName: string;
    status: string;
    count: number;
    percentage: number;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    // Get cleaners
    let cleanersQuery = supabase.from('cleaners').select('id, name');
    if (filter?.cleanerId) {
      cleanersQuery = cleanersQuery.eq('id', filter.cleanerId);
    }
    const { data: cleaners, error: cleanersError } = await cleanersQuery;

    if (cleanersError) {
      return { success: false, error: cleanersError.message };
    }

    // Get bookings
    let bookingsQuery = supabase
      .from('bookings')
      .select('status, preferred_cleaner_id, preferred_cleaner_ids, created_at')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59');

    const { data: bookings, error: bookingsError } = await bookingsQuery;

    if (bookingsError) {
      return { success: false, error: bookingsError.message };
    }

    interface CleanerStats {
      [status: string]: number | string;
      total: number;
      name: string;
    }
    const statsByCleaner: { [key: string]: CleanerStats } = {};

    cleaners?.forEach((cleaner) => {
      statsByCleaner[cleaner.id] = {
        total: 0,
        name: cleaner.name,
      };
    });

    bookings?.forEach((booking) => {
      const cleanerIds: string[] = [];
      if (booking.preferred_cleaner_id) {
        cleanerIds.push(booking.preferred_cleaner_id);
      }
      if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
        booking.preferred_cleaner_ids.forEach((id: string) => {
          if (id && !cleanerIds.includes(id)) {
            cleanerIds.push(id);
          }
        });
      }

      const status = booking.status || 'unknown';

      cleanerIds.forEach((cleanerId) => {
        if (!statsByCleaner[cleanerId]) return;
        statsByCleaner[cleanerId].total += 1;
        const currentCount = typeof statsByCleaner[cleanerId][status] === 'number' ? statsByCleaner[cleanerId][status] as number : 0;
        statsByCleaner[cleanerId][status] = currentCount + 1;
      });
    });

    const result: Array<{
      cleanerId: string;
      cleanerName: string;
      status: string;
      count: number;
      percentage: number;
    }> = [];

    Object.entries(statsByCleaner).forEach(([cleanerId, stats]) => {
      Object.entries(stats).forEach(([key, value]) => {
        if (key === 'total' || key === 'name') return;
        const count = value as number;
        const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
        result.push({
          cleanerId,
          cleanerName: stats.name,
          status: key.charAt(0).toUpperCase() + key.slice(1),
          count,
          percentage: Math.round(percentage * 10) / 10,
        });
      });
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getCleanerBookingStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cleaner booking stats',
    };
  }
}

// ==================== CUSTOMER ANALYTICS ====================

/**
 * Get customer lifetime value (CLV)
 */
export async function getCustomerLifetimeValue(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{
    customerEmail: string;
    customerName: string;
    totalRevenue: number;
    totalBookings: number;
    averageOrderValue: number;
    clv: number;
    firstBookingDate: string;
    lastBookingDate: string;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear() - 1, 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    let query = supabase
      .from('bookings')
      .select('customer_email, customer_first_name, customer_last_name, total_amount, payment_status, created_at')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59')
      .eq('payment_status', 'paid')
      .order('created_at', { ascending: true });

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const customerData: { [email: string]: {
      email: string;
      name: string;
      revenue: number;
      bookings: number;
      firstBooking: string;
      lastBooking: string;
    } } = {};

    bookings?.forEach((booking) => {
      const email = booking.customer_email || '';
      if (!email) return;

      const rawAmount = booking.total_amount || 0;
      const amount = rawAmount >= 10000 ? rawAmount / 100 : rawAmount;

      if (!customerData[email]) {
        customerData[email] = {
          email,
          name: `${booking.customer_first_name || ''} ${booking.customer_last_name || ''}`.trim() || email,
          revenue: 0,
          bookings: 0,
          firstBooking: booking.created_at || '',
          lastBooking: booking.created_at || '',
        };
      }

      customerData[email].revenue += amount;
      customerData[email].bookings += 1;

      if (booking.created_at) {
        if (!customerData[email].firstBooking || booking.created_at < customerData[email].firstBooking) {
          customerData[email].firstBooking = booking.created_at;
        }
        if (!customerData[email].lastBooking || booking.created_at > customerData[email].lastBooking) {
          customerData[email].lastBooking = booking.created_at;
        }
      }
    });

    const result = Object.values(customerData).map((customer) => {
      const aov = customer.bookings > 0 ? customer.revenue / customer.bookings : 0;
      // Simple CLV calculation: average order value * average purchase frequency * customer lifespan
      // For simplicity, using total revenue as CLV proxy
      const clv = customer.revenue;

      return {
        customerEmail: customer.email,
        customerName: customer.name,
        totalRevenue: Math.round(customer.revenue * 100) / 100,
        totalBookings: customer.bookings,
        averageOrderValue: Math.round(aov * 100) / 100,
        clv: Math.round(clv * 100) / 100,
        firstBookingDate: customer.firstBooking,
        lastBookingDate: customer.lastBooking,
      };
    }).sort((a, b) => b.clv - a.clv);

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getCustomerLifetimeValue:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch customer lifetime value',
    };
  }
}

/**
 * Get customer retention rate
 */
export async function getCustomerRetentionRate(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: {
    retentionRate: number;
    newCustomers: number;
    returningCustomers: number;
    totalCustomers: number;
    periodBreakdown: Array<{ period: string; newCustomers: number; returningCustomers: number; retentionRate: number }>;
  };
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    // Get all bookings in the period
    let query = supabase
      .from('bookings')
      .select('customer_email, created_at')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59')
      .order('created_at', { ascending: true });

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    // Get first booking date for each customer (before the period)
    const firstBookingQuery = supabase
      .from('bookings')
      .select('customer_email, created_at')
      .lt('created_at', dateFrom)
      .order('created_at', { ascending: true });

    const { data: firstBookings, error: firstError } = await firstBookingQuery;

    if (firstError) {
      return { success: false, error: firstError.message };
    }

    const firstBookingByCustomer: { [email: string]: string } = {};
    firstBookings?.forEach((booking) => {
      const email = booking.customer_email || '';
      if (email && !firstBookingByCustomer[email]) {
        firstBookingByCustomer[email] = booking.created_at || '';
      }
    });

    const customersInPeriod: { [email: string]: boolean } = {};
    const newCustomers: Set<string> = new Set();
    const returningCustomers: Set<string> = new Set();

    bookings?.forEach((booking) => {
      const email = booking.customer_email || '';
      if (!email) return;

      customersInPeriod[email] = true;

      if (firstBookingByCustomer[email]) {
        returningCustomers.add(email);
      } else {
        newCustomers.add(email);
      }
    });

    const totalCustomers = Object.keys(customersInPeriod).length;
    const newCount = newCustomers.size;
    const returningCount = returningCustomers.size;
    const retentionRate = totalCustomers > 0 ? (returningCount / totalCustomers) * 100 : 0;

    // Monthly breakdown
    const monthlyData: { [key: string]: { new: Set<string>; returning: Set<string> } } = {};
    bookings?.forEach((booking) => {
      if (!booking.created_at) return;
      const date = new Date(booking.created_at);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = { new: new Set(), returning: new Set() };
      }

      const email = booking.customer_email || '';
      if (!email) return;

      if (firstBookingByCustomer[email] && new Date(firstBookingByCustomer[email]) < new Date(booking.created_at)) {
        monthlyData[monthKey].returning.add(email);
      } else if (!firstBookingByCustomer[email]) {
        monthlyData[monthKey].new.add(email);
      }
    });

    const periodBreakdown = Object.entries(monthlyData)
      .sort()
      .map(([period, data]) => {
        const total = data.new.size + data.returning.size;
        const retention = total > 0 ? (data.returning.size / total) * 100 : 0;
        return {
          period,
          newCustomers: data.new.size,
          returningCustomers: data.returning.size,
          retentionRate: Math.round(retention * 10) / 10,
        };
      });

    return {
      success: true,
      data: {
        retentionRate: Math.round(retentionRate * 10) / 10,
        newCustomers: newCount,
        returningCustomers: returningCount,
        totalCustomers,
        periodBreakdown,
      },
    };
  } catch (error) {
    console.error('Error in getCustomerRetentionRate:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch customer retention rate',
    };
  }
}

/**
 * Get customer segmentation
 */
export async function getCustomerSegmentation(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{
    segment: string;
    customerCount: number;
    totalRevenue: number;
    averageRevenue: number;
    percentage: number;
  }>;
  error?: string;
}> {
  try {
    const clvResult = await getCustomerLifetimeValue({
      dateFrom: filter?.dateFrom,
      dateTo: filter?.dateTo,
    });

    if (!clvResult.success || !clvResult.data) {
      return { success: false, error: 'Failed to fetch customer data' };
    }

    const customers = clvResult.data;
    const totalRevenue = customers.reduce((sum, c) => sum + c.totalRevenue, 0);
    const averageRevenue = customers.length > 0 ? totalRevenue / customers.length : 0;

    // Segment customers: High Value (>2x avg), Medium Value (0.5x-2x avg), Low Value (<0.5x avg)
    const segments = {
      'High Value': { customers: 0, revenue: 0 },
      'Medium Value': { customers: 0, revenue: 0 },
      'Low Value': { customers: 0, revenue: 0 },
    };

    customers.forEach((customer) => {
      if (customer.totalRevenue >= averageRevenue * 2) {
        segments['High Value'].customers += 1;
        segments['High Value'].revenue += customer.totalRevenue;
      } else if (customer.totalRevenue >= averageRevenue * 0.5) {
        segments['Medium Value'].customers += 1;
        segments['Medium Value'].revenue += customer.totalRevenue;
      } else {
        segments['Low Value'].customers += 1;
        segments['Low Value'].revenue += customer.totalRevenue;
      }
    });

    const result = Object.entries(segments).map(([segment, data]) => ({
      segment,
      customerCount: data.customers,
      totalRevenue: Math.round(data.revenue * 100) / 100,
      averageRevenue: data.customers > 0 ? Math.round((data.revenue / data.customers) * 100) / 100 : 0,
      percentage: customers.length > 0 ? Math.round((data.customers / customers.length) * 100 * 10) / 10 : 0,
    }));

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getCustomerSegmentation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch customer segmentation',
    };
  }
}

/**
 * Get repeat customer rate
 */
export async function getRepeatCustomerRate(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: {
    repeatCustomerRate: number;
    totalCustomers: number;
    repeatCustomers: number;
    oneTimeCustomers: number;
  };
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const dateFrom = filter?.dateFrom || new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || new Date().toISOString().split('T')[0];

    let query = supabase
      .from('bookings')
      .select('customer_email')
      .gte('created_at', dateFrom)
      .lte('created_at', dateTo + 'T23:59:59');

    const { data: bookings, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const customerBookingCounts: { [email: string]: number } = {};

    bookings?.forEach((booking) => {
      const email = booking.customer_email || '';
      if (email) {
        customerBookingCounts[email] = (customerBookingCounts[email] || 0) + 1;
      }
    });

    const totalCustomers = Object.keys(customerBookingCounts).length;
    const repeatCustomers = Object.values(customerBookingCounts).filter(count => count > 1).length;
    const oneTimeCustomers = totalCustomers - repeatCustomers;
    const repeatCustomerRate = totalCustomers > 0 ? (repeatCustomers / totalCustomers) * 100 : 0;

    return {
      success: true,
      data: {
        repeatCustomerRate: Math.round(repeatCustomerRate * 10) / 10,
        totalCustomers,
        repeatCustomers,
        oneTimeCustomers,
      },
    };
  } catch (error) {
    console.error('Error in getRepeatCustomerRate:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch repeat customer rate',
    };
  }
}

/**
 * Get customer acquisition cost (simplified - would need marketing spend data)
 */
export async function getCustomerAcquisitionCost(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: {
    newCustomers: number;
    estimatedCAC: number;
    note: string;
  };
  error?: string;
}> {
  try {
    const retentionResult = await getCustomerRetentionRate({
      dateFrom: filter?.dateFrom,
      dateTo: filter?.dateTo,
    });

    if (!retentionResult.success || !retentionResult.data) {
      return { success: false, error: 'Failed to fetch customer data' };
    }

    const newCustomers = retentionResult.data.newCustomers;

    // Note: This is a placeholder. Real CAC would require marketing spend data
    // For now, we'll return a note explaining this
    return {
      success: true,
      data: {
        newCustomers,
        estimatedCAC: 0,
        note: 'CAC calculation requires marketing spend data. Please integrate marketing cost tracking to calculate accurate CAC.',
      },
    };
  } catch (error) {
    console.error('Error in getCustomerAcquisitionCost:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch customer acquisition cost',
    };
  }
}

// ==================== COMPARATIVE ANALYTICS ====================

/**
 * Compare current period with previous period
 */
export async function getPeriodComparison(filter?: {
  period?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  currentDateFrom?: string;
  currentDateTo?: string;
}): Promise<{
  success: boolean;
  data?: {
    metric: string;
    current: number;
    previous: number;
    change: number;
    changePercentage: number;
  }[];
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();
    const period = filter?.period || 'monthly';

    let currentDateFrom: string;
    let currentDateTo: string;
    let previousDateFrom: string;
    let previousDateTo: string;

    const now = new Date();
    if (period === 'daily') {
      currentDateTo = now.toISOString().split('T')[0];
      currentDateFrom = currentDateTo;
      const prevDate = new Date(now);
      prevDate.setDate(prevDate.getDate() - 1);
      previousDateTo = prevDate.toISOString().split('T')[0];
      previousDateFrom = previousDateTo;
    } else if (period === 'weekly') {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - now.getDay());
      currentDateTo = now.toISOString().split('T')[0];
      currentDateFrom = weekStart.toISOString().split('T')[0];
      const prevWeekStart = new Date(weekStart);
      prevWeekStart.setDate(prevWeekStart.getDate() - 7);
      const prevWeekEnd = new Date(weekStart);
      prevWeekEnd.setDate(prevWeekEnd.getDate() - 1);
      previousDateTo = prevWeekEnd.toISOString().split('T')[0];
      previousDateFrom = prevWeekStart.toISOString().split('T')[0];
    } else if (period === 'monthly') {
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      currentDateTo = now.toISOString().split('T')[0];
      currentDateFrom = monthStart.toISOString().split('T')[0];
      const prevMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const prevMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
      previousDateTo = prevMonthEnd.toISOString().split('T')[0];
      previousDateFrom = prevMonthStart.toISOString().split('T')[0];
    } else {
      const yearStart = new Date(now.getFullYear(), 0, 1);
      currentDateTo = now.toISOString().split('T')[0];
      currentDateFrom = yearStart.toISOString().split('T')[0];
      const prevYearStart = new Date(now.getFullYear() - 1, 0, 1);
      const prevYearEnd = new Date(now.getFullYear() - 1, 11, 31);
      previousDateTo = prevYearEnd.toISOString().split('T')[0];
      previousDateFrom = prevYearStart.toISOString().split('T')[0];
    }

    // Override with provided dates if available
    if (filter?.currentDateFrom) currentDateFrom = filter.currentDateFrom;
    if (filter?.currentDateTo) currentDateTo = filter.currentDateTo;

    // Get current period stats
    const currentStatsResult = await getAdminStats({
      dateFrom: currentDateFrom,
      dateTo: currentDateTo,
    });

    // Get previous period stats
    const previousStatsResult = await getAdminStats({
      dateFrom: previousDateFrom,
      dateTo: previousDateTo,
    });

    if (!currentStatsResult.success || !previousStatsResult.success) {
      return { success: false, error: 'Failed to fetch comparison data' };
    }

    const current = currentStatsResult.stats || {};
    const previous = previousStatsResult.stats || {};

    const metrics = [
      { key: 'totalRevenue', label: 'Total Revenue' },
      { key: 'totalBookings', label: 'Total Bookings' },
      { key: 'totalCustomers', label: 'Total Customers' },
      { key: 'activeBookings', label: 'Active Bookings' },
    ];

    const result = metrics.map(({ key, label }) => {
      const currentValue = current[key] || 0;
      const previousValue = previous[key] || 0;
      const change = currentValue - previousValue;
      const changePercentage = previousValue > 0 ? (change / previousValue) * 100 : (currentValue > 0 ? 100 : 0);

      return {
        metric: label,
        current: Math.round(currentValue * 100) / 100,
        previous: Math.round(previousValue * 100) / 100,
        change: Math.round(change * 100) / 100,
        changePercentage: Math.round(changePercentage * 10) / 10,
      };
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getPeriodComparison:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch period comparison',
    };
  }
}

/**
 * Get year-over-year growth
 */
export async function getYearOverYearGrowth(filter?: {
  year?: number;
}): Promise<{
  success: boolean;
  data?: Array<{
    month: string;
    currentYear: number;
    previousYear: number;
    growth: number;
    growthPercentage: number;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const now = new Date();
    const currentYear = filter?.year || now.getFullYear();
    const previousYear = currentYear - 1;

    // Get current year monthly data
    const currentYearData = await getRevenueTrends({
      dateFrom: `${currentYear}-01-01`,
      dateTo: `${currentYear}-12-31`,
      period: 'monthly',
    });

    // Get previous year monthly data
    const previousYearData = await getRevenueTrends({
      dateFrom: `${previousYear}-01-01`,
      dateTo: `${previousYear}-12-31`,
      period: 'monthly',
    });

    if (!currentYearData.success || !previousYearData.success) {
      return { success: false, error: 'Failed to fetch year-over-year data' };
    }

    const current = currentYearData.data || [];
    const previous = previousYearData.data || [];

    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const result = months.map((month, index) => {
      const currentPeriod = `${currentYear}-${month}`;
      const previousPeriod = `${previousYear}-${month}`;

      const currentData = current.find(d => d.period === currentPeriod);
      const previousData = previous.find(d => d.period === previousPeriod);

      const currentRevenue = currentData?.revenue || 0;
      const previousRevenue = previousData?.revenue || 0;
      const growth = currentRevenue - previousRevenue;
      const growthPercentage = previousRevenue > 0 ? (growth / previousRevenue) * 100 : (currentRevenue > 0 ? 100 : 0);

      return {
        month: monthNames[index],
        currentYear: Math.round(currentRevenue),
        previousYear: Math.round(previousRevenue),
        growth: Math.round(growth),
        growthPercentage: Math.round(growthPercentage * 10) / 10,
      };
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getYearOverYearGrowth:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch year-over-year growth',
    };
  }
}

/**
 * Get service type performance comparison
 */
export async function getServiceTypeComparison(filter?: {
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  success: boolean;
  data?: Array<{
    serviceType: string;
    revenue: number;
    bookings: number;
    averageRevenue: number;
    growth: number;
    growthPercentage: number;
  }>;
  error?: string;
}> {
  try {
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const now = new Date();
    const dateFrom = filter?.dateFrom || new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
    const dateTo = filter?.dateTo || now.toISOString().split('T')[0];

    // Calculate previous period
    const currentStart = new Date(dateFrom);
    const currentEnd = new Date(dateTo);
    const periodDays = Math.ceil((currentEnd.getTime() - currentStart.getTime()) / (1000 * 60 * 60 * 24));
    const previousStart = new Date(currentStart);
    previousStart.setDate(previousStart.getDate() - periodDays - 1);
    const previousEnd = new Date(currentStart);
    previousEnd.setDate(previousEnd.getDate() - 1);

    // Get current period service revenue
    const currentResult = await getRevenueByServiceType({
      dateFrom: dateFrom,
      dateTo: dateTo,
    });

    // Get previous period service revenue
    const previousResult = await getRevenueByServiceType({
      dateFrom: previousStart.toISOString().split('T')[0],
      dateTo: previousEnd.toISOString().split('T')[0],
    });

    if (!currentResult.success || !previousResult.success) {
      return { success: false, error: 'Failed to fetch service type comparison' };
    }

    const current = currentResult.data || [];
    const previous = previousResult.data || [];

    const result = current.map((currentItem) => {
      const previousItem = previous.find(p => p.serviceType === currentItem.serviceType);
      const previousRevenue = previousItem?.revenue || 0;
      const growth = currentItem.revenue - previousRevenue;
      const growthPercentage = previousRevenue > 0 ? (growth / previousRevenue) * 100 : (currentItem.revenue > 0 ? 100 : 0);

      return {
        serviceType: currentItem.serviceType,
        revenue: currentItem.revenue,
        bookings: currentItem.bookings,
        averageRevenue: currentItem.bookings > 0 ? Math.round((currentItem.revenue / currentItem.bookings) * 100) / 100 : 0,
        growth: Math.round(growth),
        growthPercentage: Math.round(growthPercentage * 10) / 10,
      };
    }).sort((a, b) => b.revenue - a.revenue);

    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getServiceTypeComparison:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch service type comparison',
    };
  }
}

/**
 * Get all customers with their credit balances
 */
export async function getAllCustomersWithCredits(): Promise<{
  success: boolean;
  customers?: (Profile & { credit_balance: number })[];
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
      .select('*, credit_balance')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching customers with credits:', error);
      return { success: false, error: error.message };
    }

    const customers = (data || []).map((customer) => ({
      ...customer,
      credit_balance: customer.credit_balance || 0,
    })) as (Profile & { credit_balance: number })[];

    return { success: true, customers };
  } catch (error) {
    console.error('Error in getAllCustomersWithCredits:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch customers with credits',
    };
  }
}

/**
 * Get credit transactions for a customer
 */
export async function getCustomerCreditTransactions(
  customerId: string,
  limit: number = 50,
  offset: number = 0
): Promise<{
  success: boolean;
  transactions?: any[];
  total?: number;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    const supabase = createAdminClient();

    // Get customer email first
    const { data: customer, error: customerError } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', customerId)
      .single();

    if (customerError || !customer) {
      return { success: false, error: 'Customer not found' };
    }

    // Get transactions
    const { data: transactions, error: transactionsError } = await supabase
      .from('credit_transactions')
      .select('*')
      .eq('profile_id', customerId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (transactionsError) {
      console.error('Error fetching credit transactions:', transactionsError);
      return { success: false, error: transactionsError.message };
    }

    // Get total count
    const { count, error: countError } = await supabase
      .from('credit_transactions')
      .select('*', { count: 'exact', head: true })
      .eq('profile_id', customerId);

    if (countError) {
      console.error('Error counting transactions:', countError);
    }

    return {
      success: true,
      transactions: transactions || [],
      total: count || 0,
    };
  } catch (error) {
    console.error('Error in getCustomerCreditTransactions:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch credit transactions',
    };
  }
}

/**
 * Allocate credits to a customer (add credits)
 */
export async function allocateCreditsToCustomer(
  customerId: string,
  amount: number,
  description?: string
): Promise<{
  success: boolean;
  transactionId?: string;
  newBalance?: number;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (amount <= 0) {
      return { success: false, error: 'Amount must be greater than 0' };
    }

    const supabase = createAdminClient();

    // Get customer email
    const { data: customer, error: customerError } = await supabase
      .from('profiles')
      .select('email, credit_balance')
      .eq('id', customerId)
      .single();

    if (customerError || !customer) {
      return { success: false, error: 'Customer not found' };
    }

    // Use the add_credits RPC function
    const { data: transactionId, error: rpcError } = await supabase.rpc('add_credits', {
      p_email: customer.email,
      p_amount: amount,
      p_transaction_type: 'admin_allocation',
      p_description: description || `Admin credit allocation: R${amount.toFixed(2)}`,
      p_metadata: {
        admin_id: adminResult.admin?.id,
        admin_email: adminResult.admin?.email,
        customer_id: customerId,
      },
    });

    if (rpcError) {
      console.error('Error allocating credits:', rpcError);
      return { success: false, error: rpcError.message };
    }

    // Get updated balance
    const { data: updatedCustomer, error: balanceError } = await supabase
      .from('profiles')
      .select('credit_balance')
      .eq('id', customerId)
      .single();

    if (balanceError) {
      console.error('Error fetching updated balance:', balanceError);
    }

    return {
      success: true,
      transactionId: transactionId?.toString(),
      newBalance: updatedCustomer?.credit_balance || customer.credit_balance + amount,
    };
  } catch (error) {
    console.error('Error in allocateCreditsToCustomer:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to allocate credits',
    };
  }
}

/**
 * Set customer credits to an absolute value
 */
export async function setCustomerCredits(
  customerId: string,
  targetBalance: number,
  description?: string
): Promise<{
  success: boolean;
  transactionId?: string;
  newBalance?: number;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (targetBalance < 0) {
      return { success: false, error: 'Balance cannot be negative' };
    }

    const supabase = createAdminClient();

    // Get current balance
    const { data: customer, error: customerError } = await supabase
      .from('profiles')
      .select('email, credit_balance')
      .eq('id', customerId)
      .single();

    if (customerError || !customer) {
      return { success: false, error: 'Customer not found' };
    }

    const currentBalance = customer.credit_balance || 0;
    const difference = targetBalance - currentBalance;

    // If balance is already at target, return success
    if (Math.abs(difference) < 0.01) {
      return {
        success: true,
        newBalance: targetBalance,
      };
    }

    // Use the add_credits RPC function with the difference
    const { data: transactionId, error: rpcError } = await supabase.rpc('add_credits', {
      p_email: customer.email,
      p_amount: difference,
      p_transaction_type: 'admin_adjustment',
      p_description: description || `Admin credit adjustment: Set to R${targetBalance.toFixed(2)}`,
      p_metadata: {
        admin_id: adminResult.admin?.id,
        admin_email: adminResult.admin?.email,
        customer_id: customerId,
        adjustment_type: 'absolute',
        target_balance: targetBalance,
        previous_balance: currentBalance,
      },
    });

    if (rpcError) {
      console.error('Error setting credits:', rpcError);
      return { success: false, error: rpcError.message };
    }

    return {
      success: true,
      transactionId: transactionId?.toString(),
      newBalance: targetBalance,
    };
  } catch (error) {
    console.error('Error in setCustomerCredits:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to set credits',
    };
  }
}

/**
 * Adjust customer credits (add or subtract)
 */
export async function adjustCustomerCredits(
  customerId: string,
  adjustmentAmount: number,
  description?: string
): Promise<{
  success: boolean;
  transactionId?: string;
  newBalance?: number;
  error?: string;
}> {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return { success: false, error: 'Not authenticated as admin' };
    }

    if (adjustmentAmount === 0) {
      return { success: false, error: 'Adjustment amount cannot be zero' };
    }

    const supabase = createAdminClient();

    // Get customer email and current balance
    const { data: customer, error: customerError } = await supabase
      .from('profiles')
      .select('email, credit_balance')
      .eq('id', customerId)
      .single();

    if (customerError || !customer) {
      return { success: false, error: 'Customer not found' };
    }

    const currentBalance = customer.credit_balance || 0;
    const newBalance = currentBalance + adjustmentAmount;

    if (newBalance < 0) {
      return {
        success: false,
        error: `Insufficient credits. Current balance: R${currentBalance.toFixed(2)}, adjustment: R${adjustmentAmount.toFixed(2)}`,
      };
    }

    // Use the add_credits RPC function
    const { data: transactionId, error: rpcError } = await supabase.rpc('add_credits', {
      p_email: customer.email,
      p_amount: adjustmentAmount,
      p_transaction_type: 'admin_adjustment',
      p_description: description || `Admin credit adjustment: ${adjustmentAmount >= 0 ? '+' : ''}R${adjustmentAmount.toFixed(2)}`,
      p_metadata: {
        admin_id: adminResult.admin?.id,
        admin_email: adminResult.admin?.email,
        customer_id: customerId,
        adjustment_type: 'relative',
        adjustment_amount: adjustmentAmount,
        previous_balance: currentBalance,
      },
    });

    if (rpcError) {
      console.error('Error adjusting credits:', rpcError);
      return { success: false, error: rpcError.message };
    }

    // Get updated balance to confirm
    const { data: updatedCustomer, error: balanceError } = await supabase
      .from('profiles')
      .select('credit_balance')
      .eq('id', customerId)
      .single();

    if (balanceError) {
      console.error('Error fetching updated balance:', balanceError);
    }

    return {
      success: true,
      transactionId: transactionId?.toString(),
      newBalance: updatedCustomer?.credit_balance || newBalance,
    };
  } catch (error) {
    console.error('Error in adjustCustomerCredits:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to adjust credits',
    };
  }
}
