import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server-admin';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, password, name, email, areas, bio, specialties, yearsExperience } = body;

    // Validate required fields
    if (!phone || !password || !name) {
      return NextResponse.json(
        { success: false, error: 'Phone, password, and name are required' },
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
    
    // Format email for Supabase Auth: {phone}@cleaners.shalean.local
    // Use the normalized phone without + for email (Supabase Auth handles emails better without +)
    const phoneForEmail = phoneWithPlus.replace(/\+/g, '');
    const authEmail = `${phoneForEmail}@cleaners.shalean.local`;

    // Create admin client (uses service role key - bypasses RLS)
    const supabaseAdmin = createAdminClient();

    // Step 1: Create Supabase Auth user
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: authEmail,
      password: password,
      email_confirm: true, // Auto-confirm email so user can login immediately
      user_metadata: {
        phone: phoneWithPlus,
        name: name,
        role: 'cleaner',
      },
    });

    if (authError || !authUser.user) {
      console.error('Error creating auth user:', authError);
      return NextResponse.json(
        { success: false, error: authError?.message || 'Failed to create authentication user' },
        { status: 500 }
      );
    }

    // Step 2: Create cleaner record in database
    const cleanerData: any = {
      name,
      phone: phoneWithPlus,
      email: email || null,
      is_active: true,
      is_available: true,
      auth_user_id: authUser.user.id,
      available_monday: true,
      available_tuesday: true,
      available_wednesday: true,
      available_thursday: true,
      available_friday: true,
      available_saturday: true,
      available_sunday: true,
      rating: 0.0,
    };

    // Add optional fields if provided
    if (areas && Array.isArray(areas)) {
      cleanerData.areas = areas;
    }
    if (bio) {
      cleanerData.bio = bio;
    }
    if (specialties && Array.isArray(specialties)) {
      cleanerData.specialties = specialties;
    }
    if (yearsExperience) {
      cleanerData.years_experience = yearsExperience;
    }

    const { data: cleaner, error: cleanerError } = await supabaseAdmin
      .from('cleaners')
      .insert(cleanerData)
      .select()
      .single();

    if (cleanerError) {
      console.error('Error creating cleaner record:', cleanerError);
      
      // If cleaner creation fails, try to clean up the auth user
      try {
        await supabaseAdmin.auth.admin.deleteUser(authUser.user.id);
      } catch (deleteError) {
        console.error('Error cleaning up auth user:', deleteError);
      }

      return NextResponse.json(
        { success: false, error: cleanerError.message || 'Failed to create cleaner record' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      cleaner: {
        id: cleaner.id,
        name: cleaner.name,
        phone: cleaner.phone,
        email: cleaner.email,
        auth_email: authEmail,
      },
      message: 'Cleaner created successfully',
    });
  } catch (error) {
    console.error('Error in create-cleaner API:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
