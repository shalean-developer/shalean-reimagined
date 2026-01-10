-- Add preferred_cleaner_ids JSONB column to bookings table
-- This allows storing multiple preferred cleaners when numberOfCleaners > 1
-- We keep preferred_cleaner_id for backward compatibility

ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS preferred_cleaner_ids JSONB DEFAULT '[]'::jsonb;

-- Add comment to explain the column
COMMENT ON COLUMN bookings.preferred_cleaner_ids IS 'Array of preferred cleaner IDs (UUIDs) when multiple cleaners are requested. Empty array means no preference.';

-- Add GIN index for efficient JSONB queries
CREATE INDEX IF NOT EXISTS idx_bookings_preferred_cleaner_ids 
ON bookings USING GIN (preferred_cleaner_ids);

-- Add constraint to ensure it's an array
ALTER TABLE bookings 
ADD CONSTRAINT check_preferred_cleaner_ids_is_array 
CHECK (jsonb_typeof(preferred_cleaner_ids) = 'array');

