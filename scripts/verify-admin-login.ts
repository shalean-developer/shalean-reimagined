/**
 * Script to verify admin login credentials
 * Run with: npx tsx scripts/verify-admin-login.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as path from 'path';
import * as fs from 'fs';

// Load environment variables from .env.local or .env
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
            // Remove quotes if present
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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey || !supabaseAnonKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✓' : '✗');
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓' : '✗');
  process.exit(1);
}

async function verifyAdminLogin() {
  const admin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const testClient = createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const email = 'admin@shalean.com';
  const password = 'Admin2024!';

  console.log('\n🔍 Verifying Admin Login...');
  console.log('   Email:', email);
  console.log('   Password:', password.replace(/./g, '*'));
  console.log('');

  try {
    // First, check if user exists
    console.log('1️⃣ Checking if admin user exists...');
    const { data: users, error: listError } = await admin.auth.admin.listUsers();
    if (listError) {
      console.error('❌ Error listing users:', listError.message);
      return;
    }

    const adminUser = users.users.find((u) => u.email === email);
    if (!adminUser) {
      console.error('❌ Admin user not found with email:', email);
      console.log('\n💡 Run: npx tsx scripts/create-admin.ts to create the admin user');
      return;
    }

    console.log('   ✓ User found:', adminUser.id);
    console.log('   ✓ Email:', adminUser.email);
    console.log('   ✓ Email confirmed:', adminUser.email_confirmed_at ? 'Yes' : 'No');
    console.log('   ✓ User metadata:', JSON.stringify(adminUser.user_metadata, null, 2));
    console.log('');

    // Test login with the password
    console.log('2️⃣ Testing login with credentials...');
    const { data: loginData, error: loginError } = await testClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (loginError) {
      console.error('❌ Login test failed:', loginError.message);
      console.error('   Error details:', JSON.stringify(loginError, null, 2));
      console.log('');
      console.log('💡 Possible issues:');
      console.log('   - Password might be incorrect');
      console.log('   - User email might not be confirmed');
      console.log('   - Try resetting password: npx tsx scripts/reset-admin-password.ts');
      return;
    }

    if (!loginData.user) {
      console.error('❌ Login test failed: No user returned');
      return;
    }

    console.log('✅ Login test successful!');
    console.log('   User ID:', loginData.user.id);
    console.log('   Email:', loginData.user.email);
    console.log('   Session created:', loginData.session ? 'Yes' : 'No');
    console.log('');

    // Sign out
    await testClient.auth.signOut();
    console.log('✅ Signed out successfully');

    console.log('\n✅ Admin login credentials are correct!');
    console.log('\n📝 Login Credentials:');
    console.log('   Email:', email);
    console.log('   Password:', password);
    console.log('\n🔗 Admin Dashboard: http://localhost:3000/admin/login');
  } catch (error: any) {
    console.error('❌ Unexpected error:', error.message);
    console.error('   Stack:', error.stack);
    process.exit(1);
  }
}

verifyAdminLogin()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
