'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MapPin, Calendar, Clock, Pencil, Lock, Home, Users, Package, Sparkles, Coins } from 'lucide-react';
import { BookingFormData, PriceBreakdown } from '@/types/booking';
import { format } from 'date-fns';
import { getServices, getAdditionalServices } from '../../quote/actions';
import { AdditionalService } from '@/types/quote';
import { createClient } from '@/lib/supabase/client';
import { calculateBookingDatesForMonth } from '@/lib/utils/recurring-dates';
import { supportsRecurringBookings, requiresTeamBooking } from '@/lib/utils/service-validation';

interface Step3ContactReviewProps {
  formData: BookingFormData;
  priceBreakdown: PriceBreakdown;
  updateFormData: (updates: Partial<BookingFormData>) => void;
  onValidateDiscountCode: (code: string) => Promise<void>;
  onProceedToPayment: () => void;
  isProcessing?: boolean;
}

export function Step3ContactReview({
  formData,
  priceBreakdown,
  updateFormData,
  onValidateDiscountCode,
  onProceedToPayment,
  isProcessing = false,
}: Step3ContactReviewProps) {
  const [discountCodeInput, setDiscountCodeInput] = useState(formData.discountCode || '');
  const [isValidatingDiscount, setIsValidatingDiscount] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
    };
    checkAuth();
    
    // Listen for auth state changes
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session?.user);
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Fetch user's credit balance (only if authenticated)
  const { data: creditBalance = 0, isLoading: isLoadingBalance } = useQuery({
    queryKey: ['credit-balance', isAuthenticated],
    queryFn: async () => {
      try {
        const response = await fetch('/api/profile/balance');
        if (response.status === 401) {
          // Unauthorized - user is not actually authenticated
          setIsAuthenticated(false);
          return 0;
        }
        if (response.ok) {
          const data = await response.json();
          return data.success ? (data.balance || 0) : 0;
        }
        console.warn('Failed to fetch credit balance:', response.status, response.statusText);
        return 0;
      } catch (error) {
        console.error('Error fetching credit balance:', error);
        return 0;
      }
    },
    enabled: isAuthenticated,
    staleTime: 30 * 1000, // Refresh every 30 seconds
    retry: false, // Don't retry on error to avoid unnecessary API calls
  });
  
  // Fetch services and additional services
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000,
  });

  const { data: additionalServices = [] } = useQuery({
    queryKey: ['additional-services', formData.serviceId],
    queryFn: () => getAdditionalServices(formData.serviceId || undefined),
    enabled: !!formData.serviceId,
    staleTime: 5 * 60 * 1000,
  });

  // Get selected service name
  const selectedService = services.find((s) => s.id === formData.serviceId);
  const serviceName = selectedService?.name || 'Standard Cleaning';
  
  // Check if selected service is carpet cleaning
  const isCarpetCleaning = serviceName?.toLowerCase().includes('carpet') ?? false;
  
  // Check if service requires team booking
  const isTeamBooking = requiresTeamBooking(serviceName);

  // Get selected additional services
  const selectedAdditionalServices = formData.additionalServices
    .map((id) => additionalServices.find((s) => s.id === id))
    .filter((s): s is AdditionalService => s !== undefined);

  // Fetch selected cleaners (only for non-team bookings)
  const { data: cleaners = [] } = useQuery({
    queryKey: ['cleaners', JSON.stringify(formData.preferredCleanerIds)],
    queryFn: async () => {
      if (!formData.preferredCleanerIds || formData.preferredCleanerIds.length === 0) {
        return [];
      }
      // Create client inside query function to avoid hydration issues
      const supabase = createClient();
      // Fetch cleaner details by IDs
      const { data } = await supabase
        .from('cleaners')
        .select('id, name, avatar_url, photo_url')
        .in('id', formData.preferredCleanerIds);
      return data || [];
    },
    enabled: !isTeamBooking && formData.preferredCleanerIds && formData.preferredCleanerIds.length > 0,
    staleTime: 5 * 60 * 1000,
  });

  // Calculate final subtotal (after all discounts, before service fee)
  const finalSubtotal = priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount - priceBreakdown.discountAmount;

  // Check if service supports recurring bookings
  const supportsRecurring = supportsRecurringBookings(serviceName);

  // Calculate recurring total for the first month
  const isRecurring = formData.cleaningFrequency !== 'one-time';
  const hasServiceDate = Boolean(formData.serviceDate);
  const shouldCalculateRecurringTotal = isRecurring && hasServiceDate && supportsRecurring;

  // Tip is one-time only (applied to first booking only, not recurring)
  const tipAmount = formData.tipAmount || 0;

  let numberOfBookingsInMonth = 1;
  let recurringTotal = priceBreakdown.totalAmount + tipAmount; // Single booking: base + tip

  if (shouldCalculateRecurringTotal) {
    try {
      const startDate = new Date(formData.serviceDate);
      const bookingDates = calculateBookingDatesForMonth(startDate, formData.cleaningFrequency);
      numberOfBookingsInMonth = bookingDates.length;
      // For recurring: multiply base total by number of bookings, then add tip once
      recurringTotal = (priceBreakdown.totalAmount * numberOfBookingsInMonth) + tipAmount;
    } catch (error) {
      // If date parsing fails, fall back to single booking
      console.error('Error calculating recurring total:', error);
      numberOfBookingsInMonth = 1;
      recurringTotal = priceBreakdown.totalAmount + tipAmount;
    }
  }

  // Calculate credits usage
  const totalBookingAmount = shouldCalculateRecurringTotal ? recurringTotal : (priceBreakdown.totalAmount + tipAmount);
  const useCredits = formData.useCredits || false;
  // Round values to avoid floating point precision issues
  const roundedTotalAmount = Math.round(totalBookingAmount * 100) / 100;
  const roundedCreditBalance = Math.round(creditBalance * 100) / 100;
  const roundedFormCredits = Math.round((formData.creditsAmount || 0) * 100) / 100;
  
  const creditsAmount = useCredits ? Math.min(
    roundedFormCredits,
    roundedCreditBalance,
    roundedTotalAmount
  ) : 0;
  const remainingAfterCredits = Math.max(0, Math.round((roundedTotalAmount - creditsAmount) * 100) / 100);

  // Get frequency label for display
  const getFrequencyLabel = () => {
    switch (formData.cleaningFrequency) {
      case 'weekly':
        return 'Weekly';
      case 'bi-weekly':
        return 'Bi-Weekly';
      case 'monthly':
        return 'Monthly';
      default:
        return '';
    }
  };

  const handleApplyDiscount = async () => {
    setIsValidatingDiscount(true);
    await onValidateDiscountCode(discountCodeInput);
    setIsValidatingDiscount(false);
  };

  const tipOptions = [0, 25, 50, 75, 100];

  // Format cleaning frequency
  const formatFrequency = (freq: string) => {
    const freqMap: Record<string, string> = {
      'one-time': 'One-time',
      'weekly': 'Weekly',
      'bi-weekly': 'Bi-weekly',
      'monthly': 'Monthly',
    };
    return freqMap[freq] || freq;
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Review Your Booking</h2>
        <p className="text-sm text-muted-foreground">Please review your booking details before confirming.</p>
      </div>

      {/* Cleaner or Team */}
      <div className="bg-white rounded-xl p-4 border border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">{isTeamBooking ? 'Team' : 'Cleaner'}</h3>
          <button type="button" className="text-primary">
            <Pencil className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-3 mb-3">
          <p className="text-xs mb-1">An upfront tip for</p>
          {isTeamBooking ? (
            formData.teamNumber ? (
              <p className="font-bold text-base">Team {formData.teamNumber}</p>
            ) : (
              <p className="font-bold text-base">No team selected</p>
            )
          ) : cleaners.length > 0 ? (
            <div className="space-y-1">
              {cleaners.map((cleaner) => (
                <p key={cleaner.id} className="font-bold text-base">
                  {cleaner.name}
                </p>
              ))}
            </div>
          ) : (
            <p className="font-bold text-base">No preference - Best available</p>
          )}
        </div>
        <div>
          <Label className="mb-2 block text-sm">
            Tip amount
            {isRecurring && shouldCalculateRecurringTotal && (
              <span className="text-xs text-muted-foreground font-normal ml-1">(one-time, first booking only)</span>
            )}
          </Label>
          <div className="flex gap-2 flex-wrap items-center">
            {tipOptions.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => updateFormData({ tipAmount: amount })}
                className={`px-3 py-1.5 rounded-full border-2 transition-all text-sm ${
                  formData.tipAmount === amount
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                R{amount}
              </button>
            ))}
            <Input
              type="number"
              value={formData.tipAmount || ''}
              onChange={(e) => updateFormData({ tipAmount: parseFloat(e.target.value) || 0 })}
              placeholder="Custom"
              className="w-24 h-8 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl p-4 border border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Contact & Address</h3>
          <button type="button" className="text-primary">
            <Pencil className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>First Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="e.g., Thabo"
                className="pl-10"
                value={formData.customerFirstName}
                onChange={(e) => updateFormData({ customerFirstName: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Last Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="e.g., Mokoena"
                className="pl-10"
                value={formData.customerLastName}
                onChange={(e) => updateFormData({ customerLastName: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="e.g., thabo@example.com"
                className="pl-10"
                value={formData.customerEmail}
                onChange={(e) => updateFormData({ customerEmail: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Phone Number *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="0821234567 or +27821234567"
                className="pl-10"
                value={formData.customerPhone}
                onChange={(e) => updateFormData({ customerPhone: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Address *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Street address, Suburb, City"
                className="pl-10"
                value={[
                  formData.serviceAddress,
                  formData.serviceAptUnit,
                  formData.serviceSuburb,
                  formData.serviceCity
                ].filter(Boolean).join(', ')}
                onChange={(e) => {
                  const address = e.target.value;
                  // Store the full address in serviceAddress for now
                  // Can be parsed into separate fields if needed
                  updateFormData({ serviceAddress: address });
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Review Sections */}
      <div className="space-y-3">
        {/* Consolidated Review Details */}
        <div className="bg-white rounded-xl p-4 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">What You're Booking</h3>
            <button type="button" className="text-primary">
              <Pencil className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Service Type */}
            <div className="pb-3 border-b border-border">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Service</span>
              </div>
              <p className="text-base font-semibold text-foreground">{serviceName}</p>
              {formData.cleaningFrequency && formData.cleaningFrequency !== 'one-time' && (
                <p className="text-xs text-muted-foreground mt-1">
                  Frequency: {formatFrequency(formData.cleaningFrequency)}
                </p>
              )}
            </div>

            {/* Property Details - Conditional based on service type */}
            {isCarpetCleaning ? (
              // Show carpet-specific fields
              (formData.carpetTypes.length > 0 || formData.numberOfFittedRooms || formData.numberOfLooseCarpets || formData.roomStatus) && (
                <div className="pb-3 border-b border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Carpet Details</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {formData.carpetTypes.length > 0 && (
                      <div>
                        <span className="text-muted-foreground">Carpet Types: </span>
                        <span className="font-medium capitalize">{formData.carpetTypes.join(', ')}</span>
                      </div>
                    )}
                    {formData.numberOfFittedRooms && (
                      <div>
                        <span className="text-muted-foreground">Fitted Rooms: </span>
                        <span className="font-medium">{formData.numberOfFittedRooms}</span>
                      </div>
                    )}
                    {formData.numberOfLooseCarpets && (
                      <div>
                        <span className="text-muted-foreground">Loose Carpets/Rugs: </span>
                        <span className="font-medium">{formData.numberOfLooseCarpets}</span>
                      </div>
                    )}
                    {formData.roomStatus && (
                      <div>
                        <span className="text-muted-foreground">Room Status: </span>
                        <span className="font-medium capitalize">{formData.roomStatus.replace(/-/g, ' ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            ) : (
              // Show bedrooms/bathrooms for non-carpet services
              (parseInt(formData.bedrooms) > 0 || parseInt(formData.bathrooms) > 0) && (
                <div className="pb-3 border-b border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Property Details</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Bedrooms: </span>
                      <span className="font-medium">{formData.bedrooms}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Bathrooms: </span>
                      <span className="font-medium">{formData.bathrooms}</span>
                    </div>
                  </div>
                </div>
              )
            )}

            {/* Additional Services */}
            {selectedAdditionalServices.length > 0 && (
              <div className="pb-3 border-b border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Additional Services</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedAdditionalServices.map((service) => (
                    <span
                      key={service.id}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {service.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Service Options */}
            {(formData.numberOfCleaners > 1 || formData.cleaningEquipment === 'yes' || formData.serviceDuration) && (
              <div className="pb-3 border-b border-border space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Service Options</span>
                </div>
                {formData.numberOfCleaners > 1 && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      <span className="font-medium">{formData.numberOfCleaners}</span> cleaner{formData.numberOfCleaners > 1 ? 's' : ''} assigned
                      {formData.numberOfCleaners > 1 && (
                        <span className="text-xs ml-1">(+R{((formData.numberOfCleaners - 1) * 250).toFixed(2)})</span>
                      )}
                    </span>
                  </div>
                )}
                {formData.cleaningEquipment === 'yes' && (
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Equipment & supplies included
                      {priceBreakdown.equipmentSupplyPrice > 0 && (
                        <span className="text-xs ml-1">(+R{priceBreakdown.equipmentSupplyPrice.toFixed(2)})</span>
                      )}
                    </span>
                  </div>
                )}
                {formData.serviceDuration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Estimated duration: <span className="font-medium">{formData.serviceDuration} hours</span>
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Schedule */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Schedule</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {formData.serviceDate ? format(new Date(formData.serviceDate), 'EEE, MMM d, yyyy') : 'Not set'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{formData.serviceTime || 'Not set'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Amount & Payment */}
      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold">
              {shouldCalculateRecurringTotal 
                ? `Total Amount (${numberOfBookingsInMonth} ${numberOfBookingsInMonth === 1 ? 'booking' : 'bookings'} this month)`
                : 'Total Amount'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {shouldCalculateRecurringTotal 
                ? `${getFrequencyLabel()} recurring - All fees included`
                : isRecurring && !hasServiceDate
                ? 'Select a date to see monthly total'
                : 'All fees included'}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-2xl font-bold ${useCredits && creditsAmount > 0 ? 'line-through text-muted-foreground' : 'text-primary'}`}>
              R{shouldCalculateRecurringTotal ? recurringTotal.toFixed(2) : (priceBreakdown.totalAmount + tipAmount).toFixed(2)}
            </p>
            {useCredits && creditsAmount > 0 && (
              <p className="text-2xl font-bold text-primary mt-1">
                R{remainingAfterCredits.toFixed(2)}
              </p>
            )}
          </div>
        </div>
        {shouldCalculateRecurringTotal && numberOfBookingsInMonth > 1 && (
          <div className="mb-3 text-xs text-muted-foreground text-right">
            (R{priceBreakdown.totalAmount.toFixed(2)} × {numberOfBookingsInMonth}) {tipAmount > 0 ? `+ R${tipAmount.toFixed(2)} tip` : ''} = R{recurringTotal.toFixed(2)}
          </div>
        )}

        <div className="space-y-1.5 mb-3 pt-3 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service & rooms</span>
            <span>R{Math.max(0, finalSubtotal).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service fee</span>
            <span>+R{priceBreakdown.serviceFee.toFixed(2)}</span>
          </div>
          {tipAmount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Tip{isRecurring && shouldCalculateRecurringTotal ? ' (one-time, first booking only)' : ''}
              </span>
              <span>+R{tipAmount.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Discount Code */}
        <div className="mb-3">
          <Label className="mb-1.5 block text-sm">Have a discount code?</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Enter discount code"
              value={discountCodeInput}
              onChange={(e) => setDiscountCodeInput(e.target.value)}
              className="h-9 text-sm"
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleApplyDiscount}
              disabled={isValidatingDiscount || !discountCodeInput}
              className="h-9"
            >
              Apply
            </Button>
          </div>
        </div>

        {/* ShaleanCred Section - Show if authenticated */}
        {isAuthenticated && (
          <div className="mb-3 p-3 bg-secondary/50 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-4 h-4 text-primary" />
              <Label className="text-sm font-medium">Use ShaleanCred</Label>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              You have <span className="font-semibold text-primary">R{creditBalance.toFixed(2)}</span> ShaleanCred available
            </p>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="use-credits"
                checked={useCredits}
                disabled={isLoadingBalance || creditBalance <= 0}
                onChange={(e) => {
                  if (isLoadingBalance || creditBalance <= 0) return;
                  const use = e.target.checked;
                  updateFormData({ 
                    useCredits: use,
                    creditsAmount: use ? Math.min(creditBalance, totalBookingAmount) : 0
                  });
                }}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label 
                htmlFor="use-credits" 
                className={`text-sm ${!isLoadingBalance && creditBalance > 0 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
              >
                Use ShaleanCred for this booking
                {isLoadingBalance && (
                  <span className="text-xs text-muted-foreground block mt-1">
                    Loading balance...
                  </span>
                )}
                {!isLoadingBalance && creditBalance <= 0 && (
                  <span className="text-xs text-muted-foreground block mt-1">
                    No ShaleanCred available
                  </span>
                )}
              </label>
            </div>
            {useCredits && (
              <div className="mt-2">
                <Label className="mb-1.5 block text-xs">Amount to use (max R{Math.min(creditBalance, totalBookingAmount).toFixed(2)})</Label>
                <Input
                  type="number"
                  min="0"
                  max={Math.min(creditBalance, totalBookingAmount)}
                  step="0.01"
                  value={creditsAmount > 0 ? creditsAmount.toFixed(2) : ''}
                  onChange={(e) => {
                    // Replace comma with period for consistent parsing
                    const cleanValue = e.target.value.replace(',', '.');
                    const value = parseFloat(cleanValue) || 0;
                    // Round to 2 decimal places and cap at available balance and booking total
                    const roundedValue = Math.round(value * 100) / 100;
                    const maxAllowed = Math.min(creditBalance, totalBookingAmount);
                    const cappedValue = Math.min(
                      Math.max(0, roundedValue),
                      maxAllowed
                    );
                    // Round again to ensure 2 decimal places
                    const finalValue = Math.round(cappedValue * 100) / 100;
                    updateFormData({ creditsAmount: finalValue });
                  }}
                  onBlur={(e) => {
                    // Ensure value is properly formatted on blur
                    if (creditsAmount > 0) {
                      const roundedValue = Math.round(creditsAmount * 100) / 100;
                      const maxAllowed = Math.min(creditBalance, totalBookingAmount);
                      const finalValue = Math.min(roundedValue, maxAllowed);
                      updateFormData({ creditsAmount: finalValue });
                    }
                  }}
                  className="h-9 text-sm"
                  placeholder="0.00"
                />
                {creditsAmount > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Remaining to pay: <span className="font-semibold">R{remainingAfterCredits.toFixed(2)}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Updated total display if credits are used */}
        {useCredits && creditsAmount > 0 && (
          <div className="mb-3 p-2 bg-primary/10 rounded border border-primary/20">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">After ShaleanCred:</span>
              <span className="font-bold text-primary">R{remainingAfterCredits.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-muted-foreground mt-1">
              <span>Credits applied:</span>
              <span>-R{creditsAmount.toFixed(2)}</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Lock className="w-3.5 h-3.5" />
          <span>Secure payment powered by Paystack</span>
        </div>

        <Button
          type="button"
          className="w-full"
          size="lg"
          onClick={onProceedToPayment}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Confirm & Pay'}
        </Button>
      </div>
    </div>
  );
}


