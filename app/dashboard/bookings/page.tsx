'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BookingCard } from '../components/BookingCard';
import { BookingFilters } from '../components/BookingFilters';
import { getCustomerBookings } from '../actions';
import { Booking } from '@/types/booking';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BookingsPage() {
  const searchParams = useSearchParams();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Get email/phone from URL params or localStorage
  useEffect(() => {
    const urlEmail = searchParams.get('email');
    const urlPhone = searchParams.get('phone');
    const storedEmail = localStorage.getItem('dashboard_email');
    const storedPhone = localStorage.getItem('dashboard_phone');

    const customerEmail = urlEmail || storedEmail || '';
    const customerPhone = urlPhone || storedPhone || '';

    if (customerEmail || customerPhone) {
      setEmail(customerEmail);
      setPhone(customerPhone);
      loadBookings(customerEmail, customerPhone || undefined);
    }
  }, [searchParams]);

  useEffect(() => {
    if (email || phone) {
      loadBookings(email, phone || undefined);
    }
  }, [filter, email, phone]);

  const loadBookings = async (customerEmail: string, customerPhone?: string) => {
    if (!customerEmail && !customerPhone) return;
    
    try {
      setLoading(true);
      const result = await getCustomerBookings(customerEmail, customerPhone, filter);
      if (result.success && result.bookings) {
        setBookings(result.bookings);
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') {
      return booking.status === 'pending' || booking.status === 'confirmed';
    }
    return booking.status === filter;
  });

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Bookings</h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-1">
          View and manage all your bookings
        </p>
      </div>

      {/* Filters */}
      {bookings.length > 0 && (
        <BookingFilters filter={filter} onFilterChange={setFilter} />
      )}

      {/* Bookings List */}
      {loading ? (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
        </div>
      ) : filteredBookings.length === 0 ? (
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
            <CardTitle className="text-lg sm:text-xl">No Bookings Found</CardTitle>
            <CardDescription className="text-sm mt-1">
              {filter === 'all'
                ? "You haven't made any bookings yet."
                : `You don't have any ${filter} bookings.`}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            <Button asChild className="w-full sm:w-auto">
              <a href="/booking/details">Book Your First Service</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-3 sm:gap-4">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
}

