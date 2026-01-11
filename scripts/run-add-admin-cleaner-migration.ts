/**
 * Script to run the add_admin_created_cleaner.sql migration
 * This executes the SQL migration programmatically
 * 
 * Run with: npx tsx scripts/run-add-admin-cleaner-migration.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('   SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseServiceRoleKey ? '✓' : '✗');
  process.exit(1);
}

async function runMigration() {
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  // Read the migration file
  const migrationPath = path.join(process.cwd(), 'supabase', 'migrations', 'add_admin_created_cleaner.sql');
  
  if (!fs.existsSync(migrationPath)) {
    console.error(`❌ Migration file not found: ${migrationPath}`);
    process.exit(1);
  }

  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

  console.log('\n📝 Running migration: add_admin_created_cleaner.sql');
  console.log('   Phone: +27824644655');
  console.log('   Name: Admin Created Cleaner\n');

  try {
    // Execute the migration SQL
    // Note: Supabase JS client doesn't have a direct SQL execution method for arbitrary SQL
    // So we'll use RPC if available, or recommend using SQL Editor
    
    // For now, we'll create the cleaner directly using the same logic as in the SQL
    const { data: existingCleaner, error: checkError } = await supabase
      .from('cleaners')
      .select('id')
      .eq('phone', '+27824644655')
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      throw checkError;
    }

    if (existingCleaner) {
      console.log('   ℹ️  Cleaner with this phone already exists, updating...');
      const { data: updated, error: updateError } = await supabase
        .from('cleaners')
        .update({
          name: 'Admin Created Cleaner',
          is_active: true,
          is_available: true,
          available_monday: true,
          available_tuesday: true,
          available_wednesday: true,
          available_thursday: true,
          available_friday: true,
          available_saturday: true,
          available_sunday: true,
          rating: 0.0,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingCleaner.id)
        .select()
        .single();

      if (updateError) throw updateError;
      console.log(`   ✅ Updated existing cleaner (ID: ${updated.id})`);
    } else {
      console.log('   ℹ️  Creating new cleaner...');
      const { data: newCleaner, error: insertError } = await supabase
        .from('cleaners')
        .insert({
          name: 'Admin Created Cleaner',
          phone: '+27824644655',
          email: null,
          is_active: true,
          is_available: true,
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

      if (insertError) throw insertError;
      console.log(`   ✅ Created new cleaner (ID: ${newCleaner.id})`);
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('   1. Create auth user in Supabase Auth Dashboard');
    console.log('   2. Or run: npx tsx scripts/create-cleaner-now.ts (creates auth user too)');
  } catch (error: any) {
    console.error('\n❌ Migration failed:', error.message);
    console.error('\n💡 Alternative: Run the SQL file directly in Supabase SQL Editor');
    console.error(`   File location: ${migrationPath}`);
    process.exit(1);
  }
}

runMigration();
