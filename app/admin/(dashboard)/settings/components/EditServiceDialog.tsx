'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { createService, updateService, getServicePrice, updateServicePrice } from '../../../actions';
import { Service } from '@/types/quote';
import { getIcon } from '@/lib/icon-mapper';

// Available icons from icon-mapper
const AVAILABLE_ICONS = [
  'Home',
  'Star',
  'Calendar',
  'Building2',
  'Armchair',
  'Grid3X3',
  'Layers',
  'LayoutGrid',
  'Refrigerator',
  'CookingPot',
  'Shirt',
  'WashingMachine',
  'Bed',
  'Wind',
];

interface EditServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service | null;
  isCreating?: boolean;
  onSuccess?: () => void;
}

export function EditServiceDialog({ open, onOpenChange, service, isCreating = false, onSuccess }: EditServiceDialogProps) {
  const [loading, setLoading] = useState(false);
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    icon_name: 'Home',
    display_order: 0,
    is_active: true,
    price: 0,
  });

  // Initialize form data when service changes
  useEffect(() => {
    if (service) {
      setFormData(prev => ({
        name: service.name || '',
        icon_name: service.icon_name || 'Home',
        display_order: service.display_order ?? 0,
        is_active: service.is_active ?? true,
        price: prev.price, // Keep price, will be loaded separately
      }));
      
      // Load price
      setLoadingPrice(true);
      getServicePrice(service.id).then((result) => {
        if (result.success && result.pricingRule) {
          setFormData(prev => ({ ...prev, price: result.pricingRule?.price || 0 }));
        }
        setLoadingPrice(false);
      }).catch(() => {
        setLoadingPrice(false);
      });
    } else if (isCreating) {
      setFormData({
        name: '',
        icon_name: 'Home',
        display_order: 0,
        is_active: true,
        price: 0,
      });
    }
  }, [service, isCreating]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name?.trim()) {
      toast.error('Name is required');
      return;
    }
    if (!formData.icon_name?.trim()) {
      toast.error('Icon is required');
      return;
    }

    try {
      setLoading(true);
      
      if (isCreating || !service) {
        const result = await createService({
          name: formData.name,
          icon_name: formData.icon_name,
          display_order: formData.display_order,
          is_active: formData.is_active,
        });
        if (result.success && result.service) {
          // Create/update price if provided
          if (formData.price > 0) {
            await updateServicePrice(result.service.id, formData.price);
          }
          toast.success('Service created successfully');
          onSuccess?.();
          onOpenChange(false);
        } else {
          toast.error(result.error || 'Failed to create service');
        }
      } else {
        const serviceResult = await updateService(service.id, {
          name: formData.name,
          icon_name: formData.icon_name,
          display_order: formData.display_order,
          is_active: formData.is_active,
        });
        if (serviceResult.success && serviceResult.service) {
          // Update price
          await updateServicePrice(service.id, formData.price);
          toast.success('Service updated successfully');
          onSuccess?.();
          onOpenChange(false);
        } else {
          toast.error(serviceResult.error || 'Failed to update service');
        }
      }
    } catch (error) {
      console.error('Error saving service:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (isCreating && !service) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Service</DialogTitle>
            <DialogDescription>
              Add a new main cleaning service to the platform.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                disabled={loading}
                placeholder="e.g., Standard Cleaning"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="icon">Icon *</Label>
              <Select
                value={formData.icon_name}
                onValueChange={(value) => setFormData(prev => ({ ...prev, icon_name: value }))}
                disabled={loading}
              >
                <SelectTrigger id="icon">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_ICONS.map((iconName) => {
                    const IconComponent = getIcon(iconName);
                    return (
                      <SelectItem key={iconName} value={iconName}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          <span>{iconName}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="display_order">Display Order</Label>
              <Input
                id="display_order"
                type="number"
                min="0"
                value={formData.display_order}
                onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                disabled={loading}
              />
              <p className="text-sm text-muted-foreground">
                Lower numbers appear first. Services are ordered by this value.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Base Price (R)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                disabled={loading || loadingPrice}
                placeholder="0.00"
              />
              <p className="text-sm text-muted-foreground">
                Base price for this service
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                disabled={loading}
              />
              <Label htmlFor="is_active" className="cursor-pointer">
                Active Status
              </Label>
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
                Create Service
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
          <DialogDescription>
            Update service information. Changes will be saved immediately.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <Label htmlFor="icon">Icon *</Label>
            <Select
              value={formData.icon_name}
              onValueChange={(value) => setFormData(prev => ({ ...prev, icon_name: value }))}
              disabled={loading}
            >
              <SelectTrigger id="icon">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_ICONS.map((iconName) => {
                  const IconComponent = getIcon(iconName);
                  return (
                    <SelectItem key={iconName} value={iconName}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{iconName}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="display_order">Display Order</Label>
            <Input
              id="display_order"
              type="number"
              min="0"
              value={formData.display_order}
              onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
              disabled={loading}
            />
            <p className="text-sm text-muted-foreground">
              Lower numbers appear first. Services are ordered by this value.
            </p>
          </div>

          <div className="space-y-2">
              <Label htmlFor="price">Base Price (R)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                disabled={loading || loadingPrice}
                placeholder="0.00"
              />
              <p className="text-sm text-muted-foreground">
                Base price for this service
              </p>
            </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_active"
              checked={formData.is_active}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
              disabled={loading}
            />
            <Label htmlFor="is_active" className="cursor-pointer">
              Active Status
            </Label>
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
  );
}
