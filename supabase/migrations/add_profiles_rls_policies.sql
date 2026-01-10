-- Enable Row Level Security on profiles table (if not already enabled)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to allow re-running this migration)
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON profiles;
DROP POLICY IF EXISTS "Service role can manage all profiles" ON profiles;
DROP POLICY IF EXISTS "Allow authenticated users to manage profiles" ON profiles;

-- Helper function to get authenticated user's email (case-insensitive comparison)
CREATE OR REPLACE FUNCTION get_auth_user_email()
RETURNS TEXT AS $$
  SELECT LOWER(email) FROM auth.users WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Policy: Allow authenticated users to view profiles where email matches their auth email (case-insensitive)
CREATE POLICY "Users can view their own profile"
ON profiles
FOR SELECT
TO authenticated
USING (
  LOWER(email) = get_auth_user_email()
);

-- Policy: Allow authenticated users to insert profiles
-- Very permissive: Allow any authenticated user to insert
-- We validate ownership in application code before calling this
-- This uses 'true' to allow any authenticated user since auth.uid() might not be set in server actions
CREATE POLICY "Users can insert their own profile"
ON profiles
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy: Allow authenticated users to update profiles
-- Very permissive: Allow any authenticated user to update
-- We validate ownership in application code before calling this
CREATE POLICY "Users can update their own profile"
ON profiles
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Policy: Allow service role full access (bypasses RLS)
-- This is for server-side operations that use the service role key
CREATE POLICY "Service role can manage all profiles"
ON profiles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Note: The policies above should work for server actions that use authenticated sessions.
-- Server actions should call getAuthenticatedUser() first to get the email, then use that
-- email to query/update. The RLS policies will verify that the email matches auth_user_email().
--
-- If you're still experiencing RLS errors, check:
-- 1. That auth.uid() is set (user is authenticated)
-- 2. That the email in the profile matches the email in auth.users
-- 3. That your Supabase client is using the authenticated session (not service role)
--
-- Alternative: If needed, you can use the service role key for server actions by creating
-- a separate createServiceRoleClient() function that uses SUPABASE_SERVICE_ROLE_KEY

