-- Update cleaners table to add enhanced profile fields
-- This migration adds fields for areas, bio, specialties, availability schedule, etc.

-- Add photo_url column (keep both photo_url and avatar_url for compatibility)
ALTER TABLE cleaners 
  ADD COLUMN IF NOT EXISTS photo_url TEXT;

-- Add profile fields
ALTER TABLE cleaners 
  ADD COLUMN IF NOT EXISTS areas TEXT[],
  ADD COLUMN IF NOT EXISTS bio TEXT,
  ADD COLUMN IF NOT EXISTS years_experience INTEGER,
  ADD COLUMN IF NOT EXISTS specialties TEXT[];

-- Add availability fields
ALTER TABLE cleaners 
  ADD COLUMN IF NOT EXISTS is_available BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_monday BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_tuesday BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_wednesday BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_thursday BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_friday BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_saturday BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS available_sunday BOOLEAN DEFAULT true;

-- Add hire_date
ALTER TABLE cleaners 
  ADD COLUMN IF NOT EXISTS hire_date DATE;

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_cleaners_is_available ON cleaners(is_available);
CREATE INDEX IF NOT EXISTS idx_cleaners_areas ON cleaners USING GIN(areas);
CREATE INDEX IF NOT EXISTS idx_cleaners_specialties ON cleaners USING GIN(specialties);

-- Note: photo_url to avatar_url mapping is handled in the seed_cleaners_data.sql migration

