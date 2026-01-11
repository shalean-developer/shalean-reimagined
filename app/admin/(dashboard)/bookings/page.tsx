'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllBookings } from '../../actions';
import { Booking } from '@/types/booking';
import { Loader2, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { format } from 'date-fns';

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>('all');
  const [search, setSearch] = useState('');

  // Get all bookings
  useQuery({
    queryKey: ['admin-all-bookings', filter],
    queryFn: async () => {
      const result = await getAllBookings({
        status: filter === 'all' ? undefined : filter,
      });
      if (result.success && result.bookings) {
        setBookings(result.bookings);
        setLoading(false);
        return result.bookings;
      }
      setLoading(false);
      return [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const filteredBookings = bookings.filter((booking) => {
    const searchLower = search.toLowerCase();
    return (
      booking.booking_number.toLowerCase().includes(searchLower) ||
      booking.customer_email.toLowerCase().includes(searchLower) ||
      booking.customer_first_name.toLowerCase().includes(searchLower) ||
      booking.customer_last_name.toLowerCase().includes(searchLower) ||
      booking.customer_phone.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    on_my_way: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    started: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Bookings Management</h1>
        <p className="text-muted-foreground">
          View and manage all bookings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
          <CardDescription>
            Manage bookings across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 space-y-4">
            <div>
              <Input
                placeholder="Search bookings by number, customer name, email, or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
              <TabsList>
                <TabsTrigger value="all">All ({bookings.length})</TabsTrigger>
                <TabsTrigger value="pending">
                  Pending ({bookings.filter((b) => b.status === 'pending').length})
                </TabsTrigger>
                <TabsTrigger value="confirmed">
                  Confirmed ({bookings.filter((b) => b.status === 'confirmed').length})
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed ({bookings.filter((b) => b.status === 'completed').length})
                </TabsTrigger>
                <TabsTrigger value="cancelled">
                  Cancelled ({bookings.filter((b) => b.status === 'cancelled').length})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium">Booking #</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Customer</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Service</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="h-24 text-center text-muted-foreground">
                        No bookings found
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((booking) => (
                      <tr key={booking.id} className="border-b">
                        <td className="p-4 font-mono text-sm">#{booking.booking_number}</td>
                        <td className="p-4">
                          <div>
                            <div className="font-medium">
                              {booking.customer_first_name} {booking.customer_last_name}
                            </div>
                            <div className="text-sm text-muted-foreground">{booking.customer_email}</div>
                          </div>
                        </td>
                        <td className="p-4">{booking.service_type}</td>
                        <td className="p-4">
                          {format(new Date(booking.service_date), 'MMM d, yyyy')}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              statusColors[booking.status as keyof typeof statusColors] ||
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="p-4 font-medium">R{booking.total_amount.toFixed(2)}</td>
                        <td className="p-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/bookings/${booking.id}`}>View</Link>
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
