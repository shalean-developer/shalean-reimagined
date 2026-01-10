-- Add recurring booking fields to bookings table
ALTER TABLE bookings
  ADD COLUMN IF NOT EXISTS parent_booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS is_recurring BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS recurrence_status TEXT CHECK (recurrence_status IN ('active', 'paused', 'cancelled')),
  ADD COLUMN IF NOT EXISTS next_booking_date DATE,
  ADD COLUMN IF NOT EXISTS recurrence_end_date DATE;

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_bookings_parent_booking_id ON bookings(parent_booking_id);
CREATE INDEX IF NOT EXISTS idx_bookings_recurring_status ON bookings(is_recurring, recurrence_status, next_booking_date)
  WHERE is_recurring = true AND recurrence_status = 'active';

-- Add comment for documentation
COMMENT ON COLUMN bookings.parent_booking_id IS 'References the first booking in a recurring series';
COMMENT ON COLUMN bookings.is_recurring IS 'Marks if booking is part of recurring series';
COMMENT ON COLUMN bookings.recurrence_status IS 'Status of recurring booking: active, paused, or cancelled';
COMMENT ON COLUMN bookings.next_booking_date IS 'Date when next booking should be auto-created';
COMMENT ON COLUMN bookings.recurrence_end_date IS 'Optional end date for recurring series';

