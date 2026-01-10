-- Create vouchers table for storing gift vouchers
CREATE TABLE IF NOT EXISTS vouchers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  amount DECIMAL(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'redeemed', 'expired', 'cancelled'
  valid_from DATE NOT NULL,
  valid_until DATE NOT NULL,
  redeemed_at TIMESTAMPTZ,
  redeemed_by_email TEXT,
  redeemed_by_phone TEXT,
  redemption_transaction_id UUID REFERENCES credit_transactions(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create voucher_redemptions table to track redemption history
CREATE TABLE IF NOT EXISTS voucher_redemptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  voucher_id UUID REFERENCES vouchers(id),
  voucher_code TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  credit_transaction_id UUID REFERENCES credit_transactions(id),
  booking_id UUID REFERENCES bookings(id), -- Optional: if voucher was used for a booking
  redeemed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_vouchers_code ON vouchers(code);
CREATE INDEX IF NOT EXISTS idx_vouchers_status ON vouchers(status);
CREATE INDEX IF NOT EXISTS idx_vouchers_redeemed_by_email ON vouchers(redeemed_by_email);
CREATE INDEX IF NOT EXISTS idx_voucher_redemptions_email ON voucher_redemptions(email);
CREATE INDEX IF NOT EXISTS idx_voucher_redemptions_voucher_code ON voucher_redemptions(voucher_code);
CREATE INDEX IF NOT EXISTS idx_voucher_redemptions_redeemed_at ON voucher_redemptions(redeemed_at DESC);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_vouchers_updated_at BEFORE UPDATE ON vouchers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to redeem a voucher
CREATE OR REPLACE FUNCTION redeem_voucher(
  p_code TEXT,
  p_email TEXT,
  p_phone TEXT DEFAULT NULL
)
RETURNS JSONB AS $$
DECLARE
  v_voucher vouchers%ROWTYPE;
  v_profile_id UUID;
  v_balance_before DECIMAL(10, 2);
  v_balance_after DECIMAL(10, 2);
  v_transaction_id UUID;
  v_redemption_id UUID;
  v_result JSONB;
BEGIN
  -- Find the voucher
  SELECT * INTO v_voucher
  FROM vouchers
  WHERE code = UPPER(TRIM(p_code))
    AND status = 'active'
    AND valid_from <= CURRENT_DATE
    AND valid_until >= CURRENT_DATE;

  -- Check if voucher exists and is valid
  IF v_voucher.id IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Invalid or expired voucher code'
    );
  END IF;

  -- Check if voucher is already redeemed
  IF v_voucher.status = 'redeemed' THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'This voucher has already been redeemed'
    );
  END IF;

  -- Get or create profile
  SELECT id INTO v_profile_id
  FROM profiles
  WHERE email = p_email;

  IF v_profile_id IS NULL THEN
    INSERT INTO profiles (email, phone, credit_balance, first_name, last_name)
    VALUES (p_email, p_phone, 0.00, '', '')
    RETURNING id INTO v_profile_id;
  END IF;

  -- Get current balance
  SELECT credit_balance INTO v_balance_before
  FROM profiles
  WHERE id = v_profile_id;

  -- Calculate new balance
  v_balance_after := v_balance_before + v_voucher.amount;

  -- Update profile balance
  UPDATE profiles
  SET credit_balance = v_balance_after,
      updated_at = NOW()
  WHERE id = v_profile_id;

  -- Create credit transaction
  INSERT INTO credit_transactions (
    profile_id,
    email,
    transaction_type,
    amount,
    balance_before,
    balance_after,
    payment_status,
    description,
    metadata
  )
  VALUES (
    v_profile_id,
    p_email,
    'voucher_redemption',
    v_voucher.amount,
    v_balance_before,
    v_balance_after,
    'completed',
    'Gift voucher redemption: ' || v_voucher.code,
    jsonb_build_object('voucher_code', v_voucher.code, 'voucher_id', v_voucher.id)
  )
  RETURNING id INTO v_transaction_id;

  -- Mark voucher as redeemed
  UPDATE vouchers
  SET status = 'redeemed',
      redeemed_at = NOW(),
      redeemed_by_email = p_email,
      redeemed_by_phone = p_phone,
      redemption_transaction_id = v_transaction_id,
      updated_at = NOW()
  WHERE id = v_voucher.id;

  -- Create redemption record
  INSERT INTO voucher_redemptions (
    voucher_id,
    voucher_code,
    email,
    phone,
    amount,
    credit_transaction_id
  )
  VALUES (
    v_voucher.id,
    v_voucher.code,
    p_email,
    p_phone,
    v_voucher.amount,
    v_transaction_id
  )
  RETURNING id INTO v_redemption_id;

  -- Return success result
  RETURN jsonb_build_object(
    'success', true,
    'amount', v_voucher.amount,
    'new_balance', v_balance_after,
    'transaction_id', v_transaction_id,
    'redemption_id', v_redemption_id
  );
END;
$$ LANGUAGE plpgsql;

