'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Loader2, Key } from 'lucide-react';
import { toast } from 'sonner';
import { updateCleaner } from '../../../actions';
import { Cleaner, CleanerUpdateInput } from '@/types/booking';
import { ResetCleanerPasswordDialog } from './ResetCleanerPasswordDialog';

interface EditCleanerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cleaner: Cleaner | null;
  onSuccess?: () => void;
}

export function EditCleanerDialog({ open, onOpenChange, cleaner, onSuccess }: EditCleanerDialogProps) {
  const [loading, setLoading] = useState(false);
  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [formData, setFormData] = useState<CleanerUpdateInput>({
    name: '',
    email: '',
    phone: '',
    is_active: true,
    bio: '',
    areas: [],
    specialties: [],
    years_experience: null,
    available_monday: true,
    available_tuesday: true,
    available_wednesday: true,
    available_thursday: true,
    available_friday: true,
    available_saturday: true,
    available_sunday: true,
  });

  // Initialize form data when cleaner changes
  useEffect(() => {
    if (cleaner) {
      setFormData({
        name: cleaner.name || '',
        email: cleaner.email || '',
        phone: cleaner.phone || '',
        is_active: cleaner.is_active ?? true,
        bio: cleaner.bio || '',
        areas: cleaner.areas || [],
        specialties: cleaner.specialties || [],
        years_experience: cleaner.years_experience || null,
        available_monday: cleaner.available_monday ?? true,
        available_tuesday: cleaner.available_tuesday ?? true,
        available_wednesday: cleaner.available_wednesday ?? true,
        available_thursday: cleaner.available_thursday ?? true,
        available_friday: cleaner.available_friday ?? true,
        available_saturday: cleaner.available_saturday ?? true,
        available_sunday: cleaner.available_sunday ?? true,
      });
    }
  }, [cleaner]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cleaner) return;

    // Validation
    if (!formData.name?.trim()) {
      toast.error('Name is required');
      return;
    }
    if (!formData.phone?.trim()) {
      toast.error('Phone is required');
      return;
    }

    try {
      setLoading(true);
      const result = await updateCleaner(cleaner.id, formData);

      if (result.success && result.cleaner) {
        toast.success('Cleaner updated successfully');
        onSuccess?.();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to update cleaner');
      }
    } catch (error) {
      console.error('Error updating cleaner:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleAreasChange = (value: string) => {
    const areas = value.split(',').map(a => a.trim()).filter(a => a.length > 0);
    setFormData(prev => ({ ...prev, areas }));
  };

  const handleSpecialtiesChange = (value: string) => {
    const specialties = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
    setFormData(prev => ({ ...prev, specialties }));
  };

  if (!cleaner) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Cleaner</DialogTitle>
          <DialogDescription>
            Update cleaner information. Changes will be saved immediately.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value || null }))}
              disabled={loading}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_active"
              checked={formData.is_active ?? true}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
              disabled={loading}
            />
            <Label htmlFor="is_active" className="cursor-pointer">
              Active Status
            </Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value || null }))}
              rows={3}
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="areas">Areas (comma-separated)</Label>
              <Input
                id="areas"
                value={formData.areas?.join(', ') || ''}
                onChange={(e) => handleAreasChange(e.target.value)}
                placeholder="e.g., Cape Town, Johannesburg"
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialties">Specialties (comma-separated)</Label>
              <Input
                id="specialties"
                value={formData.specialties?.join(', ') || ''}
                onChange={(e) => handleSpecialtiesChange(e.target.value)}
                placeholder="e.g., Deep Cleaning, Move In/Out"
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="years_experience">Years of Experience</Label>
            <Input
              id="years_experience"
              type="number"
              min="0"
              value={formData.years_experience || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, years_experience: e.target.value ? parseInt(e.target.value) : null }))}
              disabled={loading}
            />
          </div>

          <div className="space-y-4">
            <Label>Working Days</Label>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="monday" className="cursor-pointer flex-1">
                  Monday
                </Label>
                <Switch
                  id="monday"
                  checked={formData.available_monday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_monday: checked }))}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="tuesday" className="cursor-pointer flex-1">
                  Tuesday
                </Label>
                <Switch
                  id="tuesday"
                  checked={formData.available_tuesday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_tuesday: checked }))}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="wednesday" className="cursor-pointer flex-1">
                  Wednesday
                </Label>
                <Switch
                  id="wednesday"
                  checked={formData.available_wednesday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_wednesday: checked }))}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="thursday" className="cursor-pointer flex-1">
                  Thursday
                </Label>
                <Switch
                  id="thursday"
                  checked={formData.available_thursday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_thursday: checked }))}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="friday" className="cursor-pointer flex-1">
                  Friday
                </Label>
                <Switch
                  id="friday"
                  checked={formData.available_friday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_friday: checked }))}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="saturday" className="cursor-pointer flex-1">
                  Saturday
                </Label>
                <Switch
                  id="saturday"
                  checked={formData.available_saturday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_saturday: checked }))}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <Label htmlFor="sunday" className="cursor-pointer flex-1">
                  Sunday
                </Label>
                <Switch
                  id="sunday"
                  checked={formData.available_sunday ?? true}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, available_sunday: checked }))}
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">Account Security</Label>
                <p className="text-sm text-muted-foreground">
                  Reset the cleaner's password
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => setResetPasswordOpen(true)}
                disabled={loading}
              >
                <Key className="h-4 w-4 mr-2" />
                Reset Password
              </Button>
            </div>
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
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    {cleaner && (
      <ResetCleanerPasswordDialog
        open={resetPasswordOpen}
        onOpenChange={setResetPasswordOpen}
        cleaner={cleaner}
        onSuccess={() => {
          // Optionally refresh or show success message
        }}
      />
    )}
    </>
  );
}
