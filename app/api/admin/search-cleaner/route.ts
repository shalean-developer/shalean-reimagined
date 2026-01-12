import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server-admin';
import { Cleaner } from '@/types/booking';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const phone = searchParams.get('phone');

    if (!phone) {
      return NextResponse.json(
        { success: false, error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Normalize phone number (remove spaces, ensure it starts with + if needed)
    // If it starts with 0, remove it and add +27 (South Africa country code)
    // If it already starts with +, use as-is
    // Otherwise, assume it's a South African number and add +27
    const normalizedPhone = phone.replace(/\s+/g, '').trim();
    let phoneWithPlus: string;
    if (normalizedPhone.startsWith('+')) {
      phoneWithPlus = normalizedPhone;
    } else if (normalizedPhone.startsWith('0')) {
      // Remove leading 0 and add +27
      phoneWithPlus = `+27${normalizedPhone.substring(1)}`;
    } else {
      // Assume it's already without country code, add +27
      phoneWithPlus = `+27${normalizedPhone}`;
    }

    // Create admin client (uses service role key - bypasses RLS)
    const supabaseAdmin = createAdminClient();

    // Search for cleaner by phone (cleaners are stored with +27 format in database)
    // Try both with +27 and without + in case of edge cases
    const phoneWithoutPlus = phoneWithPlus.replace(/^\+/, '');
    
    const { data: cleaner, error } = await supabaseAdmin
      .from('cleaners')
      .select('*')
      .or(`phone.eq.${phoneWithPlus},phone.eq.${phoneWithoutPlus}`)
      .maybeSingle();

    if (error) {
      console.error('Error searching cleaner by phone:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    if (!cleaner) {
      return NextResponse.json(
        { success: false, error: 'Cleaner not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      cleaner: cleaner as Cleaner,
    });
  } catch (error) {
    console.error('Error in search-cleaner API:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to search cleaner',
      },
      { status: 500 }
    );
  }
}
