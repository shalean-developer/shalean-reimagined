'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Loader2, Plus } from 'lucide-react';
import { toast } from 'sonner';
import {
  getCustomerLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  setDefaultLocation,
  getAuthenticatedUser,
} from '../actions';
import { Location, LocationCreateInput, LocationUpdateInput } from '@/types/location';
import { LocationCard } from './components/LocationCard';
import { LocationForm } from './components/LocationForm';

export default function LocationsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Get authenticated user's email
  useQuery({
    queryKey: ['authenticated-user'],
    queryFn: async () => {
      const result = await getAuthenticatedUser();
      if (result.success && result.email) {
        setUserEmail(result.email);
        return result.email;
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });

  // Load locations data when user email is available
  useEffect(() => {
    const loadLocations = async () => {
      if (!userEmail) {
        setLoading(true);
        return;
      }

      try {
        setLoading(true);
        const result = await getCustomerLocations(userEmail);

        if (result.success && result.locations) {
          setLocations(result.locations);
        } else {
          toast.error(result.error || 'Failed to load locations');
        }
      } catch (error) {
        console.error('Error loading locations:', error);
        toast.error('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  const handleCreateLocation = async (data: LocationCreateInput) => {
    if (!userEmail) {
      toast.error('Please wait for authentication');
      return;
    }

    try {
      setSaving(true);
      const result = await createLocation(userEmail, undefined, data);

      if (result.success && result.location) {
        setLocations((prev) => [result.location!, ...prev]);
        setShowForm(false);
        setEditingLocation(null);
        toast.success('Location created successfully!');
      } else {
        toast.error(result.error || 'Failed to create location');
      }
    } catch (error) {
      console.error('Error creating location:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateLocation = async (data: LocationUpdateInput) => {
    if (!editingLocation) return;

    try {
      setSaving(true);
      const result = await updateLocation(editingLocation.id, data);

      if (result.success && result.location) {
        setLocations((prev) =>
          prev.map((loc) => (loc.id === editingLocation.id ? result.location! : loc))
        );
        setShowForm(false);
        setEditingLocation(null);
        toast.success('Location updated successfully!');
      } else {
        toast.error(result.error || 'Failed to update location');
      }
    } catch (error) {
      console.error('Error updating location:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteLocation = async (locationId: string) => {
    if (!confirm('Are you sure you want to delete this location?')) {
      return;
    }

    try {
      setDeleting(locationId);
      const result = await deleteLocation(locationId);

      if (result.success) {
        setLocations((prev) => prev.filter((loc) => loc.id !== locationId));
        toast.success('Location deleted successfully!');
      } else {
        toast.error(result.error || 'Failed to delete location');
      }
    } catch (error) {
      console.error('Error deleting location:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setDeleting(null);
    }
  };

  const handleSetDefault = async (locationId: string) => {
    if (!userEmail) {
      toast.error('Please wait for authentication');
      return;
    }

    try {
      const result = await setDefaultLocation(locationId, userEmail);

      if (result.success && result.location) {
        setLocations((prev) =>
          prev.map((loc) => ({
            ...loc,
            is_default: loc.id === locationId,
          }))
        );
        toast.success('Default location updated!');
      } else {
        toast.error(result.error || 'Failed to set default location');
      }
    } catch (error) {
      console.error('Error setting default location:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const handleEdit = (location: Location) => {
    setEditingLocation(location);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingLocation(null);
  };

  const handleNewLocation = () => {
    setEditingLocation(null);
    setShowForm(true);
  };

  if (loading || !userEmail) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Locations</h1>
          <p className="text-muted-foreground">Manage your saved locations</p>
        </div>
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Locations</h1>
          <p className="text-muted-foreground">Manage your saved locations</p>
        </div>
        {!showForm && (
          <Button onClick={handleNewLocation} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Location
          </Button>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Locations List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Saved Locations</h2>
          {locations.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <MapPin className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center mb-4">
                  You don't have any saved locations yet.
                </p>
                <Button onClick={handleNewLocation} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Location
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  onEdit={handleEdit}
                  onDelete={handleDeleteLocation}
                  onSetDefault={handleSetDefault}
                  isDeleting={deleting === location.id}
                />
              ))}
            </div>
          )}
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          {showForm ? (
            <LocationForm
              initialData={editingLocation || undefined}
              onSubmit={editingLocation ? handleUpdateLocation : handleCreateLocation}
              onCancel={handleCancelForm}
              isLoading={saving}
            />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <MapPin className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  {locations.length === 0
                    ? 'Create a new location to get started'
                    : 'Click "Add Location" to create a new location'}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

