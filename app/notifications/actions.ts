'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/server-admin';

/**
 * Check if user is an admin (same logic as admin actions)
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

export interface Notification {
  id: string;
  user_id?: string | null;
  user_email?: string | null;
  user_type: 'admin' | 'customer' | 'cleaner';
  type: string;
  title: string;
  message: string;
  data: Record<string, any>;
  read: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateNotificationParams {
  user_id?: string;
  user_email?: string;
  user_type: 'admin' | 'customer' | 'cleaner';
  type: string;
  title: string;
  message: string;
  data?: Record<string, any>;
}

/**
 * Create a new notification
 */
export async function createNotification(params: CreateNotificationParams): Promise<{
  success: boolean;
  notification?: Notification;
  error?: string;
}> {
  try {
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('notifications')
      .insert({
        user_id: params.user_id || null,
        user_email: params.user_email || null,
        user_type: params.user_type,
        type: params.type,
        title: params.title,
        message: params.message,
        data: params.data || {},
        read: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating notification:', error);
      return { success: false, error: error.message };
    }

    return { success: true, notification: data as Notification };
  } catch (error) {
    console.error('Error in createNotification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create notification',
    };
  }
}

/**
 * Get notifications for current user
 */
export async function getNotifications(
  userType: 'admin' | 'customer' | 'cleaner',
  limit: number = 50
): Promise<{
  success: boolean;
  notifications?: Notification[];
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // For admin, use admin client to bypass RLS if needed
    const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata)
      ? createAdminClient()
      : supabase;

    // Build query based on user type
    let query = querySupabase
      .from('notifications')
      .select('*')
      .eq('user_type', userType)
      .order('created_at', { ascending: false })
      .limit(limit);

    // For customers and cleaners, match by user_id or email
    if (userType === 'customer' || userType === 'cleaner') {
      query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
    } else if (userType === 'admin') {
      // For admin, match by email (or all admin notifications if email pattern matches)
      if (isAdminUser(user.email, user.user_metadata)) {
        // Admin can see all admin notifications or their specific ones
        query = query.or(`user_email.eq.${user.email},user_email.is.null`);
      } else {
        query = query.eq('user_email', user.email);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching notifications:', error);
      return { success: false, error: error.message };
    }

    return { success: true, notifications: (data || []) as Notification[] };
  } catch (error) {
    console.error('Error in getNotifications:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch notifications',
    };
  }
}

/**
 * Get unread notification count for current user
 */
export async function getUnreadCount(
  userType: 'admin' | 'customer' | 'cleaner'
): Promise<{
  success: boolean;
  count?: number;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // For admin, use admin client to bypass RLS if needed
    const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata)
      ? createAdminClient()
      : supabase;

    // Build query based on user type
    let query = querySupabase
      .from('notifications')
      .select('id', { count: 'exact', head: true })
      .eq('user_type', userType)
      .eq('read', false);

    // For customers and cleaners, match by user_id or email
    if (userType === 'customer' || userType === 'cleaner') {
      query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
    } else if (userType === 'admin') {
      // For admin, match by email (or all admin notifications if email pattern matches)
      if (isAdminUser(user.email, user.user_metadata)) {
        query = query.or(`user_email.eq.${user.email},user_email.is.null`);
      } else {
        query = query.eq('user_email', user.email);
      }
    }

    const { count, error } = await query;

    if (error) {
      console.error('Error fetching unread count:', error);
      return { success: false, error: error.message };
    }

    return { success: true, count: count || 0 };
  } catch (error) {
    console.error('Error in getUnreadCount:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch unread count',
    };
  }
}

/**
 * Mark notification(s) as read
 */
export async function markAsRead(
  notificationIds: string | string[],
  userType: 'admin' | 'customer' | 'cleaner'
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const ids = Array.isArray(notificationIds) ? notificationIds : [notificationIds];

    // For admin, use admin client to bypass RLS if needed
    const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata)
      ? createAdminClient()
      : supabase;

    // Build query to ensure user can only mark their own notifications as read
    let query = querySupabase
      .from('notifications')
      .update({ read: true, updated_at: new Date().toISOString() })
      .eq('user_type', userType)
      .in('id', ids);

    // Add user matching condition
    if (userType === 'customer' || userType === 'cleaner') {
      query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
    } else if (userType === 'admin') {
      if (isAdminUser(user.email, user.user_metadata)) {
        query = query.or(`user_email.eq.${user.email},user_email.is.null`);
      } else {
        query = query.eq('user_email', user.email);
      }
    }

    const { error } = await query;

    if (error) {
      console.error('Error marking notifications as read:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in markAsRead:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to mark as read',
    };
  }
}

/**
 * Mark all notifications as read for current user
 */
export async function markAllAsRead(
  userType: 'admin' | 'customer' | 'cleaner'
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // For admin, use admin client to bypass RLS if needed
    const querySupabase = userType === 'admin' && isAdminUser(user.email, user.user_metadata)
      ? createAdminClient()
      : supabase;

    // Build query to mark all unread notifications as read
    let query = querySupabase
      .from('notifications')
      .update({ read: true, updated_at: new Date().toISOString() })
      .eq('user_type', userType)
      .eq('read', false);

    // Add user matching condition
    if (userType === 'customer' || userType === 'cleaner') {
      query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
    } else if (userType === 'admin') {
      if (isAdminUser(user.email, user.user_metadata)) {
        query = query.or(`user_email.eq.${user.email},user_email.is.null`);
      } else {
        query = query.eq('user_email', user.email);
      }
    }

    const { error } = await query;

    if (error) {
      console.error('Error marking all notifications as read:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in markAllAsRead:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to mark all as read',
    };
  }
}

/**
 * Delete a notification
 */
export async function deleteNotification(
  notificationId: string,
  userType: 'admin' | 'customer' | 'cleaner'
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Build query to ensure user can only delete their own notifications
    let query = supabase
      .from('notifications')
      .delete()
      .eq('id', notificationId)
      .eq('user_type', userType);

    // Add user matching condition
    if (userType === 'customer' || userType === 'cleaner') {
      query = query.or(`user_id.eq.${user.id},user_email.eq.${user.email}`);
    } else if (userType === 'admin') {
      query = query.eq('user_email', user.email);
    }

    const { error } = await query;

    if (error) {
      console.error('Error deleting notification:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteNotification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete notification',
    };
  }
}
