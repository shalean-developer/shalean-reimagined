-- Add referral_code column to profiles table
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS referral_code TEXT UNIQUE;

-- Create index for efficient referral code lookups
CREATE INDEX IF NOT EXISTS idx_profiles_referral_code ON profiles(referral_code);

-- Create referrals table to track referral relationships
CREATE TABLE IF NOT EXISTS referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_email TEXT NOT NULL,
  referred_email TEXT NOT NULL,
  referral_code TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'completed', 'rewarded'
  referred_booking_id UUID REFERENCES bookings(id),
  referrer_reward_amount DECIMAL(10, 2) DEFAULT 150.00,
  referrer_reward_status TEXT DEFAULT 'pending', -- 'pending', 'credited'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_referrals_referrer_email ON referrals(referrer_email);
CREATE INDEX IF NOT EXISTS idx_referrals_referred_email ON referrals(referred_email);
CREATE INDEX IF NOT EXISTS idx_referrals_referral_code ON referrals(referral_code);
CREATE INDEX IF NOT EXISTS idx_referrals_status ON referrals(status);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_referrals_updated_at BEFORE UPDATE ON referrals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to generate a unique referral code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TEXT AS $$
DECLARE
  code TEXT;
  exists_check BOOLEAN;
BEGIN
  LOOP
    -- Generate a 6-character alphanumeric code (uppercase letters and numbers)
    code := UPPER(
      SUBSTRING(
        MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT),
        1, 6
      )
    );
    
    -- Check if code already exists
    SELECT EXISTS(SELECT 1 FROM profiles WHERE referral_code = code) INTO exists_check;
    
    -- Exit loop if code is unique
    EXIT WHEN NOT exists_check;
  END LOOP;
  
  RETURN code;
END;
$$ LANGUAGE plpgsql;

