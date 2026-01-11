'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Booking } from '@/types/booking';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface BookingStatusButtonProps {
  booking: Booking;
  onStatusUpdate: (updatedBooking: Booking) => void;
}

export function BookingStatusButton({ booking, onStatusUpdate }: BookingStatusButtonProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    newStatus: Booking['status'] | null;
  }>({ open: false, newStatus: null });

  const updateStatus = async (newStatus: Booking['status']) => {
    setIsUpdating(true);

    try {
      const response = await fetch('/api/cleaner/update-booking-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId: booking.id,
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to update booking status');
      }

      toast.success(`Booking status updated to ${newStatus.replace('_', ' ')}`);
      onStatusUpdate(result.booking);
      setConfirmDialog({ open: false, newStatus: null });
    } catch (error) {
      console.error('Error updating booking status:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to update booking status');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleStatusClick = (newStatus: Booking['status']) => {
    // Show confirmation for critical actions
    if (newStatus === 'cancelled' || newStatus === 'completed') {
      setConfirmDialog({ open: true, newStatus });
    } else {
      updateStatus(newStatus);
    }
  };

  const getAvailableActions = (): Array<{ status: Booking['status']; label: string; variant?: 'default' | 'outline' | 'destructive' }> => {
    const actions: Array<{ status: Booking['status']; label: string; variant?: 'default' | 'outline' | 'destructive' }> = [];

    switch (booking.status) {
      case 'pending':
        actions.push({ status: 'confirmed', label: 'Confirm', variant: 'default' });
        actions.push({ status: 'cancelled', label: 'Cancel', variant: 'destructive' });
        break;
      case 'confirmed':
        actions.push({ status: 'on_my_way', label: 'On My Way', variant: 'default' });
        actions.push({ status: 'cancelled', label: 'Cancel', variant: 'destructive' });
        break;
      case 'on_my_way':
        actions.push({ status: 'started', label: 'Start Work', variant: 'default' });
        actions.push({ status: 'cancelled', label: 'Cancel', variant: 'destructive' });
        break;
      case 'started':
        actions.push({ status: 'completed', label: 'Complete', variant: 'default' });
        break;
      case 'completed':
      case 'cancelled':
        // No actions available for completed/cancelled bookings
        break;
    }

    return actions;
  };

  const availableActions = getAvailableActions();

  if (availableActions.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        Status: {booking.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {availableActions.map((action) => (
          <Button
            key={action.status}
            variant={action.variant || 'outline'}
            size="sm"
            onClick={() => handleStatusClick(action.status)}
            disabled={isUpdating}
          >
            {isUpdating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              action.label
            )}
          </Button>
        ))}
      </div>

      <AlertDialog open={confirmDialog.open} onOpenChange={(open) => setConfirmDialog({ open, newStatus: null })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDialog.newStatus === 'completed' 
                ? 'Are you sure you want to mark this booking as completed? This action cannot be undone.'
                : 'Are you sure you want to cancel this booking? This action should only be used in exceptional circumstances.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isUpdating}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => confirmDialog.newStatus && updateStatus(confirmDialog.newStatus)}
              disabled={isUpdating}
              className={confirmDialog.newStatus === 'cancelled' ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' : ''}
            >
              {isUpdating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Confirm'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
