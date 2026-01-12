'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { updateBookingStatus } from '../../../actions';
import { Booking, BookingStatus } from '@/types/booking';

interface StatusUpdateDropdownProps {
  booking: Booking;
  onSuccess?: () => void;
}

export function StatusUpdateDropdown({ booking, onSuccess }: StatusUpdateDropdownProps) {
  const [loading, setLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<BookingStatus>(booking.status);

  // Define valid status transitions
  const getValidStatuses = (current: BookingStatus): BookingStatus[] => {
    const allStatuses: BookingStatus[] = ['pending', 'confirmed', 'on_my_way', 'started', 'completed', 'cancelled'];
    
    // Allow all statuses for admin (no restrictions)
    return allStatuses;
  };

  const handleStatusChange = async (newStatus: BookingStatus) => {
    if (newStatus === currentStatus) return;

    try {
      setLoading(true);
      const result = await updateBookingStatus(booking.id, newStatus);
      
      if (result.success && result.booking) {
        setCurrentStatus(result.booking.status);
        toast.success(`Booking status updated to ${newStatus}`);
        onSuccess?.();
      } else {
        toast.error(result.error || 'Failed to update booking status');
        // Revert to previous status on error
        setCurrentStatus(booking.status);
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      toast.error('An unexpected error occurred');
      setCurrentStatus(booking.status);
    } finally {
      setLoading(false);
    }
  };

  const validStatuses = getValidStatuses(currentStatus);
  const statusColors: Record<BookingStatus, string> = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    on_my_way: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    started: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  const formatStatus = (status: BookingStatus): string => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={currentStatus}
        onValueChange={(value) => handleStatusChange(value as BookingStatus)}
        disabled={loading}
      >
        <SelectTrigger className="w-[180px]">
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Updating...</span>
            </div>
          ) : (
            <SelectValue>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[currentStatus] || ''}`}>
                {formatStatus(currentStatus)}
              </span>
            </SelectValue>
          )}
        </SelectTrigger>
        <SelectContent>
          {validStatuses.map((status) => (
            <SelectItem key={status} value={status}>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status] || ''}`}>
                  {formatStatus(status)}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
