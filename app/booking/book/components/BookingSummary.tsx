'use client';

import { format } from 'date-fns';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { BookingFormData, PriceBreakdown, PricingRule } from '@/types/booking';
import { AdditionalService } from '@/types/quote';
import { supportsRecurringBookings } from '@/lib/utils/service-validation';
import { calculateBookingDatesForMonth } from '@/lib/utils/recurring-dates';

interface BookingSummaryProps {
  formData: BookingFormData;
  priceBreakdown: PriceBreakdown;
  serviceName?: string;
  additionalServices?: AdditionalService[];
  pricingRules?: PricingRule[];
}

export function BookingSummary({ formData, priceBreakdown, serviceName, additionalServices = [], pricingRules = [] }: BookingSummaryProps) {
  // Check if service is carpet cleaning
  const isCarpetCleaning = serviceName?.toLowerCase().includes('carpet') ?? false;
  
  // Check if service supports recurring bookings (for frequency discount display)
  // Only Standard Cleaning and Airbnb Cleaning support recurring bookings
  const supportsRecurring = serviceName ? supportsRecurringBookings(serviceName) : false;
  
  // CRITICAL: Only show frequency discount if:
  // 1. Service name is provided AND supports recurring bookings
  // 2. Discount amount is greater than 0
  // This ensures Deep Cleaning, Move In/Out, and Carpet Cleaning NEVER show discounts
  const shouldShowFrequencyDiscount = Boolean(
    serviceName && 
    supportsRecurring && 
    priceBreakdown.frequencyDiscountAmount > 0
  );
  
  // Filter additional services to only show those relevant to the selected service type
  const relevantAdditionalServices = formData.additionalServices.filter(serviceId => 
    additionalServices.some(s => s.id === serviceId)
  );
  
  // Calculate final subtotal (after all discounts, before service fee)
  const finalSubtotal = priceBreakdown.subtotal - priceBreakdown.frequencyDiscountAmount - priceBreakdown.discountAmount;

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

  return (
    <div className="bg-white rounded-2xl p-6 sticky top-24 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>

      {/* Service */}
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Service</span>
        <span className="font-medium">{serviceName || 'Not selected'}</span>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 pt-4 border-t border-border">
        <div className="text-sm font-semibold mb-2">Price Breakdown</div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Base Price</span>
          <span>R{priceBreakdown.basePrice.toFixed(2)}</span>
        </div>
        {/* Show bedrooms/bathrooms only for non-carpet services */}
        {!isCarpetCleaning && (priceBreakdown.bedroomsPrice > 0 || priceBreakdown.bathroomsPrice > 0) && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Bedrooms & Bathrooms ({formData.bedrooms} bed, {formData.bathrooms} bath)</span>
            <span>R{(priceBreakdown.bedroomsPrice + priceBreakdown.bathroomsPrice).toFixed(2)}</span>
          </div>
        )}
        {/* Show carpet pricing only for carpet cleaning service */}
        {isCarpetCleaning && priceBreakdown.fittedRoomsPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Fitted Rooms ({formData.numberOfFittedRooms || 0} room{parseInt(formData.numberOfFittedRooms || '0') !== 1 ? 's' : ''})
            </span>
            <span>R{priceBreakdown.fittedRoomsPrice.toFixed(2)}</span>
          </div>
        )}
        {isCarpetCleaning && priceBreakdown.looseCarpetsPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Loose Carpets/Rugs ({formData.numberOfLooseCarpets || 0} carpet{parseInt(formData.numberOfLooseCarpets || '0') !== 1 ? 's' : ''})
            </span>
            <span>R{priceBreakdown.looseCarpetsPrice.toFixed(2)}</span>
          </div>
        )}
        {/* Itemized Additional Services - Only show services relevant to selected service type */}
        {relevantAdditionalServices.length > 0 ? (
          <div className="space-y-1">
            {relevantAdditionalServices.map((serviceId) => {
              const service = additionalServices.find(s => s.id === serviceId);
              const priceRule = pricingRules.find(
                r => r.rule_type === 'additional_service' && r.additional_service_id === serviceId
              );
              const price = priceRule?.price || 0;
              return (
                <div key={serviceId} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{service?.name || 'Additional Service'}</span>
                  <span>R{price.toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        ) : priceBreakdown.additionalServicesPrice > 0 ? (
          // Fallback: Show total if price > 0 but services not found (shouldn't happen with proper filtering)
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Additional Services</span>
            <span>R{priceBreakdown.additionalServicesPrice.toFixed(2)}</span>
          </div>
        ) : null}
        {/* Equipment Supply Charge - Show when cleaningEquipment is 'yes' */}
        {priceBreakdown.equipmentSupplyPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Equipment & Supplies</span>
            <span>R{priceBreakdown.equipmentSupplyPrice.toFixed(2)}</span>
          </div>
        )}
        {/* Additional Cleaners Charge - Show when more than 1 cleaner is selected */}
        {priceBreakdown.additionalCleanersPrice > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Additional Cleaners ({formData.numberOfCleaners - 1} × R250)
            </span>
            <span>R{priceBreakdown.additionalCleanersPrice.toFixed(2)}</span>
          </div>
        )}
        {/* Only show frequency discount for services that support recurring bookings (Standard and Airbnb) */}
        {shouldShowFrequencyDiscount && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Frequency Discount ({priceBreakdown.frequencyDiscountPercent.toFixed(0)}%)</span>
            <span>-R{priceBreakdown.frequencyDiscountAmount.toFixed(2)}</span>
          </div>
        )}
        {priceBreakdown.discountAmount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Discount Code{formData.discountCode ? ` (${formData.discountCode})` : ''}</span>
            <span>-R{priceBreakdown.discountAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border">
          <span>Subtotal</span>
          <span>R{Math.max(0, finalSubtotal).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Service Fee</span>
          <span>R{priceBreakdown.serviceFee.toFixed(2)}</span>
        </div>
        {formData.tipAmount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Tip{isRecurring && shouldCalculateRecurringTotal ? ' (one-time, first booking only)' : ''}
            </span>
            <span>R{formData.tipAmount.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Schedule */}
      {formData.serviceDate && (
        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold">Schedule</span>
          </div>
          <div className="text-sm space-y-1">
            <div>
              {format(new Date(formData.serviceDate), 'MMMM do, yyyy')} @ {formData.serviceTime}
            </div>
            {formData.serviceDuration && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {formData.serviceDuration % 1 === 0 
                    ? `${formData.serviceDuration} hours` 
                    : `${formData.serviceDuration.toFixed(1)} hours`}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Address */}
      {formData.serviceAddress && (
        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold">Address</span>
          </div>
          <div className="text-sm">
            {formData.serviceCity}
          </div>
        </div>
      )}

      {/* Total */}
      <div className="pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-semibold block">
              {shouldCalculateRecurringTotal 
                ? `Total (${numberOfBookingsInMonth} ${numberOfBookingsInMonth === 1 ? 'booking' : 'bookings'} this month)`
                : 'Total'}
            </span>
            <span className="text-xs text-muted-foreground">
              {shouldCalculateRecurringTotal 
                ? `${getFrequencyLabel()} recurring - All fees included`
                : isRecurring && !hasServiceDate
                ? 'Select a date to see monthly total'
                : 'All fees included'}
            </span>
          </div>
          <div className="text-2xl font-bold text-primary">
            R{shouldCalculateRecurringTotal ? recurringTotal.toFixed(2) : (priceBreakdown.totalAmount + tipAmount).toFixed(2)}
          </div>
        </div>
        {shouldCalculateRecurringTotal && numberOfBookingsInMonth > 1 && (
          <div className="mt-2 text-xs text-muted-foreground text-right">
            (R{priceBreakdown.totalAmount.toFixed(2)} × {numberOfBookingsInMonth}) {tipAmount > 0 ? `+ R${tipAmount.toFixed(2)} tip` : ''} = R{recurringTotal.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}


