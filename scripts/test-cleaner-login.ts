import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
function loadEnv() {
  const envPaths = [
    path.join(process.cwd(), '.env.local'),
    path.join(process.cwd(), '.env'),
  ];

  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const envFile = fs.readFileSync(envPath, 'utf8');
      envFile.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const match = trimmed.match(/^([^=:#]+)=(.*)$/);
          if (match) {
            const key = match[1].trim();
            let value = match[2].trim();
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            if (!process.env[key]) {
              process.env[key] = value;
            }
          }
        }
      });
      break;
    }
  }
}

loadEnv();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

// Test login with the same logic as the client
async function testLogin() {
  const phone = '0824644655';
  const password = 'Cleaner2024!';
  
  // Normalize phone (same logic as authenticateCleanerClient)
  let normalizedPhone = phone.replace(/\s+/g, '').trim();
  if (normalizedPhone.startsWith('+')) {
    // Already has country code
  } else if (normalizedPhone.startsWith('0')) {
    normalizedPhone = `+27${normalizedPhone.substring(1)}`;
  } else {
    normalizedPhone = `+27${normalizedPhone}`;
  }
  
  const phoneForEmail = normalizedPhone.replace(/\+/g, '');
  const authEmail = `${phoneForEmail}@cleaners.shalean.local`;

  console.log('\n🧪 Testing login with client-side logic...');
  console.log('   Input phone:', phone);
  console.log('   Normalized phone:', normalizedPhone);
  console.log('   Auth email:', authEmail);
  console.log('   Password:', password.substring(0, 3) + '...');

  // Use anon key (same as browser client)
  const client = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: authEmail,
      password,
    });

    if (error) {
      console.error('\n❌ Login failed:', {
        status: error.status,
        message: error.message,
        name: error.name,
      });
      
      // Try to get more details
      if (error.status === 400) {
        console.error('   → This is usually "Invalid login credentials"');
        console.error('   → Possible causes:');
        console.error('      - Wrong password');
        console.error('      - Email format mismatch');
        console.error('      - Auth user not found');
      }
      
      return;
    }

    if (data.user) {
      console.log('\n✅ Login successful!');
      console.log('   User ID:', data.user.id);
      console.log('   Email:', data.user.email);
      console.log('   Confirmed:', data.user.confirmed_at ? 'Yes' : 'No');
      
      await client.auth.signOut();
      console.log('\n✓ Signed out');
    }
  } catch (error: any) {
    console.error('\n❌ Unexpected error:', error.message);
  }
}

testLogin();
