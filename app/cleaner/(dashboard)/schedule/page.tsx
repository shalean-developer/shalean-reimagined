'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCurrentCleaner, getCleanerBookings } from '../../actions';
import { Booking } from '@/types/booking';
import { Cleaner } from '@/types/booking';
import { Loader2, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addMonths, subMonths, startOfWeek, endOfWeek, isWithinInterval } from 'date-fns';
import Link from 'next/link';

export default function CleanerSchedulePage() {
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [loading, setLoading] = useState(false);

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

  // Load bookings for the current month
  useEffect(() => {
    if (cleaner) {
      const loadBookings = async () => {
        try {
          setLoading(true);
          const result = await getCleanerBookings('all');
          if (result.success && result.bookings) {
            setBookings(result.bookings || []);
          } else if (result.error) {
            console.error('Error loading bookings:', result.error);
          }
        } catch (error) {
          console.error('Error loading bookings:', error);
        } finally {
          setLoading(false);
        }
      };
      loadBookings();
    }
  }, [cleaner]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const getBookingsForDate = (date: Date) => {
    return bookings.filter(booking => {
      const bookingDate = new Date(booking.service_date);
      return isSameDay(bookingDate, date);
    });
  };

  // Get bookings for the current month (for agenda view)
  const getBookingsForCurrentMonth = () => {
    return bookings.filter(booking => {
      const bookingDate = new Date(booking.service_date);
      return isWithinInterval(bookingDate, { start: monthStart, end: monthEnd });
    });
  };

  // Group bookings by date for agenda view
  const getGroupedBookings = () => {
    const monthBookings = getBookingsForCurrentMonth();
    const grouped: { [key: string]: Booking[] } = {};

    monthBookings.forEach(booking => {
      const dateKey = booking.service_date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(booking);
    });

    // Sort bookings within each date by time
    Object.keys(grouped).forEach(dateKey => {
      grouped[dateKey].sort((a, b) => {
        const timeA = a.service_time;
        const timeB = b.service_time;
        return timeA.localeCompare(timeB);
      });
    });

    // Convert to array and sort by date
    return Object.keys(grouped)
      .sort()
      .map(dateKey => ({
        date: dateKey,
        bookings: grouped[dateKey],
      }));
  };

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Status colors for badges
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    on_my_way: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    started: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  const formatStatusLabel = (status: string) => {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Schedule</h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-1">
            View your bookings calendar
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>
            Today
          </Button>
          <Button variant="outline" size="sm" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Agenda View */}
      {loading ? (
        <div className="flex items-center justify-center py-12 md:hidden">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : (
        <div className="md:hidden space-y-4">
          {getGroupedBookings().length > 0 ? (
            getGroupedBookings().map((dateGroup) => {
              const date = new Date(dateGroup.date);
              const isDayToday = isToday(date);
              
              return (
                <div key={dateGroup.date} className="space-y-2">
                  {/* Date Header */}
                  <div className={`flex items-center gap-2 py-2 ${isDayToday ? 'border-l-4 border-l-primary pl-3' : 'pl-3'}`}>
                    <div className="flex-1">
                      <div className={`font-semibold text-base ${isDayToday ? 'text-primary' : 'text-foreground'}`}>
                        {isDayToday ? 'Today' : format(date, 'EEEE')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {format(date, 'MMM d, yyyy')}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {dateGroup.bookings.length} {dateGroup.bookings.length === 1 ? 'booking' : 'bookings'}
                    </Badge>
                  </div>

                  {/* Bookings for this date */}
                  <div className="space-y-2 pl-3">
                    {dateGroup.bookings.map((booking) => (
                      <Link
                        key={booking.id}
                        href={`/cleaner/bookings/${booking.id}`}
                        className="block"
                      >
                        <Card className="hover:shadow-md transition-shadow border-border">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              {/* Time Badge */}
                              <div className="flex-shrink-0">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-md">
                                  <Clock className="w-4 h-4 text-primary" />
                                  <span className="font-semibold text-sm text-primary">
                                    {booking.service_time}
                                  </span>
                                </div>
                              </div>

                              {/* Booking Details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1.5">
                                  <h3 className="font-semibold text-base truncate">
                                    {booking.service_type}
                                  </h3>
                                  <Badge 
                                    className={`${statusColors[booking.status as keyof typeof statusColors] || statusColors.pending} text-xs px-2 py-0.5 flex-shrink-0`}
                                  >
                                    {formatStatusLabel(booking.status)}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                  <MapPin className="w-4 h-4 flex-shrink-0" />
                                  <span className="truncate">
                                    {booking.service_address}
                                    {booking.service_apt_unit && `, ${booking.service_apt_unit}`}
                                    , {booking.service_suburb}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <CalendarIcon className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  No bookings for {format(currentMonth, 'MMMM yyyy')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Desktop Calendar View */}
      {loading ? (
        <div className="hidden md:flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : (
        <Card className="hidden md:block">
          <CardHeader>
            <CardTitle className="text-center">{format(currentMonth, 'MMMM yyyy')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {/* Week day headers */}
              {weekDays.map(day => (
                <div key={day} className="text-center font-semibold text-sm text-muted-foreground p-2">
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {days.map((day, index) => {
                const dayBookings = getBookingsForDate(day);
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isDayToday = isToday(day);

                return (
                  <div
                    key={index}
                    className={`min-h-[80px] p-1 border rounded-md ${
                      isCurrentMonth ? 'bg-background' : 'bg-muted/30'
                    } ${isDayToday ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className={`text-sm font-medium mb-1 ${isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {format(day, 'd')}
                    </div>
                    <div className="space-y-1">
                      {dayBookings.slice(0, 2).map(booking => (
                        <Link
                          key={booking.id}
                          href={`/cleaner/bookings/${booking.id}`}
                          className="block text-xs p-1 rounded bg-primary/10 text-primary hover:bg-primary/20 truncate"
                          title={`${booking.service_time} - ${booking.service_type.substring(0, 15)}`}
                        >
                          {booking.service_time} - {booking.service_type.substring(0, 15)}
                        </Link>
                      ))}
                      {dayBookings.length > 2 && (
                        <div className="text-xs text-muted-foreground px-1">
                          +{dayBookings.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upcoming Bookings List */}
      {bookings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {bookings
                .filter(b => {
                  const bookingDate = new Date(b.service_date);
                  return bookingDate >= new Date() && ['pending', 'confirmed', 'on_my_way', 'started'].includes(b.status);
                })
                .sort((a, b) => {
                  const dateA = new Date(`${a.service_date}T${a.service_time}`);
                  const dateB = new Date(`${b.service_date}T${b.service_time}`);
                  return dateA.getTime() - dateB.getTime();
                })
                .slice(0, 10)
                .map(booking => (
                  <Link
                    key={booking.id}
                    href={`/cleaner/bookings/${booking.id}`}
                    className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{booking.service_type}</div>
                      <div className="text-sm text-muted-foreground">
                        {format(new Date(booking.service_date), 'MMM d, yyyy')} at {booking.service_time}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {booking.service_address}, {booking.service_suburb}
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <div className={`px-2 py-1 text-xs rounded-full ${
                        booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        booking.status === 'on_my_way' ? 'bg-orange-100 text-orange-800' :
                        booking.status === 'started' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status.replace('_', ' ')}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
