'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { allocateCreditsToCustomer } from '../../../actions';
import { Profile } from '@/types/profile';

interface AllocateCreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customer: Profile & { credit_balance: number };
  onSuccess?: () => void;
}

export function AllocateCreditsDialog({ open, onOpenChange, customer, onSuccess }: AllocateCreditsDialogProps) {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  // Reset form when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setAmount('');
      setDescription('');
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer) return;

    // Validation
    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      return;
    }

    try {
      setLoading(true);
      const result = await allocateCreditsToCustomer(
        customer.id,
        amountNum,
        description.trim() || undefined
      );

      if (result.success) {
        toast.success(`Successfully allocated R${amountNum.toFixed(2)} to ${customer.first_name} ${customer.last_name}`);
        onSuccess?.();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to allocate credits');
      }
    } catch (error) {
      console.error('Error allocating credits:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!customer) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Allocate Credits</DialogTitle>
          <DialogDescription>
            Add credits to {customer.first_name} {customer.last_name}'s account
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-balance">Current Balance</Label>
            <div className="text-lg font-semibold text-muted-foreground">
              R{(customer.credit_balance || 0).toFixed(2)}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount to Allocate *</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              disabled={loading}
            />
            <p className="text-xs text-muted-foreground">
              Enter the amount in Rands (e.g., 100.00)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="e.g., Promotional credit, Customer service adjustment..."
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
              Allocate Credits
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
