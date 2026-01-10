-- FINAL VERIFICATION AND FIX
-- Run this to ensure everything is set up correctly

-- Step 1: Verify RLS is disabled on profiles
SELECT 
    'profiles' as table_name,
    rowsecurity as rls_enabled,
    CASE WHEN rowsecurity THEN '❌ RLS IS ENABLED - THIS IS THE PROBLEM!' 
         ELSE '✅ RLS IS DISABLED' 
    END as status
FROM pg_tables
WHERE schemaname = 'public' AND tablename = 'profiles';

-- Step 2: List ALL policies on profiles (should be 0)
SELECT 
    schemaname,
    tablename,
    policyname,
    cmd as policy_command,
    roles,
    qual as using_expression,
    with_check as with_check_expression
FROM pg_policies
WHERE schemaname = 'public' AND tablename = 'profiles';

-- Step 3: If policies exist, drop them all
DO $$ 
DECLARE
    policy_record RECORD;
BEGIN
    FOR policy_record IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'profiles'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON profiles CASCADE', policy_record.policyname);
        RAISE NOTICE 'Dropped policy: %', policy_record.policyname;
    END LOOP;
    
    IF NOT FOUND THEN
        RAISE NOTICE 'No policies found on profiles table';
    END IF;
END $$;

-- Step 4: Ensure RLS is disabled (force it)
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Step 5: Verify again
SELECT 
    'FINAL CHECK' as check_type,
    CASE WHEN (SELECT rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles') 
         THEN '❌ FAILED - RLS is still enabled'
         ELSE '✅ SUCCESS - RLS is disabled'
    END as result,
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public' AND tablename = 'profiles') as remaining_policies;

-- Step 6: Check if add_credits function exists and has SECURITY DEFINER
SELECT 
    proname as function_name,
    prosecdef as is_security_definer,
    CASE WHEN prosecdef THEN '✅ Has SECURITY DEFINER' 
         ELSE '❌ Missing SECURITY DEFINER' 
    END as status
FROM pg_proc
WHERE proname = 'add_credits'
AND pronamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public');

