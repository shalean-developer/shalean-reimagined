'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Loader2, Calendar, Clock, MapPin, Mail, Phone, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getBookingById } from '../../actions';
import { getAdditionalServices } from '../../../booking/quote/actions';
import { Booking } from '@/types/booking';
import { AdditionalService } from '@/types/quote';
import { format } from 'date-fns';

export default function BookingDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const bookingId = params.id as string;

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all additional services to map IDs to names
  const { data: additionalServices = [] } = useQuery({
    queryKey: ['additional-services'],
    queryFn: () => getAdditionalServices(),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  useEffect(() => {
    if (bookingId) {
      getBookingById(bookingId).then((result) => {
        if (result.success && result.booking) {
          setBooking(result.booking);
        } else {
          setError(result.error || 'Booking not found');
        }
        setLoading(false);
      });
    }
  }, [bookingId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 sm:py-12">
        <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="flex items-center justify-center py-8 sm:py-12 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Booking Not Found</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">{error || 'The booking you are looking for does not exist.'}</p>
          <Button onClick={() => router.push('/dashboard/bookings')} className="w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10">
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
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <Button
            variant="ghost"
            onClick={() => router.push('/dashboard/bookings')}
            className="mb-2 sm:mb-4 h-8 sm:h-10 text-xs sm:text-sm px-2 sm:px-4"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Back to Bookings
          </Button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Booking Details</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">#{booking.booking_number}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <Badge className={`${statusColors[booking.status]} text-sm sm:text-base px-2 sm:px-3 py-0.5`}>
            {booking.status}
          </Badge>
          <Badge variant="outline" className={`${paymentColors[booking.payment_status]} text-sm sm:text-base px-2 sm:px-3 py-0.5`}>
            {booking.payment_status}
          </Badge>
        </div>
      </div>

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
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{booking.special_instructions}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                Date & Time
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-sm sm:text-base text-muted-foreground">
                  {format(new Date(booking.service_date), 'EEEE, MMMM d, yyyy')}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{booking.service_time}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Duration: {booking.service_duration} hours
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                Service Address
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {booking.service_address}
                {booking.service_apt_unit && `, ${booking.service_apt_unit}`}
                <br />
                {booking.service_suburb}, {booking.service_city}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-2.5 px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <span className="text-sm sm:text-base break-all">{booking.customer_first_name} {booking.customer_last_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <span className="text-sm sm:text-base break-all">{booking.customer_email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <span className="text-sm sm:text-base break-all">{booking.customer_phone}</span>
            </div>
          </CardContent>
        </Card>

        {/* Payment Summary */}
        <Card className="w-full max-w-full overflow-hidden">
          <CardHeader className="px-4 py-3 sm:px-6 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Payment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-2.5 px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Base Price</span>
              <span className="font-medium">R{booking.base_price.toFixed(2)}</span>
            </div>
            {booking.additional_services_price > 0 && (
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">Additional Services</span>
                <span className="font-medium">R{booking.additional_services_price.toFixed(2)}</span>
              </div>
            )}
            {booking.equipment_supply_price > 0 && (
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">Equipment Supply</span>
                <span className="font-medium">R{booking.equipment_supply_price.toFixed(2)}</span>
              </div>
            )}
            {booking.additional_cleaners_price > 0 && (
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">Additional Cleaners</span>
                <span className="font-medium">R{booking.additional_cleaners_price.toFixed(2)}</span>
              </div>
            )}
            {booking.frequency_discount_amount > 0 && (
              <div className="flex justify-between text-sm sm:text-base text-green-600">
                <span>Frequency Discount</span>
                <span className="font-medium">-R{booking.frequency_discount_amount.toFixed(2)}</span>
              </div>
            )}
            {booking.discount_amount > 0 && (
              <div className="flex justify-between text-sm sm:text-base text-green-600 gap-2">
                <span className="min-w-0 truncate">Discount ({booking.discount_code})</span>
                <span className="font-medium flex-shrink-0 whitespace-nowrap">-R{booking.discount_amount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm sm:text-base pt-1">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">R{booking.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Service Fee</span>
              <span className="font-medium">R{booking.service_fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border font-bold text-base sm:text-lg md:text-xl gap-2">
              <span className="min-w-0">Total Amount</span>
              <span className="text-primary flex-shrink-0 whitespace-nowrap">R{booking.total_amount.toFixed(2)}</span>
            </div>
            {booking.tip_amount > 0 && (
              <div className="flex justify-between pt-2 border-t border-border text-sm sm:text-base">
                <span className="text-muted-foreground">Tip</span>
                <span className="font-medium">R{booking.tip_amount.toFixed(2)}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button onClick={() => router.push('/dashboard/bookings')} variant="outline" className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
          Back to Bookings
        </Button>
        <Button variant="outline" onClick={() => window.print()} className="w-full sm:w-auto text-sm sm:text-base h-9 sm:h-10">
          Print Details
        </Button>
      </div>
    </div>
  );
}

