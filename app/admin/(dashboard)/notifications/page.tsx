'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Bell, Loader2, Check, CheckCheck, Trash2, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  type Notification,
} from '../../../notifications/actions';
import { createClient } from '@/lib/supabase/client';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';

const getNotificationRoute = (notification: Notification, userType: 'admin' | 'customer' | 'cleaner'): string | null => {
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

export default function AdminNotificationsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  const userType: 'admin' | 'customer' | 'cleaner' = 'admin';

  // Fetch notifications
  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications', userType],
    queryFn: async () => {
      const result = await getNotifications(userType, 100);
      if (!result.success) {
        console.error('Error fetching notifications:', result.error);
        toast.error('Failed to load notifications');
        return [];
      }
      return result.notifications || [];
    },
    refetchInterval: 30000,
    staleTime: 10000,
    retry: 1,
  });

  // Set up real-time subscription
  useEffect(() => {
    setMounted(true);
  }, []);

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
        () => {
          queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userType, queryClient, mounted]);

  // Filter and search notifications
  const filteredNotifications = (notifications || []).filter((notification) => {
    // Apply filter
    if (filter === 'unread' && notification.read) return false;
    if (filter === 'read' && !notification.read) return false;

    // Apply search
    if (search) {
      const searchLower = search.toLowerCase();
      return (
        notification.title.toLowerCase().includes(searchLower) ||
        notification.message.toLowerCase().includes(searchLower) ||
        notification.type.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });

  const unreadNotifications = filteredNotifications.filter((n) => !n.read);
  const readNotifications = filteredNotifications.filter((n) => n.read);

  const handleNotificationClick = async (notification: Notification) => {
    // Mark as read
    if (!notification.read) {
      const result = await markAsRead(notification.id, userType);
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
      }
    }

    // Navigate to related page
    const route = getNotificationRoute(notification, userType);
    if (route) {
      router.push(route);
    }
  };

  const handleMarkAsRead = async (notificationId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const result = await markAsRead(notificationId, userType);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
      toast.success('Notification marked as read');
    } else {
      toast.error('Failed to mark notification as read');
    }
  };

  const handleDelete = async (notificationId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this notification?')) {
      const result = await deleteNotification(notificationId, userType);
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
        toast.success('Notification deleted');
      } else {
        toast.error('Failed to delete notification');
      }
    }
  };

  const handleMarkAllAsRead = async () => {
    const result = await markAllAsRead(userType);
    if (result.success) {
      queryClient.invalidateQueries({ queryKey: ['notifications', userType] });
      toast.success('All notifications marked as read');
    } else {
      toast.error('Failed to mark all notifications as read');
    }
  };

  const allCount = (notifications || []).length;
  const unreadCount = (notifications || []).filter((n) => !n.read).length;
  const readCount = (notifications || []).filter((n) => n.read).length;

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Notifications</h1>
        <p className="text-muted-foreground">
          View and manage all your notifications
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>
                Manage your notifications and stay updated
              </CardDescription>
            </div>
            {unreadCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleMarkAllAsRead}
                className="flex items-center gap-2"
              >
                <CheckCheck className="h-4 w-4" />
                Mark all as read
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notifications by title, message, or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 max-w-sm"
              />
            </div>
            <Tabs value={filter} onValueChange={(value) => setFilter(value as typeof filter)}>
              <TabsList>
                <TabsTrigger value="all">All ({allCount})</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                <TabsTrigger value="read">Read ({readCount})</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <Bell className="h-12 w-12 text-muted-foreground/50 mb-3" />
              <p className="text-sm text-muted-foreground text-center">
                {search
                  ? 'No notifications match your search'
                  : filter === 'unread'
                  ? 'No unread notifications'
                  : filter === 'read'
                  ? 'No read notifications'
                  : 'No notifications yet'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Unread notifications */}
              {unreadNotifications.length > 0 && (
                <div className="space-y-2">
                  {unreadNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        'p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors',
                        'bg-muted/30 border-primary/20'
                      )}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-medium">{notification.title}</p>
                                <Badge variant="secondary" className="text-xs">
                                  {notification.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">
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
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => handleMarkAsRead(notification.id, e)}
                            className="h-8 w-8 p-0"
                            title="Mark as read"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => handleDelete(notification.id, e)}
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Separator */}
              {unreadNotifications.length > 0 && readNotifications.length > 0 && (
                <div className="py-2">
                  <div className="border-t" />
                  <p className="text-xs font-medium text-muted-foreground mt-2 px-2">
                    Read Notifications
                  </p>
                </div>
              )}

              {/* Read notifications */}
              {readNotifications.length > 0 && (
                <div className="space-y-2">
                  {readNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <Check className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                  {notification.title}
                                </p>
                                <Badge variant="outline" className="text-xs">
                                  {notification.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">
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
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => handleDelete(notification.id, e)}
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
