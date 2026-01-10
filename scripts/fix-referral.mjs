/**
 * Quick script to fix the missing referral reward
 * This will work if you have Supabase credentials in your environment
 * 
 * Run: node scripts/fix-referral.mjs
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try to load .env.local
let envVars = {};
try {
  const envPath = join(__dirname, '..', '.env.local');
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      envVars[key] = value;
    }
  });
} catch (e) {
  // .env.local not found, will use process.env
}

// Get credentials from env file or process.env
const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\n❌ Missing Supabase credentials!');
  console.error('\nPlease either:');
  console.error('1. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment');
  console.error('2. Or create a .env.local file in the project root with these variables');
  console.error('\nExample .env.local:');
  console.error('NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key\n');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const REFERRAL_CODE = 'C75D3A';
const REFERRED_EMAIL = 'faraic3@gmail.com';
const REWARD_AMOUNT = 150.00;

async function fixReferral() {
  try {
    console.log('\n🔍 Processing referral reward...');
    console.log(`   Referral Code: ${REFERRAL_CODE}`);
    console.log(`   Referred Email: ${REFERRED_EMAIL}\n`);

    // Get referrer
    const { data: referrer, error: refErr } = await supabase
      .from('profiles')
      .select('email')
      .eq('referral_code', REFERRAL_CODE)
      .maybeSingle();

    if (refErr || !referrer) {
      console.error(`❌ Referrer not found for code ${REFERRAL_CODE}`);
      process.exit(1);
    }

    const referrerEmail = referrer.email.toLowerCase();
    console.log(`✅ Found referrer: ${referrerEmail}`);

    // Find paid bookings
    const { data: bookings, error: bookErr } = await supabase
      .from('bookings')
      .select('id, customer_email, payment_status, created_at')
      .eq('customer_email', REFERRED_EMAIL)
      .eq('referral_code', REFERRAL_CODE)
      .eq('payment_status', 'paid')
      .order('created_at', { ascending: false });

    if (bookErr) {
      console.error('❌ Error finding bookings:', bookErr.message);
      process.exit(1);
    }

    if (!bookings || bookings.length === 0) {
      console.error('❌ No paid bookings found');
      process.exit(1);
    }

    console.log(`✅ Found ${bookings.length} paid booking(s)\n`);

    // Process each booking
    for (const booking of bookings) {
      console.log(`Processing booking ${booking.id}...`);

      // Check/create referral record
      let { data: referral, error: refCheckErr } = await supabase
        .from('referrals')
        .select('id, referrer_reward_status')
        .eq('referral_code', REFERRAL_CODE)
        .eq('referred_email', REFERRED_EMAIL)
        .eq('referred_booking_id', booking.id)
        .maybeSingle();

      if (refCheckErr) {
        console.error(`  ❌ Error checking referral:`, refCheckErr.message);
        continue;
      }

      if (!referral) {
        const { data: newRef, error: createErr } = await supabase
          .from('referrals')
          .insert({
            referrer_email: referrerEmail,
            referred_email: REFERRED_EMAIL,
            referral_code: REFERRAL_CODE,
            status: 'completed',
            referred_booking_id: booking.id,
            referrer_reward_amount: REWARD_AMOUNT,
            referrer_reward_status: 'pending',
          })
          .select('id')
          .single();

        if (createErr) {
          console.error(`  ❌ Error creating referral:`, createErr.message);
          continue;
        }
        referral = newRef;
        console.log(`  ✅ Created referral record`);
      }

      if (referral.referrer_reward_status === 'credited') {
        console.log(`  ⚠️  Reward already credited`);
        continue;
      }

      // Get referrer profile
      let { data: profile, error: profErr } = await supabase
        .from('profiles')
        .select('id, credit_balance')
        .eq('email', referrerEmail)
        .maybeSingle();

      if (profErr || !profile) {
        const { data: newProf, error: createProfErr } = await supabase
          .from('profiles')
          .insert({
            email: referrerEmail,
            credit_balance: 0,
            first_name: '',
            last_name: '',
          })
          .select('id, credit_balance')
          .single();

        if (createProfErr) {
          console.error(`  ❌ Error creating profile:`, createProfErr.message);
          continue;
        }
        profile = newProf;
      }

      const balanceBefore = profile.credit_balance || 0;
      const balanceAfter = balanceBefore + REWARD_AMOUNT;

      // Update balance
      const { error: balanceErr } = await supabase
        .from('profiles')
        .update({
          credit_balance: balanceAfter,
          updated_at: new Date().toISOString(),
        })
        .eq('id', profile.id);

      if (balanceErr) {
        console.error(`  ❌ Error updating balance:`, balanceErr.message);
        continue;
      }

      // Create transaction
      const { error: transErr } = await supabase
        .from('credit_transactions')
        .insert({
          profile_id: profile.id,
          email: referrerEmail,
          transaction_type: 'referral_reward',
          amount: REWARD_AMOUNT,
          balance_before: balanceBefore,
          balance_after: balanceAfter,
          description: `Referral reward for ${REFERRED_EMAIL}`,
          metadata: {
            referral_code: REFERRAL_CODE,
            referred_email: REFERRED_EMAIL,
            booking_id: booking.id,
            processed_retroactively: true,
          },
          payment_status: 'completed',
        });

      if (transErr) {
        console.error(`  ❌ Error creating transaction:`, transErr.message);
        continue;
      }

      // Update referral
      const { error: updateErr } = await supabase
        .from('referrals')
        .update({
          status: 'completed',
          referrer_reward_status: 'credited',
          updated_at: new Date().toISOString(),
        })
        .eq('id', referral.id);

      if (updateErr) {
        console.error(`  ❌ Error updating referral:`, updateErr.message);
        continue;
      }

      console.log(`  ✅ Successfully credited R${REWARD_AMOUNT} to ${referrerEmail}`);
      console.log(`     Balance: R${balanceBefore} → R${balanceAfter}\n`);
    }

    console.log('✅ Done! Referral reward has been processed.\n');
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  }
}

fixReferral();

