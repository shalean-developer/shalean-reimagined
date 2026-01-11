'use client';

import { useEffect, useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Heart, Star, CheckCircle2, XCircle, TrendingUp, Home, Calendar, Info } from 'lucide-react';
import { BookingFormData, CleanerWithAvailability } from '@/types/booking';
import { getAvailableCleanersWithCriteriaClient } from '../actions-client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { sortCleanersByCriteria, formatReliabilityScore, SortCriteria } from '@/lib/utils/cleaner-utils';
import { getServices } from '../../quote/actions';
import { supportsRecurringBookings, getAvailableFrequencies, isValidFrequencyForService, requiresTeamBooking } from '@/lib/utils/service-validation';
import { checkTeamAvailabilityForDateClient } from '../actions-client';

interface Step2ScheduleCleanerProps {
  formData: BookingFormData;
  updateFormData: (updates: Partial<BookingFormData>) => void;
}

const frequencyOptions = [
  { value: 'one-time', label: 'One-Time', subtitle: 'Single session', icon: Home, discount: null },
  { value: 'weekly', label: 'Weekly', subtitle: 'Every week', icon: Calendar, discount: 'Save 15%' },
  { value: 'bi-weekly', label: 'Bi-Weekly', subtitle: 'Every 2 weeks', icon: Calendar, discount: 'Save 10%' },
  { value: 'monthly', label: 'Monthly', subtitle: 'Once a month', icon: Calendar, discount: 'Save 5%' },
];

export function Step2ScheduleCleaner({ formData, updateFormData }: Step2ScheduleCleanerProps) {
  const [cleaners, setCleaners] = useState<CleanerWithAvailability[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>('best-match');
  const [mounted, setMounted] = useState(false);
  const [teamAvailability, setTeamAvailability] = useState<{
    availableTeams: number[];
    bookedTeams: number[];
    allTeamsBooked: boolean;
  } | null>(null);
  const [loadingTeams, setLoadingTeams] = useState(false);

  // Fetch services to get service name
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  // Get selected service
  const selectedService = useMemo(() => 
    services.find(s => s.id === formData.serviceId), 
    [services, formData.serviceId]
  );
  const serviceName = useMemo(() => selectedService?.name || '', [selectedService]);
  const supportsRecurring = useMemo(() => supportsRecurringBookings(serviceName), [serviceName]);
  const availableFrequencies = useMemo(() => getAvailableFrequencies(serviceName), [serviceName]);
  
  // Check if service requires team booking - default to false if service name is not yet available
  const isTeamBooking = useMemo(() => {
    return serviceName ? requiresTeamBooking(serviceName) : false;
  }, [serviceName]);

  // Ensure component is mounted before rendering Select to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-set frequency to 'one-time' if service doesn't support recurring and current frequency is not valid
  useEffect(() => {
    if (serviceName && !isValidFrequencyForService(serviceName, formData.cleaningFrequency)) {
      updateFormData({ cleaningFrequency: 'one-time' });
    }
  }, [serviceName, formData.cleaningFrequency, updateFormData]);

  // Fetch team availability for team-based services
  useEffect(() => {
    async function fetchTeamAvailability() {
      if (!isTeamBooking || !formData.serviceDate || !serviceName) {
        setTeamAvailability(null);
        return;
      }

      setLoadingTeams(true);
      try {
        const availability = await checkTeamAvailabilityForDateClient(
          formData.serviceDate,
          serviceName
        );
        setTeamAvailability(availability);
      } catch (error) {
        console.error('Error fetching team availability:', error);
        setTeamAvailability({
          availableTeams: [1, 2, 3],
          bookedTeams: [],
          allTeamsBooked: false,
        });
      } finally {
        setLoadingTeams(false);
      }
    }

    fetchTeamAvailability();
  }, [isTeamBooking, formData.serviceDate, serviceName]);

  // Fetch cleaners for regular services
  useEffect(() => {
    async function fetchCleaners() {
      // Skip fetching cleaners for team-based services
      if (isTeamBooking) {
        setCleaners([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const result = await getAvailableCleanersWithCriteriaClient({
          serviceSuburb: formData.serviceSuburb,
          serviceDate: formData.serviceDate,
          serviceTime: formData.serviceTime,
          serviceDuration: formData.serviceDuration,
        });
        if (result.success && result.cleaners) {
          // Sort cleaners by selected criteria
          const sorted = sortCleanersByCriteria(result.cleaners, sortCriteria);
          setCleaners(sorted);
        } else {
          // If fetch fails, set empty array to prevent errors
          setCleaners([]);
          console.warn('Failed to fetch cleaners:', result.error);
        }
      } catch (error) {
        console.error('Error fetching cleaners:', error);
        // Set empty array on error to prevent crashes
        setCleaners([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCleaners();
  }, [isTeamBooking, formData.serviceSuburb, formData.serviceDate, formData.serviceTime, formData.serviceDuration, sortCriteria]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Schedule & Cleaner</h2>
        <p className="text-muted-foreground">Choose your preferred date and time.</p>
      </div>

      {/* Service Address */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Service Address</h3>
        </div>
        <div className="space-y-4">
          <div className="grid md:grid-cols-[2fr_1fr] gap-4">
            <div className="space-y-2">
              <Label>Street Address *</Label>
              <Input
                placeholder="e.g., 123 Nelson Mandela Avenue"
                value={formData.serviceAddress}
                onChange={(e) => updateFormData({ serviceAddress: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Apt / Unit</Label>
              <Input
                placeholder="e.g., Apt 4B, Unit 12"
                value={formData.serviceAptUnit}
                onChange={(e) => updateFormData({ serviceAptUnit: e.target.value })}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Suburb *</Label>
              <Input
                value={formData.serviceSuburb}
                onChange={(e) => updateFormData({ serviceSuburb: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>City *</Label>
              <Input
                value={formData.serviceCity}
                onChange={(e) => updateFormData({ serviceCity: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team or Cleaner Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold">
              {isTeamBooking
                ? 'Select a team'
                : formData.numberOfCleaners > 1 
                ? `Select ${formData.numberOfCleaners} cleaners`
                : 'Select your preferred cleaner'}
            </h3>
            {isTeamBooking && formData.serviceDate && (
              <p className="text-sm text-muted-foreground">
                Each team can be booked once per day. Teams work for the entire day.
              </p>
            )}
            {!isTeamBooking && formData.numberOfCleaners > 1 && (
              <p className="text-sm text-muted-foreground">
                {(formData.preferredCleanerIds || []).length} of {formData.numberOfCleaners} selected
              </p>
            )}
          </div>
          {mounted && !isTeamBooking && (
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-criteria" className="text-sm text-muted-foreground">Sort by:</Label>
              <Select value={sortCriteria} onValueChange={(value) => setSortCriteria(value as SortCriteria)}>
                <SelectTrigger id="sort-criteria" className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-match">Best Match</SelectItem>
                  <SelectItem value="highest-rated">Highest Rated</SelectItem>
                  <SelectItem value="most-reliable">Most Reliable</SelectItem>
                  <SelectItem value="most-experienced">Most Experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        {isTeamBooking ? (
          // Team Selection UI
          loadingTeams ? (
            <div className="text-center py-8 text-muted-foreground">Loading team availability...</div>
          ) : !formData.serviceDate ? (
            <div className="text-center py-8 text-muted-foreground">
              Please select a date first to see team availability
            </div>
          ) : teamAvailability?.allTeamsBooked ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-2">All teams are booked for this date.</p>
              <p className="text-sm text-muted-foreground">Please select a different date.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((teamNumber) => {
                const isAvailable = teamAvailability?.availableTeams.includes(teamNumber) ?? false;
                const isBooked = teamAvailability?.bookedTeams.includes(teamNumber) ?? false;
                const isSelected = formData.teamNumber === teamNumber;
                const isDisabled = isBooked;

                const handleTeamClick = () => {
                  if (isDisabled) return;
                  updateFormData({
                    teamNumber: isSelected ? null : teamNumber,
                    preferredCleanerIds: [], // Clear cleaner selection for team bookings
                  });
                };

                return (
                  <button
                    key={teamNumber}
                    type="button"
                    onClick={handleTeamClick}
                    disabled={isDisabled}
                    className={`relative p-6 rounded-xl border-2 transition-all text-center ${
                      isSelected
                        ? 'border-primary bg-primary/5'
                        : isDisabled
                        ? 'border-destructive/50 bg-muted/50 opacity-60 cursor-not-allowed'
                        : 'border-border hover:border-primary/50 bg-background'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center z-10">
                        <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}

                    {isAvailable && !isBooked && (
                      <Badge
                        variant="default"
                        className="absolute top-2 left-2 text-xs bg-green-500 hover:bg-green-600"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Available
                      </Badge>
                    )}

                    {isBooked && (
                      <Badge
                        variant="destructive"
                        className="absolute top-2 left-2 text-xs"
                      >
                        <XCircle className="w-3 h-3 mr-1" />
                        Booked
                      </Badge>
                    )}

                    <div className="flex flex-col items-center gap-3 mt-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">Team {teamNumber}</span>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">Team {teamNumber}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {isBooked ? 'Already booked' : 'Available for booking'}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )
        ) : loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading cleaners...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* No preference option - only show when numberOfCleaners === 1 and no available cleaners */}
            {cleaners.length === 0 && formData.numberOfCleaners === 1 && (
              <button
                type="button"
                onClick={() => updateFormData({ preferredCleanerIds: [] })}
                className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                  (formData.preferredCleanerIds || []).length === 0
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50 bg-background'
                }`}
              >
                {(formData.preferredCleanerIds || []).length === 0 && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg">?</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm">No preference</p>
                    <p className="text-xs text-muted-foreground mt-1">Best available</p>
                  </div>
                </div>
              </button>
            )}

            {/* Cleaner cards */}
            {cleaners.map((cleaner) => {
              const preferredCleanerIds = formData.preferredCleanerIds || [];
              const isSelected = preferredCleanerIds.includes(cleaner.id);
              const reliabilityScore = cleaner.reliability_score || 0;
              const isHighReliability = reliabilityScore >= 80;
              const isAvailable = cleaner.isAvailableForSlot !== false;
              const hasConflict = cleaner.bookingConflict === true;
              const isMultiSelect = formData.numberOfCleaners > 1;
              const isLimitReached = isMultiSelect && preferredCleanerIds.length >= formData.numberOfCleaners;
              const isDisabled = hasConflict || (isLimitReached && !isSelected);

              const handleCleanerClick = () => {
                if (isDisabled) return;
                
                if (isMultiSelect) {
                  // Multi-select mode: toggle selection
                  if (isSelected) {
                    // Deselect
                    updateFormData({
                      preferredCleanerIds: preferredCleanerIds.filter(id => id !== cleaner.id)
                    });
                  } else {
                    // Select (only if under limit)
                    if (preferredCleanerIds.length < formData.numberOfCleaners) {
                      updateFormData({
                        preferredCleanerIds: [...preferredCleanerIds, cleaner.id]
                      });
                    }
                  }
                } else {
                  // Single select mode: replace selection
                  updateFormData({
                    preferredCleanerIds: isSelected ? [] : [cleaner.id]
                  });
                }
              };

              return (
                <button
                  key={cleaner.id}
                  type="button"
                  onClick={handleCleanerClick}
                  disabled={isDisabled}
                  className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                    isSelected
                      ? 'border-primary bg-primary/5'
                      : isDisabled
                      ? 'border-destructive/50 bg-muted/50 opacity-60 cursor-not-allowed'
                      : 'border-border hover:border-primary/50 bg-background'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center z-10">
                      <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}

                  {/* Availability Badge */}
                  {!hasConflict && isAvailable && formData.serviceDate && formData.serviceTime && (
                    <Badge
                      variant="default"
                      className="absolute top-2 left-2 text-xs bg-green-500 hover:bg-green-600"
                    >
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  )}
                  {hasConflict && (
                    <Badge
                      variant="destructive"
                      className="absolute top-2 left-2 text-xs"
                    >
                      <XCircle className="w-3 h-3 mr-1" />
                      Booked
                    </Badge>
                  )}

                  {/* High Reliability Badge */}
                  {isHighReliability && !hasConflict && (
                    <Badge
                      variant="secondary"
                      className="absolute top-2 left-2 text-xs bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <TrendingUp className="w-3 h-3 mr-1" />
                      High Reliability
                    </Badge>
                  )}

                  <div className="flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-3">
                      {cleaner.avatar_url || cleaner.photo_url ? (
                        <Avatar className="w-14 h-14">
                          <AvatarImage src={cleaner.avatar_url || cleaner.photo_url || ''} alt={cleaner.name} />
                          <AvatarFallback>{cleaner.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xl font-semibold">{cleaner.name.charAt(0)}</span>
                        </div>
                      )}
                      <div className="flex-1 text-left min-w-0">
                        <p className="font-semibold text-sm flex items-baseline gap-1" title={cleaner.name}>
                          {(() => {
                            const nameParts = cleaner.name.trim().split(/\s+/);
                            if (nameParts.length <= 1) {
                              return <span className="truncate">{cleaner.name}</span>;
                            }
                            const firstName = nameParts[0];
                            const surname = nameParts.slice(1).join(' ');
                            return (
                              <>
                                <span className="whitespace-nowrap">{firstName}</span>
                                {surname && <span className="truncate min-w-0"> {surname}</span>}
                              </>
                            );
                          })()}
                        </p>
                        {cleaner.rating && (
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{cleaner.rating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Reliability Score */}
                    {reliabilityScore > 0 && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Reliability</span>
                          <span className="font-semibold">{formatReliabilityScore(reliabilityScore)}</span>
                        </div>
                        <Progress value={reliabilityScore} className="h-2" />
                      </div>
                    )}

                    {/* Additional Info */}
                    <div className="space-y-1 text-xs text-muted-foreground">
                      {cleaner.specialties && cleaner.specialties.length > 0 && (
                        <p className="line-clamp-1">{cleaner.specialties.slice(0, 2).join(', ')}</p>
                      )}
                      {cleaner.years_experience && (
                        <p>{cleaner.years_experience} year{cleaner.years_experience > 1 ? 's' : ''} experience</p>
                      )}
                      {cleaner.total_bookings !== undefined && cleaner.total_bookings > 0 && (
                        <p>{cleaner.total_bookings} booking{cleaner.total_bookings > 1 ? 's' : ''}</p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
        {!isTeamBooking && formData.numberOfCleaners > 1 && (formData.preferredCleanerIds || []).length >= formData.numberOfCleaners && (
          <p className="text-sm text-muted-foreground text-center">
            You've selected {formData.numberOfCleaners} cleaners. You can deselect any cleaner to choose a different one.
          </p>
        )}
        {!isTeamBooking && formData.numberOfCleaners > 1 && (formData.preferredCleanerIds || []).length < formData.numberOfCleaners && cleaners.length > 0 && (
          <p className="text-sm text-muted-foreground text-center">
            Please select {formData.numberOfCleaners - (formData.preferredCleanerIds || []).length} more cleaner{formData.numberOfCleaners - (formData.preferredCleanerIds || []).length > 1 ? 's' : ''}.
          </p>
        )}
        {isTeamBooking && !formData.teamNumber && formData.serviceDate && !teamAvailability?.allTeamsBooked && (
          <p className="text-sm text-muted-foreground text-center">
            Please select a team to continue
          </p>
        )}
      </div>

      {/* Cleaning Frequency */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">How often do you need cleaning?</h3>
          {!supportsRecurring && serviceName && (
            <div className="group relative">
              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              <div className="absolute left-0 top-6 z-10 w-64 p-2 bg-popover border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-xs">
                Recurring bookings are only available for Standard Cleaning and Airbnb Cleaning services.
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {frequencyOptions.map((option) => {
            const isSelected = formData.cleaningFrequency === option.value;
            const isAvailable = availableFrequencies.includes(option.value as any);
            const isDisabled = !isAvailable;
            
            return (
              <button
                key={option.value}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (isAvailable) {
                    // Update frequency immediately - this triggers real-time price recalculation
                    // The useMemo in layout.tsx will detect formData.cleaningFrequency change and recalculate
                    updateFormData({ cleaningFrequency: option.value as any });
                  }
                }}
                disabled={isDisabled}
                className={`relative p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : isDisabled
                    ? 'border-border bg-muted/30 opacity-50 cursor-not-allowed'
                    : 'border-border hover:border-primary/50 bg-background'
                }`}
                title={isDisabled ? 'Recurring bookings are only available for Standard Cleaning and Airbnb Cleaning' : undefined}
              >
                <div className="flex flex-col items-center gap-2">
                  {option.icon && (
                    <option.icon className={`w-6 h-6 ${isDisabled ? 'text-muted-foreground' : 'text-primary'}`} />
                  )}
                  <div className="text-center">
                    <p className={`font-semibold ${isDisabled ? 'text-muted-foreground' : ''}`}>{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.subtitle}</p>
                    {option.discount && isAvailable && supportsRecurring && (
                      <p className="text-xs text-green-600 font-medium mt-1">{option.discount}</p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

