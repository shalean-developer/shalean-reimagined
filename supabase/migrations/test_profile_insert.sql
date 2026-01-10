-- TEST: Direct database test to verify RLS is truly disabled
-- Run this in Supabase SQL Editor to test if you can insert/update profiles directly

-- Test 1: Try to insert a test profile directly (should work with RLS disabled)
INSERT INTO profiles (email, first_name, last_name, phone, avatar_url)
VALUES ('test@example.com', 'Test', 'User', '1234567890', 'https://example.com/test.jpg')
ON CONFLICT (email) 
DO UPDATE SET 
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    phone = EXCLUDED.phone,
    avatar_url = EXCLUDED.avatar_url;

-- Verify it worked
SELECT * FROM profiles WHERE email = 'test@example.com';

-- Test 2: Check if there are any triggers that might cause issues
SELECT 
    trigger_name,
    event_manipulation,
    event_object_table,
    action_statement,
    action_timing
FROM information_schema.triggers
WHERE event_object_schema = 'public'
AND event_object_table = 'profiles';

-- Test 3: Clean up test data
DELETE FROM profiles WHERE email = 'test@example.com';

-- If all tests pass, RLS is truly disabled and the issue is in the application code
-- If any test fails, we need to fix the database setup

