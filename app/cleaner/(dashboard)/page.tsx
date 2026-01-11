'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCurrentCleaner, getCleanerBookings, getCleanerStats, calculateBookingsEarnings } from '../actions';
import { Booking } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import { Loader2, Calendar, CheckCircle2, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format, startOfWeek, endOfWeek, isWithinInterval, isToday } from 'date-fns';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BookingStatusButton } from '../components/BookingStatusButton';

export default function CleanerDashboardPage() {
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<any>(null);
  const [bookingsEarnings, setBookingsEarnings] = useState<Record<string, { baseEarnings: number; tipAmount: number; totalEarnings: number }>>({});

  // Get current cleaner
  const { data: cleanerData } = useQuery({
    queryKey: ['current-cleaner'],
    queryFn: async () => {
      const result = await getCurrentCleaner();
      if (result.success && result.cleaner) {
        setCleaner(result.cleaner);
        return result.cleaner;
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });

  // Get cleaner stats
  useQuery({
    queryKey: ['cleaner-stats'],
    queryFn: async () => {
      const result = await getCleanerStats();
      if (result.success && result.stats) {
        setStats(result.stats);
        return result.stats;
      }
      return null;
    },
    enabled: !!cleaner,
    staleTime: 2 * 60 * 1000,
  });

  // Load bookings for display (use 'all' to get all bookings, then filter client-side)
  const loadBookings = async () => {
    try {
      setLoading(true);
      // Fetch all bookings to properly calculate today/week counts
      const result = await getCleanerBookings('all');
      if (result.success && result.bookings) {
        setBookings(result.bookings || []);
        
        // Calculate earnings for all bookings
        const bookingIds = (result.bookings || []).map(b => b.id);
        if (bookingIds.length > 0) {
          const earningsResult = await calculateBookingsEarnings(bookingIds);
          if (earningsResult.success && earningsResult.earnings) {
            setBookingsEarnings(earningsResult.earnings);
          }
        }
      } else if (result.error) {
        console.error('Error loading bookings:', result.error);
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cleaner) {
      loadBookings();
    }
  }, [cleaner]);

  // Handle booking status update
  const handleStatusUpdate = (bookingId: string) => (updatedBooking: Booking) => {
    setBookings(prevBookings => 
      prevBookings.map(booking => 
        booking.id === bookingId ? updatedBooking : booking
      )
    );
    // Optionally refresh stats to reflect the update
    if (cleaner) {
      getCleanerStats().then((result) => {
        if (result.success && result.stats) {
          setStats(result.stats);
        }
      });
    }
  };

  // Filter bookings for display
  // Use string comparison to match server-side stats calculation (avoids timezone issues)
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const todayBookings = bookings.filter(booking => 
    booking.service_date === today
  );
  
  const todayDate = new Date();
  const weekStart = startOfWeek(todayDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(todayDate, { weekStartsOn: 1 });
  const weekBookings = bookings.filter(booking => {
    const bookingDate = new Date(booking.service_date);
    return isWithinInterval(bookingDate, { start: weekStart, end: weekEnd });
  });

  const upcomingBookings = bookings.filter(booking => {
    // Compare dates as strings (YYYY-MM-DD) to match server-side logic
    return booking.service_date >= today && ['pending', 'confirmed', 'on_my_way', 'started'].includes(booking.status);
  });

  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-full overflow-x-hidden">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome back, {cleaner?.name || 'Cleaner'}!
        </h1>
        <p className="text-muted-foreground">
          Here's your overview for today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4 w-full overflow-x-hidden">
        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <Calendar className="h-6 w-6 sm:h-5 sm:w-5 md:h-4 md:w-4 text-muted-foreground mb-2 sm:mb-1 flex-shrink-0" />
            <CardTitle className="text-xs sm:text-sm md:text-base font-medium leading-tight mb-2 sm:mb-1">Today</CardTitle>
            <div className="text-base sm:text-xl md:text-2xl font-bold">{stats?.todayBookings ?? todayBookings.length}</div>
            <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
              {stats?.todayBookings ? `${todayBookings.filter(b => b.status === 'completed').length} completed` : '0 completed'}
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <Clock className="h-6 w-6 sm:h-5 sm:w-5 md:h-4 md:w-4 text-muted-foreground mb-2 sm:mb-1 flex-shrink-0" />
            <CardTitle className="text-xs sm:text-sm md:text-base font-medium leading-tight mb-2 sm:mb-1">Upcoming</CardTitle>
            <div className="text-base sm:text-xl md:text-2xl font-bold">{weekBookings.length}</div>
            <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
              Upcoming bookings
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <CheckCircle2 className="h-6 w-6 sm:h-5 sm:w-5 md:h-4 md:w-4 text-muted-foreground mb-2 sm:mb-1 flex-shrink-0" />
            <CardTitle className="text-xs sm:text-sm md:text-base font-medium leading-tight mb-2 sm:mb-1">Completed</CardTitle>
            <div className="text-base sm:text-xl md:text-2xl font-bold">{stats?.completedBookings || 0}</div>
            <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
              Total bookings
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <DollarSign className="h-6 w-6 sm:h-5 sm:w-5 md:h-4 md:w-4 text-muted-foreground mb-2 sm:mb-1 flex-shrink-0" />
            <CardTitle className="text-xs sm:text-sm md:text-base font-medium leading-tight mb-2 sm:mb-1">Earnings</CardTitle>
            <div className="text-base sm:text-xl md:text-2xl font-bold">R{stats?.monthlyEarnings?.toFixed(2) || '0.00'}</div>
            <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
              {stats?.totalEarnings ? `R${stats.totalEarnings.toFixed(2)} total` : 'No earnings yet'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Bookings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">Today's Bookings</h2>
          <Button variant="outline" asChild>
            <Link href="/cleaner/bookings">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : todayBookings.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-center">
                No bookings scheduled for today
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {todayBookings.map((booking) => {
              const bookingDate = new Date(booking.service_date);
              const displayDate = isToday(bookingDate) ? 'Today' : format(bookingDate, 'MMM d, yyyy');
              
              return (
                <Card key={booking.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg">{booking.service_type}</CardTitle>
                        <CardDescription className="mt-1">
                          #{booking.booking_number}
                        </CardDescription>
                        <div className="mt-1 flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {displayDate}
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                        booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                        booking.status === 'on_my_way' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        booking.status === 'started' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' :
                        booking.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                      }`}>
                        {booking.status.replace('_', ' ')}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      {booking.service_time} ({booking.service_duration}h)
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{booking.customer_first_name} {booking.customer_last_name}</p>
                      <p className="text-muted-foreground">{booking.service_address}, {booking.service_suburb}</p>
                    </div>
                    
                    {/* Booking Action Buttons */}
                    <div className="pt-2">
                      <BookingStatusButton
                        booking={booking}
                        onStatusUpdate={handleStatusUpdate(booking.id)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <span className="text-xs text-muted-foreground">Your Earnings</span>
                        <span className="text-lg font-semibold block">R{bookingsEarnings[booking.id]?.totalEarnings.toFixed(2) || '0.00'}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/cleaner/bookings/${booking.id}`}>
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Upcoming Bookings (Next 7 days) */}
      {upcomingBookings.length > todayBookings.length && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold">Upcoming This Week</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/cleaner/bookings">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingBookings
              .filter(b => b.service_date !== today) // Exclude today's bookings (already shown above)
              .slice(0, 6)
              .map((booking) => (
                <Card key={booking.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{booking.service_type}</CardTitle>
                        <CardDescription className="mt-1">
                          {format(new Date(booking.service_date), 'MMM d, yyyy')} at {booking.service_time}
                        </CardDescription>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        booking.status === 'on_my_way' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'started' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status.replace('_', ' ')}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <p className="font-medium">{booking.customer_first_name} {booking.customer_last_name}</p>
                      <p className="text-muted-foreground mt-1">{booking.service_suburb}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                      <Link href={`/cleaner/bookings/${booking.id}`}>
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
