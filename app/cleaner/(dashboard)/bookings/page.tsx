'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CleanerBookingCard } from '../../components/CleanerBookingCard';
import { getCleanerBookings, getCurrentCleaner, calculateBookingsEarnings } from '../../actions';
import { Booking } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CleanerBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'today' | 'upcoming' | 'past' | 'on_my_way' | 'started'>('today');
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [bookingsEarnings, setBookingsEarnings] = useState<Record<string, { baseEarnings: number; tipAmount: number; totalEarnings: number }>>({});

  // Get current cleaner
  useQuery({
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

  const loadBookings = async () => {
    try {
      setLoading(true);
      const result = await getCleanerBookings(filter);
      if (result.success && result.bookings) {
        setBookings(result.bookings);
        
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

  // Ensure filter is always a visible option
  useEffect(() => {
    if (filter === 'all' || filter === 'on_my_way' || filter === 'started') {
      setFilter('today');
    }
  }, [filter]);

  // Load bookings when cleaner is available or filter changes
  useEffect(() => {
    if (cleaner?.id) {
      loadBookings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleaner?.id, filter]);

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Bookings</h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-1">
          View and manage all your assigned bookings
        </p>
      </div>

      {/* Filters */}
      {cleaner && (
        <Tabs value={filter} onValueChange={(value) => setFilter(value as typeof filter)} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      {/* Bookings List */}
      {!cleaner ? (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
        </div>
      ) : bookings.length === 0 ? (
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
            <CardTitle className="text-lg sm:text-xl">No Bookings Found</CardTitle>
            <CardDescription className="text-sm mt-1">
              {`You don't have any ${filter.replace('_', ' ')} bookings.`}
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-3 sm:gap-4">
          {bookings.map((booking) => (
            <CleanerBookingCard 
              key={booking.id} 
              booking={booking} 
              earnings={bookingsEarnings[booking.id]?.totalEarnings}
            />
          ))}
        </div>
      )}
    </div>
  );
}
