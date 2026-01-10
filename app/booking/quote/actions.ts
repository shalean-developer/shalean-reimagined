'use server';

import { createClient } from '@/lib/supabase/server';
import { QuoteFormData, QuoteStatus, Quote, Service, AdditionalService, HomeDetailOption, CleaningEquipment } from '@/types/quote';
import { revalidatePath } from 'next/cache';

export interface SaveQuoteResult {
  success: boolean;
  data?: Quote;
  error?: string;
}

/**
 * Save or update a quote draft
 */
export async function saveQuoteDraft(
  email: string,
  formData: QuoteFormData
): Promise<SaveQuoteResult> {
  try {
    if (!email || !email.trim()) {
      return { success: false, error: 'Email is required' };
    }

    const supabase = await createClient();

    // Check if a draft already exists for this email
    const { data: existingDraft } = await supabase
      .from('quotes')
      .select('id')
      .eq('email', email.trim().toLowerCase())
      .eq('status', 'draft')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (existingDraft) {
      // Update existing draft
      const { data, error } = await supabase
        .from('quotes')
        .update({
          form_data: formData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingDraft.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating quote draft:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: data as Quote };
    } else {
      // Create new draft
      const { data, error } = await supabase
        .from('quotes')
        .insert({
          email: email.trim().toLowerCase(),
          status: 'draft',
          form_data: formData,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating quote draft:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: data as Quote };
    }
  } catch (error) {
    console.error('Unexpected error saving quote draft:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Get the latest draft quote for an email
 */
export async function getQuoteDraft(email: string): Promise<Quote | null> {
  try {
    if (!email || !email.trim()) {
      return null;
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('email', email.trim().toLowerCase())
      .eq('status', 'draft')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      // If no draft exists, that's okay - return null
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching quote draft:', error);
      return null;
    }

    return data as Quote;
  } catch (error) {
    console.error('Unexpected error fetching quote draft:', error);
    return null;
  }
}

/**
 * Get all quotes (drafts and submitted) for an email
 */
export async function getQuotesByEmail(email: string): Promise<Quote[]> {
  try {
    if (!email || !email.trim()) {
      return [];
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('email', email.trim().toLowerCase())
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching quotes:', error);
      return [];
    }

    return (data || []) as Quote[];
  } catch (error) {
    console.error('Unexpected error fetching quotes:', error);
    return [];
  }
}

/**
 * Submit a quote (change status from draft to submitted)
 */
export async function submitQuote(
  email: string,
  formData: QuoteFormData
): Promise<SaveQuoteResult> {
  try {
    if (!email || !email.trim()) {
      return { success: false, error: 'Email is required' };
    }

    const supabase = await createClient();

    // Check if a draft exists for this email
    const { data: existingDraft } = await supabase
      .from('quotes')
      .select('id')
      .eq('email', email.trim().toLowerCase())
      .eq('status', 'draft')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single();

    if (existingDraft) {
      // Update existing draft to submitted
      const { data, error } = await supabase
        .from('quotes')
        .update({
          status: 'submitted',
          form_data: formData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingDraft.id)
        .select()
        .single();

      if (error) {
        console.error('Error submitting quote:', error);
        return { success: false, error: error.message };
      }

      revalidatePath('/booking/quote');
      return { success: true, data: data as Quote };
    } else {
      // Create new submitted quote
      const { data, error } = await supabase
        .from('quotes')
        .insert({
          email: email.trim().toLowerCase(),
          status: 'submitted',
          form_data: formData,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating submitted quote:', error);
        return { success: false, error: error.message };
      }

      revalidatePath('/booking/quote');
      return { success: true, data: data as Quote };
    }
  } catch (error) {
    console.error('Unexpected error submitting quote:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Get all active services ordered by display_order
 */
export async function getServices(): Promise<Service[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching services:', error);
      return [];
    }

    return (data || []) as Service[];
  } catch (error) {
    console.error('Unexpected error fetching services:', error);
    return [];
  }
}

/**
 * Get additional services, optionally filtered by main service
 */
export async function getAdditionalServices(serviceId?: string): Promise<AdditionalService[]> {
  try {
    const supabase = await createClient();

    if (serviceId) {
      // Get additional services filtered by service rules
      const { data, error } = await supabase
        .from('service_additional_service_rules')
        .select(`
          additional_service_id,
          additional_services:additional_service_id(*)
        `)
        .eq('service_id', serviceId);

      if (error) {
        console.error('Error fetching additional services by service:', error);
        return [];
      }

      // Extract and format the additional services
      const additionalServices = (data || [])
        .map((rule: any) => rule.additional_services)
        .filter((service: AdditionalService) => service && service.is_active)
        .sort((a: AdditionalService, b: AdditionalService) => a.display_order - b.display_order);

      return additionalServices as AdditionalService[];
    } else {
      // Get all active additional services
      const { data, error } = await supabase
        .from('additional_services')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching all additional services:', error);
        return [];
      }

      return (data || []) as AdditionalService[];
    }
  } catch (error) {
    console.error('Unexpected error fetching additional services:', error);
    return [];
  }
}

/**
 * Get home detail options for a specific type (bedrooms, bathrooms, carpet_type, room_status)
 */
export async function getHomeDetailOptions(optionType: string): Promise<HomeDetailOption[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('home_detail_options')
      .select('*')
      .eq('option_type', optionType)
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error(`Error fetching home detail options for ${optionType}:`, error);
      return [];
    }

    return (data || []) as HomeDetailOption[];
  } catch (error) {
    console.error(`Unexpected error fetching home detail options for ${optionType}:`, error);
    return [];
  }
}

/**
 * Get all active cleaning equipment ordered by display_order
 */
export async function getCleaningEquipment(): Promise<CleaningEquipment[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('cleaning_equipment')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching cleaning equipment:', error);
      return [];
    }

    return (data || []) as CleaningEquipment[];
  } catch (error) {
    console.error('Unexpected error fetching cleaning equipment:', error);
    return [];
  }
}

