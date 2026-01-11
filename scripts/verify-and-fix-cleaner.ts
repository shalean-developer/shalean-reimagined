import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey || !supabaseAnonKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

async function verifyAndFix() {
  const admin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const phone = '+27824644655';
  const authEmail = '27824644655@cleaners.shalean.local';
  const password = 'Cleaner2024!';

  console.log('\n🔍 Verifying cleaner setup...');
  console.log('   Phone:', phone);
  console.log('   Auth Email:', authEmail);

  // Check cleaner
  const { data: cleaner } = await admin
    .from('cleaners')
    .select('id, name, phone, auth_user_id')
    .eq('phone', phone)
    .maybeSingle();

  if (!cleaner) {
    console.error('❌ Cleaner not found!');
    return;
  }

  console.log('   ✓ Cleaner found:', cleaner.id);

  // Check auth user
  let authUser = null;
  if (cleaner.auth_user_id) {
    const { data } = await admin.auth.admin.getUserById(cleaner.auth_user_id);
    authUser = data.user;
  }

  if (!authUser) {
    // Try to find by email
    const { data: users } = await admin.auth.admin.listUsers();
    authUser = users.users.find(u => u.email === authEmail);
  }

  if (!authUser) {
    console.error('❌ Auth user not found!');
    return;
  }

  console.log('   ✓ Auth user found:', authUser.email);

  // Reset password to ensure it's correct
  console.log('\n🔐 Resetting password...');
  const { data: updatedUser, error: updateError } = await admin.auth.admin.updateUserById(
    authUser.id,
    { password: password }
  );

  if (updateError) {
    console.error('❌ Error updating password:', updateError.message);
    return;
  }

  console.log('   ✓ Password reset to: Cleaner2024!');

  // Test login with anon key (same as browser)
  console.log('\n🧪 Testing login with browser client (anon key)...');
  const browserClient = createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data: loginData, error: loginError } = await browserClient.auth.signInWithPassword({
    email: authEmail,
    password: password,
  });

  if (loginError) {
    console.error('❌ Browser client login failed:', {
      status: loginError.status,
      message: loginError.message,
    });
    
    // Try with different email formats
    console.log('\n🔍 Testing alternative email formats...');
    const altEmails = [
      '+27824644655@cleaners.shalean.local',
      '0824644655@cleaners.shalean.local',
    ];

    for (const altEmail of altEmails) {
      const { error: altError } = await browserClient.auth.signInWithPassword({
        email: altEmail,
        password: password,
      });
      console.log(`   ${altEmail}: ${altError ? 'Failed - ' + altError.message : 'Success!'}`);
    }
  } else {
    console.log('✅ Browser client login successful!');
    console.log('   User ID:', loginData.user?.id);
    await browserClient.auth.signOut();
  }

  // Test with admin client
  console.log('\n🧪 Testing login with admin client...');
  const { data: adminLogin, error: adminError } = await admin.auth.signInWithPassword({
    email: authEmail,
    password: password,
  });

  if (adminError) {
    console.error('❌ Admin client login failed:', adminError.message);
  } else {
    console.log('✅ Admin client login successful!');
    await admin.auth.signOut();
  }

  console.log('\n📋 Final Credentials:');
  console.log('   Phone (for login form): 0824644655');
  console.log('   Phone (alternative): 27824644655');
  console.log('   Phone (alternative): +27824644655');
  console.log('   Password: Cleaner2024!');
  console.log('   Auth Email: 27824644655@cleaners.shalean.local');
}

verifyAndFix().catch(console.error);
