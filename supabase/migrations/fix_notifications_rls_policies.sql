-- Fix notifications RLS policies to avoid querying auth.users table
-- Use auth.jwt() to access email from JWT token instead

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own notifications by user_id" ON notifications;
DROP POLICY IF EXISTS "Users can update their own notifications" ON notifications;

-- Recreate SELECT policy using JWT email instead of querying auth.users
CREATE POLICY "Users can view their own notifications by user_id"
  ON notifications FOR SELECT
  USING (
    (user_id IS NOT NULL AND user_id::text = auth.uid()::text)
    OR
    (user_email IS NOT NULL AND user_email = (auth.jwt() ->> 'email'))
  );

-- Recreate UPDATE policy using JWT email instead of querying auth.users
CREATE POLICY "Users can update their own notifications"
  ON notifications FOR UPDATE
  USING (
    (user_id IS NOT NULL AND user_id::text = auth.uid()::text)
    OR
    (user_email IS NOT NULL AND user_email = (auth.jwt() ->> 'email'))
  );
