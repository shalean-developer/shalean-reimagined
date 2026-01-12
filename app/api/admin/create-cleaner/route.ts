import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server-admin';
import { createNotification } from '../../../notifications/actions';
import { hashPassword } from '@/lib/utils/password';

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
    
    // Create admin client (uses service role key - bypasses RLS)
    const supabaseAdmin = createAdminClient();

    // Check if cleaner with this phone number already exists
    const { data: existingCleaner } = await supabaseAdmin
      .from('cleaners')
      .select('id, name, phone')
      .eq('phone', phoneWithPlus)
      .maybeSingle();

    if (existingCleaner) {
      return NextResponse.json(
        { 
          success: false, 
          error: `A cleaner with phone number ${phoneWithPlus} already exists (${existingCleaner.name})` 
        },
        { status: 400 }
      );
    }

    // Hash the password
    const passwordHash = await hashPassword(password);

    // Create cleaner record in database
    const cleanerData: any = {
      name,
      phone: phoneWithPlus,
      email: email || null,
      password_hash: passwordHash,
      is_active: true,
      is_available: true,
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

      // Check for duplicate phone constraint
      if (cleanerError.code === '23505' || cleanerError.message?.includes('duplicate key') || cleanerError.message?.includes('unique constraint')) {
        return NextResponse.json(
          { success: false, error: `A cleaner with phone number ${phoneWithPlus} already exists` },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { success: false, error: cleanerError.message || 'Failed to create cleaner record' },
        { status: 500 }
      );
    }

    // Create notification for admin about new cleaner
    try {
      await createNotification({
        user_type: 'admin',
        type: 'new_user_registered',
        title: 'New Cleaner Created',
        message: `A new cleaner "${cleaner.name}" has been added to the system.`,
        data: {
          user_id: cleaner.id,
          user_type: 'cleaner',
          cleaner_name: cleaner.name,
          cleaner_phone: cleaner.phone,
        },
      });
    } catch (notificationError) {
      // Don't fail cleaner creation if notification fails
      console.error('Error creating notification for new cleaner:', notificationError);
    }

    return NextResponse.json({
      success: true,
      cleaner: {
        id: cleaner.id,
        name: cleaner.name,
        phone: cleaner.phone,
        email: cleaner.email,
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
