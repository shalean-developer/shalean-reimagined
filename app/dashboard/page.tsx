'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { BookingCard } from './components/BookingCard';
import { DashboardBookingFilters } from './components/DashboardBookingFilters';
import { getCustomerBookings, getAuthenticatedUser } from './actions';
import { getServices } from '../booking/quote/actions';
import { Booking } from '@/types/booking';
import { Loader2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getIcon } from '@/lib/icon-mapper';
import { generateSlug } from '@/lib/utils/slug';

export default function DashboardPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [bookingFilter, setBookingFilter] = useState<'upcoming' | 'past'>('upcoming');

  // Fetch services for "Book a service" section
  const { data: services = [], isLoading: isLoadingServices } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  // Get authenticated user's email
  useQuery({
    queryKey: ['authenticated-user'],
    queryFn: async () => {
      const result = await getAuthenticatedUser();
      if (result.success && result.email) {
        setUserEmail(result.email);
        return result.email;
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });

  const loadBookings = async (customerEmail: string) => {
    try {
      setLoading(true);
      const result = await getCustomerBookings(customerEmail, undefined, 'all');
      if (result.success && result.bookings) {
        setBookings(result.bookings);
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load bookings when user email is available
  useEffect(() => {
    if (userEmail) {
      loadBookings(userEmail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const service = services.find(s => s.id === serviceId);
    if (service) {
      const slug = generateSlug(service.name);
      router.push(`/booking/details/${slug}`);
    }
  };

  const upcomingBookings = bookings.filter(
    (booking) => booking.status === 'pending' || booking.status === 'confirmed'
  );

  const pastBookings = bookings.filter(
    (booking) => booking.status === 'completed' || booking.status === 'cancelled'
  );

  const filteredBookings = bookingFilter === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-full overflow-x-hidden">
      {/* Book a service section */}
      <div className="space-y-3 sm:space-y-4 w-full max-w-full overflow-x-hidden">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Book a service</h2>
        {isLoadingServices ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="relative w-full overflow-x-hidden">
            <div 
              className="overflow-x-auto pb-3 sm:pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden w-full" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-3 sm:gap-4 min-w-max w-max">
                {services.map((service) => {
                  const IconComponent = getIcon(service.icon_name);
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[80px] sm:min-w-[90px] md:min-w-[100px] cursor-pointer touch-manipulation"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <div
                        className={`flex items-center justify-center p-2 sm:p-2.5 md:p-3 rounded-xl border-2 transition-all w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ${
                          isSelected
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50 bg-background active:scale-95'
                        }`}
                      >
                        <IconComponent
                          className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${
                            isSelected ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                      <span className="font-medium text-xs sm:text-sm md:text-base text-foreground text-center leading-tight px-0.5 sm:px-1">
                        {service.name.split(' ').map((word, idx, arr) => (
                          <span key={idx}>
                            {word}
                            {idx === 0 && arr.length > 1 && <br />}
                          </span>
                        ))}
                      </span>
                      {isSelected && (
                        <div className="w-full h-0.5 sm:h-1 bg-primary rounded-full mt-0.5 sm:mt-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {services.length > 5 && (
              <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-background to-transparent w-20 h-full pointer-events-none flex items-center justify-end pr-2">
                <ChevronRight className="w-5 h-5 text-primary" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bookings section with filter */}
      {userEmail && (
        <div className="space-y-4">
          <DashboardBookingFilters filter={bookingFilter} onFilterChange={setBookingFilter} />
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : filteredBookings.length === 0 ? (
            <p className="text-base md:text-lg text-muted-foreground text-center py-4">
              No {bookingFilter === 'upcoming' ? 'upcoming' : 'past'} bookings
            </p>
          ) : (
            <div className="grid gap-3 md:gap-4">
              {filteredBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          )}
        </div>
      )}

      {!userEmail && !loading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}

      {/* Refer & Earn promotion card */}
      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-full">
        <Card className="bg-primary-light border-primary/20 w-full max-w-full overflow-hidden">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <div>
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                  Invite friends & earn <strong>R150 ShaleanCred</strong> per friend referral
                </p>
              </div>
              <Button 
                variant="outline"
                className="w-full border-2 text-sm sm:text-base md:text-lg h-9 sm:h-10 md:h-11"
                onClick={() => router.push('/dashboard/refer')}
              >
                Refer & Earn
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">Ts & Cs apply</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Book Now button - Normal on desktop */}
      <div className="hidden md:flex justify-center pt-2 sm:pt-3 md:pt-4">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl h-11 sm:h-12 md:h-14"
          onClick={() => router.push('/booking/details')}
        >
          Book Now
        </Button>
      </div>
      
      {/* Sticky Book Now button for mobile - positioned above bottom nav */}
      <div className="fixed bottom-16 left-0 right-0 z-40 px-8 pb-2 md:hidden flex justify-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground w-auto px-8 py-4 text-base h-12 shadow-lg"
          onClick={() => router.push('/booking/details')}
        >
          Book Now
        </Button>
      </div>
      
      {/* Spacer for mobile to prevent content from being hidden behind sticky button */}
      <div className="h-20 md:hidden" />
    </div>
  );
}

