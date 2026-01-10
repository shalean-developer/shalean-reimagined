// TypeScript types for quote form data and database schema

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  bedrooms: string;
  bathrooms: string;
  additionalServices: string[];
  notes: string;
  carpetTypes: string[];
  roomStatus: string;
  numberOfFittedRooms: string;
  numberOfLooseCarpets: string;
  numberOfCeiling: string;
  numberOfCouch: string;
  numberOfGarage: string;
  numberOfCarpetCleaning: string;
  numberOfMattress: string;
  cleaningEquipment: string;
  numberOfCleaners: string;
  numberOfCleanersCount: string;
  wantsSiteVisit: boolean;
  siteVisitDate: string;
}

export type QuoteStatus = 'draft' | 'submitted';

export interface Quote {
  id: string;
  email: string;
  status: QuoteStatus;
  form_data: QuoteFormData;
  created_at: string;
  updated_at: string;
}

export interface QuoteCreateInput {
  email: string;
  status?: QuoteStatus;
  form_data: QuoteFormData;
}

export interface QuoteUpdateInput {
  status?: QuoteStatus;
  form_data?: QuoteFormData;
}

// Database-driven form data types
export interface Service {
  id: string;
  name: string;
  icon_name: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AdditionalService {
  id: string;
  name: string;
  icon_name: string;
  display_order: number;
  requires_quantity: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface HomeDetailOption {
  id: string;
  option_type: string;
  value: string;
  label: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CleaningEquipment {
  id: string;
  name: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

