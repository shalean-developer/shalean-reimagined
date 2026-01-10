-- Add referral_code column to bookings table
ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS referral_code TEXT;

-- Create index for efficient referral code lookups
CREATE INDEX IF NOT EXISTS idx_bookings_referral_code ON bookings(referral_code);

-- Add comment for documentation
COMMENT ON COLUMN bookings.referral_code IS 'Referral code used when booking was created';

