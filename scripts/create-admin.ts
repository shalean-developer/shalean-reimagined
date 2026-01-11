/**
 * Script to create admin user
 * Run with: npx tsx scripts/create-admin.ts
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
  console.error('❌ Missing environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✓' : '✗');
  process.exit(1);
}

async function createAdmin() {
  const admin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const email = 'admin@shalean.com';
  const phone = '0825915525';
  const name = 'Shalean Admin';
  const password = process.env.ADMIN_PASSWORD || 'Admin2024!'; // Default password, should be changed

  console.log('\n🔐 Creating Admin Account...');
  console.log('   Email:', email);
  console.log('   Phone:', phone);
  console.log('   Name:', name);
  console.log('   Password:', password.replace(/./g, '*'));
  console.log('');

  try {
    // Check if user already exists
    const { data: existingUsers, error: listError } = await admin.auth.admin.listUsers();
    if (listError) {
      console.error('❌ Error listing users:', listError.message);
      return;
    }

    const existingUser = existingUsers.users.find((u) => u.email === email);
    if (existingUser) {
      console.log('⚠️  Admin user already exists with email:', email);
      console.log('   User ID:', existingUser.id);
      console.log('   Updating user metadata and password...');

      // Update user metadata and password
      const { data: updatedUser, error: updateError } = await admin.auth.admin.updateUserById(
        existingUser.id,
        {
          password: password,
          user_metadata: {
            phone: phone,
            name: name,
            role: 'admin',
          },
        }
      );

      if (updateError) {
        console.error('❌ Error updating user:', updateError.message);
        return;
      }

      console.log('✅ Admin user updated successfully!');
      console.log('\n📝 Login Credentials:');
      console.log('   Email:', email);
      console.log('   Password:', password);
      console.log('\n🔗 Admin Dashboard: http://localhost:3000/admin/login');
      return;
    }

    // Create new admin user
    const { data: authUser, error: authError } = await admin.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Auto-confirm email so user can login immediately
      user_metadata: {
        phone: phone,
        name: name,
        role: 'admin',
      },
    });

    if (authError || !authUser.user) {
      console.error('❌ Error creating admin user:', authError?.message || 'Unknown error');
      return;
    }

    console.log('✅ Admin user created successfully!');
    console.log('   User ID:', authUser.user.id);
    console.log('\n📝 Login Credentials:');
    console.log('   Email:', email);
    console.log('   Password:', password);
    console.log('\n🔗 Admin Dashboard: http://localhost:3000/admin/login');
    console.log('\n⚠️  IMPORTANT: Change the default password after first login!');
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

createAdmin()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
