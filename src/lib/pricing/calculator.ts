'use server';

import { 
  getBasePrice, 
  getBedroomPrice, 
  getBathroomPrice, 
  getAdditionalServicePrice,
  getServiceFeePercentage,
  getFrequencyDiscount,
  getFittedRoomPrice,
  getLooseCarpetPrice
} from './rules';
import { PriceBreakdown } from '@/types/booking';
import { AdditionalService } from '@/types/quote';
import { supportsRecurringBookings } from '@/lib/utils/service-validation';

interface CalculatePriceParams {
  serviceId: string;
  serviceName?: string; // Service name to check if recurring bookings are supported
  bedrooms: string;
  bathrooms: string;
  additionalServiceIds: string[];
  additionalServices?: AdditionalService[]; // For quantity-based pricing
  cleaningFrequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  discountAmount?: number;
  numberOfFittedRooms?: string;
  numberOfLooseCarpets?: string;
  isCarpetCleaning?: boolean;
  cleaningEquipment?: 'yes' | 'no' | '';
  numberOfCleaners?: number; // Number of cleaners (1-5, only for Standard and Airbnb)
}

/**
 * Calculate complete price breakdown for a booking
 */
export async function calculatePrice(params: CalculatePriceParams): Promise<PriceBreakdown> {
  const {
    serviceId,
    serviceName,
    bedrooms,
    bathrooms,
    additionalServiceIds,
    additionalServices = [],
    cleaningFrequency,
    discountAmount = 0,
    numberOfFittedRooms = '',
    numberOfLooseCarpets = '',
    isCarpetCleaning = false,
    cleaningEquipment = '',
    numberOfCleaners = 1
  } = params;

  // Equipment supply charge constant
  const EQUIPMENT_SUPPLY_CHARGE = 500;
  
  // Additional cleaner charge constant (R250 per additional cleaner)
  const ADDITIONAL_CLEANER_CHARGE = 250;

  // Base price
  const basePrice = await getBasePrice(serviceId);

  // Bedroom price (only for non-carpet services)
  const bedroomsPrice = isCarpetCleaning ? 0 : await getBedroomPrice(bedrooms);

  // Bathroom price (only for non-carpet services)
  const bathroomsPrice = isCarpetCleaning ? 0 : await getBathroomPrice(bathrooms);

  // Carpet pricing (for carpet cleaning service)
  const fittedRoomPricePerUnit = await getFittedRoomPrice();
  const fittedRoomsPrice = fittedRoomPricePerUnit * (parseFloat(numberOfFittedRooms) || 0);

  const looseCarpetPricePerUnit = await getLooseCarpetPrice();
  const looseCarpetsPrice = looseCarpetPricePerUnit * (parseFloat(numberOfLooseCarpets) || 0);

  // Additional services price
  let additionalServicesPrice = 0;
  for (const serviceId of additionalServiceIds) {
    const price = await getAdditionalServicePrice(serviceId);
    
    // Check if service requires quantity and has quantity specified
    const service = additionalServices.find(s => s.id === serviceId);
    if (service?.requires_quantity) {
      // For quantity-based services, multiply by quantity if available
      // This would need to be passed in the params if we track quantities
      additionalServicesPrice += price; // For now, single unit price
    } else {
      additionalServicesPrice += price;
    }
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
      frequencyDiscountPercent = await getFrequencyDiscount(cleaningFrequency);
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
  const serviceFeePercentage = await getServiceFeePercentage();
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

/**
 * Calculate price breakdown for display (used in real-time updates)
 * This is a lighter version that can be called frequently
 */
export async function calculatePriceBreakdown(
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
): Promise<PriceBreakdown> {
  return calculatePrice({
    serviceId,
    serviceName,
    bedrooms,
    bathrooms,
    additionalServiceIds,
    cleaningFrequency,
    discountAmount,
    numberOfFittedRooms,
    numberOfLooseCarpets,
    isCarpetCleaning,
    cleaningEquipment,
    numberOfCleaners
  });
}

