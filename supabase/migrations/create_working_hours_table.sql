-- Create working_hours table for configurable time slots
CREATE TABLE IF NOT EXISTS working_hours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  duration_hours INTEGER NOT NULL DEFAULT 3,
  day_of_week INTEGER, -- 0-6 (Sunday-Saturday), null = all days
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  max_bookings_per_slot INTEGER, -- Optional capacity limit
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_working_hours_day_of_week ON working_hours(day_of_week);
CREATE INDEX IF NOT EXISTS idx_working_hours_is_active ON working_hours(is_active);
CREATE INDEX IF NOT EXISTS idx_working_hours_display_order ON working_hours(display_order);
CREATE INDEX IF NOT EXISTS idx_working_hours_start_time ON working_hours(start_time);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_working_hours_updated_at BEFORE UPDATE ON working_hours
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

