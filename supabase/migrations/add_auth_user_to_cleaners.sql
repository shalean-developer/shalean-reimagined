-- Add auth_user_id column to cleaners table to link with Supabase Auth users
-- This allows cleaners to authenticate using phone + password through Supabase Auth

-- Add auth_user_id column (nullable to support existing cleaners and gradual migration)
ALTER TABLE cleaners 
ADD COLUMN IF NOT EXISTS auth_user_id UUID;

-- Add unique constraint to ensure one-to-one relationship (one auth user per cleaner)
-- Allow NULLs (multiple NULLs are allowed in UNIQUE constraints)
CREATE UNIQUE INDEX IF NOT EXISTS idx_cleaners_auth_user_id_unique 
ON cleaners(auth_user_id) 
WHERE auth_user_id IS NOT NULL;

-- Add foreign key constraint to auth.users table (optional, for referential integrity)
-- Note: This requires access to auth schema. If it fails, remove this constraint.
DO $$ 
BEGIN
  -- Check if foreign key already exists
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'fk_cleaners_auth_user_id'
  ) THEN
    -- Try to add foreign key, catch error if auth schema is not accessible
    BEGIN
      ALTER TABLE cleaners
      ADD CONSTRAINT fk_cleaners_auth_user_id 
      FOREIGN KEY (auth_user_id) 
      REFERENCES auth.users(id) 
      ON DELETE SET NULL;
    EXCEPTION WHEN OTHERS THEN
      -- If foreign key creation fails (e.g., auth schema not accessible), just log it
      RAISE NOTICE 'Could not create foreign key to auth.users. This is okay if auth schema is not accessible.';
    END;
  END IF;
END $$;

-- Ensure phone column has unique index for cleaner lookup during login
-- Check if index already exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE tablename = 'cleaners' 
    AND indexname = 'idx_cleaners_phone_unique'
  ) THEN
    -- Create unique index on phone (allowing NULLs)
    CREATE UNIQUE INDEX idx_cleaners_phone_unique 
    ON cleaners(phone) 
    WHERE phone IS NOT NULL;
  END IF;
END $$;

-- Add comment to explain the column
COMMENT ON COLUMN cleaners.auth_user_id IS 'References auth.users.id. Links cleaner profile to Supabase Auth account for phone-based authentication.';
