// TypeScript types for customer profile

export interface Profile {
  id: string;
  email: string;
  phone: string | null;
  first_name: string;
  last_name: string;
  referral_code: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfileUpdateInput {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar_url?: string | null;
}

