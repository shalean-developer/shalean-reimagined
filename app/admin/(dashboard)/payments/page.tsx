'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllBookings } from '../../actions';
import { Booking } from '@/types/booking';
import { Loader2, CreditCard, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { format } from 'date-fns';

type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export default function PaymentsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | PaymentStatus>('all');
  const [search, setSearch] = useState('');

  // Get all bookings (payments are essentially bookings with payment info)
  useQuery({
    queryKey: ['admin-all-payments', filter],
    queryFn: async () => {
      const result = await getAllBookings();
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
    const matchesSearch =
      booking.booking_number.toLowerCase().includes(searchLower) ||
      booking.customer_email.toLowerCase().includes(searchLower) ||
      booking.customer_first_name.toLowerCase().includes(searchLower) ||
      booking.customer_last_name.toLowerCase().includes(searchLower) ||
      booking.customer_phone.toLowerCase().includes(searchLower) ||
      booking.paystack_reference?.toLowerCase().includes(searchLower) ||
      booking.paystack_transaction_id?.toLowerCase().includes(searchLower) ||
      false;

    const matchesFilter = filter === 'all' || booking.payment_status === filter;

    return matchesSearch && matchesFilter;
  });

  // Calculate statistics - only divide seed data (amounts >= 10000) by 100
  // System-created bookings are already in the correct format
  const getDisplayAmount = (amount: number) => amount >= 10000 ? amount / 100 : amount;
  
  const totalAmount = bookings.reduce((sum, b) => sum + getDisplayAmount(b.total_amount || 0), 0);
  const paidAmount = bookings
    .filter((b) => b.payment_status === 'paid')
    .reduce((sum, b) => sum + getDisplayAmount(b.total_amount || 0), 0);
  const pendingAmount = bookings
    .filter((b) => b.payment_status === 'pending')
    .reduce((sum, b) => sum + getDisplayAmount(b.total_amount || 0), 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const paymentStatusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    paid: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    refunded: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
  };

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Payments Management</h1>
        <p className="text-muted-foreground">
          View and manage all payment transactions
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R{totalAmount.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">All transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R{paidAmount.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {bookings.filter((b) => b.payment_status === 'paid').length} transactions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">R{pendingAmount.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {bookings.filter((b) => b.payment_status === 'pending').length} transactions
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Payments</CardTitle>
          <CardDescription>
            Manage payment transactions across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 space-y-4">
            <div>
              <Input
                placeholder="Search by booking number, customer name, email, phone, or transaction ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
              <TabsList>
                <TabsTrigger value="all">
                  All ({bookings.length})
                </TabsTrigger>
                <TabsTrigger value="pending">
                  Pending ({bookings.filter((b) => b.payment_status === 'pending').length})
                </TabsTrigger>
                <TabsTrigger value="paid">
                  Paid ({bookings.filter((b) => b.payment_status === 'paid').length})
                </TabsTrigger>
                <TabsTrigger value="failed">
                  Failed ({bookings.filter((b) => b.payment_status === 'failed').length})
                </TabsTrigger>
                <TabsTrigger value="refunded">
                  Refunded ({bookings.filter((b) => b.payment_status === 'refunded').length})
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
                    <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Payment Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Transaction ID</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="h-24 text-center text-muted-foreground">
                        No payments found
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
                        <td className="p-4">
                          <div className="font-medium">R{getDisplayAmount(booking.total_amount || 0).toFixed(2)}</div>
                          {booking.amount_paid > 0 && (
                            <div className="text-sm text-muted-foreground">
                              Paid: R{getDisplayAmount(booking.amount_paid || 0).toFixed(2)}
                            </div>
                          )}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              paymentStatusColors[booking.payment_status as keyof typeof paymentStatusColors] ||
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {booking.payment_status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="font-mono text-xs">
                            {booking.paystack_transaction_id || booking.paystack_reference || '-'}
                          </div>
                        </td>
                        <td className="p-4">
                          {format(new Date(booking.created_at), 'MMM d, yyyy')}
                          <div className="text-sm text-muted-foreground">
                            {format(new Date(booking.created_at), 'h:mm a')}
                          </div>
                        </td>
                        <td className="p-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/bookings/${booking.id}`}>View Booking</Link>
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
