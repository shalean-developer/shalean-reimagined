'use client';

import { PricingRule, PriceBreakdown } from '@/types/booking';
import { supportsRecurringBookings } from '@/lib/utils/service-validation';

/**
 * Client-side price calculation using cached pricing rules
 * This is instant and doesn't require server calls
 */
export function calculatePriceBreakdownClient(
  pricingRules: PricingRule[],
  serviceId: string,
  bedrooms: string,
  bathrooms: string,
  additionalServiceIds: string[],
  cleaningFrequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly',
  discountAmount: number = 0,
  numberOfFittedRooms: string = '',
  numberOfLooseCarpets: string = '',
  isCarpetCleaning: boolean = false,
  serviceName?: string,
  cleaningEquipment?: 'yes' | 'no' | '',
  numberOfCleaners: number = 1
): PriceBreakdown {
  // Equipment supply charge constant
  const EQUIPMENT_SUPPLY_CHARGE = 500;
  
  // Additional cleaner charge constant (R250 per additional cleaner)
  const ADDITIONAL_CLEANER_CHARGE = 250;
  // Base price
  const basePriceRule = pricingRules.find(
    (rule) => rule.rule_type === 'base_price' && rule.service_id === serviceId
  );
  const basePrice = basePriceRule?.price || 0;

  // Bedroom price (only for non-carpet services)
  const bedroomRule = pricingRules.find(
    (rule) => rule.rule_type === 'bedroom' && rule.rule_value === bedrooms
  );
  const bedroomsPrice = isCarpetCleaning ? 0 : (bedroomRule?.price || 0);

  // Bathroom price (only for non-carpet services)
  const bathroomRule = pricingRules.find(
    (rule) => rule.rule_type === 'bathroom' && rule.rule_value === bathrooms
  );
  const bathroomsPrice = isCarpetCleaning ? 0 : (bathroomRule?.price || 0);

  // Carpet pricing (for carpet cleaning service)
  // Fitted rooms price (per room)
  const fittedRoomRule = pricingRules.find(
    (rule) => rule.rule_type === 'fitted_room' && rule.rule_key === 'per_room'
  );
  const fittedRoomsPrice = fittedRoomRule?.price 
    ? (parseFloat(numberOfFittedRooms) || 0) * (fittedRoomRule.price || 0)
    : 0;

  // Loose carpets price (per carpet/rug)
  const looseCarpetRule = pricingRules.find(
    (rule) => rule.rule_type === 'loose_carpet' && rule.rule_key === 'per_carpet'
  );
  const looseCarpetsPrice = looseCarpetRule?.price
    ? (parseFloat(numberOfLooseCarpets) || 0) * (looseCarpetRule.price || 0)
    : 0;

  // Additional services price
  let additionalServicesPrice = 0;
  for (const serviceId of additionalServiceIds) {
    const serviceRule = pricingRules.find(
      (rule) => rule.rule_type === 'additional_service' && rule.additional_service_id === serviceId
    );
    additionalServicesPrice += serviceRule?.price || 0;
  }

  // Equipment supply charge - only for Standard and Airbnb services when user selects 'yes'
  let equipmentSupplyPrice = 0;
  if (cleaningEquipment === 'yes' && serviceName && supportsRecurringBookings(serviceName)) {
    equipmentSupplyPrice = EQUIPMENT_SUPPLY_CHARGE;
  }

  // Additional cleaners charge - only for Standard and Airbnb services
  // First cleaner is included in base price, charge for each additional cleaner
  let additionalCleanersPrice = 0;
  if (serviceName && supportsRecurringBookings(serviceName) && numberOfCleaners > 1) {
    const additionalCleanersCount = Math.max(0, Math.min(numberOfCleaners - 1, 4)); // Max 4 additional (total 5 cleaners)
    additionalCleanersPrice = additionalCleanersCount * ADDITIONAL_CLEANER_CHARGE;
  }

  // Subtotal before discounts
  const subtotal = basePrice + bedroomsPrice + bathroomsPrice + fittedRoomsPrice + looseCarpetsPrice + additionalServicesPrice + equipmentSupplyPrice + additionalCleanersPrice;

  // Frequency discount - only apply to Standard and Airbnb cleaning services
  let frequencyDiscountPercent = 0;
  let frequencyDiscountAmount = 0;
  
  // Only apply frequency discount if ALL conditions are met:
  // 1. Frequency is not one-time
  // 2. Service name is provided (not undefined, not empty)
  // 3. Service supports recurring bookings (Standard or Airbnb only)
  if (cleaningFrequency !== 'one-time' && serviceName && serviceName.trim() !== '') {
    if (supportsRecurringBookings(serviceName)) {
      const discountRule = pricingRules.find(
        (rule) => rule.rule_type === 'frequency_discount' && rule.rule_value === cleaningFrequency
      );
      frequencyDiscountPercent = discountRule?.percentage || 0;
      frequencyDiscountAmount = (subtotal * frequencyDiscountPercent) / 100;
    }
    // Explicitly: If service doesn't support recurring, discount remains 0
    // This ensures Deep Cleaning, Move In/Out, and Carpet Cleaning NEVER get discounts
  }

  // Subtotal after frequency discount
  const subtotalAfterFrequencyDiscount = subtotal - frequencyDiscountAmount;

  // Apply discount code (passed in as discountAmount)
  const finalSubtotal = Math.max(0, subtotalAfterFrequencyDiscount - discountAmount);

  // Service fee (calculated on subtotal after frequency discount, before discount code)
  const feeRule = pricingRules.find(
    (rule) => rule.rule_type === 'service_fee'
  );
  const serviceFeePercentage = feeRule?.percentage || 0;
  const serviceFee = (subtotalAfterFrequencyDiscount * serviceFeePercentage) / 100;

  // Total amount (subtotal after all discounts + service fee)
  const totalAmount = finalSubtotal + serviceFee;

  return {
    basePrice,
    bedroomsPrice,
    bathroomsPrice,
    fittedRoomsPrice,
    looseCarpetsPrice,
    additionalServicesPrice,
    equipmentSupplyPrice,
    additionalCleanersPrice,
    subtotal,
    frequencyDiscountPercent,
    frequencyDiscountAmount,
    discountAmount,
    serviceFee,
    totalAmount
  };
}

