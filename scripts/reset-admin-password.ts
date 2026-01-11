/**
 * Script to reset admin password
 * Run with: npx tsx scripts/reset-admin-password.ts
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

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✓' : '✗');
  process.exit(1);
}

async function resetAdminPassword() {
  const admin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const email = 'admin@shalean.com';
  const newPassword = process.env.ADMIN_PASSWORD || 'Admin2024!';

  console.log('\n🔐 Resetting Admin Password...');
  console.log('   Email:', email);
  console.log('   New Password:', newPassword.replace(/./g, '*'));
  console.log('');

  try {
    // Find the admin user
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

    console.log('✓ Found admin user:', adminUser.id);

    // Reset password
    const { data: updatedUser, error: updateError } = await admin.auth.admin.updateUserById(
      adminUser.id,
      {
        password: newPassword,
      }
    );

    if (updateError) {
      console.error('❌ Error resetting password:', updateError.message);
      return;
    }

    console.log('✅ Admin password reset successfully!');
    console.log('\n📝 Login Credentials:');
    console.log('   Email:', email);
    console.log('   Password:', newPassword);
    console.log('\n🔗 Admin Dashboard: http://localhost:3000/admin/login');
  } catch (error: any) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  }
}

resetAdminPassword()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
