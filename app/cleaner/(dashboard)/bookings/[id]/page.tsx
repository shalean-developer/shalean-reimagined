'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Loader2, Calendar, Clock, MapPin, Mail, Phone, User, ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCurrentCleaner, getCleanerBookingById, calculateBookingEarnings } from '../../../actions';
import { getAdditionalServices } from '../../../../booking/quote/actions';
import { Booking } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import { AdditionalService } from '@/types/quote';
import { format } from 'date-fns';
import { BookingStatusButton } from '../../../components/BookingStatusButton';
import { LatenessReportModal } from '../../../components/LatenessReportModal';

export default function CleanerBookingDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const bookingId = params.id as string;

  const [booking, setBooking] = useState<Booking | null>(null);
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [latenessModalOpen, setLatenessModalOpen] = useState(false);
  const [earnings, setEarnings] = useState<{
    baseEarnings: number;
    tipAmount: number;
    totalEarnings: number;
    earningsPercentage: number;
  } | null>(null);

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

  // Fetch all additional services to map IDs to names
  const { data: additionalServices = [] } = useQuery({
    queryKey: ['additional-services'],
    queryFn: () => getAdditionalServices(),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (bookingId) {
      Promise.all([
        getCleanerBookingById(bookingId),
        calculateBookingEarnings(bookingId)
      ]).then(([bookingResult, earningsResult]) => {
        if (bookingResult.success && bookingResult.booking) {
          setBooking(bookingResult.booking);
          setError(null);
        } else {
          setError(bookingResult.error || 'Booking not found or unauthorized');
        }
        
        if (earningsResult.success && earningsResult.earnings) {
          setEarnings(earningsResult.earnings);
        }
        
        setLoading(false);
      });
    }
  }, [bookingId]);

  const handleStatusUpdate = (updatedBooking: Booking) => {
    setBooking(updatedBooking);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 sm:py-12">
        <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !booking) {
    const isUnauthorized = error?.toLowerCase().includes('unauthorized');
    return (
      <div className="flex items-center justify-center py-8 sm:py-12 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {isUnauthorized ? 'Access Denied' : 'Booking Not Found'}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            {error || 'The booking you are looking for does not exist or you are not authorized to view it.'}
          </p>
          <Button onClick={() => router.push('/cleaner/bookings')} className="w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Back to Bookings
          </Button>
        </div>
      </div>
    );
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    on_my_way: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    started: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  const paymentColors = {
    pending: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
    paid: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    refunded: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
  };

  const statusLabel = booking.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const canReportLateness = ['confirmed', 'on_my_way'].includes(booking.status);

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <Button
            variant="ghost"
            onClick={() => router.push('/cleaner/bookings')}
            className="mb-2 sm:mb-4 h-8 sm:h-10 text-xs sm:text-sm px-2 sm:px-4"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Back to Bookings
          </Button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Booking Details</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">#{booking.booking_number}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <Badge className={`${statusColors[booking.status as keyof typeof statusColors] || statusColors.pending} text-sm sm:text-base px-2 sm:px-3 py-0.5`}>
            {statusLabel}
          </Badge>
          <Badge variant="outline" className={`${paymentColors[booking.payment_status] || paymentColors.pending} text-sm sm:text-base px-2 sm:px-3 py-0.5`}>
            {booking.payment_status}
          </Badge>
        </div>
      </div>

      {/* Lateness Alert */}
      {booking.expected_arrival_time && (
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="flex items-start gap-3 pt-6">
            <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-1">Lateness Reported</h3>
              <p className="text-sm text-orange-700 dark:text-orange-400">
                Expected arrival: {format(new Date(booking.expected_arrival_time), 'MMM d, yyyy h:mm a')}
              </p>
              {booking.lateness_reason && (
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">{booking.lateness_reason}</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Status Update Actions */}
      {cleaner && (
        <Card>
          <CardHeader>
            <CardTitle>Booking Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <BookingStatusButton
              booking={booking}
              onStatusUpdate={handleStatusUpdate}
            />
            {canReportLateness && (
              <Button
                variant="outline"
                onClick={() => setLatenessModalOpen(true)}
                className="w-full sm:w-auto"
              >
                Report Lateness
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Booking Details */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 w-full max-w-full">
        {/* Service Information */}
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Service Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Service Type</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{booking.service_type}</p>
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Property Details</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {booking.bedrooms} Bedrooms, {booking.bathrooms} Bathrooms
              </p>
            </div>
            {booking.additional_services && booking.additional_services.length > 0 && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Additional Services</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
                  {booking.additional_services.map((serviceId, index) => {
                    const service = additionalServices.find((s: AdditionalService) => s.id === serviceId);
                    return (
                      <li key={index}>{service?.name || serviceId}</li>
                    );
                  })}
                </ul>
              </div>
            )}
            {booking.special_instructions && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Special Instructions</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">{booking.special_instructions}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Schedule & Customer */}
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Schedule & Customer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            <div className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Date & Time</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {format(new Date(booking.service_date), 'EEEE, MMMM d, yyyy')}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {booking.service_time} ({booking.service_duration} hours)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Location</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {booking.service_address}
                  {booking.service_apt_unit && `, ${booking.service_apt_unit}`}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {booking.service_suburb}, {booking.service_city}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <User className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Customer</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {booking.customer_first_name} {booking.customer_last_name}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Contact</h3>
                <a href={`tel:${booking.customer_phone}`} className="text-sm sm:text-base text-primary hover:underline block">
                  {booking.customer_phone}
                </a>
                <a href={`mailto:${booking.customer_email}`} className="text-sm sm:text-base text-primary hover:underline block">
                  {booking.customer_email}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Earnings */}
        <Card className="w-full max-w-full overflow-hidden md:col-span-2">
          <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Your Earnings</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            {earnings ? (
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Earnings</span>
                  <span>R{earnings.baseEarnings.toFixed(2)}</span>
                </div>
                {earnings.tipAmount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Tip</span>
                    <span>R{earnings.tipAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t pt-2 mt-2 font-semibold text-base sm:text-lg">
                  <span>Total Earnings</span>
                  <span>R{earnings.totalEarnings.toFixed(2)}</span>
                </div>
                {booking.payment_status === 'paid' ? (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Payment confirmed - Earnings available
                  </p>
                ) : (
                  <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                    Projected earnings - Payment pending
                  </p>
                )}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">
                Calculating earnings...
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Lateness Report Modal */}
      {cleaner && (
        <LatenessReportModal
          open={latenessModalOpen}
          onOpenChange={setLatenessModalOpen}
          bookingId={booking.id}
          onSuccess={() => {
            // Refresh booking data and earnings
            Promise.all([
              getCleanerBookingById(bookingId),
              calculateBookingEarnings(bookingId)
            ]).then(([bookingResult, earningsResult]) => {
              if (bookingResult.success && bookingResult.booking) {
                setBooking(bookingResult.booking);
              } else {
                setError(bookingResult.error || 'Failed to refresh booking');
              }
              
              if (earningsResult.success && earningsResult.earnings) {
                setEarnings(earningsResult.earnings);
              }
            });
          }}
        />
      )}
    </div>
  );
}
