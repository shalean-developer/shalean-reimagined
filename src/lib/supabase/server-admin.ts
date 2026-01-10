import { createClient as createSupabaseClient } from '@supabase/supabase-js'

/**
 * Creates a Supabase client with service role key (bypasses RLS)
 * Use this ONLY for server-side operations that need to bypass Row Level Security
 * This should only be used in server actions, API routes, and server components
 * 
 * IMPORTANT: Add SUPABASE_SERVICE_ROLE_KEY to your .env.local file
 * Get it from: Supabase Dashboard -> Settings -> API -> service_role key (secret)
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseServiceRoleKey) {
    const errorMsg = 'SUPABASE_SERVICE_ROLE_KEY is not set. This is REQUIRED for profile operations.'
    console.error('❌', errorMsg)
    console.error('📝 Get your service role key from: Supabase Dashboard -> Settings -> API -> service_role key (secret)')
    console.error('📝 Add it to your .env.local file as: SUPABASE_SERVICE_ROLE_KEY=your_key_here')
    
    // Throw an error instead of falling back to anon key
    // This forces users to set the service role key
    throw new Error(errorMsg)
  }

  // Create client with service role key (bypasses RLS completely)
  const client = createSupabaseClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    db: {
      schema: 'public',
    },
  })
  
  return client
}

