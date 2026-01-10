-- Add avatar_url column to profiles table
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Create index for efficient querying (optional but useful)
CREATE INDEX IF NOT EXISTS idx_profiles_avatar_url ON profiles(avatar_url) WHERE avatar_url IS NOT NULL;

-- IMPORTANT: Before using profile picture uploads, you must create a Supabase Storage bucket:
-- 1. Go to your Supabase Dashboard
-- 2. Navigate to Storage section
-- 3. Create a new bucket named "profile-pictures"
-- 4. Set the bucket to PUBLIC (or configure RLS policies as needed)
-- 5. Add a storage policy to allow authenticated users to upload:
--    - Policy name: "Allow authenticated users to upload profile pictures"
--    - Target roles: authenticated
--    - Policy command: INSERT
--    - USING expression: auth.role() = 'authenticated'
--    - WITH CHECK expression: auth.role() = 'authenticated'
-- 6. Add a storage policy to allow public read access:
--    - Policy name: "Allow public read access to profile pictures"
--    - Target roles: anon, authenticated
--    - Policy command: SELECT
--    - USING expression: true
-- 7. Add a storage policy to allow users to delete their own pictures:
--    - Policy name: "Allow users to delete their own profile pictures"
--    - Target roles: authenticated
--    - Policy command: DELETE
--    - USING expression: auth.role() = 'authenticated'

