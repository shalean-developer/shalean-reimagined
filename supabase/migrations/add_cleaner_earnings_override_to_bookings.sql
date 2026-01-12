-- Add cleaner_earnings_override field to bookings table
-- This JSONB field stores custom earnings per cleaner that override automatic calculations
-- Structure: { [cleanerId]: { baseEarnings: number, tipAmount: number, totalEarnings: number } }

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS cleaner_earnings_override JSONB DEFAULT NULL;

-- Add comment to document the field structure
COMMENT ON COLUMN bookings.cleaner_earnings_override IS 
'JSONB field storing custom earnings per cleaner. Format: { "cleanerId": { "baseEarnings": number, "tipAmount": number, "totalEarnings": number } }. When null or cleanerId not present, automatic calculation is used.';

-- Create index for efficient queries on cleaner earnings
CREATE INDEX IF NOT EXISTS idx_bookings_cleaner_earnings_override 
ON bookings USING GIN (cleaner_earnings_override);
