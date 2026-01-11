'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCurrentCleaner, updateCleanerAvailability } from '../../actions';
import { Cleaner } from '@/types/booking';
import { Loader2, User, Phone, Mail, MapPin, Clock, Star, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const daysOfWeek = [
  { key: 'availableMonday', label: 'Monday' },
  { key: 'availableTuesday', label: 'Tuesday' },
  { key: 'availableWednesday', label: 'Wednesday' },
  { key: 'availableThursday', label: 'Thursday' },
  { key: 'availableFriday', label: 'Friday' },
  { key: 'availableSaturday', label: 'Saturday' },
  { key: 'availableSunday', label: 'Sunday' },
] as const;

export default function CleanerProfilePage() {
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState({
    isAvailable: true,
    availableMonday: true,
    availableTuesday: true,
    availableWednesday: true,
    availableThursday: true,
    availableFriday: true,
    availableSaturday: true,
    availableSunday: true,
  });

  // Get current cleaner
  const { data: cleanerData, refetch } = useQuery({
    queryKey: ['current-cleaner'],
    queryFn: async () => {
      const result = await getCurrentCleaner();
      if (result.success && result.cleaner) {
        setCleaner(result.cleaner);
        setAvailability({
          isAvailable: result.cleaner.is_available ?? true,
          availableMonday: result.cleaner.available_monday ?? true,
          availableTuesday: result.cleaner.available_tuesday ?? true,
          availableWednesday: result.cleaner.available_wednesday ?? true,
          availableThursday: result.cleaner.available_thursday ?? true,
          availableFriday: result.cleaner.available_friday ?? true,
          availableSaturday: result.cleaner.available_saturday ?? true,
          availableSunday: result.cleaner.available_sunday ?? true,
        });
        return result.cleaner;
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });

  const handleAvailabilityUpdate = async () => {
    if (!cleaner?.id) return;

    setLoading(true);
    try {
      const result = await updateCleanerAvailability(cleaner.id, availability);
      if (result.success) {
        toast.success('Availability updated successfully');
        refetch();
      } else {
        toast.error(result.error || 'Failed to update availability');
      }
    } catch (error) {
      console.error('Error updating availability:', error);
      toast.error('Failed to update availability');
    } finally {
      setLoading(false);
    }
  };

  const handleDayToggle = (dayKey: typeof daysOfWeek[number]['key']) => {
    setAvailability(prev => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

  const handleOverallToggle = () => {
    setAvailability(prev => ({
      ...prev,
      isAvailable: !prev.isAvailable,
    }));
  };

  if (!cleaner) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Profile</h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-1">
          Manage your profile and availability
        </p>
      </div>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <Label className="text-sm text-muted-foreground">Name</Label>
              <p className="font-medium">{cleaner.name}</p>
            </div>
          </div>

          {cleaner.phone && (
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <Label className="text-sm text-muted-foreground">Phone</Label>
                <p className="font-medium">{cleaner.phone}</p>
              </div>
            </div>
          )}

          {cleaner.email && (
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <Label className="text-sm text-muted-foreground">Email</Label>
                <p className="font-medium">{cleaner.email}</p>
              </div>
            </div>
          )}

          {cleaner.rating && (
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-muted-foreground mt-0.5 fill-yellow-400 text-yellow-400" />
              <div>
                <Label className="text-sm text-muted-foreground">Rating</Label>
                <p className="font-medium">{cleaner.rating.toFixed(1)} ⭐</p>
              </div>
            </div>
          )}

          {cleaner.reliability_score !== null && cleaner.reliability_score !== undefined && (
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <Label className="text-sm text-muted-foreground">Reliability Score</Label>
                <p className="font-medium">{cleaner.reliability_score.toFixed(1)}%</p>
              </div>
            </div>
          )}

          {cleaner.areas && cleaner.areas.length > 0 && (
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <Label className="text-sm text-muted-foreground">Service Areas</Label>
                <p className="font-medium">{cleaner.areas.join(', ')}</p>
              </div>
            </div>
          )}

          {cleaner.bio && (
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <Label className="text-sm text-muted-foreground">Bio</Label>
                <p className="font-medium">{cleaner.bio}</p>
              </div>
            </div>
          )}

          {cleaner.years_experience && (
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <Label className="text-sm text-muted-foreground">Experience</Label>
                <p className="font-medium">{cleaner.years_experience} {cleaner.years_experience === 1 ? 'year' : 'years'}</p>
              </div>
            </div>
          )}

          {cleaner.specialties && cleaner.specialties.length > 0 && (
            <div>
              <Label className="text-sm text-muted-foreground">Specialties</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {cleaner.specialties.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Availability Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Availability Settings</CardTitle>
          <CardDescription>
            Set your overall availability and day-specific availability
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Overall Availability */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="overall-availability">Overall Availability</Label>
              <p className="text-sm text-muted-foreground">
                {availability.isAvailable ? 'You are available for bookings' : 'You are currently unavailable'}
              </p>
            </div>
            <Switch
              id="overall-availability"
              checked={availability.isAvailable}
              onCheckedChange={handleOverallToggle}
            />
          </div>

          {/* Day-specific Availability */}
          <div className="space-y-3">
            <Label>Day-specific Availability</Label>
            <div className="grid gap-3">
              {daysOfWeek.map((day) => (
                <div key={day.key} className="flex items-center justify-between">
                  <Label htmlFor={day.key}>{day.label}</Label>
                  <Switch
                    id={day.key}
                    checked={availability[day.key]}
                    onCheckedChange={() => handleDayToggle(day.key)}
                    disabled={!availability.isAvailable}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleAvailabilityUpdate}
            disabled={loading}
            className="w-full sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Availability'
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
