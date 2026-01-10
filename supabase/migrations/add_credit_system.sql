-- Add credit_balance column to profiles table
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS credit_balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00;

-- Create credit_transactions table to track credit purchases and usage
CREATE TABLE IF NOT EXISTS credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id),
  email TEXT NOT NULL,
  transaction_type TEXT NOT NULL, -- 'purchase', 'usage', 'refund', 'referral_reward'
  amount DECIMAL(10, 2) NOT NULL,
  balance_before DECIMAL(10, 2) NOT NULL,
  balance_after DECIMAL(10, 2) NOT NULL,
  payment_method TEXT, -- 'credit_card', 'eft'
  paystack_reference TEXT,
  paystack_transaction_id TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  booking_id UUID REFERENCES bookings(id), -- For usage transactions
  description TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_credit_transactions_email ON credit_transactions(email);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_profile_id ON credit_transactions(profile_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_paystack_reference ON credit_transactions(paystack_reference);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_type ON credit_transactions(transaction_type);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_created_at ON credit_transactions(created_at DESC);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_credit_transactions_updated_at BEFORE UPDATE ON credit_transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to add credits to a profile
CREATE OR REPLACE FUNCTION add_credits(
  p_email TEXT,
  p_amount DECIMAL(10, 2),
  p_transaction_type TEXT DEFAULT 'purchase',
  p_description TEXT DEFAULT NULL,
  p_metadata JSONB DEFAULT '{}'::jsonb
)
RETURNS UUID AS $$
DECLARE
  v_profile_id UUID;
  v_balance_before DECIMAL(10, 2);
  v_balance_after DECIMAL(10, 2);
  v_transaction_id UUID;
BEGIN
  -- Get or create profile
  SELECT id INTO v_profile_id
  FROM profiles
  WHERE email = p_email;

  -- If profile doesn't exist, create one (basic entry - full profile should be created elsewhere)
  IF v_profile_id IS NULL THEN
    INSERT INTO profiles (email, credit_balance, first_name, last_name)
    VALUES (p_email, 0.00, '', '')
    RETURNING id INTO v_profile_id;
  END IF;

  -- Get current balance
  SELECT credit_balance INTO v_balance_before
  FROM profiles
  WHERE id = v_profile_id;

  -- Calculate new balance
  v_balance_after := v_balance_before + p_amount;

  -- Update profile balance
  UPDATE profiles
  SET credit_balance = v_balance_after,
      updated_at = NOW()
  WHERE id = v_profile_id;

  -- Create transaction record
  INSERT INTO credit_transactions (
    profile_id,
    email,
    transaction_type,
    amount,
    balance_before,
    balance_after,
    description,
    metadata
  )
  VALUES (
    v_profile_id,
    p_email,
    p_transaction_type,
    p_amount,
    v_balance_before,
    v_balance_after,
    p_description,
    p_metadata
  )
  RETURNING id INTO v_transaction_id;

  RETURN v_transaction_id;
END;
$$ LANGUAGE plpgsql;

