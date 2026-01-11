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

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

async function resetPassword() {
  const admin = createClient(supabaseUrl!, supabaseServiceRoleKey!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const authUserId = 'e16192a8-1cd7-46a7-8944-53b6bc36e1d7';
  const newPassword = 'Cleaner2024!';

  console.log('\n🔐 Resetting cleaner password...');
  console.log('   User ID:', authUserId);
  console.log('   New Password:', newPassword);

  try {
    const { data, error } = await admin.auth.admin.updateUserById(authUserId, {
      password: newPassword,
    });

    if (error) {
      console.error('❌ Error resetting password:', error.message);
      return;
    }

    console.log('✅ Password reset successfully!');
    console.log('   Email:', data.user.email);

    // Test login with new password
    console.log('\n🧪 Testing login with new password...');
    const testClient = createClient(supabaseUrl!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data: loginData, error: loginError } = await testClient.auth.signInWithPassword({
      email: data.user.email!,
      password: newPassword,
    });

    if (loginError) {
      console.error('❌ Login test failed:', loginError.message);
    } else {
      console.log('✅ Login test successful!');
      await testClient.auth.signOut();
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
  }
}

resetPassword();
