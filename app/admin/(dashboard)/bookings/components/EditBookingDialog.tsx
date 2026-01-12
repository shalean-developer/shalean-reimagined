'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { updateBooking } from '../../../actions';
import { Booking } from '@/types/booking';

interface EditBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking | null;
  onSuccess?: () => void;
}

export function EditBookingDialog({ open, onOpenChange, booking, onSuccess }: EditBookingDialogProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service_date: '',
    service_time: '',
    service_address: '',
    service_apt_unit: '',
    service_suburb: '',
    service_city: '',
    customer_first_name: '',
    customer_last_name: '',
    customer_email: '',
    customer_phone: '',
    special_instructions: '',
    bedrooms: '',
    bathrooms: '',
    service_type: '',
  });

  // Initialize form data when booking changes
  useEffect(() => {
    if (booking) {
      setFormData({
        service_date: booking.service_date || '',
        service_time: booking.service_time || '',
        service_address: booking.service_address || '',
        service_apt_unit: booking.service_apt_unit || '',
        service_suburb: booking.service_suburb || '',
        service_city: booking.service_city || '',
        customer_first_name: booking.customer_first_name || '',
        customer_last_name: booking.customer_last_name || '',
        customer_email: booking.customer_email || '',
        customer_phone: booking.customer_phone || '',
        special_instructions: booking.special_instructions || '',
        bedrooms: booking.bedrooms || '',
        bathrooms: booking.bathrooms || '',
        service_type: booking.service_type || '',
      });
    }
  }, [booking]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking) return;

    try {
      setLoading(true);
      const result = await updateBooking(booking.id, {
        service_date: formData.service_date,
        service_time: formData.service_time,
        service_address: formData.service_address,
        service_apt_unit: formData.service_apt_unit || null,
        service_suburb: formData.service_suburb,
        service_city: formData.service_city,
        customer_first_name: formData.customer_first_name,
        customer_last_name: formData.customer_last_name,
        customer_email: formData.customer_email,
        customer_phone: formData.customer_phone,
        special_instructions: formData.special_instructions || null,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        service_type: formData.service_type,
      });

      if (result.success) {
        toast.success('Booking updated successfully');
        onSuccess?.();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to update booking');
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!booking) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Booking</DialogTitle>
          <DialogDescription>
            Update booking information. Changes will be saved immediately.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service_date">Service Date *</Label>
              <Input
                id="service_date"
                type="date"
                value={formData.service_date}
                onChange={(e) => setFormData(prev => ({ ...prev, service_date: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service_time">Service Time *</Label>
              <Input
                id="service_time"
                type="time"
                value={formData.service_time}
                onChange={(e) => setFormData(prev => ({ ...prev, service_time: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service_address">Service Address *</Label>
            <Input
              id="service_address"
              value={formData.service_address}
              onChange={(e) => setFormData(prev => ({ ...prev, service_address: e.target.value }))}
              required
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service_apt_unit">Apt/Unit</Label>
              <Input
                id="service_apt_unit"
                value={formData.service_apt_unit}
                onChange={(e) => setFormData(prev => ({ ...prev, service_apt_unit: e.target.value }))}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service_suburb">Suburb *</Label>
              <Input
                id="service_suburb"
                value={formData.service_suburb}
                onChange={(e) => setFormData(prev => ({ ...prev, service_suburb: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service_city">City *</Label>
              <Input
                id="service_city"
                value={formData.service_city}
                onChange={(e) => setFormData(prev => ({ ...prev, service_city: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customer_first_name">Customer First Name *</Label>
              <Input
                id="customer_first_name"
                value={formData.customer_first_name}
                onChange={(e) => setFormData(prev => ({ ...prev, customer_first_name: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customer_last_name">Customer Last Name *</Label>
              <Input
                id="customer_last_name"
                value={formData.customer_last_name}
                onChange={(e) => setFormData(prev => ({ ...prev, customer_last_name: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customer_email">Customer Email *</Label>
              <Input
                id="customer_email"
                type="email"
                value={formData.customer_email}
                onChange={(e) => setFormData(prev => ({ ...prev, customer_email: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customer_phone">Customer Phone *</Label>
              <Input
                id="customer_phone"
                type="tel"
                value={formData.customer_phone}
                onChange={(e) => setFormData(prev => ({ ...prev, customer_phone: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service_type">Service Type *</Label>
              <Input
                id="service_type"
                value={formData.service_type}
                onChange={(e) => setFormData(prev => ({ ...prev, service_type: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms *</Label>
              <Input
                id="bedrooms"
                value={formData.bedrooms}
                onChange={(e) => setFormData(prev => ({ ...prev, bedrooms: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms *</Label>
              <Input
                id="bathrooms"
                value={formData.bathrooms}
                onChange={(e) => setFormData(prev => ({ ...prev, bathrooms: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="special_instructions">Special Instructions</Label>
            <Textarea
              id="special_instructions"
              value={formData.special_instructions}
              onChange={(e) => setFormData(prev => ({ ...prev, special_instructions: e.target.value }))}
              disabled={loading}
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
