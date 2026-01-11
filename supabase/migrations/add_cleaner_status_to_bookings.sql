-- Add cleaner-specific statuses and lateness tracking to bookings table
-- This migration extends the booking status workflow for cleaner operations

-- Add new status values support (Note: PostgreSQL doesn't have enums, so we use CHECK constraint)
-- The status column already exists as TEXT, so we just need to ensure it accepts new values
-- Valid statuses: pending, confirmed, on_my_way, started, completed, cancelled

-- Add expected_arrival_time column for lateness reporting
ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS expected_arrival_time TIMESTAMPTZ;

-- Add lateness_reason column for cleaner notes about delays
ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS lateness_reason TEXT;

-- Add comment to explain the new columns
COMMENT ON COLUMN bookings.expected_arrival_time IS 'Expected arrival time when cleaner reports they will be late. Set when cleaner uses "Report Lateness" feature.';
COMMENT ON COLUMN bookings.lateness_reason IS 'Reason provided by cleaner for lateness. Stored when cleaner reports delay.';

-- Create index for efficient querying by expected arrival time (for admin/alerts)
CREATE INDEX IF NOT EXISTS idx_bookings_expected_arrival_time 
ON bookings(expected_arrival_time) 
WHERE expected_arrival_time IS NOT NULL;

-- Update status check constraint if it exists, or create one to validate status values
-- First, drop existing constraint if it exists (we'll recreate it)
DO $$ 
BEGIN
  -- Check if constraint exists and drop it
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'check_booking_status_valid'
  ) THEN
    ALTER TABLE bookings DROP CONSTRAINT check_booking_status_valid;
  END IF;
END $$;

-- Add check constraint to validate status values
ALTER TABLE bookings
ADD CONSTRAINT check_booking_status_valid 
CHECK (status IN ('pending', 'confirmed', 'on_my_way', 'started', 'completed', 'cancelled'));
