'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/server-admin';
import { Booking } from '@/types/booking';
import { Profile, ProfileUpdateInput } from '@/types/profile';
import { Location, LocationCreateInput, LocationUpdateInput } from '@/types/location';

export async function getAuthenticatedUser(): Promise<{
  success: boolean;
  email?: string;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return { success: false, error: 'Not authenticated' };
    }

    return { success: true, email: user.email || undefined };
  } catch (error) {
    console.error('Error in getAuthenticatedUser:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get user',
    };
  }
}

export async function getCustomerBookings(
  email: string,
  phone?: string,
  filter?: 'all' | 'upcoming' | 'completed' | 'cancelled'
): Promise<{
  success: boolean;
  bookings?: Booking[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('bookings')
      .select('*')
      .order('service_date', { ascending: false })
      .order('created_at', { ascending: false });

    // Build query for email/phone lookup
    if (email && phone) {
      query = query.or(`customer_email.eq.${email},customer_phone.eq.${phone}`);
    } else if (email) {
      query = query.eq('customer_email', email);
    } else if (phone) {
      query = query.eq('customer_phone', phone);
    } else {
      return { success: false, error: 'Email or phone is required' };
    }

    // Apply status filter
    if (filter && filter !== 'all') {
      if (filter === 'upcoming') {
        query = query.in('status', ['pending', 'confirmed']);
      } else {
        query = query.eq('status', filter);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching bookings:', error);
      return { success: false, error: error.message };
    }

    return { success: true, bookings: data || [] };
  } catch (error) {
    console.error('Error in getCustomerBookings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch bookings',
    };
  }
}

export async function getCustomerBookingStats(
  email: string,
  phone?: string
): Promise<{
  success: boolean;
  stats?: {
    total: number;
    upcoming: number;
    completed: number;
    cancelled: number;
    totalSpent: number;
  };
  error?: string;
}> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('bookings')
      .select('status, total_amount, payment_status');

    // Build query for email/phone lookup
    if (email && phone) {
      query = query.or(`customer_email.eq.${email},customer_phone.eq.${phone}`);
    } else if (email) {
      query = query.eq('customer_email', email);
    } else if (phone) {
      query = query.eq('customer_phone', phone);
    } else {
      return { success: false, error: 'Email or phone is required' };
    }

    const { data, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const stats = {
      total: data?.length || 0,
      upcoming: data?.filter((b) => b.status === 'pending' || b.status === 'confirmed').length || 0,
      completed: data?.filter((b) => b.status === 'completed').length || 0,
      cancelled: data?.filter((b) => b.status === 'cancelled').length || 0,
      totalSpent: data
        ?.filter((b) => b.payment_status === 'paid')
        .reduce((sum, b) => sum + (b.total_amount || 0), 0) || 0,
    };

    return { success: true, stats };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch stats',
    };
  }
}

export async function getBookingById(id: string): Promise<{
  success: boolean;
  booking?: Booking;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching booking:', error);
      return { success: false, error: 'Booking not found' };
    }

    return { success: true, booking: data };
  } catch (error) {
    console.error('Unexpected error fetching booking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function getCustomerProfile(
  email: string,
  phone?: string
): Promise<{
  success: boolean;
  profile?: Profile;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // First, try to get profile from profiles table
    let query = supabase.from('profiles').select('*');

    if (email) {
      query = query.eq('email', email);
    } else if (phone) {
      query = query.eq('phone', phone);
    } else {
      return { success: false, error: 'Email or phone is required' };
    }

    const { data: profileData, error: profileError } = await query.maybeSingle();

    // If profile exists, return it
    if (profileData && !profileError) {
      return { success: true, profile: profileData };
    }

    // If no profile exists, derive from most recent booking
    let bookingQuery = supabase
      .from('bookings')
      .select('customer_first_name, customer_last_name, customer_email, customer_phone')
      .order('created_at', { ascending: false })
      .limit(1);

    if (email && phone) {
      bookingQuery = bookingQuery.or(`customer_email.eq.${email},customer_phone.eq.${phone}`);
    } else if (email) {
      bookingQuery = bookingQuery.eq('customer_email', email);
    } else if (phone) {
      bookingQuery = bookingQuery.eq('customer_phone', phone);
    }

    const { data: bookingData, error: bookingError } = await bookingQuery.maybeSingle();

    if (bookingError || !bookingData) {
      return {
        success: false,
        error: 'No profile or booking found. Please create a booking first.',
      };
    }

    // Create a profile object from booking data
    const derivedProfile: Profile = {
      id: '', // Will be generated when saved
      email: bookingData.customer_email,
      phone: bookingData.customer_phone || null,
      first_name: bookingData.customer_first_name,
      last_name: bookingData.customer_last_name,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return { success: true, profile: derivedProfile };
  } catch (error) {
    console.error('Error in getCustomerProfile:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch profile',
    };
  }
}

export async function uploadProfilePicture(
  email: string,
  fileData: string, // base64 encoded string
  fileName: string,
  fileType: string
): Promise<{
  success: boolean;
  url?: string;
  error?: string;
}> {
  try {
    // Use admin client for storage uploads if service role key is available
    // If not available, fall back to authenticated client for storage (storage policies may still work)
    let supabase;
    try {
      supabase = createAdminClient();
      console.log('✅ Using admin client for storage upload');
    } catch (error) {
      console.warn('⚠️ Service role key not set, using authenticated client for storage upload');
      supabase = await createClient();
    }

    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validImageTypes.includes(fileType)) {
      return { success: false, error: 'Invalid file type. Please upload a JPEG, PNG, or WebP image.' };
    }

    // Decode base64 data
    const base64Data = fileData.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (buffer.length > maxSize) {
      return { success: false, error: 'File size too large. Please upload an image smaller than 5MB.' };
    }

    // Generate unique filename using email and timestamp
    const fileExt = fileName.split('.').pop() || 'jpg';
    const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, '_');
    const uniqueFileName = `${sanitizedEmail}_${Date.now()}.${fileExt}`;
    const filePath = `avatars/${uniqueFileName}`;

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('profile-pictures')
      .upload(filePath, buffer, {
        contentType: fileType,
        upsert: false,
      });

      if (uploadError) {
        console.error('❌ Storage upload error:', uploadError);
        console.error('Upload error details:', {
          message: uploadError.message,
          statusCode: uploadError.statusCode,
          error: uploadError.error,
        });
        
        // Check for storage RLS errors
        if (uploadError.message?.includes('row-level security') || 
            uploadError.message?.includes('RLS') ||
            uploadError.message?.includes('policy')) {
          return { 
            success: false, 
            error: 'Storage bucket RLS policy error. Please check your "profile-pictures" bucket policies in Supabase Storage. The bucket needs policies that allow authenticated users to upload files.',
            errorDetails: uploadError.message,
          };
        }
        
        // If bucket doesn't exist, return helpful error
        if (uploadError.message.includes('not found') || uploadError.message.includes('Bucket')) {
          return { 
            success: false, 
            error: 'Storage bucket not configured. Please create a "profile-pictures" bucket in Supabase Storage.',
            errorDetails: uploadError.message,
          };
        }
        return { 
          success: false, 
          error: uploadError.message || 'Failed to upload file',
          errorDetails: uploadError.error || uploadError.statusCode?.toString(),
        };
      }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('profile-pictures')
      .getPublicUrl(filePath);

    return { success: true, url: urlData.publicUrl };
  } catch (error) {
    console.error('Error in uploadProfilePicture:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload profile picture',
    };
  }
}

export async function deleteProfilePicture(email: string, avatarUrl: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Extract file path from URL
    // URL format: https://[project].supabase.co/storage/v1/object/public/profile-pictures/avatars/filename.jpg
    const urlPattern = /\/profile-pictures\/(.+)$/;
    const match = avatarUrl.match(urlPattern);
    
    if (!match || !match[1]) {
      // If URL doesn't match expected pattern, try alternative parsing
      const urlParts = avatarUrl.split('/avatars/');
      if (urlParts.length < 2) {
        // If we can't parse the URL, just return success (the file might already be deleted)
        console.warn('Could not parse avatar URL for deletion:', avatarUrl);
        return { success: true };
      }
      const filePath = `avatars/${urlParts[1].split('?')[0]}`;
      const { error: deleteError } = await supabase.storage
        .from('profile-pictures')
        .remove([filePath]);

      if (deleteError && !deleteError.message.includes('not found')) {
        console.error('Error deleting file:', deleteError);
        return { success: false, error: deleteError.message };
      }
      return { success: true };
    }

    const filePath = match[1].split('?')[0]; // Remove query parameters if any

    // Delete from storage
    const { error: deleteError } = await supabase.storage
      .from('profile-pictures')
      .remove([filePath]);

    if (deleteError) {
      console.error('Error deleting file:', deleteError);
      // Don't fail if file doesn't exist
      if (deleteError.message.includes('not found') || deleteError.message.includes('No such file')) {
        return { success: true };
      }
      return { success: false, error: deleteError.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteProfilePicture:', error);
    // Don't fail completely - the URL in database will be removed anyway
    return { success: true };
  }
}

export async function updateCustomerProfile(
  email: string,
  data: ProfileUpdateInput
): Promise<{
  success: boolean;
  profile?: Profile;
  error?: string;
}> {
  try {
    // First, verify the authenticated user matches the email
    const authSupabase = await createClient();
    const { data: { user }, error: authError } = await authSupabase.auth.getUser();
    
    if (authError || !user) {
      return { success: false, error: 'Not authenticated' };
    }

    // Verify that the email parameter matches the authenticated user's email
    // This ensures users can only update their own profile
    if (user.email?.toLowerCase() !== email.toLowerCase() && user.email?.toLowerCase() !== data.email?.toLowerCase()) {
      return { success: false, error: 'Unauthorized: You can only update your own profile' };
    }

    // ALWAYS use admin client for profile operations - it bypasses RLS completely
    // This is REQUIRED - we cannot use authenticated client as it may still check RLS policies
    let supabase;
    try {
      supabase = createAdminClient();
      console.log('✅ Using admin client for profile operations');
    } catch (error) {
      // Do NOT fall back to authenticated client - it will cause RLS errors
      console.error('❌ Failed to create admin client:', error);
      return {
        success: false,
        error: 'SUPABASE_SERVICE_ROLE_KEY is not set. This is REQUIRED for profile operations. Please add it to your .env.local file. Get it from: Supabase Dashboard → Settings → API → service_role key (secret)',
      };
    }
    
    // Verify we have a valid client (should never happen due to error above, but double-check)
    if (!supabase) {
      return { 
        success: false, 
        error: 'Failed to initialize database client. Please check your SUPABASE_SERVICE_ROLE_KEY in .env.local' 
      };
    }

    // Validate input
    if (!data.first_name?.trim()) {
      return { success: false, error: 'First name is required' };
    }
    if (!data.last_name?.trim()) {
      return { success: false, error: 'Last name is required' };
    }
    if (!data.email?.trim()) {
      return { success: false, error: 'Email is required' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return { success: false, error: 'Invalid email format' };
    }

    // Verify the new email (if changed) still matches the authenticated user
    if (data.email.toLowerCase() !== user.email?.toLowerCase()) {
      // Allow email change only if it's the same user (case insensitive check above passed)
      // But we should verify it's a valid change (user updating their own email)
      if (data.email.toLowerCase() !== email.toLowerCase()) {
        // Email is being changed - verify it's still the same user
        // For now, we'll allow it but in production you might want to require email verification
      }
    }

    // Check if profile exists
    console.log('🔍 Checking if profile exists for email:', email);
    console.log('🔍 Using client type:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'ADMIN (service role)' : 'AUTHENTICATED (anon key)');
    
    const { data: existingProfile, error: selectError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .maybeSingle();
    
    if (selectError) {
      console.error('❌ Error selecting profile:', selectError);
      return { success: false, error: `Failed to check profile: ${selectError.message}` };
    }
    
    console.log('✅ Profile check result:', existingProfile ? 'Profile exists (will UPDATE)' : 'Profile does not exist (will INSERT)');

    // If avatar_url is being removed, delete the old file
    if (existingProfile?.avatar_url && data.avatar_url === null) {
      await deleteProfilePicture(email, existingProfile.avatar_url);
    }

    let result;
    if (existingProfile) {
      // Update existing profile
      // If email changed, we need to handle it carefully
      if (data.email !== email) {
        // Check if new email already exists
        const { data: emailCheck } = await supabase
          .from('profiles')
          .select('id')
          .eq('email', data.email)
          .maybeSingle();

        if (emailCheck) {
          return { success: false, error: 'Email already exists' };
        }
      }

      const updateData: any = {
          first_name: data.first_name.trim(),
          last_name: data.last_name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || null,
          updated_at: new Date().toISOString(),
      };

      // Handle avatar_url: undefined means don't change, null means remove, string means set
      if (data.avatar_url !== undefined) {
        updateData.avatar_url = data.avatar_url === null ? null : data.avatar_url;
      }

      console.log('📝 Attempting to UPDATE profile with data:', updateData);
      console.log('📝 Update WHERE email =', email);
      
      const { data: updatedProfile, error: updateError } = await supabase
        .from('profiles')
        .update(updateData)
        .eq('email', email)
        .select()
        .single();

      if (updateError) {
        console.error('❌ Error updating profile:', updateError);
        console.error('❌ Update error details:', {
          code: updateError.code,
          message: updateError.message,
          details: updateError.details,
          hint: updateError.hint,
          statusCode: (updateError as any).statusCode,
          status: (updateError as any).status,
          serviceRoleKeySet: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        });
        
        // Check for RLS errors specifically
        if (updateError.message?.includes('row-level security') || 
            updateError.code === '42501' ||
            updateError.message?.includes('RLS')) {
          return { 
            success: false, 
            error: 'Row Level Security error. Please ensure: 1) RLS is disabled on profiles table, 2) SUPABASE_SERVICE_ROLE_KEY is set in .env.local',
            errorDetails: `Error code: ${updateError.code || 'unknown'}. ${updateError.hint || ''}`,
          };
        }
        
        return { 
          success: false, 
          error: updateError.message || 'Failed to update profile',
          errorDetails: updateError.details || updateError.hint || undefined,
        };
      }

      result = updatedProfile;
    } else {
      // Create new profile
      const insertData: any = {
          email: data.email.trim(),
          phone: data.phone?.trim() || null,
          first_name: data.first_name.trim(),
          last_name: data.last_name.trim(),
      };

      // Only set avatar_url if it's provided
      if (data.avatar_url) {
        insertData.avatar_url = data.avatar_url;
      }

      const { data: newProfile, error: insertError } = await supabase
        .from('profiles')
        .insert(insertData)
        .select()
        .single();

      if (insertError) {
        console.error('Error creating profile:', insertError);
        console.error('❌ Insert error details:', {
          code: insertError.code,
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
          serviceRoleKeySet: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        });
        // Check if it's a unique constraint violation
        if (insertError.code === '23505') {
          return { success: false, error: 'Email already exists' };
        }
        // Check if it's an RLS error
        if (insertError.message?.includes('row-level security') || 
            insertError.code === '42501' ||
            insertError.message?.includes('RLS')) {
          return { 
            success: false, 
            error: 'Row Level Security error. Please ensure: 1) RLS is disabled on profiles table, 2) SUPABASE_SERVICE_ROLE_KEY is set in .env.local',
            errorDetails: `Error code: ${insertError.code || 'unknown'}. ${insertError.hint || ''}`,
          };
        }
        return { 
          success: false, 
          error: insertError.message || 'Failed to create profile',
          errorDetails: insertError.details || insertError.hint || undefined,
        };
      }

      result = newProfile;
    }

    return { success: true, profile: result };
  } catch (error) {
    console.error('Error in updateCustomerProfile:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update profile',
    };
  }
}

export async function getCustomerLocations(
  email: string,
  phone?: string
): Promise<{
  success: boolean;
  locations?: Location[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('locations')
      .select('*')
      .order('is_default', { ascending: false })
      .order('created_at', { ascending: false });

    // Build query for email/phone lookup
    if (email && phone) {
      query = query.or(`customer_email.eq.${email},customer_phone.eq.${phone}`);
    } else if (email) {
      query = query.eq('customer_email', email);
    } else if (phone) {
      query = query.eq('customer_phone', phone);
    } else {
      return { success: false, error: 'Email or phone is required' };
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching locations:', error);
      return { success: false, error: error.message };
    }

    return { success: true, locations: data || [] };
  } catch (error) {
    console.error('Error in getCustomerLocations:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch locations',
    };
  }
}

export async function createLocation(
  email: string,
  phone: string | undefined,
  locationData: LocationCreateInput
): Promise<{
  success: boolean;
  location?: Location;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Validate input
    if (!locationData.nickname?.trim()) {
      return { success: false, error: 'Nickname is required' };
    }
    if (!locationData.address?.trim()) {
      return { success: false, error: 'Address is required' };
    }
    if (!locationData.suburb?.trim()) {
      return { success: false, error: 'Suburb is required' };
    }
    if (!locationData.city?.trim()) {
      return { success: false, error: 'City is required' };
    }

    // If setting as default, unset all other defaults for this customer
    if (locationData.is_default) {
      let updateQuery = supabase
        .from('locations')
        .update({ is_default: false });

      if (email && phone) {
        updateQuery = updateQuery.or(`customer_email.eq.${email},customer_phone.eq.${phone}`);
      } else if (email) {
        updateQuery = updateQuery.eq('customer_email', email);
      } else if (phone) {
        updateQuery = updateQuery.eq('customer_phone', phone);
      }

      await updateQuery;
    }

    const { data: newLocation, error: insertError } = await supabase
      .from('locations')
      .insert({
        customer_email: email,
        customer_phone: phone || null,
        nickname: locationData.nickname.trim(),
        address: locationData.address.trim(),
        apt_unit: locationData.apt_unit?.trim() || null,
        suburb: locationData.suburb.trim(),
        city: locationData.city.trim(),
        postal_code: locationData.postal_code?.trim() || null,
        is_default: locationData.is_default || false,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error creating location:', insertError);
      return { success: false, error: insertError.message };
    }

    return { success: true, location: newLocation };
  } catch (error) {
    console.error('Error in createLocation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create location',
    };
  }
}

export async function updateLocation(
  locationId: string,
  locationData: LocationUpdateInput
): Promise<{
  success: boolean;
  location?: Location;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Validate input if provided
    if (locationData.nickname !== undefined && !locationData.nickname.trim()) {
      return { success: false, error: 'Nickname is required' };
    }
    if (locationData.address !== undefined && !locationData.address.trim()) {
      return { success: false, error: 'Address is required' };
    }
    if (locationData.suburb !== undefined && !locationData.suburb.trim()) {
      return { success: false, error: 'Suburb is required' };
    }
    if (locationData.city !== undefined && !locationData.city.trim()) {
      return { success: false, error: 'City is required' };
    }

    // Get current location to check customer email
    const { data: currentLocation, error: fetchError } = await supabase
      .from('locations')
      .select('customer_email, customer_phone')
      .eq('id', locationId)
      .single();

    if (fetchError || !currentLocation) {
      return { success: false, error: 'Location not found' };
    }

    // If setting as default, unset all other defaults for this customer
    if (locationData.is_default) {
      let updateQuery = supabase
        .from('locations')
        .update({ is_default: false });

      if (currentLocation.customer_email && currentLocation.customer_phone) {
        updateQuery = updateQuery.or(`customer_email.eq.${currentLocation.customer_email},customer_phone.eq.${currentLocation.customer_phone}`);
      } else if (currentLocation.customer_email) {
        updateQuery = updateQuery.eq('customer_email', currentLocation.customer_email);
      } else if (currentLocation.customer_phone) {
        updateQuery = updateQuery.eq('customer_phone', currentLocation.customer_phone);
      }

      // Don't unset the current location
      updateQuery = updateQuery.neq('id', locationId);

      await updateQuery;
    }

    // Build update object with only provided fields
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };

    if (locationData.nickname !== undefined) {
      updateData.nickname = locationData.nickname.trim();
    }
    if (locationData.address !== undefined) {
      updateData.address = locationData.address.trim();
    }
    if (locationData.apt_unit !== undefined) {
      updateData.apt_unit = locationData.apt_unit?.trim() || null;
    }
    if (locationData.suburb !== undefined) {
      updateData.suburb = locationData.suburb.trim();
    }
    if (locationData.city !== undefined) {
      updateData.city = locationData.city.trim();
    }
    if (locationData.postal_code !== undefined) {
      updateData.postal_code = locationData.postal_code?.trim() || null;
    }
    if (locationData.is_default !== undefined) {
      updateData.is_default = locationData.is_default;
    }

    const { data: updatedLocation, error: updateError } = await supabase
      .from('locations')
      .update(updateData)
      .eq('id', locationId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating location:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, location: updatedLocation };
  } catch (error) {
    console.error('Error in updateLocation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update location',
    };
  }
}

export async function deleteLocation(locationId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from('locations')
      .delete()
      .eq('id', locationId);

    if (error) {
      console.error('Error deleting location:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteLocation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete location',
    };
  }
}

export async function setDefaultLocation(
  locationId: string,
  email: string,
  phone?: string
): Promise<{
  success: boolean;
  location?: Location;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Get current location to verify ownership
    const { data: currentLocation, error: fetchError } = await supabase
      .from('locations')
      .select('customer_email, customer_phone')
      .eq('id', locationId)
      .single();

    if (fetchError || !currentLocation) {
      return { success: false, error: 'Location not found' };
    }

    // Verify ownership
    const isOwner = 
      currentLocation.customer_email === email ||
      (phone && currentLocation.customer_phone === phone);

    if (!isOwner) {
      return { success: false, error: 'Unauthorized' };
    }

    // Unset all other defaults for this customer
    let updateQuery = supabase
      .from('locations')
      .update({ is_default: false });

    if (email && phone) {
      updateQuery = updateQuery.or(`customer_email.eq.${email},customer_phone.eq.${phone}`);
    } else if (email) {
      updateQuery = updateQuery.eq('customer_email', email);
    } else if (phone) {
      updateQuery = updateQuery.eq('customer_phone', phone);
    }

    // Don't unset the current location
    updateQuery = updateQuery.neq('id', locationId);

    await updateQuery;

    // Set this location as default
    const { data: updatedLocation, error: updateError } = await supabase
      .from('locations')
      .update({ is_default: true })
      .eq('id', locationId)
      .select()
      .single();

    if (updateError) {
      console.error('Error setting default location:', updateError);
      return { success: false, error: updateError.message };
    }

    return { success: true, location: updatedLocation };
  } catch (error) {
    console.error('Error in setDefaultLocation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to set default location',
    };
  }
}

export async function getOrCreateReferralCode(
  email: string
): Promise<{
  success: boolean;
  referralCode?: string;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Check if profile exists and has a referral code
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('referral_code')
      .eq('email', email)
      .maybeSingle();

    if (profileError && profileError.code !== 'PGRST116') {
      console.error('Error fetching profile:', profileError);
      return { success: false, error: profileError.message };
    }

    // If profile exists and has a referral code, return it
    if (profile?.referral_code) {
      return { success: true, referralCode: profile.referral_code };
    }

    // Generate a new referral code
    // Try using the database function first, but fallback to client-side generation
    let generatedCode: string | null = null;
    
    try {
      const { data: dbCode, error: codeError } = await supabase
        .rpc('generate_referral_code');
      
      if (!codeError && dbCode) {
        generatedCode = dbCode;
      }
    } catch (rpcError) {
      // RPC function might not exist yet, that's okay
      console.log('RPC function not available, using fallback');
    }

    if (!generatedCode) {
      // Fallback: generate code client-side style
      const fallbackCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      // Check if fallback code exists, retry if it does
      let finalCode = fallbackCode;
      let attempts = 0;
      const maxAttempts = 5;

      while (attempts < maxAttempts) {
        const { data: existing } = await supabase
          .from('profiles')
          .select('id')
          .eq('referral_code', finalCode)
          .maybeSingle();

        if (!existing) {
          break; // Code is unique
        }

        // Generate a new code
        finalCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        attempts++;
      }

      // Update or insert profile with referral code
      // First, try to update existing profile
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id, first_name, last_name')
        .eq('email', email)
        .maybeSingle();

      let updatedProfile;
      if (existingProfile) {
        // Update existing profile
        const { data: updated, error: updateError } = await supabase
          .from('profiles')
          .update({
            referral_code: finalCode,
            updated_at: new Date().toISOString(),
          })
          .eq('email', email)
          .select('referral_code')
          .single();

        if (updateError) {
          console.error('Error updating referral code:', updateError);
          return { success: false, error: updateError.message };
        }
        updatedProfile = updated;
      } else {
        // Insert new profile with referral code
        const { data: inserted, error: insertError } = await supabase
          .from('profiles')
          .insert({
            email,
            referral_code: finalCode,
            first_name: email.split('@')[0],
            last_name: '',
          })
          .select('referral_code')
          .single();

        if (insertError) {
          console.error('Error creating referral code:', insertError);
          return { success: false, error: insertError.message };
        }
        updatedProfile = inserted;
      }

      return { success: true, referralCode: updatedProfile?.referral_code || finalCode };
    }

    // Use the generated code from database function
    // Update or insert profile with generated code
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id, first_name, last_name')
      .eq('email', email)
      .maybeSingle();

    let updatedProfile;
    if (existingProfile) {
      // Update existing profile
      const { data: updated, error: updateError } = await supabase
        .from('profiles')
        .update({
          referral_code: generatedCode,
          updated_at: new Date().toISOString(),
        })
        .eq('email', email)
        .select('referral_code')
        .single();

      if (updateError) {
        console.error('Error updating referral code:', updateError);
        return { success: false, error: updateError.message };
      }
      updatedProfile = updated;
    } else {
      // Insert new profile with referral code
      const { data: inserted, error: insertError } = await supabase
        .from('profiles')
        .insert({
          email,
          referral_code: generatedCode,
          first_name: email.split('@')[0],
          last_name: '',
        })
        .select('referral_code')
        .single();

      if (insertError) {
        console.error('Error creating referral code:', insertError);
        return { success: false, error: insertError.message };
      }
      updatedProfile = inserted;
    }

    return { success: true, referralCode: updatedProfile?.referral_code || generatedCode };
  } catch (error) {
    console.error('Error in getOrCreateReferralCode:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get referral code',
    };
  }
}

export async function sendReferralInvites(
  email: string,
  inviteEmails: string[],
  referralCode: string
): Promise<{
  success: boolean;
  sent?: number;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Validate email addresses
    const validEmails = inviteEmails
      .map((e) => e.trim())
      .filter((e) => {
        if (!e) return false;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
      });

    if (validEmails.length === 0) {
      return { success: false, error: 'No valid email addresses provided' };
    }

    // Create referral records for tracking
    const referralRecords = validEmails.map((referredEmail) => ({
      referrer_email: email,
      referred_email: referredEmail,
      referral_code: referralCode,
      status: 'pending',
    }));

    const { error: insertError } = await supabase
      .from('referrals')
      .insert(referralRecords);

    if (insertError) {
      console.error('Error creating referral records:', insertError);
      // Continue even if insert fails - we still want to send emails
    }

    // Generate referral link
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shalean.co.za';
    const referralLink = `${baseUrl}/booking/details?ref=${referralCode}`;

    // TODO: Implement actual email sending using your email service (Resend, SendGrid, etc.)
    // For now, we'll just log the emails that would be sent
    console.log('Referral invites to send:', {
      from: email,
      to: validEmails,
      referralCode,
      referralLink,
    });

    // In a real implementation, you would send emails here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Shalean <noreply@shalean.co.za>',
    //   to: validEmails,
    //   subject: 'You\'ve been invited to try Shalean Cleaning Services!',
    //   html: `<p>Your friend has invited you to try Shalean. Use code ${referralCode} to get R150 off your first booking!</p><p><a href="${referralLink}">Book Now</a></p>`,
    // });

    return { success: true, sent: validEmails.length };
  } catch (error) {
    console.error('Error in sendReferralInvites:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send invites',
    };
  }
}

export async function getReferralStats(
  email: string
): Promise<{
  success: boolean;
  stats?: {
    totalReferrals: number;
    completedReferrals: number;
    pendingRewards: number;
    totalRewards: number;
  };
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { data: referrals, error } = await supabase
      .from('referrals')
      .select('status, referrer_reward_amount, referrer_reward_status')
      .eq('referrer_email', email);

    if (error) {
      console.error('Error fetching referral stats:', error);
      return { success: false, error: error.message };
    }

    const stats = {
      totalReferrals: referrals?.length || 0,
      completedReferrals:
        referrals?.filter((r) => r.status === 'completed').length || 0,
      pendingRewards:
        referrals?.filter((r) => r.referrer_reward_status === 'pending').length || 0,
      totalRewards:
        referrals
          ?.filter((r) => r.referrer_reward_status === 'credited')
          .reduce((sum, r) => sum + (r.referrer_reward_amount || 0), 0) || 0,
    };

    return { success: true, stats };
  } catch (error) {
    console.error('Error in getReferralStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch referral stats',
    };
  }
}

/**
 * Initialize a credit purchase with Paystack
 */
export async function initializeCreditPurchase(
  email: string,
  amount: number,
  paymentMethod: 'credit_card' | 'eft'
): Promise<{
  success: boolean;
  authorizationUrl?: string;
  reference?: string;
  error?: string;
}> {
  try {
    if (amount < 20 || amount > 5000) {
      return {
        success: false,
        error: 'Amount must be between R20 and R5000',
      };
    }

    // Generate a unique reference for this credit purchase
    const reference = `CREDIT_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Create a pending credit transaction
    const supabase = await createClient();
    
    // Get or create profile
    let { data: profile } = await supabase
      .from('profiles')
      .select('id, credit_balance')
      .eq('email', email)
      .maybeSingle();

    if (!profile) {
      // Create a basic profile if it doesn't exist
      const { data: newProfile, error: createError } = await supabase
        .from('profiles')
        .insert({
          email,
          credit_balance: 0,
          first_name: '',
          last_name: '',
        })
        .select('id, credit_balance')
        .single();

      if (createError || !newProfile) {
        return {
          success: false,
          error: 'Failed to create profile',
        };
      }
      profile = newProfile;
    }

    // Create pending credit transaction
    const { error: transactionError } = await supabase
      .from('credit_transactions')
      .insert({
        profile_id: profile.id,
        email,
        transaction_type: 'purchase',
        amount,
        balance_before: profile.credit_balance || 0,
        balance_after: profile.credit_balance || 0, // Won't update until payment succeeds
        payment_method: paymentMethod,
        paystack_reference: reference,
        payment_status: 'pending',
        description: `Purchase of R${amount} ShaleanCred`,
      });

    if (transactionError) {
      console.error('Error creating credit transaction:', transactionError);
      return {
        success: false,
        error: 'Failed to create transaction record',
      };
    }

    // Initialize Paystack payment
    const response = await fetch('/api/paystack/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount,
        reference,
        metadata: {
          transaction_type: 'credit_purchase',
          payment_method: paymentMethod,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        error: error.error || 'Failed to initialize payment',
      };
    }

    const paymentData = await response.json();

    if (!paymentData.status) {
      return {
        success: false,
        error: paymentData.message || 'Failed to initialize payment',
      };
    }

    return {
      success: true,
      authorizationUrl: paymentData.data.authorization_url,
      reference: paymentData.data.reference,
    };
  } catch (error) {
    console.error('Error initializing credit purchase:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to initialize payment',
    };
  }
}

export interface VoucherRedemption {
  id: string;
  voucher_code: string;
  amount: number;
  redeemed_at: string;
  booking_id?: string;
}

export async function redeemVoucher(
  code: string,
  email: string,
  phone?: string
): Promise<{
  success: boolean;
  amount?: number;
  newBalance?: number;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Call the database function to redeem the voucher
    const { data, error } = await supabase.rpc('redeem_voucher', {
      p_code: code.trim().toUpperCase(),
      p_email: email.trim(),
      p_phone: phone?.trim() || null,
    });

    if (error) {
      console.error('Error redeeming voucher:', error);
      return {
        success: false,
        error: error.message || 'Failed to redeem voucher',
      };
    }

    // Parse the result from the function (handle both object and string JSONB)
    let result = data;
    if (typeof data === 'string') {
      try {
        result = JSON.parse(data);
      } catch (parseError) {
        console.error('Error parsing voucher redemption result:', parseError);
        return {
          success: false,
          error: 'Invalid response from server',
        };
      }
    }

    if (result && typeof result === 'object' && 'success' in result) {
      if (result.success === false) {
        return {
          success: false,
          error: result.error || 'Failed to redeem voucher',
        };
      }

      return {
        success: true,
        amount: result.amount,
        newBalance: result.new_balance,
      };
    }

    return {
      success: false,
      error: 'Unexpected response from server',
    };
  } catch (error) {
    console.error('Error in redeemVoucher:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to redeem voucher',
    };
  }
}

export async function getVoucherRedemptions(
  email: string,
  phone?: string
): Promise<{
  success: boolean;
  redemptions?: VoucherRedemption[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('voucher_redemptions')
      .select('id, voucher_code, amount, redeemed_at, booking_id')
      .order('redeemed_at', { ascending: false });

    // Build query for email/phone lookup
    // Prioritize email as it's the primary identifier to prevent cross-account visibility
    if (email) {
      query = query.eq('email', email);
      // If phone is also provided, we can optionally filter by both for extra security
      // but email alone should be sufficient since it's unique
    } else if (phone) {
      query = query.eq('phone', phone);
    } else {
      return { success: false, error: 'Email or phone is required' };
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching voucher redemptions:', error);
      return { success: false, error: error.message };
    }

    // Transform the data to match the interface
    const redemptions: VoucherRedemption[] = (data || []).map((redemption) => ({
      id: redemption.id,
      voucher_code: redemption.voucher_code,
      amount: redemption.amount,
      redeemed_at: redemption.redeemed_at,
      booking_id: redemption.booking_id || undefined,
    }));

    return { success: true, redemptions };
  } catch (error) {
    console.error('Error in getVoucherRedemptions:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch voucher redemptions',
    };
  }
}

