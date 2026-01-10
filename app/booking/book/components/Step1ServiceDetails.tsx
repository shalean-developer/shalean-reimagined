'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar as CalendarIcon, Loader2, Info } from 'lucide-react';
import { BookingFormData, PricingRule, TimeSlotAvailability } from '@/types/booking';
import { getServices, getAdditionalServices, getHomeDetailOptions, getCleaningEquipment } from '../../quote/actions';
import { getWorkingHours, getWorkingHoursFromOptions, checkAvailabilityForAllSlots } from '../actions';
import { getIcon } from '@/lib/icon-mapper';
import { format, parse } from 'date-fns';
import { calculateServiceDuration } from '@/lib/utils/duration-calculator';
import { generateSlug } from '@/lib/utils/slug';

interface Step1ServiceDetailsProps {
  formData: BookingFormData;
  updateFormData: (updates: Partial<BookingFormData>) => void;
  pricingRules?: PricingRule[];
}

export function Step1ServiceDetails({ formData, updateFormData, pricingRules = [] }: Step1ServiceDetailsProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  
  // Ensure component is mounted on client to avoid hydration mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Fetch services
  const { data: services = [], isLoading: isLoadingServices } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  // Handle service selection with URL update
  const handleServiceSelect = (serviceId: string) => {
    updateFormData({ serviceId });
    // Update URL to include service slug
    const service = services.find(s => s.id === serviceId);
    if (service) {
      const slug = generateSlug(service.name);
      router.push(`/booking/details/${slug}`);
    }
  };

  // Fetch additional services
  const { data: additionalServices = [], isLoading: isLoadingAdditionalServices } = useQuery({
    queryKey: ['additional-services', formData.serviceId],
    queryFn: () => getAdditionalServices(formData.serviceId || undefined),
    enabled: true,
    staleTime: 5 * 60 * 1000,
  });

  // Fetch bedrooms
  const { data: bedroomOptions = [] } = useQuery({
    queryKey: ['home-detail-options', 'bedrooms'],
    queryFn: () => getHomeDetailOptions('bedrooms'),
    staleTime: 5 * 60 * 1000,
  });

  // Fetch bathrooms
  const { data: bathroomOptions = [] } = useQuery({
    queryKey: ['home-detail-options', 'bathrooms'],
    queryFn: () => getHomeDetailOptions('bathrooms'),
    staleTime: 5 * 60 * 1000,
  });

  // Fetch carpet types (for carpet cleaning service)
  const { data: carpetTypeOptions = [] } = useQuery({
    queryKey: ['home-detail-options', 'carpet_type'],
    queryFn: () => getHomeDetailOptions('carpet_type'),
    staleTime: 5 * 60 * 1000,
  });

  // Fetch room status (for carpet cleaning service)
  const { data: roomStatusOptions = [] } = useQuery({
    queryKey: ['home-detail-options', 'room_status'],
    queryFn: () => getHomeDetailOptions('room_status'),
    staleTime: 5 * 60 * 1000,
  });

  // Fetch working hours
  const { data: workingHours = [] } = useQuery({
    queryKey: ['working-hours'],
    queryFn: async () => {
      const hours = await getWorkingHours();
      if (hours.length === 0) {
        // Fallback to home_detail_options
        const options = await getWorkingHoursFromOptions();
        return options.map((opt, idx) => ({
          id: `wh-${idx}`,
          start_time: opt.value,
          end_time: opt.value.split('-')[1] || '',
          duration_hours: 3.5,
          day_of_week: null,
          is_active: true,
          display_order: idx + 1,
          max_bookings_per_slot: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }));
      }
      // Deduplicate by start_time to prevent duplicates
      const uniqueHours = hours.filter((hour, index, self) => 
        index === self.findIndex((h) => h.start_time === hour.start_time)
      );
      return uniqueHours;
    },
    staleTime: 5 * 60 * 1000,
  });

  // Fetch cleaning equipment
  const { data: cleaningEquipment = [] } = useQuery({
    queryKey: ['cleaning-equipment'],
    queryFn: getCleaningEquipment,
    staleTime: 5 * 60 * 1000,
  });

  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [equipmentInfoOpen, setEquipmentInfoOpen] = useState(false);
  const [showAvailabilityDialog, setShowAvailabilityDialog] = useState(false);
  const [slotAvailability, setSlotAvailability] = useState<Record<string, TimeSlotAvailability>>({});
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [unavailableSlotTime, setUnavailableSlotTime] = useState<string | null>(null);

  const selectedDate = formData.serviceDate 
    ? parse(formData.serviceDate, 'yyyy-MM-dd', new Date())
    : undefined;

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const dateString = format(date, 'yyyy-MM-dd');
      updateFormData({ serviceDate: dateString });
      setCalendarOpen(false);
      // Reset selected time when date changes
      updateFormData({ serviceTime: '' });
      // Check availability for all slots
      checkSlotAvailability(dateString);
    }
  };

  // Check availability for all time slots when date is selected
  const checkSlotAvailability = async (date: string) => {
    if (!date || workingHours.length === 0) return;
    
    setIsCheckingAvailability(true);
    try {
      // Use the current service duration, or default to 3.5 hours
      const durationToUse = formData.serviceDuration > 0 ? formData.serviceDuration : 3.5;
      
      const availability = await checkAvailabilityForAllSlots(
        date,
        workingHours,
        durationToUse
      );
      setSlotAvailability(availability);
      
      // Check if all slots are unavailable
      const allUnavailable = Object.values(availability).every(
        (avail) => !avail.available || avail.availableCleanersCount === 0
      );
      
      if (allUnavailable && Object.keys(availability).length > 0) {
        setUnavailableSlotTime(null); // All slots unavailable
        setShowAvailabilityDialog(true);
      }
    } catch (error) {
      console.error('Error checking slot availability:', error);
    } finally {
      setIsCheckingAvailability(false);
    }
  };

  // Handle time slot selection with availability check
  const handleTimeSlotChange = (value: string) => {
    const availability = slotAvailability[value];
    
    // If slot is unavailable, show dialog instead of selecting
    // This handles cases where the item wasn't properly disabled
    if (availability && (!availability.available || availability.availableCleanersCount === 0)) {
      setUnavailableSlotTime(value);
      setShowAvailabilityDialog(true);
      // Don't update the form data for unavailable slots
      return;
    }
    
    updateFormData({ serviceTime: value });
  };

  // Helper function to check if selected service is carpet cleaning
  const selectedService = services.find((s) => s.id === formData.serviceId);
  const isCarpetCleaning = selectedService?.name.toLowerCase().includes('carpet') ?? false;
  const isStandardOrAirbnb = (selectedService?.name.toLowerCase().includes('standard') || 
                             selectedService?.name.toLowerCase().includes('airbnb')) ?? false;

  // Auto-calculate duration based on bedrooms, bathrooms, and additional services
  // Only for non-carpet cleaning services
  useEffect(() => {
    if (!isCarpetCleaning && formData.serviceId) {
      const calculatedDuration = calculateServiceDuration(
        formData.bedrooms,
        formData.bathrooms,
        formData.additionalServices
      );
      // Only update if the calculated duration is different from current to avoid infinite loops
      if (Math.abs(calculatedDuration - formData.serviceDuration) > 0.01) {
        updateFormData({ serviceDuration: calculatedDuration });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.bedrooms, formData.bathrooms, formData.additionalServices.join(','), formData.serviceId, isCarpetCleaning]);

  // Recheck availability when service duration changes (for carpet cleaning)
  useEffect(() => {
    if (formData.serviceDate && isCarpetCleaning) {
      checkSlotAvailability(formData.serviceDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.serviceDuration, isCarpetCleaning]);

  // Format duration for display
  const formatDuration = (hours: number): string => {
    if (hours % 1 === 0) {
      return `${hours} hours`;
    }
    return `${hours.toFixed(1)} hours`;
  };

  // Prevent hydration mismatch by only rendering after mount
  if (!isMounted) {
    return (
      <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Select Your Service */}
      <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <h3 className="text-lg font-semibold text-foreground">Select Your Service</h3>
        <div className="space-y-4">
          {isLoadingServices ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {services.map((service) => {
                const IconComponent = getIcon(service.icon_name);
                const isSelected = formData.serviceId === service.id;
                return (
                  <div key={service.id} className="flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleServiceSelect(service.id)}
                      className={`flex items-center justify-center p-1.5 rounded-xl border-2 transition-all w-16 h-16 ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 bg-background'
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 ${
                        isSelected ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </button>
                    <span className="font-medium text-sm text-foreground text-center leading-tight">
                      {service.name.split(' ').map((word, idx, arr) => (
                        <span key={idx}>
                          {word}
                          {idx === 0 && arr.length > 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* House Details - Conditional based on service */}
      {isCarpetCleaning ? (
        <div className="space-y-6 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
          <h3 className="text-lg font-semibold text-foreground">Home Details</h3>
          
          {/* Carpet Information */}
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-base font-medium">Carpet Information</Label>
              <div className="space-y-2">
                <Label htmlFor="carpet-type" className="text-sm font-normal text-foreground">
                  What type of carpets do you have?
                </Label>
                {carpetTypeOptions.length === 0 ? (
                  <div className="flex items-center justify-center py-4">
                    <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {carpetTypeOptions.map((option) => (
                      <div key={option.id} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`carpet-${option.value}`}
                            checked={formData.carpetTypes.includes(option.value)}
                            onCheckedChange={(checked) => {
                              const newCarpetTypes = checked
                                ? [...formData.carpetTypes, option.value]
                                : formData.carpetTypes.filter((type) => type !== option.value);
                              
                              updateFormData({
                                carpetTypes: newCarpetTypes,
                                numberOfFittedRooms: option.value === 'fitted' && !checked ? '' : formData.numberOfFittedRooms,
                                numberOfLooseCarpets: option.value === 'loose' && !checked ? '' : formData.numberOfLooseCarpets,
                              });
                            }}
                          />
                          <Label
                            htmlFor={`carpet-${option.value}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {option.label}
                          </Label>
                        </div>
                        {formData.carpetTypes.includes(option.value) && (
                          <div className="ml-6 space-y-2">
                            <Label htmlFor={`number-of-${option.value}-rooms`} className="text-sm font-normal text-foreground">
                              {option.value === 'fitted' 
                                ? 'Number of rooms with Fitted Carpets'
                                : 'Number of rugs/carpets with Loose Carpets/Rugs'}
                            </Label>
                            <Input
                              id={`number-of-${option.value}-rooms`}
                              type="number"
                              min="1"
                              placeholder={`Enter number of ${option.value === 'fitted' ? 'rooms' : 'rugs/carpets'}`}
                              value={option.value === 'fitted' ? formData.numberOfFittedRooms : formData.numberOfLooseCarpets}
                              onChange={(e) => updateFormData({ 
                                [option.value === 'fitted' ? 'numberOfFittedRooms' : 'numberOfLooseCarpets']: e.target.value 
                              })}
                              className="max-w-[200px]"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Room Status */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Room Status</Label>
              {roomStatusOptions.length === 0 ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <RadioGroup
                  value={formData.roomStatus}
                  onValueChange={(value) => updateFormData({ roomStatus: value })}
                >
                  {roomStatusOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`room-${option.value}`} />
                      <Label
                        htmlFor={`room-${option.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
          <h3 className="text-lg font-semibold text-foreground">House details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Bedrooms</Label>
              <Select
                value={formData.bedrooms}
                onValueChange={(value) => updateFormData({ bedrooms: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  {bedroomOptions.map((option) => (
                    <SelectItem key={option.id} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Bathrooms</Label>
              <Select
                value={formData.bathrooms}
                onValueChange={(value) => updateFormData({ bathrooms: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  {bathroomOptions.map((option) => (
                    <SelectItem key={option.id} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Additional Services */}
      <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <h3 className="text-lg font-semibold text-foreground">Additional Services (Optional)</h3>
        {isLoadingAdditionalServices ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {additionalServices.map((service) => {
              const IconComponent = getIcon(service.icon_name);
              const isSelected = formData.additionalServices.includes(service.id);
              // Get price for this additional service from pricing rules
              const servicePriceRule = pricingRules.find(
                (rule) => rule.rule_type === 'additional_service' && rule.additional_service_id === service.id
              );
              const servicePrice = servicePriceRule?.price || 0;
              
              return (
                <div key={service.id} className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const newServices = isSelected
                        ? formData.additionalServices.filter((id) => id !== service.id)
                        : [...formData.additionalServices, service.id];
                      updateFormData({ additionalServices: newServices });
                    }}
                    className={`flex items-center justify-center p-1.5 rounded-xl border-2 transition-all w-16 h-16 ${
                      isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 bg-background'
                    }`}
                  >
                    <IconComponent className={`w-8 h-8 ${
                      isSelected ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </button>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="font-medium text-sm text-foreground text-center leading-tight">
                      {service.name.split(' ').map((word, idx, arr) => (
                        <span key={idx}>
                          {word}
                          {idx === 0 && arr.length > 1 && <br />}
                        </span>
                      ))}
                    </span>
                    {servicePrice > 0 && (
                      <span className="text-xs font-semibold text-primary">
                        R{servicePrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Cleaning Equipment - Only for Standard and Airbnb */}
      {isStandardOrAirbnb && (
        <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
          <h3 className="text-lg font-semibold text-foreground">Cleaning Equipment & Supplies</h3>
          <p className="text-sm text-muted-foreground">Do you want us to provide cleaning equipment/supplies?</p>
          <RadioGroup
            value={formData.cleaningEquipment}
            onValueChange={(value) => updateFormData({ cleaningEquipment: value as 'yes' | 'no' })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="equipment-yes" />
              <Label htmlFor="equipment-yes" className="cursor-pointer flex items-center gap-1.5">
                Yes
                <Popover open={equipmentInfoOpen} onOpenChange={setEquipmentInfoOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      className="focus:outline-none"
                    >
                      <Info className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="start">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Equipment & Supplies We Provide:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                        {cleaningEquipment.map((item) => (
                          <li key={item.id}>{item.name}</li>
                        ))}
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="equipment-no" />
              <Label htmlFor="equipment-no" className="cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Number of Cleaners - Only for Standard and Airbnb */}
      {isStandardOrAirbnb && (
        <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
          <h3 className="text-lg font-semibold text-foreground">Number of Cleaners</h3>
          <p className="text-sm text-muted-foreground">How many cleaners would you like for this service?</p>
          <RadioGroup
            value={formData.numberOfCleaners === 1 ? "1" : "2+"}
            onValueChange={(value) => {
              if (value === "1") {
                updateFormData({ numberOfCleaners: 1 });
              } else {
                // Default to 2 if switching to 2+
                updateFormData({ numberOfCleaners: Math.max(2, formData.numberOfCleaners) });
              }
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="cleaners-1" />
              <Label htmlFor="cleaners-1" className="text-sm font-normal cursor-pointer">
                Only 1 cleaner
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2+" id="cleaners-2" />
              <Label htmlFor="cleaners-2" className="text-sm font-normal cursor-pointer">
                2-5 cleaners
              </Label>
            </div>
          </RadioGroup>
          {formData.numberOfCleaners > 1 && (
            <div className="ml-6 space-y-2">
              <Label htmlFor="number-of-cleaners-count" className="text-sm font-normal text-foreground">
                How many cleaners do you need? (2-5)
              </Label>
              <Input
                id="number-of-cleaners-count"
                type="number"
                min="2"
                max="5"
                placeholder="Enter number of cleaners"
                value={formData.numberOfCleaners > 1 ? formData.numberOfCleaners.toString() : '2'}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value) && value >= 2 && value <= 5) {
                    updateFormData({ numberOfCleaners: value });
                  }
                }}
                onBlur={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (isNaN(value) || value < 2 || value > 5) {
                    // Reset to 2 if invalid
                    updateFormData({ numberOfCleaners: 2 });
                  }
                }}
                className="max-w-[200px]"
              />
              {formData.numberOfCleaners > 1 && (
                <p className="text-xs text-muted-foreground">
                  Additional charge: R{((formData.numberOfCleaners - 1) * 250).toFixed(2)} (R250 per additional cleaner)
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Schedule */}
      <div className="space-y-3 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <h3 className="text-sm font-medium text-foreground">Schedule</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm text-muted-foreground">Which day would you like us to come?</Label>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal relative pl-10"
                >
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto min-w-[280px] p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => {
                    const dateToCompare = new Date(date);
                    dateToCompare.setHours(0, 0, 0, 0);
                    return dateToCompare < minDate;
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm text-muted-foreground">What time would you like us to arrive?</Label>
            <Select
              value={formData.serviceTime}
              onValueChange={handleTimeSlotChange}
              disabled={!formData.serviceDate || isCheckingAvailability}
            >
              <SelectTrigger>
                <SelectValue 
                  placeholder={
                    isCheckingAvailability 
                      ? "Checking availability..." 
                      : formData.serviceDate 
                        ? "Select a time" 
                        : "Select date first"
                  } 
                />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {workingHours.map((hour) => {
                  const availability = slotAvailability[hour.start_time];
                  const isUnavailable = availability && (!availability.available || availability.availableCleanersCount === 0);
                  
                  try {
                    const startTime = hour.start_time.length === 5 
                      ? parse(hour.start_time, 'HH:mm', new Date())
                      : parse(hour.start_time.substring(0, 5), 'HH:mm', new Date());
                    return (
                      <SelectItem 
                        key={hour.id} 
                        value={hour.start_time}
                        className={isUnavailable ? 'text-muted-foreground' : ''}
                      >
                        {format(startTime, 'HH:mm')}
                        {isUnavailable && (
                          <span className="ml-2 text-xs text-muted-foreground">(Unavailable)</span>
                        )}
                      </SelectItem>
                    );
                  } catch {
                    return (
                      <SelectItem 
                        key={hour.id} 
                        value={hour.start_time}
                        className={isUnavailable ? 'text-muted-foreground' : ''}
                      >
                        {hour.start_time.length >= 5 ? hour.start_time.substring(0, 5) : hour.start_time}
                        {isUnavailable && (
                          <span className="ml-2 text-xs text-muted-foreground">(Unavailable)</span>
                        )}
                      </SelectItem>
                    );
                  }
                })}
              </SelectContent>
            </Select>
            {isCheckingAvailability && (
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin" />
                Checking cleaner availability...
              </p>
            )}
          </div>
        </div>
        {formData.serviceTime && !isCarpetCleaning && (
          <div className="space-y-1.5">
            <Label className="text-sm text-muted-foreground">How long do you need? (hours)</Label>
            <Input
              type="text"
              value={formatDuration(formData.serviceDuration)}
              readOnly
              className="bg-muted cursor-not-allowed"
              aria-label="Service duration (auto-calculated)"
            />
            <p className="text-xs text-muted-foreground">
              Duration is automatically calculated based on your selections
            </p>
          </div>
        )}
        {formData.serviceTime && isCarpetCleaning && (
          <div className="space-y-1.5">
            <Label className="text-sm text-muted-foreground">How long do you need? (hours)</Label>
            <Select
              value={formData.serviceDuration.toString()}
              onValueChange={(value) => updateFormData({ serviceDuration: parseFloat(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {[3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10].map((duration) => (
                  <SelectItem key={duration} value={duration.toString()}>
                    {duration % 1 === 0 ? duration.toString() : duration.toFixed(1)} hours
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Special Instructions */}
      <div className="space-y-4 bg-white rounded-xl p-6 max-w-[576px] mx-auto">
        <h3 className="text-lg font-semibold text-foreground">Special Instructions</h3>
        <Textarea
          placeholder="Add your notes here......"
          className="min-h-[100px]"
          value={formData.specialInstructions}
          onChange={(e) => updateFormData({ specialInstructions: e.target.value })}
        />
      </div>

      {/* Availability Dialog */}
      <Dialog 
        open={showAvailabilityDialog} 
        onOpenChange={(open) => {
          setShowAvailabilityDialog(open);
          if (!open) {
            setUnavailableSlotTime(null);
          }
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Time Slot Unavailable</DialogTitle>
            <DialogDescription>
              {unavailableSlotTime ? (
                <>
                  The selected time slot ({(() => {
                    try {
                      const time = unavailableSlotTime.length === 5 
                        ? parse(unavailableSlotTime, 'HH:mm', new Date())
                        : parse(unavailableSlotTime.substring(0, 5), 'HH:mm', new Date());
                      return format(time, 'HH:mm');
                    } catch {
                      return unavailableSlotTime.length >= 5 ? unavailableSlotTime.substring(0, 5) : unavailableSlotTime;
                    }
                  })()}) is currently unavailable. Our cleaners are fully booked for this time.
                </>
              ) : (
                'This time slot is currently unavailable. Our cleaners are fully booked for this time.'
              )}
            </DialogDescription>
          </DialogHeader>
          
          {/* Show available time slots for the selected date */}
          {formData.serviceDate && Object.keys(slotAvailability).length > 0 && (() => {
            const availableSlots = workingHours
              .filter((hour) => {
                const availability = slotAvailability[hour.start_time];
                return availability && availability.available && availability.availableCleanersCount > 0;
              })
              .map((hour) => {
                try {
                  const startTime = hour.start_time.length === 5 
                    ? parse(hour.start_time, 'HH:mm', new Date())
                    : parse(hour.start_time.substring(0, 5), 'HH:mm', new Date());
                  return {
                    time: hour.start_time,
                    displayTime: format(startTime, 'HH:mm'),
                    availability: slotAvailability[hour.start_time],
                  };
                } catch {
                  return {
                    time: hour.start_time,
                    displayTime: hour.start_time.length >= 5 ? hour.start_time.substring(0, 5) : hour.start_time,
                    availability: slotAvailability[hour.start_time],
                  };
                }
              });

            if (availableSlots.length > 0) {
              return (
                <div className="space-y-3 py-4">
                  <p className="text-sm font-medium text-foreground">
                    Available time slots for {formData.serviceDate ? format(parse(formData.serviceDate, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy') : 'this date'}:
                  </p>
                  <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto p-1">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => {
                          updateFormData({ serviceTime: slot.time });
                          setShowAvailabilityDialog(false);
                          setUnavailableSlotTime(null);
                        }}
                        className="px-3 py-2 text-sm font-medium rounded-md border-2 border-primary/20 bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      >
                        {slot.displayTime}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click on an available time slot to select it, or choose a different date.
                  </p>
                </div>
              );
            } else {
              return (
                <div className="space-y-3 py-4">
                  <p className="text-sm text-muted-foreground">
                    Unfortunately, all time slots are fully booked for {formData.serviceDate ? format(parse(formData.serviceDate, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy') : 'this date'}.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please select a different date to see available time slots.
                  </p>
                </div>
              );
            }
          })()}

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowAvailabilityDialog(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

