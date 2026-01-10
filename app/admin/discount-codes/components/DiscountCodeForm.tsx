'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { DiscountCode } from '@/types/booking';
import { X } from 'lucide-react';

interface DiscountCodeFormProps {
  code: DiscountCode | null;
  onClose: () => void;
  onSuccess: () => void;
}

export function DiscountCodeForm({
  code,
  onClose,
  onSuccess,
}: DiscountCodeFormProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    code: code?.code || '',
    discount_type: code?.discount_type || 'percentage',
    discount_value: code?.discount_value?.toString() || '',
    max_discount_amount: code?.max_discount_amount?.toString() || '',
    min_purchase_amount: code?.min_purchase_amount?.toString() || '',
    max_uses: code?.max_uses?.toString() || '',
    valid_from: code?.valid_from || '',
    valid_until: code?.valid_until || '',
    is_active: code?.is_active ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const payload: any = {
        code: formData.code.trim().toUpperCase(),
        discount_type: formData.discount_type,
        discount_value: parseFloat(formData.discount_value),
        valid_from: formData.valid_from,
        valid_until: formData.valid_until,
        is_active: formData.is_active,
      };

      // Add optional fields if they have values
      if (formData.max_discount_amount.trim()) {
        payload.max_discount_amount = parseFloat(formData.max_discount_amount);
      }
      if (formData.min_purchase_amount.trim()) {
        payload.min_purchase_amount = parseFloat(formData.min_purchase_amount);
      }
      if (formData.max_uses.trim()) {
        payload.max_uses = parseInt(formData.max_uses, 10);
      }

      const url = code ? `/api/discount-codes/${code.id}` : '/api/discount-codes';
      const method = code ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error) {
          setErrors({ submit: result.error });
        } else if (result.details) {
          setErrors({ submit: result.details });
        } else {
          setErrors({ submit: 'Failed to save discount code' });
        }
        setLoading(false);
        return;
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving discount code:', error);
      setErrors({
        submit: error instanceof Error ? error.message : 'An unexpected error occurred',
      });
      setLoading(false);
    }
  };

  const handleChange = (
    field: string,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {code ? 'Edit Discount Code' : 'Create Discount Code'}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {errors.submit && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
              {errors.submit}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="code">
                Code <span className="text-destructive">*</span>
              </Label>
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => handleChange('code', e.target.value.toUpperCase())}
                placeholder="SAVE10"
                required
                disabled={!!code} // Don't allow editing code once created
              />
              {errors.code && (
                <p className="text-sm text-destructive">{errors.code}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount_type">
                Discount Type <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.discount_type}
                onValueChange={(value) => handleChange('discount_type', value)}
              >
                <SelectTrigger id="discount_type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">Percentage (%)</SelectItem>
                  <SelectItem value="fixed">Fixed Amount (R)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount_value">
                Discount Value <span className="text-destructive">*</span>
              </Label>
              <Input
                id="discount_value"
                type="number"
                step="0.01"
                min="0"
                max={formData.discount_type === 'percentage' ? '100' : undefined}
                value={formData.discount_value}
                onChange={(e) => handleChange('discount_value', e.target.value)}
                placeholder={
                  formData.discount_type === 'percentage' ? '10' : '50.00'
                }
                required
              />
              <p className="text-xs text-muted-foreground">
                {formData.discount_type === 'percentage'
                  ? 'Enter percentage (0-100)'
                  : 'Enter amount in ZAR'}
              </p>
            </div>

            {formData.discount_type === 'percentage' && (
              <div className="space-y-2">
                <Label htmlFor="max_discount_amount">Max Discount Amount (R)</Label>
                <Input
                  id="max_discount_amount"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.max_discount_amount}
                  onChange={(e) => handleChange('max_discount_amount', e.target.value)}
                  placeholder="100.00"
                />
                <p className="text-xs text-muted-foreground">
                  Optional: Maximum discount amount for percentage discounts
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="min_purchase_amount">Min Purchase Amount (R)</Label>
              <Input
                id="min_purchase_amount"
                type="number"
                step="0.01"
                min="0"
                value={formData.min_purchase_amount}
                onChange={(e) => handleChange('min_purchase_amount', e.target.value)}
                placeholder="100.00"
              />
              <p className="text-xs text-muted-foreground">
                Optional: Minimum purchase amount required to use this code
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max_uses">Max Uses</Label>
              <Input
                id="max_uses"
                type="number"
                min="1"
                step="1"
                value={formData.max_uses}
                onChange={(e) => handleChange('max_uses', e.target.value)}
                placeholder="100"
              />
              <p className="text-xs text-muted-foreground">
                Optional: Maximum number of times this code can be used
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="valid_from">
                Valid From <span className="text-destructive">*</span>
              </Label>
              <Input
                id="valid_from"
                type="date"
                value={formData.valid_from}
                onChange={(e) => handleChange('valid_from', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="valid_until">
                Valid Until <span className="text-destructive">*</span>
              </Label>
              <Input
                id="valid_until"
                type="date"
                value={formData.valid_until}
                onChange={(e) => handleChange('valid_until', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_active"
              checked={formData.is_active}
              onCheckedChange={(checked) => handleChange('is_active', checked)}
            />
            <Label htmlFor="is_active">Active</Label>
          </div>

          {code && (
            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm font-medium mb-2">Usage Statistics</p>
              <p className="text-sm text-muted-foreground">
                Used: {code.used_count} / {code.max_uses || '∞'}
              </p>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : code ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

