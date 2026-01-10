-- Create cleaners table for storing cleaner information
CREATE TABLE IF NOT EXISTS cleaners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  rating DECIMAL(3, 2) DEFAULT 0.0,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_cleaners_is_active ON cleaners(is_active);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_cleaners_updated_at BEFORE UPDATE ON cleaners
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add foreign key constraint from bookings to cleaners
ALTER TABLE bookings
  ADD CONSTRAINT fk_bookings_preferred_cleaner_id 
  FOREIGN KEY (preferred_cleaner_id) 
  REFERENCES cleaners(id) 
  ON DELETE SET NULL;

-- Add composite index on bookings for efficient availability queries
CREATE INDEX IF NOT EXISTS idx_bookings_date_time_status 
ON bookings(service_date, service_time, status)
WHERE status IN ('pending', 'confirmed');

