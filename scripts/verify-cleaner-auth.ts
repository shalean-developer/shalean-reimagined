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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

async function verifyCleaner() {
  const admin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const phone = '+27824644655';
  const authEmail = '27824644655@cleaners.shalean.local';

  console.log('\n🔍 Verifying cleaner account...');
  console.log('   Phone:', phone);
  console.log('   Auth Email:', authEmail);

  // Check cleaner record
  console.log('\n1️⃣ Checking cleaner record...');
  const { data: cleaner, error: cleanerError } = await admin
    .from('cleaners')
    .select('id, name, phone, auth_user_id, is_active')
    .eq('phone', phone)
    .maybeSingle();

  if (cleanerError) {
    console.error('   ❌ Error:', cleanerError.message);
    return;
  }

  if (!cleaner) {
    console.log('   ❌ Cleaner not found');
    return;
  }

  console.log('   ✓ Cleaner found:', {
    id: cleaner.id,
    name: cleaner.name,
    phone: cleaner.phone,
    auth_user_id: cleaner.auth_user_id || 'Not set',
    is_active: cleaner.is_active,
  });

  // Check auth user
  console.log('\n2️⃣ Checking auth user...');
  if (cleaner.auth_user_id) {
    const { data: authUser, error: authError } = await admin.auth.admin.getUserById(
      cleaner.auth_user_id
    );

    if (authError) {
      console.error('   ❌ Error fetching auth user:', authError.message);
    } else if (authUser.user) {
      console.log('   ✓ Auth user found:', {
        id: authUser.user.id,
        email: authUser.user.email,
        confirmed: authUser.user.confirmed_at ? 'Yes' : 'No',
        created: authUser.user.created_at,
      });
    }
  } else {
    // Try to find by email
    const { data: users, error: listError } = await admin.auth.admin.listUsers();
    if (listError) {
      console.error('   ❌ Error listing users:', listError.message);
    } else {
      const authUser = users.users.find(u => u.email === authEmail);
      if (authUser) {
        console.log('   ✓ Auth user found by email:', {
          id: authUser.id,
          email: authUser.email,
          confirmed: authUser.confirmed_at ? 'Yes' : 'No',
        });
        console.log('   ⚠️  But auth_user_id is not linked in cleaner record');
      } else {
        console.log('   ❌ Auth user not found with email:', authEmail);
        console.log('   Available emails:', users.users.slice(0, 5).map(u => u.email).filter(Boolean));
      }
    }
  }

  // Test login
  console.log('\n3️⃣ Testing login...');
  const testClient = createClient(supabaseUrl!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data: loginData, error: loginError } = await testClient.auth.signInWithPassword({
    email: authEmail,
    password: 'Cleaner2024!',
  });

  if (loginError) {
    console.error('   ❌ Login failed:', loginError.message);
  } else if (loginData.user) {
    console.log('   ✓ Login successful!');
    console.log('   User ID:', loginData.user.id);
    await testClient.auth.signOut();
  }
}

verifyCleaner().catch(console.error);
