'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2, Calendar, Clock, MapPin, ArrowRight, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBooking } from '../../book/actions';
import { format } from 'date-fns';
import { createClient } from '@/lib/supabase/client';

function BookingConfirmationContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = params.bookingId as string;
  const paymentSuccess = searchParams.get('payment') === 'success';

  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
    };
    checkAuth();

    // Load booking data
    if (bookingId) {
      getBooking(bookingId).then((result) => {
        if (result.success && result.booking) {
          setBooking(result.booking);
        } else {
          setError(result.error || 'Booking not found');
        }
        setLoading(false);
      });
    }
  }, [bookingId]);

  const handleViewDashboard = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/login?redirect=/dashboard');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Booking Not Found</h1>
          <p className="text-muted-foreground mb-4">{error || 'The booking you are looking for does not exist.'}</p>
          <Button onClick={() => router.push('/booking/details')}>Book Now</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {paymentSuccess ? 'Payment Successful!' : 'Booking Confirmed!'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {paymentSuccess
                  ? 'Your payment has been processed successfully and your booking is confirmed.'
                  : 'Your booking has been successfully created. A confirmation email has been sent to your email address.'}
              </p>
            </div>

            {/* Booking Reference */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2">Booking Reference</p>
              <p className="text-3xl font-bold text-foreground">{booking.booking_number}</p>
            </div>

            {/* Essential Booking Details */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Service Date & Time</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(booking.service_date), 'EEEE, MMMM d, yyyy')}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{booking.service_time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Service Address</h3>
                  <p className="text-sm text-muted-foreground">
                    {booking.service_address}
                    {booking.service_apt_unit && `, ${booking.service_apt_unit}`}
                    <br />
                    {booking.service_suburb}, {booking.service_city}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Service</span>
                  <span className="text-sm text-muted-foreground">{booking.service_type}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold text-foreground">Total Paid</span>
                  <span className="text-lg font-bold text-primary">R{booking.total_amount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={() => router.push('/')} variant="hero" size="lg" className="w-full sm:w-auto">
                Return to Home
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                onClick={handleViewDashboard} 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
              >
                <LayoutDashboard className="mr-2 w-4 h-4" />
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <BookingConfirmationContent />
    </Suspense>
  );
}

