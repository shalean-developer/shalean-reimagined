-- Add reliability score fields to cleaners table
-- This migration adds fields for tracking cleaner reliability metrics

-- Add reliability score and booking metrics columns
ALTER TABLE cleaners 
  ADD COLUMN IF NOT EXISTS reliability_score DECIMAL(5,2) DEFAULT 0.00,
  ADD COLUMN IF NOT EXISTS total_bookings INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS completed_bookings INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS on_time_bookings INTEGER DEFAULT 0;

-- Create index on reliability_score for efficient sorting
CREATE INDEX IF NOT EXISTS idx_cleaners_reliability_score ON cleaners(reliability_score);

-- Create index on total_bookings for filtering
CREATE INDEX IF NOT EXISTS idx_cleaners_total_bookings ON cleaners(total_bookings);

