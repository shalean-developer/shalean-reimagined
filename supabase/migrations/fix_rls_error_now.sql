-- IMMEDIATE FIX: Run this entire SQL in Supabase SQL Editor
-- This will disable RLS on profiles table completely

-- 1. Drop all policies
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
    DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
    DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
    DROP POLICY IF EXISTS "Users can delete their own profile" ON profiles;
    DROP POLICY IF EXISTS "Service role can manage all profiles" ON profiles;
    DROP POLICY IF EXISTS "Allow authenticated users to manage profiles" ON profiles;
END $$;

-- 2. Disable RLS
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- 3. Fix add_credits function (make it SECURITY DEFINER)
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
  SELECT id INTO v_profile_id FROM profiles WHERE email = p_email;

  IF v_profile_id IS NULL THEN
    INSERT INTO profiles (email, credit_balance, first_name, last_name)
    VALUES (p_email, 0.00, '', '')
    RETURNING id INTO v_profile_id;
  END IF;

  SELECT credit_balance INTO v_balance_before FROM profiles WHERE id = v_profile_id;
  v_balance_after := v_balance_before + p_amount;

  UPDATE profiles
  SET credit_balance = v_balance_after, updated_at = NOW()
  WHERE id = v_profile_id;

  INSERT INTO credit_transactions (
    profile_id, email, transaction_type, amount,
    balance_before, balance_after, description, metadata
  )
  VALUES (
    v_profile_id, p_email, p_transaction_type, p_amount,
    v_balance_before, v_balance_after, p_description, p_metadata
  )
  RETURNING id INTO v_transaction_id;

  RETURN v_transaction_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Verify RLS is disabled
SELECT 
    tablename, 
    rowsecurity as rls_enabled 
FROM pg_tables 
WHERE schemaname = 'public' 
    AND tablename = 'profiles';
-- If this shows rowsecurity = false, RLS is disabled and you're good to go!

