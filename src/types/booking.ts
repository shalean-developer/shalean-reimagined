// TypeScript types for booking form data and database schema

export interface BookingFormData {
  // Step 1: Service & Details
  serviceId: string;
  bedrooms: string;
  bathrooms: string;
  additionalServices: string[];
  cleaningEquipment: 'yes' | 'no' | '';
  serviceDate: string;
  serviceTime: string;
  serviceDuration: number; // Default 3 hours
  specialInstructions: string;
  // Carpet Cleaning specific fields
  carpetTypes: string[];
  roomStatus: string;
  numberOfFittedRooms: string;
  numberOfLooseCarpets: string;
  numberOfCleaners: number; // Number of cleaners (1-5, only for Standard and Airbnb)
  
  // Step 2: Schedule & Cleaner
  serviceAddress: string;
  serviceAptUnit: string;
  serviceSuburb: string;
  serviceCity: string;
  preferredCleanerIds: string[]; // Array of cleaner IDs. Empty array = "no preference"
  cleaningFrequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  
  // Step 3: Contact & Review
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  tipAmount: number;
  discountCode: string;
  referralCode: string;
}

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  booking_number: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  customer_phone: string;
  service_id: string;
  service_type: string;
  bedrooms: string;
  bathrooms: string;
  additional_services: string[];
  cleaning_equipment: string;
  preferred_cleaner_id: string | null; // Kept for backward compatibility
  preferred_cleaner_ids: string[] | null; // Array of preferred cleaner IDs
  cleaning_frequency: string;
  service_date: string;
  service_time: string;
  service_duration: number;
  service_address: string;
  service_apt_unit: string | null;
  service_suburb: string;
  service_city: string;
  special_instructions: string | null;
  tip_amount: number;
  base_price: number;
  additional_services_price: number;
  equipment_supply_price: number;
  number_of_cleaners: number;
  additional_cleaners_price: number;
  frequency_discount_percent: number;
  frequency_discount_amount: number;
  subtotal: number;
  service_fee: number;
  total_amount: number;
  discount_code: string | null;
  discount_amount: number;
  referral_code: string | null;
  amount_paid: number;
  payment_status: PaymentStatus;
  paystack_reference: string | null;
  paystack_transaction_id: string | null;
  status: BookingStatus;
  user_id: string | null;
  parent_booking_id?: string | null;
  is_recurring?: boolean;
  recurrence_status?: 'active' | 'paused' | 'cancelled';
  next_booking_date?: string | null;
  recurrence_end_date?: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookingCreateInput {
  booking_number: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  customer_phone: string;
  service_id: string;
  service_type: string;
  bedrooms: string;
  bathrooms: string;
  additional_services: string[];
  cleaning_equipment: string;
  preferred_cleaner_id?: string | null; // Kept for backward compatibility
  preferred_cleaner_ids?: string[] | null; // Array of preferred cleaner IDs
  cleaning_frequency: string;
  service_date: string;
  service_time: string;
  service_duration: number;
  service_address: string;
  service_apt_unit?: string | null;
  service_suburb: string;
  service_city: string;
  special_instructions?: string | null;
  tip_amount: number;
  base_price: number;
  additional_services_price: number;
  equipment_supply_price: number;
  number_of_cleaners: number;
  additional_cleaners_price: number;
  frequency_discount_percent: number;
  frequency_discount_amount: number;
  subtotal: number;
  service_fee: number;
  total_amount: number;
  discount_code?: string | null;
  discount_amount: number;
  referral_code?: string | null;
  amount_paid: number;
  payment_status: PaymentStatus;
  paystack_reference?: string | null;
  paystack_transaction_id?: string | null;
  status: BookingStatus;
  user_id?: string | null;
  parent_booking_id?: string | null;
  is_recurring?: boolean;
  recurrence_status?: 'active' | 'paused' | 'cancelled';
  next_booking_date?: string | null;
  recurrence_end_date?: string | null;
}

export interface WorkingHour {
  id: string;
  start_time: string;
  end_time: string;
  duration_hours: number;
  day_of_week: number | null;
  is_active: boolean;
  display_order: number;
  max_bookings_per_slot: number | null;
  created_at: string;
  updated_at: string;
}

export interface PricingRule {
  id: string;
  rule_type: 'base_price' | 'bedroom' | 'bathroom' | 'additional_service' | 'service_fee' | 'frequency_discount';
  service_id: string | null;
  additional_service_id: string | null;
  rule_key: string | null;
  rule_value: string | null;
  price: number | null;
  percentage: number | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface DiscountCode {
  id: string;
  code: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  max_discount_amount: number | null;
  min_purchase_amount: number | null;
  max_uses: number | null;
  used_count: number;
  valid_from: string;
  valid_until: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Cleaner {
  id: string;
  name: string;
  rating: number;
  avatar_url?: string | null;
  photo_url?: string | null;
  is_active: boolean;
  is_available?: boolean;
  areas?: string[];
  bio?: string | null;
  years_experience?: number | null;
  specialties?: string[];
  available_monday?: boolean;
  available_tuesday?: boolean;
  available_wednesday?: boolean;
  available_thursday?: boolean;
  available_friday?: boolean;
  available_saturday?: boolean;
  available_sunday?: boolean;
  hire_date?: string | null;
  email?: string | null;
  phone?: string | null;
  reliability_score?: number | null;
  total_bookings?: number | null;
  completed_bookings?: number | null;
  on_time_bookings?: number | null;
}

export interface CleanerWithAvailability extends Cleaner {
  isAvailableForSlot?: boolean;
  bookingConflict?: boolean;
  completionRate?: number;
  onTimeRate?: number;
}

export interface PriceBreakdown {
  basePrice: number;
  bedroomsPrice: number;
  bathroomsPrice: number;
  fittedRoomsPrice: number;
  looseCarpetsPrice: number;
  additionalServicesPrice: number;
  equipmentSupplyPrice: number;
  additionalCleanersPrice: number;
  subtotal: number;
  frequencyDiscountPercent: number;
  frequencyDiscountAmount: number;
  discountAmount: number;
  serviceFee: number;
  totalAmount: number;
}

export interface TimeSlotAvailability {
  available: boolean;
  availableCleanersCount: number;
}

