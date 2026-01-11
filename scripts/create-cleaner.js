/**
 * Script to create a cleaner with authentication
 * Run with: node scripts/create-cleaner.js
 * 
 * Requires SUPABASE_SERVICE_ROLE_KEY in environment or .env file
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Try to load .env.local if it exists
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✓' : '✗');
  console.error('\n📝 Make sure these are set in your .env.local file');
  process.exit(1);
}

// Normalize phone number
function normalizePhone(phone) {
  const normalized = phone.replace(/\s+/g, '').trim();
  if (normalized.startsWith('+')) {
    return normalized;
  } else if (normalized.startsWith('0')) {
    return `+27${normalized.substring(1)}`;
  } else {
    return `+27${normalized}`;
  }
}

// Create cleaner
async function createCleaner(phone, password, name, email = null, areas = null, bio = null, specialties = null, yearsExperience = null) {
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const phoneWithPlus = normalizePhone(phone);
  const phoneForEmail = phoneWithPlus.replace(/\+/g, '');
  const authEmail = `${phoneForEmail}@cleaners.shalean.local`;

  console.log('\n📱 Creating cleaner...');
  console.log('   Phone:', phoneWithPlus);
  console.log('   Auth Email:', authEmail);
  console.log('   Name:', name);
  console.log('   Password:', '*'.repeat(password.length));

  try {
    // Step 1: Create Supabase Auth user
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
      console.error('❌ Error creating auth user:', authError?.message);
      throw authError;
    }

    console.log('   ✓ Auth user created:', authUser.user.id);

    // Step 2: Create cleaner record
    console.log('\n2️⃣ Creating cleaner record...');
    const cleanerData = {
      name,
      phone: phoneWithPlus,
      email: email || null,
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
    };

    if (areas && Array.isArray(areas)) {
      cleanerData.areas = areas;
    }
    if (bio) {
      cleanerData.bio = bio;
    }
    if (specialties && Array.isArray(specialties)) {
      cleanerData.specialties = specialties;
    }
    if (yearsExperience) {
      cleanerData.years_experience = yearsExperience;
    }

    const { data: cleaner, error: cleanerError } = await supabaseAdmin
      .from('cleaners')
      .insert(cleanerData)
      .select()
      .single();

    if (cleanerError) {
      console.error('❌ Error creating cleaner record:', cleanerError.message);
      
      // Try to clean up auth user
      try {
        await supabaseAdmin.auth.admin.deleteUser(authUser.user.id);
        console.log('   ✓ Cleaned up auth user');
      } catch (deleteError) {
        console.error('   ⚠️  Could not clean up auth user:', deleteError.message);
      }
      
      throw cleanerError;
    }

    console.log('   ✓ Cleaner record created:', cleaner.id);

    console.log('\n✅ Cleaner created successfully!');
    console.log('\n📋 Summary:');
    console.log('   ID:', cleaner.id);
    console.log('   Name:', cleaner.name);
    console.log('   Phone:', cleaner.phone);
    console.log('   Auth Email:', authEmail);
    console.log('   Password:', password);
    console.log('\n🔐 Login credentials:');
    console.log('   Phone:', phoneWithPlus.replace(/\+/g, ''));
    console.log('   Password:', password);
    console.log('\n💡 The cleaner can now log in at: /cleaner/login');

    return { success: true, cleaner, authEmail, password };
  } catch (error) {
    console.error('\n❌ Failed to create cleaner:', error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node scripts/create-cleaner.js <phone> <password> <name> [email] [areas] [bio] [specialties] [yearsExperience]');
  console.log('\nExample:');
  console.log('  node scripts/create-cleaner.js "0824644655" "SecurePass123!" "John Doe"');
  console.log('\nOr with optional fields:');
  console.log('  node scripts/create-cleaner.js "0824644655" "SecurePass123!" "John Doe" "john@example.com" "[\"Cape Town\",\"Claremont\"]" "Experienced cleaner" "[\"Deep cleaning\"]" 5');
  process.exit(1);
}

const phone = args[0];
const password = args[1];
const name = args[2];
const email = args[3] || null;
let areas = null;
let bio = null;
let specialties = null;
let yearsExperience = null;

try {
  if (args[4]) areas = JSON.parse(args[4]);
  if (args[5]) bio = args[5];
  if (args[6]) specialties = JSON.parse(args[6]);
  if (args[7]) yearsExperience = parseInt(args[7]);
} catch (e) {
  console.error('Error parsing arguments:', e.message);
  process.exit(1);
}

createCleaner(phone, password, name, email, areas, bio, specialties, yearsExperience)
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
