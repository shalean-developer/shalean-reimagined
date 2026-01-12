'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Loader2, Edit2, DollarSign } from 'lucide-react';
import { toast } from 'sonner';
import { updateCleanerEarnings, getBookingWithCleaners, getAllCleaners } from '../../../actions';
import { Booking, Cleaner } from '@/types/booking';
import { calculateCleanerEarnings, calculateTipPerCleaner, isTeamBasedService } from '@/lib/utils/cleaner-earnings';

interface CleanerEarningsEditorProps {
  booking: Booking | null;
  onSuccess?: () => void;
}

interface CleanerEarning {
  cleanerId: string;
  cleanerName: string;
  baseEarnings: number;
  tipAmount: number;
  totalEarnings: number;
  isOverride: boolean;
}

export function CleanerEarningsEditor({ booking, onSuccess }: CleanerEarningsEditorProps) {
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [cleaners, setCleaners] = useState<Cleaner[]>([]);
  const [cleanerEarnings, setCleanerEarnings] = useState<CleanerEarning[]>([]);
  const [editingCleanerId, setEditingCleanerId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState({
    baseEarnings: 0,
    tipAmount: 0,
    useAutomatic: true,
  });

  // Load cleaners and calculate earnings
  useEffect(() => {
    if (booking) {
      loadData();
    }
  }, [booking]);

  const loadData = async () => {
    if (!booking) return;

    try {
      setLoadingData(true);
      
      // Load all cleaners to get names
      const cleanersResult = await getAllCleaners();
      if (cleanersResult.success && cleanersResult.cleaners) {
        setCleaners(cleanersResult.cleaners);
      }

      // Get cleaner IDs from booking
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

      // Calculate earnings for each cleaner
      const earnings: CleanerEarning[] = [];
      for (const cleanerId of cleanerIds) {
        const cleaner = cleanersResult.success && cleanersResult.cleaners
          ? cleanersResult.cleaners.find(c => c.id === cleanerId)
          : null;

        // Check if there's an override
        const override = booking.cleaner_earnings_override?.[cleanerId];
        
        if (override) {
          // Use override values
          earnings.push({
            cleanerId,
            cleanerName: cleaner?.name || 'Unknown Cleaner',
            baseEarnings: override.baseEarnings || 0,
            tipAmount: override.tipAmount || 0,
            totalEarnings: override.totalEarnings || 0,
            isOverride: true,
          });
        } else {
          // Calculate automatic earnings
          // For team-based services, use fixed R250
          let baseEarnings = 0;
          if (isTeamBasedService(booking.service_type)) {
            baseEarnings = 250;
          } else {
            // For other services, use a default 60% (can be adjusted based on cleaner tenure/hours)
            // Since we don't have cleaner stats in admin context, use 60% as default
            const earningsPercentage = 0.60;
            baseEarnings = calculateCleanerEarnings(
              {
                service_type: booking.service_type,
                total_amount: booking.total_amount,
                service_fee: booking.service_fee,
                equipment_supply_price: booking.equipment_supply_price,
                additional_cleaners_price: booking.additional_cleaners_price,
                preferred_cleaner_ids: booking.preferred_cleaner_ids,
                preferred_cleaner_id: booking.preferred_cleaner_id,
              },
              cleanerId,
              earningsPercentage,
              booking.preferred_cleaner_ids || null
            );
          }

          const tipAmount = calculateTipPerCleaner(
            booking.tip_amount || 0,
            booking.preferred_cleaner_ids,
            booking.preferred_cleaner_id
          );

          earnings.push({
            cleanerId,
            cleanerName: cleaner?.name || 'Unknown Cleaner',
            baseEarnings,
            tipAmount,
            totalEarnings: baseEarnings + tipAmount,
            isOverride: false,
          });
        }
      }

      setCleanerEarnings(earnings);
    } catch (error) {
      console.error('Error loading cleaner earnings:', error);
      toast.error('Failed to load cleaner earnings');
    } finally {
      setLoadingData(false);
    }
  };

  const handleEdit = (earning: CleanerEarning) => {
    setEditFormData({
      baseEarnings: earning.baseEarnings,
      tipAmount: earning.tipAmount,
      useAutomatic: !earning.isOverride,
    });
    setEditingCleanerId(earning.cleanerId);
  };

  const handleSaveEdit = async () => {
    if (!booking || !editingCleanerId) return;

    try {
      setLoading(true);
      
      if (editFormData.useAutomatic) {
        // Remove override (use automatic calculation)
        const result = await updateCleanerEarnings(booking.id, editingCleanerId, null);
        if (result.success) {
          toast.success('Earnings reset to automatic calculation');
          onSuccess?.();
          await loadData();
          setEditingCleanerId(null);
        } else {
          toast.error(result.error || 'Failed to update earnings');
        }
      } else {
        // Save custom earnings
        const totalEarnings = editFormData.baseEarnings + editFormData.tipAmount;
        const result = await updateCleanerEarnings(booking.id, editingCleanerId, {
          baseEarnings: editFormData.baseEarnings,
          tipAmount: editFormData.tipAmount,
          totalEarnings,
        });
        
        if (result.success) {
          toast.success('Earnings updated successfully');
          onSuccess?.();
          await loadData();
          setEditingCleanerId(null);
        } else {
          toast.error(result.error || 'Failed to update earnings');
        }
      }
    } catch (error) {
      console.error('Error updating cleaner earnings:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!booking) return null;

  if (loadingData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cleaner Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (cleanerEarnings.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cleaner Earnings</CardTitle>
          <CardDescription>No cleaners assigned to this booking</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Cleaner Earnings
          </CardTitle>
          <CardDescription>
            View and edit earnings for each cleaner assigned to this booking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cleanerEarnings.map((earning) => (
              <div
                key={earning.cleanerId}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium">{earning.cleanerName}</div>
                  <div className="text-sm text-muted-foreground space-y-1 mt-1">
                    <div>Base: R{earning.baseEarnings.toFixed(2)}</div>
                    <div>Tip: R{earning.tipAmount.toFixed(2)}</div>
                    <div className="font-semibold text-foreground">
                      Total: R{earning.totalEarnings.toFixed(2)}
                    </div>
                    {earning.isOverride && (
                      <div className="text-xs text-yellow-600 dark:text-yellow-400">
                        Custom earnings (override)
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(earning)}
                  disabled={loading}
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={editingCleanerId !== null} onOpenChange={(open) => !open && setEditingCleanerId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Cleaner Earnings</DialogTitle>
            <DialogDescription>
              {editingCleanerId && cleanerEarnings.find(e => e.cleanerId === editingCleanerId)?.cleanerName}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="use-automatic">Use Automatic Calculation</Label>
              <Switch
                id="use-automatic"
                checked={editFormData.useAutomatic}
                onCheckedChange={(checked) => setEditFormData(prev => ({ ...prev, useAutomatic: checked }))}
                disabled={loading}
              />
            </div>

            {!editFormData.useAutomatic && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="base-earnings">Base Earnings (R)</Label>
                  <Input
                    id="base-earnings"
                    type="number"
                    step="0.01"
                    min="0"
                    value={editFormData.baseEarnings}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, baseEarnings: parseFloat(e.target.value) || 0 }))}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tip-amount">Tip Amount (R)</Label>
                  <Input
                    id="tip-amount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={editFormData.tipAmount}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, tipAmount: parseFloat(e.target.value) || 0 }))}
                    disabled={loading}
                  />
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <div className="text-sm font-medium">Total Earnings</div>
                  <div className="text-lg font-semibold">
                    R{(editFormData.baseEarnings + editFormData.tipAmount).toFixed(2)}
                  </div>
                </div>
              </>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditingCleanerId(null)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
