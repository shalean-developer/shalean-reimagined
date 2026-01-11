-- Add Admin Created Cleaner with phone number 0824644655
-- This migration adds the cleaner profile created by admin
-- Note: The auth user should be created separately via the API/script or manually in Supabase Auth

DO $$
DECLARE
  v_cleaner_id UUID;
  v_phone TEXT := '+27824644655';
BEGIN
  -- Check if cleaner with this phone already exists
  SELECT id INTO v_cleaner_id
  FROM cleaners
  WHERE phone = v_phone;

  IF v_cleaner_id IS NOT NULL THEN
    -- Update existing cleaner
    UPDATE cleaners SET
      name = 'Admin Created Cleaner',
      is_active = true,
      is_available = true,
      available_monday = true,
      available_tuesday = true,
      available_wednesday = true,
      available_thursday = true,
      available_friday = true,
      available_saturday = true,
      available_sunday = true,
      rating = 0.0,
      updated_at = NOW()
    WHERE id = v_cleaner_id;
    
    RAISE NOTICE 'Updated existing cleaner with phone % (ID: %)', v_phone, v_cleaner_id;
  ELSE
    -- Insert new cleaner
    INSERT INTO "public"."cleaners" (
      "id", 
      "name", 
      "phone",
      "email", 
      "is_active",
      "is_available",
      "available_monday", 
      "available_tuesday", 
      "available_wednesday", 
      "available_thursday", 
      "available_friday", 
      "available_saturday", 
      "available_sunday", 
      "rating",
      "created_at", 
      "updated_at"
    ) VALUES (
      gen_random_uuid(),
      'Admin Created Cleaner',
      v_phone,
      NULL,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      0.0,
      NOW(),
      NOW()
    ) RETURNING id INTO v_cleaner_id;
    
    RAISE NOTICE 'Created new cleaner with phone % (ID: %)', v_phone, v_cleaner_id;
  END IF;
END $$;

-- Note: To complete the setup, you need to:
-- 1. Create an auth user in Supabase Auth with:
--    - Email: 27824644655@cleaners.shalean.local
--    - Password: Cleaner2024!
--    - User metadata: { phone: '+27824644655', name: 'Admin Created Cleaner', role: 'cleaner' }
-- 2. Update this cleaner record with the auth_user_id from the created auth user:
--    UPDATE cleaners SET auth_user_id = '<auth_user_id>' WHERE phone = '+27824644655';
-- Alternatively, run the script: npx tsx scripts/create-cleaner-now.ts to create both the auth user and link them automatically
