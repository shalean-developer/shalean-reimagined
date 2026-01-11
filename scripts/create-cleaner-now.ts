/**
 * Quick script to create a cleaner - executes immediately
 * Run with: npx tsx scripts/create-cleaner-now.ts
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

function normalizePhone(phone: string): string {
  const normalized = phone.replace(/\s+/g, '').trim();
  if (normalized.startsWith('+')) {
    return normalized;
  } else if (normalized.startsWith('0')) {
    return `+27${normalized.substring(1)}`;
  } else {
    return `+27${normalized}`;
  }
}

async function createCleaner() {
  const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const phone = '0824644655';
  const password = 'Cleaner2024!';
  const name = 'Admin Created Cleaner';
  
  const phoneWithPlus = normalizePhone(phone);
  const phoneForEmail = phoneWithPlus.replace(/\+/g, '');
  const authEmail = `${phoneForEmail}@cleaners.shalean.local`;

  console.log('\n📱 Creating cleaner...');
  console.log('   Phone:', phoneWithPlus);
  console.log('   Auth Email:', authEmail);
  console.log('   Name:', name);
  console.log('   Password:', '*'.repeat(password.length));

  try {
    // Step 1: Create Auth user
    console.log('\n1️⃣ Creating authentication user...');
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: authEmail,
      password: password,
      email_confirm: true,
      user_metadata: {
        phone: phoneWithPlus,
        name: name,
        role: 'cleaner',
      },
    });

    if (authError || !authUser.user) {
      throw new Error(authError?.message || 'Failed to create auth user');
    }

    console.log('   ✓ Auth user created:', authUser.user.id);

    // Step 2: Create cleaner record
    console.log('\n2️⃣ Creating cleaner record...');
    const { data: cleaner, error: cleanerError } = await supabaseAdmin
      .from('cleaners')
      .insert({
        name,
        phone: phoneWithPlus,
        email: null,
        is_active: true,
        is_available: true,
        auth_user_id: authUser.user.id,
        available_monday: true,
        available_tuesday: true,
        available_wednesday: true,
        available_thursday: true,
        available_friday: true,
        available_saturday: true,
        available_sunday: true,
        rating: 0.0,
      })
      .select()
      .single();

    if (cleanerError) {
      // Cleanup auth user
      try {
        await supabaseAdmin.auth.admin.deleteUser(authUser.user.id);
      } catch {}
      throw cleanerError;
    }

    console.log('   ✓ Cleaner record created:', cleaner.id);

    console.log('\n✅ Cleaner created successfully!');
    console.log('\n📋 Summary:');
    console.log('   ID:', cleaner.id);
    console.log('   Name:', cleaner.name);
    console.log('   Phone:', cleaner.phone);
    console.log('   Auth Email:', authEmail);
    console.log('\n🔐 Login credentials:');
    console.log('   Phone:', phoneWithPlus.replace(/\+/g, ''));
    console.log('   Password:', password);
    console.log('\n💡 Login URL: http://localhost:3000/cleaner/login');
  } catch (error: any) {
    console.error('\n❌ Failed to create cleaner:', error.message);
    process.exit(1);
  }
}

createCleaner();
