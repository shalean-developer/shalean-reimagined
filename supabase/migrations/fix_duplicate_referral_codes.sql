-- Fix duplicate referral codes
-- This migration finds and fixes any duplicate referral codes

-- First, let's see if there are any duplicates
-- We'll create a function to fix them

-- Function to find and fix duplicate referral codes
CREATE OR REPLACE FUNCTION fix_duplicate_referral_codes()
RETURNS TABLE(
  email TEXT,
  old_code TEXT,
  new_code TEXT,
  fixed BOOLEAN
) AS $$
DECLARE
  duplicate_record RECORD;
  new_code TEXT;
  code_exists BOOLEAN;
BEGIN
  -- Find all profiles with duplicate referral codes
  -- Keep the first one (by created_at) and regenerate codes for others
  FOR duplicate_record IN
    WITH duplicates AS (
      SELECT 
        email,
        referral_code,
        created_at,
        ROW_NUMBER() OVER (PARTITION BY referral_code ORDER BY created_at ASC) as rn
      FROM profiles
      WHERE referral_code IS NOT NULL
    )
    SELECT email, referral_code, created_at
    FROM duplicates
    WHERE rn > 1
  LOOP
    -- First, set the duplicate code to NULL to avoid constraint violation
    UPDATE profiles
    SET referral_code = NULL,
        updated_at = NOW()
    WHERE email = duplicate_record.email
      AND referral_code = duplicate_record.referral_code;
    
    -- Generate a new unique code
    LOOP
      new_code := UPPER(
        SUBSTRING(
          MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT),
          1, 6
        )
      );
      
      -- Check if code already exists
      SELECT EXISTS(SELECT 1 FROM profiles WHERE referral_code = new_code) INTO code_exists;
      
      -- Exit loop if code is unique
      EXIT WHEN NOT code_exists;
    END LOOP;
    
    -- Now update the profile with the new code
    UPDATE profiles
    SET referral_code = new_code,
        updated_at = NOW()
    WHERE email = duplicate_record.email
      AND referral_code IS NULL;
    
    -- Return the fix information
    RETURN QUERY SELECT 
      duplicate_record.email,
      duplicate_record.referral_code,
      new_code,
      TRUE;
  END LOOP;
  
  RETURN;
END;
$$ LANGUAGE plpgsql;

-- Also ensure the UNIQUE constraint is properly enforced
-- Drop and recreate the constraint to ensure it's active
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_referral_code_key;
ALTER TABLE profiles ADD CONSTRAINT profiles_referral_code_key UNIQUE (referral_code);

