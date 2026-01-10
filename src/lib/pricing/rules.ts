'use server';

import { createClient } from '@/lib/supabase/server';
import { PricingRule } from '@/types/booking';

/**
 * Fetch all active pricing rules
 */
export async function getPricingRules(): Promise<PricingRule[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('pricing_rules')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching pricing rules:', error);
      return [];
    }

    return (data || []) as PricingRule[];
  } catch (error) {
    console.error('Unexpected error fetching pricing rules:', error);
    return [];
  }
}

/**
 * Get base price for a service
 */
export async function getBasePrice(serviceId: string): Promise<number> {
  const rules = await getPricingRules();
  const basePriceRule = rules.find(
    (rule) => rule.rule_type === 'base_price' && rule.service_id === serviceId
  );
  return basePriceRule?.price || 0;
}

/**
 * Get bedroom pricing
 */
export async function getBedroomPrice(bedroomCount: string): Promise<number> {
  const rules = await getPricingRules();
  const bedroomRule = rules.find(
    (rule) => rule.rule_type === 'bedroom' && rule.rule_value === bedroomCount
  );
  return bedroomRule?.price || 0;
}

/**
 * Get bathroom pricing
 */
export async function getBathroomPrice(bathroomCount: string): Promise<number> {
  const rules = await getPricingRules();
  const bathroomRule = rules.find(
    (rule) => rule.rule_type === 'bathroom' && rule.rule_value === bathroomCount
  );
  return bathroomRule?.price || 0;
}

/**
 * Get additional service pricing
 */
export async function getAdditionalServicePrice(serviceId: string): Promise<number> {
  const rules = await getPricingRules();
  const serviceRule = rules.find(
    (rule) => rule.rule_type === 'additional_service' && rule.additional_service_id === serviceId
  );
  return serviceRule?.price || 0;
}

/**
 * Get service fee percentage
 */
export async function getServiceFeePercentage(): Promise<number> {
  const rules = await getPricingRules();
  const feeRule = rules.find(
    (rule) => rule.rule_type === 'service_fee'
  );
  return feeRule?.percentage || 0;
}

/**
 * Get frequency discount percentage
 */
export async function getFrequencyDiscount(frequency: 'weekly' | 'bi-weekly' | 'monthly'): Promise<number> {
  const rules = await getPricingRules();
  const discountRule = rules.find(
    (rule) => rule.rule_type === 'frequency_discount' && rule.rule_value === frequency
  );
  return discountRule?.percentage || 0;
}

/**
 * Get fitted room price (per room)
 */
export async function getFittedRoomPrice(): Promise<number> {
  const rules = await getPricingRules();
  const fittedRoomRule = rules.find(
    (rule) => rule.rule_type === 'fitted_room' && rule.rule_key === 'per_room'
  );
  return fittedRoomRule?.price || 0;
}

/**
 * Get loose carpet/rug price (per carpet/rug)
 */
export async function getLooseCarpetPrice(): Promise<number> {
  const rules = await getPricingRules();
  const looseCarpetRule = rules.find(
    (rule) => rule.rule_type === 'loose_carpet' && rule.rule_key === 'per_carpet'
  );
  return looseCarpetRule?.price || 0;
}

