-- Add team_number column to bookings table for team-based services (Deep Cleaning and Move In/Out)
-- Each team can be booked once per day. Teams are numbered 1, 2, or 3.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS team_number INTEGER;

-- Add check constraint to ensure team_number is valid (1, 2, or 3, or NULL)
ALTER TABLE bookings
ADD CONSTRAINT check_team_number_valid 
CHECK (team_number IS NULL OR (team_number >= 1 AND team_number <= 3));

-- Create unique partial index to ensure one booking per team per day for team-based services
-- Only applies when team_number is set and service is Deep Cleaning or Move In/Out
CREATE UNIQUE INDEX IF NOT EXISTS idx_bookings_team_date_unique 
ON bookings(service_date, team_number, service_type)
WHERE team_number IS NOT NULL 
  AND service_type IN ('Deep Cleaning', 'Move In/Out')
  AND status IN ('pending', 'confirmed');

-- Create index for efficient team availability queries
CREATE INDEX IF NOT EXISTS idx_bookings_team_availability 
ON bookings(service_date, service_type, team_number, status)
WHERE team_number IS NOT NULL 
  AND service_type IN ('Deep Cleaning', 'Move In/Out')
  AND status IN ('pending', 'confirmed');

-- Add comment to explain the column
COMMENT ON COLUMN bookings.team_number IS 'Team number (1, 2, or 3) for team-based services (Deep Cleaning and Move In/Out). Each team can be booked once per day. NULL for regular cleaner-based bookings.';
