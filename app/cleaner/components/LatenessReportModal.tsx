'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface LatenessReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookingId: string;
  onSuccess: () => void;
}

export function LatenessReportModal({
  open,
  onOpenChange,
  bookingId,
  onSuccess,
}: LatenessReportModalProps) {
  const [expectedArrivalTime, setExpectedArrivalTime] = useState('');
  const [expectedArrivalDate, setExpectedArrivalDate] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!expectedArrivalDate || !expectedArrivalTime) {
      toast.error('Please provide both date and time');
      return;
    }

    if (!reason.trim()) {
      toast.error('Please provide a reason for the delay');
      return;
    }

    setIsSubmitting(true);

    try {
      // Combine date and time into ISO timestamp
      const expectedArrival = new Date(`${expectedArrivalDate}T${expectedArrivalTime}`).toISOString();

      const response = await fetch('/api/cleaner/report-lateness', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId,
          expectedArrivalTime: expectedArrival,
          reason: reason.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to report lateness');
      }

      toast.success('Lateness reported successfully');
      onSuccess();
      onOpenChange(false);
      // Reset form
      setExpectedArrivalDate('');
      setExpectedArrivalTime('');
      setReason('');
    } catch (error) {
      console.error('Error reporting lateness:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to report lateness');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  if (!expectedArrivalDate) {
    setExpectedArrivalDate(today);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report Lateness</DialogTitle>
          <DialogDescription>
            Inform the customer about your expected arrival time and reason for delay.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="arrival-date">Expected Arrival Date</Label>
              <Input
                id="arrival-date"
                type="date"
                value={expectedArrivalDate}
                onChange={(e) => setExpectedArrivalDate(e.target.value)}
                min={today}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="arrival-time">Expected Arrival Time</Label>
              <Input
                id="arrival-time"
                type="time"
                value={expectedArrivalTime}
                onChange={(e) => setExpectedArrivalTime(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Delay</Label>
            <Textarea
              id="reason"
              placeholder="Explain why you will be late (e.g., traffic, previous booking ran over, etc.)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Report Lateness'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
