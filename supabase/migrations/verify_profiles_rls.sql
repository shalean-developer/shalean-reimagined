-- Verification script to check if RLS policies are working correctly
-- Run this in your Supabase SQL editor to verify the setup

-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'profiles';

-- List all policies on profiles table
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'profiles';

-- Test: Check if you can see your own profile (replace with your email)
-- This should work if you're authenticated
SELECT * FROM profiles WHERE email = 'your-email@example.com';

-- If the above query fails, check:
-- 1. Are you authenticated? (Check auth.uid())
SELECT auth.uid(), auth.email();

-- 2. Does your email match?
SELECT email FROM auth.users WHERE id = auth.uid();

