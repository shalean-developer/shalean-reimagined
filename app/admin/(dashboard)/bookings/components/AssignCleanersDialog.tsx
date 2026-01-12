'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Loader2, X } from 'lucide-react';
import { toast } from 'sonner';
import { assignCleanersToBooking, removeCleanerFromBooking, getAllCleaners } from '../../../actions';
import { Booking, Cleaner } from '@/types/booking';

interface AssignCleanersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking | null;
  onSuccess?: () => void;
}

export function AssignCleanersDialog({ open, onOpenChange, booking, onSuccess }: AssignCleanersDialogProps) {
  const [loading, setLoading] = useState(false);
  const [loadingCleaners, setLoadingCleaners] = useState(false);
  const [cleaners, setCleaners] = useState<Cleaner[]>([]);
  const [selectedCleanerIds, setSelectedCleanerIds] = useState<string[]>([]);
  const [replaceExisting, setReplaceExisting] = useState(false);
  const [assignedCleaners, setAssignedCleaners] = useState<Cleaner[]>([]);

  // Load all cleaners
  const loadCleaners = async () => {
    try {
      setLoadingCleaners(true);
      const result = await getAllCleaners();
      if (result.success && result.cleaners) {
        setCleaners(result.cleaners);
        // Load assigned cleaners after cleaners are loaded
        if (booking) {
          loadAssignedCleaners(result.cleaners);
        }
      }
    } catch (error) {
      console.error('Error loading cleaners:', error);
      toast.error('Failed to load cleaners');
    } finally {
      setLoadingCleaners(false);
    }
  };

  // Load assigned cleaners
  const loadAssignedCleaners = (cleanersList: Cleaner[] = cleaners) => {
    if (!booking) return;

    const cleanerIds: string[] = [];
    if (booking.preferred_cleaner_id) {
      cleanerIds.push(booking.preferred_cleaner_id);
    }
    if (booking.preferred_cleaner_ids && Array.isArray(booking.preferred_cleaner_ids)) {
      booking.preferred_cleaner_ids.forEach((id: string) => {
        if (id && !cleanerIds.includes(id)) {
          cleanerIds.push(id);
        }
      });
    }

    if (cleanerIds.length > 0 && cleanersList.length > 0) {
      const assigned = cleanersList.filter(c => cleanerIds.includes(c.id));
      setAssignedCleaners(assigned);
    } else {
      setAssignedCleaners([]);
    }
  };

  // Load cleaners when dialog opens
  useEffect(() => {
    if (open) {
      loadCleaners();
      // Reset form state when dialog opens
      setSelectedCleanerIds([]);
      setReplaceExisting(false);
    }
  }, [open, booking]);

  // Check if service type allows multiple cleaners
  const allowsMultiple = (serviceType: string): boolean => {
    if (!serviceType) return true;
    const normalized = serviceType.toLowerCase().trim();
    
    // Deep Cleaning and Move In/Out always allow multiple
    if (normalized.includes('deep') || 
        (normalized.includes('move') && (normalized.includes('in/out') || normalized.includes('in out') || normalized.includes('inout')))) {
      return true;
    }
    
    // Standard and Airbnb allow multiple (more than 1)
    if (normalized.includes('standard') || normalized.includes('airbnb')) {
      return true;
    }
    
    return true;
  };

  const handleCleanerToggle = (cleanerId: string) => {
    setSelectedCleanerIds(prev => {
      if (prev.includes(cleanerId)) {
        return prev.filter(id => id !== cleanerId);
      } else {
        // Check if we're trying to add more than 1 cleaner for services that don't allow it
        if (!allowsMultiple(booking?.service_type || '') && prev.length === 0) {
          // This is fine, we're adding the first one
          return [cleanerId];
        }
        return [...prev, cleanerId];
      }
    });
  };

  const handleRemoveCleaner = async (cleanerId: string) => {
    if (!booking) return;

    try {
      setLoading(true);
      const result = await removeCleanerFromBooking(booking.id, cleanerId);
      if (result.success) {
        toast.success('Cleaner removed successfully');
        onSuccess?.();
        // Reload assigned cleaners
        await loadAssignedCleaners();
      } else {
        toast.error(result.error || 'Failed to remove cleaner');
      }
    } catch (error) {
      console.error('Error removing cleaner:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (loading) return; // Prevent closing while loading
    setSelectedCleanerIds([]);
    setReplaceExisting(false);
    // Always call onOpenChange to close the dialog - this is the key fix
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  const handleSubmit = async () => {
    if (!booking) return;

    if (selectedCleanerIds.length === 0) {
      toast.error('Please select at least one cleaner');
      return;
    }

    // Validate multiple cleaners for service type
    if (selectedCleanerIds.length > 1 && !allowsMultiple(booking.service_type)) {
      toast.error('This service type does not support multiple cleaners');
      return;
    }

    try {
      setLoading(true);
      const result = await assignCleanersToBooking(booking.id, selectedCleanerIds, replaceExisting);
      if (result.success) {
        toast.success(
          replaceExisting 
            ? `Successfully assigned ${selectedCleanerIds.length} cleaner(s) to booking`
            : `Successfully added ${selectedCleanerIds.length} cleaner(s) to booking`
        );
        onSuccess?.();
        setSelectedCleanerIds([]);
        setReplaceExisting(false);
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to assign cleaners');
      }
    } catch (error) {
      console.error('Error assigning cleaners:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!booking) return null;

  const serviceAllowsMultiple = allowsMultiple(booking.service_type);
  const currentlyAssignedIds = assignedCleaners.map(c => c.id);
  const availableCleaners = cleaners.filter(c => !currentlyAssignedIds.includes(c.id) || selectedCleanerIds.includes(c.id));

  return (
    <Dialog 
      open={open} 
      onOpenChange={(isOpen) => {
        // When dialog wants to close (isOpen = false), call handleClose
        if (!isOpen) {
          handleClose();
        } else {
          // When opening, just pass through
          if (onOpenChange) {
            onOpenChange(isOpen);
          }
        }
      }}
    >
      <DialogContent 
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        onEscapeKeyDown={(e) => {
          if (!loading) {
            e.preventDefault();
            handleClose();
          }
        }}
        onPointerDownOutside={(e) => {
          if (!loading) {
            e.preventDefault();
            handleClose();
          }
        }}
        onInteractOutside={(e) => {
          if (!loading) {
            e.preventDefault();
            handleClose();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>Assign Cleaners to Booking</DialogTitle>
          <DialogDescription>
            {serviceAllowsMultiple 
              ? 'Select one or more cleaners to assign to this booking.'
              : 'Select a cleaner to assign to this booking.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Currently Assigned Cleaners */}
          {assignedCleaners.length > 0 && (
            <div className="space-y-2">
              <Label>Currently Assigned Cleaners</Label>
              <div className="flex flex-wrap gap-2">
                {assignedCleaners.map((cleaner) => (
                  <Badge key={cleaner.id} variant="secondary" className="flex items-center gap-2">
                    {cleaner.name}
                    <button
                      type="button"
                      onClick={() => handleRemoveCleaner(cleaner.id)}
                      disabled={loading}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Replace Existing Option */}
          {assignedCleaners.length > 0 && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="replace-existing"
                checked={replaceExisting}
                onCheckedChange={(checked) => setReplaceExisting(checked === true)}
                disabled={loading}
              />
              <Label htmlFor="replace-existing" className="cursor-pointer">
                Replace all existing cleaners
              </Label>
            </div>
          )}

          {/* Service Type Info */}
          {!serviceAllowsMultiple && (
            <div className="rounded-md bg-yellow-50 dark:bg-yellow-900/20 p-3 text-sm text-yellow-800 dark:text-yellow-400">
              This service type supports single cleaner assignment only.
            </div>
          )}

          {/* Cleaner Selection */}
          <div className="space-y-2">
            <Label>Select Cleaners</Label>
            {loadingCleaners ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-2">
                {availableCleaners.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No available cleaners
                  </p>
                ) : (
                  availableCleaners.map((cleaner) => (
                    <div key={cleaner.id} className="flex items-center space-x-2 p-2 hover:bg-muted rounded">
                      <Checkbox
                        id={`cleaner-${cleaner.id}`}
                        checked={selectedCleanerIds.includes(cleaner.id)}
                        onCheckedChange={() => handleCleanerToggle(cleaner.id)}
                        disabled={loading || (!serviceAllowsMultiple && selectedCleanerIds.length > 0 && !selectedCleanerIds.includes(cleaner.id))}
                      />
                      <Label
                        htmlFor={`cleaner-${cleaner.id}`}
                        className="flex-1 cursor-pointer"
                      >
                        <div>
                          <div className="font-medium">{cleaner.name}</div>
                          {cleaner.email && (
                            <div className="text-sm text-muted-foreground">{cleaner.email}</div>
                          )}
                        </div>
                      </Label>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading || selectedCleanerIds.length === 0}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {replaceExisting ? 'Replace Cleaners' : 'Add Cleaners'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
