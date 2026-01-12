'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Bell, Check, CheckCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  type Notification,
} from '../../app/notifications/actions';
import { createClient } from '@/lib/supabase/client';
import { formatDistanceToNow } from 'date-fns';

interface NotificationBellProps {
  userType: 'admin' | 'customer' | 'cleaner';
}

const getNotificationIcon = (type: string) => {
  // Return appropriate icon based on notification type
  return '🔔';
};

const getNotificationRoute = (notification: Notification, userType: string): string | null => {
  const { type, data } = notification;

  if (type.includes('booking') && data.booking_id) {
    if (userType === 'admin') {
      return `/admin/bookings/${data.booking_id}`;
    } else if (userType === 'customer') {
      return `/dashboard/bookings/${data.booking_id}`;
    } else if (userType === 'cleaner') {
      return `/cleaner/bookings/${data.booking_id}`;
    }
  }

  if (type === 'payment_received') {
    if (userType === 'admin') {
      return '/admin/payments';
    } else if (data.booking_id) {
      return `/dashboard/bookings/${data.booking_id}`;
    }
  }

  if (type === 'new_user_registered' && userType === 'admin' && data.user_id) {
    return `/admin/users/${data.user_id}`;
  }

  return null;
};

export function NotificationBell({ userType }: NotificationBellProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fetch notifications
  const { data: notifications, isLoading, error: notificationsError } = useQuery({
    queryKey: ['notifications', userType],
    queryFn: async () => {
      const result = await getNotifications(userType);
      if (!result.success) {
        console.error('Error fetching notifications:', result.error);
        return [];
      }
      return result.notifications || [];
    },
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000,
    retry: 1,
  });

  // Fetch unread count
  const { data: unreadCount, error: unreadCountError } = useQuery({
    queryKey: ['notifications-unread', userType],
    queryFn: async () => {
      const result = await getUnreadCount(userType);
      if (!result.success) {
        console.error('Error fetching unread count:', result.error);
        return 0;
      }
      return result.count || 0;
    },
    refetchInterval: 30000,
    staleTime: 10000,
    retry: 1,
  });

  // Set mounted state on client side only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set up real-time subscription
  useEffect(() => {
    if (!mounted) return;
    
    const supabase = createClient();
    
    const channel = supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notifications',
          filter: `user_type=eq.${userType}`,
        },
        (payload) => {
          // Invalidate queries to refetch
          queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
          queryClient.invalidateQueries({ queryKey: ['notifications-unread', userType] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userType, queryClient, mounted]);

  const handleNotificationClick = async (notification: Notification) => {
    // Mark as read
    if (!notification.read) {
      await markAsRead(notification.id, userType);
      queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
      queryClient.invalidateQueries({ queryKey: ['notifications-unread', userType] });
    }

    // Navigate to related page
    const route = getNotificationRoute(notification, userType);
    if (route) {
      setOpen(false);
      router.push(route);
    }
  };

  const handleMarkAllAsRead = async () => {
    await markAllAsRead(userType);
    queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
    queryClient.invalidateQueries({ queryKey: ['notifications-unread', userType] });
  };

  const unreadNotifications = notifications?.filter((n) => !n.read) || [];
  const readNotifications = notifications?.filter((n) => n.read) || [];

  // Prevent hydration mismatch by only rendering Popover on client
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative" disabled>
        <Bell className="h-5 w-5" />
        {unreadCount && unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
            {unreadCount > 99 ? '99+' : unreadCount}
          </Badge>
        )}
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount && unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[380px] p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-sm">Notifications</h3>
          {unreadCount && unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMarkAllAsRead}
              className="h-7 px-2 text-xs"
            >
              <CheckCheck className="h-3 w-3 mr-1" />
              Mark all as read
            </Button>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : notifications && notifications.length > 0 ? (
            <div className="divide-y">
              {/* Unread notifications */}
              {unreadNotifications.length > 0 && (
                <>
                  {unreadNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        'p-4 cursor-pointer hover:bg-muted/50 transition-colors',
                        !notification.read && 'bg-muted/30'
                      )}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{notification.title}</p>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {formatDistanceToNow(new Date(notification.created_at), {
                              addSuffix: true,
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {readNotifications.length > 0 && (
                    <div className="px-4 py-2 bg-muted/30">
                      <p className="text-xs font-medium text-muted-foreground">Older</p>
                    </div>
                  )}
                </>
              )}

              {/* Read notifications */}
              {readNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatDistanceToNow(new Date(notification.created_at), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <Bell className="h-12 w-12 text-muted-foreground/50 mb-3" />
              <p className="text-sm text-muted-foreground text-center">
                No notifications yet
              </p>
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
