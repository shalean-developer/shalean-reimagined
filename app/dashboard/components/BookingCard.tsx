'use client';

import { Booking } from '@/types/booking';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  const paymentColors = {
    pending: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
    paid: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    refunded: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
  };

  return (
    <Card className="hover:shadow-md transition-shadow border-border w-full max-w-full overflow-hidden">
      <CardHeader className="pb-2 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl truncate">{booking.service_type}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">#{booking.booking_number}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-shrink-0">
              <Badge className={`${statusColors[booking.status]} text-xs sm:text-sm px-2 sm:px-3 py-0.5`}>
                {booking.status}
              </Badge>
              {booking.payment_status !== booking.status && (
                <Badge variant="outline" className={`${paymentColors[booking.payment_status]} text-xs sm:text-sm px-2 sm:px-3 py-0.5`}>
                  {booking.payment_status}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6 pt-0">
        <div className="space-y-2.5 sm:space-y-3">
          {/* Date & Time */}
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3 text-sm sm:text-base">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <span className="whitespace-nowrap">{format(new Date(booking.service_date), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <span className="whitespace-nowrap">{booking.service_time}</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-1.5 sm:gap-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground break-words leading-relaxed">
              {booking.service_address}, {booking.service_suburb}
            </span>
          </div>

          {/* Price */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-border">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground">Total Amount</p>
              <p className="text-base sm:text-lg md:text-xl font-semibold mt-0.5 break-words">R{booking.total_amount.toFixed(2)}</p>
            </div>
            <Button asChild variant="outline" size="sm" className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10 flex-shrink-0 sm:ml-2">
              <Link href={`/dashboard/bookings/${booking.id}`} className="flex items-center justify-center">
                View Details
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

