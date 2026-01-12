'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';
import { setCustomerCredits, adjustCustomerCredits } from '../../../actions';
import { Profile } from '@/types/profile';

interface EditCreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customer: Profile & { credit_balance: number };
  onSuccess?: () => void;
}

export function EditCreditsDialog({ open, onOpenChange, customer, onSuccess }: EditCreditsDialogProps) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'absolute' | 'relative'>('absolute');
  
  // Absolute tab state
  const [targetBalance, setTargetBalance] = useState('');
  
  // Relative tab state
  const [adjustmentAmount, setAdjustmentAmount] = useState('');
  const [isAdd, setIsAdd] = useState(true);
  
  // Shared state
  const [description, setDescription] = useState('');

  // Reset form when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setTargetBalance('');
      setAdjustmentAmount('');
      setIsAdd(true);
      setDescription('');
      setActiveTab('absolute');
    } else {
      // Set initial values when opening
      setTargetBalance((customer.credit_balance || 0).toFixed(2));
    }
  }, [open, customer]);

  const currentBalance = customer.credit_balance || 0;

  const handleAbsoluteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer) return;

    const targetBalanceNum = parseFloat(targetBalance);
    if (!targetBalance || isNaN(targetBalanceNum) || targetBalanceNum < 0) {
      toast.error('Please enter a valid balance (0 or greater)');
      return;
    }

    try {
      setLoading(true);
      const result = await setCustomerCredits(
        customer.id,
        targetBalanceNum,
        description.trim() || undefined
      );

      if (result.success) {
        toast.success(`Successfully set balance to R${targetBalanceNum.toFixed(2)}`);
        onSuccess?.();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to set credits');
      }
    } catch (error) {
      console.error('Error setting credits:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRelativeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer) return;

    const adjustmentNum = parseFloat(adjustmentAmount);
    if (!adjustmentAmount || isNaN(adjustmentNum) || adjustmentNum <= 0) {
      toast.error('Please enter a valid adjustment amount greater than 0');
      return;
    }

    const finalAdjustment = isAdd ? adjustmentNum : -adjustmentNum;

    try {
      setLoading(true);
      const result = await adjustCustomerCredits(
        customer.id,
        finalAdjustment,
        description.trim() || undefined
      );

      if (result.success) {
        toast.success(
          `Successfully ${isAdd ? 'added' : 'subtracted'} R${adjustmentNum.toFixed(2)} ${isAdd ? 'to' : 'from'} balance`
        );
        onSuccess?.();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to adjust credits');
      }
    } catch (error) {
      console.error('Error adjusting credits:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!customer) return null;

  const previewBalance = activeTab === 'absolute' 
    ? (isNaN(parseFloat(targetBalance)) ? currentBalance : parseFloat(targetBalance))
    : currentBalance + (isAdd ? 1 : -1) * (isNaN(parseFloat(adjustmentAmount)) ? 0 : parseFloat(adjustmentAmount));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Credits</DialogTitle>
          <DialogDescription>
            Modify credit balance for {customer.first_name} {customer.last_name}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'absolute' | 'relative')} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="absolute">Set Balance</TabsTrigger>
            <TabsTrigger value="relative">Adjust Balance</TabsTrigger>
          </TabsList>

          {/* Absolute Tab - Set to specific balance */}
          <TabsContent value="absolute" className="space-y-4 mt-4">
            <form onSubmit={handleAbsoluteSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-balance-absolute">Current Balance</Label>
                <div className="text-lg font-semibold text-muted-foreground">
                  R{currentBalance.toFixed(2)}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-balance">Target Balance *</Label>
                <Input
                  id="target-balance"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  value={targetBalance}
                  onChange={(e) => setTargetBalance(e.target.value)}
                  required
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Set the balance to this exact amount
                </p>
              </div>

              {targetBalance && !isNaN(parseFloat(targetBalance)) && (
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground">New Balance:</div>
                  <div className="text-lg font-semibold">
                    R{parseFloat(targetBalance).toFixed(2)}
                  </div>
                  {parseFloat(targetBalance) !== currentBalance && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Change: {parseFloat(targetBalance) > currentBalance ? '+' : ''}
                      R{(parseFloat(targetBalance) - currentBalance).toFixed(2)}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description-absolute">Description (Optional)</Label>
                <Textarea
                  id="description-absolute"
                  placeholder="e.g., Balance correction, Refund adjustment..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={loading}
                  rows={3}
                />
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
                  Set Balance
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          {/* Relative Tab - Add/Subtract */}
          <TabsContent value="relative" className="space-y-4 mt-4">
            <form onSubmit={handleRelativeSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-balance-relative">Current Balance</Label>
                <div className="text-lg font-semibold text-muted-foreground">
                  R{currentBalance.toFixed(2)}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Adjustment Type</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={isAdd ? 'default' : 'outline'}
                    onClick={() => setIsAdd(true)}
                    disabled={loading}
                    className="flex-1"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                  <Button
                    type="button"
                    variant={!isAdd ? 'default' : 'outline'}
                    onClick={() => setIsAdd(false)}
                    disabled={loading}
                    className="flex-1"
                  >
                    <Minus className="h-4 w-4 mr-2" />
                    Subtract
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="adjustment-amount">Adjustment Amount *</Label>
                <Input
                  id="adjustment-amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  value={adjustmentAmount}
                  onChange={(e) => setAdjustmentAmount(e.target.value)}
                  required
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Enter the amount to {isAdd ? 'add to' : 'subtract from'} the balance
                </p>
              </div>

              {adjustmentAmount && !isNaN(parseFloat(adjustmentAmount)) && parseFloat(adjustmentAmount) > 0 && (
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground">New Balance:</div>
                  <div className={`text-lg font-semibold ${previewBalance < 0 ? 'text-red-600' : ''}`}>
                    R{Math.max(0, previewBalance).toFixed(2)}
                  </div>
                  {previewBalance < 0 && (
                    <div className="text-xs text-red-600 mt-1">
                      Warning: This would result in a negative balance. The operation will be blocked.
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description-relative">Description (Optional)</Label>
                <Textarea
                  id="description-relative"
                  placeholder="e.g., Promotional credit, Refund, Correction..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={loading}
                  rows={3}
                />
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
                <Button type="submit" disabled={loading || (previewBalance < 0)}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isAdd ? 'Add' : 'Subtract'} Credits
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
