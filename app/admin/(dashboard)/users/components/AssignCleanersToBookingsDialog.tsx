'use client';

import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Search, Calendar, User, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { assignCleanersToBookings, getBookingsForAssignment } from '../../../actions';
import { Booking } from '@/types/booking';
import { format } from 'date-fns';

interface AssignCleanersToBookingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cleanerIds: string[];
  cleanerNames?: string[];
  onSuccess?: () => void;
}

export function AssignCleanersToBookingsDialog({
  open,
  onOpenChange,
  cleanerIds,
  cleanerNames = [],
  onSuccess,
}: AssignCleanersToBookingsDialogProps) {
  const [loading, setLoading] = useState(false);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBookingIds, setSelectedBookingIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const loadBookings = useCallback(async () => {
    try {
      setLoadingBookings(true);
      const result = await getBookingsForAssignment({
        status: statusFilter === 'all' ? undefined : statusFilter,
      });

      if (result.success && result.bookings) {
        setBookings(result.bookings);
      } else {
        toast.error(result.error || 'Failed to load bookings');
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
      toast.error('Failed to load bookings');
    } finally {
      setLoadingBookings(false);
    }
  }, [statusFilter]);

  // Load bookings when dialog opens or status filter changes
  useEffect(() => {
    if (open) {
      loadBookings();
    }
  }, [open, loadBookings]);

  // Reset selections when dialog opens
  useEffect(() => {
    if (open) {
      setSelectedBookingIds([]);
      setSearchQuery('');
    }
  }, [open]);

  const handleBookingToggle = (bookingId: string) => {
    setSelectedBookingIds(prev => {
      if (prev.includes(bookingId)) {
        return prev.filter(id => id !== bookingId);
      } else {
        return [...prev, bookingId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedBookingIds.length === filteredBookings.length) {
      setSelectedBookingIds([]);
    } else {
      setSelectedBookingIds(filteredBookings.map(b => b.id));
    }
  };

  const handleSubmit = async () => {
    if (selectedBookingIds.length === 0) {
      toast.error('Please select at least one booking');
      return;
    }

    try {
      setLoading(true);
      const result = await assignCleanersToBookings(cleanerIds, selectedBookingIds);

      if (result.success) {
        toast.success(
          `Successfully assigned ${cleanerNames.length > 0 ? cleanerNames.join(', ') : 'cleaner(s)'} to ${result.updated || selectedBookingIds.length} booking(s)`
        );
        onSuccess?.();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to assign cleaners to bookings');
      }
    } catch (error) {
      console.error('Error assigning cleaners to bookings:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Filter bookings based on search and status
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch =
      booking.booking_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer_email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${booking.customer_first_name} ${booking.customer_last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.service_address.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const getCurrentCleaners = (booking: Booking): string[] => {
    const cleaners: string[] = [];
    if (booking.preferred_cleaner_id) {
      cleaners.push(booking.preferred_cleaner_id);
    }
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      booking.preferred_cleaner_ids.forEach((id: string) => {
        if (id && !cleaners.includes(id)) {
          cleaners.push(id);
        }
      });
    }
    return cleaners;
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    on_my_way: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    started: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Assign Cleaners to Bookings</DialogTitle>
          <DialogDescription>
            Select bookings to assign {cleanerNames.length > 0 ? cleanerNames.join(', ') : 'the selected cleaner(s)'} to.
            You can select multiple bookings at once.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Filters */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by booking number, customer, or address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="on_my_way">On My Way</option>
                <option value="started">Started</option>
              </select>
            </div>

            {selectedBookingIds.length > 0 && (
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="text-sm font-medium">
                  {selectedBookingIds.length} booking(s) selected
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleSelectAll}
                >
                  {selectedBookingIds.length === filteredBookings.length ? 'Deselect All' : 'Select All'}
                </Button>
              </div>
            )}
          </div>

          {/* Bookings List */}
          {loadingBookings ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No bookings found
            </div>
          ) : (
            <div className="space-y-2">
              {filteredBookings.map((booking) => {
                const isSelected = selectedBookingIds.includes(booking.id);
                const currentCleaners = getCurrentCleaners(booking);
                const willBeAssigned = cleanerIds.some(id => currentCleaners.includes(id));

                return (
                  <Card
                    key={booking.id}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => handleBookingToggle(booking.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => handleBookingToggle(booking.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-medium">#{booking.booking_number}</span>
                              <span
                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  statusColors[booking.status as keyof typeof statusColors] ||
                                  'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {booking.status}
                              </span>
                            </div>
                            <span className="font-medium">R{booking.total_amount.toFixed(2)}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>
                                {booking.customer_first_name} {booking.customer_last_name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {format(new Date(booking.service_date), 'MMM d, yyyy')} at {booking.service_time}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 col-span-2">
                              <MapPin className="h-4 w-4" />
                              <span className="truncate">{booking.service_address}</span>
                            </div>
                          </div>

                          {currentCleaners.length > 0 && (
                            <div className="text-xs text-muted-foreground mt-2">
                              Currently assigned: {currentCleaners.length} cleaner(s)
                              {willBeAssigned && ' (will be updated)'}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading || selectedBookingIds.length === 0}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Assign to {selectedBookingIds.length > 0 ? `${selectedBookingIds.length} ` : ''}Booking(s)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
