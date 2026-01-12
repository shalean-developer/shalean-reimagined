-- Add password_hash field to cleaners table
-- This stores bcrypt-hashed passwords for cleaner authentication
-- Passwords are managed by admin and stored in the database instead of Supabase Auth

ALTER TABLE cleaners
ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- Add comment to document the field
COMMENT ON COLUMN cleaners.password_hash IS 'Bcrypt-hashed password for cleaner authentication. Managed by admin, stored in database instead of Supabase Auth.';
