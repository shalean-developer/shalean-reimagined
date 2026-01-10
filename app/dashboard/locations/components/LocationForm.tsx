'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, MapPin } from 'lucide-react';
import { LocationCreateInput, LocationUpdateInput } from '@/types/location';

interface LocationFormProps {
  initialData?: {
    id: string;
    nickname: string;
    address: string;
    apt_unit: string | null;
    suburb: string;
    city: string;
    postal_code: string | null;
    is_default: boolean;
  };
  onSubmit: (data: LocationCreateInput | LocationUpdateInput) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function LocationForm({ initialData, onSubmit, onCancel, isLoading = false }: LocationFormProps) {
  const [formData, setFormData] = useState({
    nickname: initialData?.nickname || '',
    address: initialData?.address || '',
    apt_unit: initialData?.apt_unit || '',
    suburb: initialData?.suburb || '',
    city: initialData?.city || '',
    postal_code: initialData?.postal_code || '',
    is_default: initialData?.is_default || false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.nickname.trim()) {
      return;
    }
    if (!formData.address.trim()) {
      return;
    }
    if (!formData.suburb.trim()) {
      return;
    }
    if (!formData.city.trim()) {
      return;
    }

    const submitData: LocationCreateInput | LocationUpdateInput = {
      nickname: formData.nickname.trim(),
      address: formData.address.trim(),
      apt_unit: formData.apt_unit.trim() || null,
      suburb: formData.suburb.trim(),
      city: formData.city.trim(),
      postal_code: formData.postal_code.trim() || null,
      is_default: formData.is_default,
    };

    await onSubmit(submitData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          {initialData ? 'Edit Location' : 'Add New Location'}
        </CardTitle>
        <CardDescription>
          {initialData
            ? 'Update your location details below.'
            : 'Save a location for quick access when booking services.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nickname */}
          <div className="space-y-2">
            <Label htmlFor="nickname">Nickname *</Label>
            <Input
              id="nickname"
              placeholder="e.g., Home, Office, Apartment"
              value={formData.nickname}
              onChange={(e) => handleInputChange('nickname', e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Street Address *</Label>
            <Input
              id="address"
              placeholder="123 Main Street"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Apartment/Unit */}
          <div className="space-y-2">
            <Label htmlFor="apt_unit">Apartment/Unit</Label>
            <Input
              id="apt_unit"
              placeholder="Apt 4B, Unit 12, etc."
              value={formData.apt_unit}
              onChange={(e) => handleInputChange('apt_unit', e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Suburb and City */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="suburb">Suburb *</Label>
              <Input
                id="suburb"
                placeholder="Sandton"
                value={formData.suburb}
                onChange={(e) => handleInputChange('suburb', e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                placeholder="Johannesburg"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Postal Code */}
          <div className="space-y-2">
            <Label htmlFor="postal_code">Postal Code</Label>
            <Input
              id="postal_code"
              placeholder="2196"
              value={formData.postal_code}
              onChange={(e) => handleInputChange('postal_code', e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Default Location */}
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="is_default"
              checked={formData.is_default}
              onCheckedChange={(checked) => handleInputChange('is_default', checked === true)}
              disabled={isLoading}
            />
            <Label
              htmlFor="is_default"
              className="text-sm font-normal cursor-pointer"
            >
              Set as default location
            </Label>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isLoading}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {initialData ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                initialData ? 'Update Location' : 'Create Location'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

