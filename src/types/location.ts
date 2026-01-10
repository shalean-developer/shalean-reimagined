// TypeScript types for location data and database schema

export interface Location {
  id: string;
  customer_email: string;
  customer_phone: string | null;
  nickname: string;
  address: string;
  apt_unit: string | null;
  suburb: string;
  city: string;
  postal_code: string | null;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface LocationCreateInput {
  nickname: string;
  address: string;
  apt_unit?: string | null;
  suburb: string;
  city: string;
  postal_code?: string | null;
  is_default?: boolean;
}

export interface LocationUpdateInput {
  nickname?: string;
  address?: string;
  apt_unit?: string | null;
  suburb?: string;
  city?: string;
  postal_code?: string | null;
  is_default?: boolean;
}

