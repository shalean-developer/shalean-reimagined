-- COMPLETE FIX: This will ensure RLS is disabled and all policies are removed
-- Run this entire SQL in Supabase SQL Editor

-- Step 1: Drop ALL policies on profiles (in case any still exist)
DO $$ 
DECLARE
    policy_name TEXT;
BEGIN
    -- Drop all policies on profiles table
    FOR policy_name IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'profiles'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON profiles', policy_name);
        RAISE NOTICE 'Dropped policy: %', policy_name;
    END LOOP;
END $$;

-- Step 2: Disable RLS on profiles (double-check)
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Step 3: Verify RLS is disabled
DO $$
DECLARE
    rls_status BOOLEAN;
BEGIN
    SELECT rowsecurity INTO rls_status
    FROM pg_tables
    WHERE schemaname = 'public' 
    AND tablename = 'profiles';
    
    IF rls_status THEN
        RAISE EXCEPTION 'RLS is still enabled on profiles table! Something went wrong.';
    ELSE
        RAISE NOTICE 'SUCCESS: RLS is disabled on profiles table';
    END IF;
END $$;

-- Step 4: Check if credit_transactions has RLS (might be causing issues)
SELECT 
    tablename,
    rowsecurity as rls_enabled,
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public' AND tablename = 'credit_transactions') as policy_count
FROM pg_tables
WHERE schemaname = 'public' 
AND tablename IN ('profiles', 'credit_transactions', 'locations')
ORDER BY tablename;

-- Step 5: Ensure add_credits function uses SECURITY DEFINER (fixes any RLS issues in functions)
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

-- Final verification
SELECT 
    'profiles' as table_name,
    CASE WHEN rowsecurity THEN 'RLS ENABLED ❌' ELSE 'RLS DISABLED ✅' END as status,
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public' AND tablename = 'profiles') as policy_count
FROM pg_tables
WHERE schemaname = 'public' AND tablename = 'profiles';

