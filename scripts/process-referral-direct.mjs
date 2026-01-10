/**
 * Direct script to process missing referral reward
 * This script directly accesses Supabase to process the referral
 * 
 * Usage: node scripts/process-referral-direct.mjs
 * 
 * Make sure you have NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
 * in your environment or .env.local file
 */

import { createClient } from '@supabase/supabase-js';

// Note: Environment variables should be set in .env.local or system environment
// The script will use process.env.NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

const REFERRAL_CODE = 'C75D3A';
const REFERRED_EMAIL = 'faraic3@gmail.com';
const REWARD_AMOUNT = 150.00;

async function processReferral() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Missing Supabase credentials!');
      console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local');
      process.exit(1);
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log(`\n🔍 Processing referral reward for code ${REFERRAL_CODE} and email ${REFERRED_EMAIL}...\n`);

    // Get the referrer's email from the referral code
    const { data: referrerProfile, error: referrerError } = await supabase
      .from('profiles')
      .select('email')
      .eq('referral_code', REFERRAL_CODE)
      .maybeSingle();

    if (referrerError) {
      console.error('❌ Error finding referrer profile:', referrerError);
      process.exit(1);
    }

    if (!referrerProfile || !referrerProfile.email) {
      console.error(`❌ Referrer not found for referral code: ${REFERRAL_CODE}`);
      process.exit(1);
    }

    const referrerEmail = referrerProfile.email.toLowerCase();
    console.log(`✅ Found referrer: ${referrerEmail}`);

    // Skip if referrer is referring themselves
    if (referrerEmail === REFERRED_EMAIL.toLowerCase()) {
      console.error('❌ Cannot process self-referral');
      process.exit(1);
    }

    // Find paid bookings with this referral code and email
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('id, customer_email, referral_code, payment_status, total_amount, created_at')
      .eq('customer_email', REFERRED_EMAIL)
      .eq('referral_code', REFERRAL_CODE)
      .eq('payment_status', 'paid')
      .order('created_at', { ascending: false });

    if (bookingsError) {
      console.error('❌ Error finding bookings:', bookingsError);
      process.exit(1);
    }

    if (!bookings || bookings.length === 0) {
      console.error('❌ No paid bookings found with this referral code and email');
      process.exit(1);
    }

    console.log(`✅ Found ${bookings.length} paid booking(s)\n`);

    const results = [];

    // Process each booking
    for (const booking of bookings) {
      console.log(`Processing booking ${booking.id}...`);

      // Check if referral record already exists
      let { data: existingReferral, error: referralCheckError } = await supabase
        .from('referrals')
        .select('id, status, referrer_reward_status')
        .eq('referral_code', REFERRAL_CODE)
        .eq('referred_email', REFERRED_EMAIL)
        .eq('referred_booking_id', booking.id)
        .maybeSingle();

      if (referralCheckError) {
        console.error(`  ❌ Error checking existing referral:`, referralCheckError);
        results.push({ bookingId: booking.id, success: false, error: 'Failed to check referral' });
        continue;
      }

      // Create referral record if it doesn't exist
      if (!existingReferral) {
        const { data: newReferral, error: createReferralError } = await supabase
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
          .select('id, status, referrer_reward_status')
          .single();

        if (createReferralError) {
          console.error(`  ❌ Error creating referral record:`, createReferralError);
          results.push({ bookingId: booking.id, success: false, error: 'Failed to create referral' });
          continue;
        }
        existingReferral = newReferral;
        console.log(`  ✅ Created referral record`);
      }

      // Process reward if not already credited
      if (existingReferral.referrer_reward_status === 'pending') {
        // Get or create referrer's profile
        let { data: referrerProfileFull, error: profileError } = await supabase
          .from('profiles')
          .select('id, credit_balance')
          .eq('email', referrerEmail)
          .maybeSingle();

        if (profileError) {
          console.error(`  ❌ Error fetching referrer profile:`, profileError);
          results.push({ bookingId: booking.id, success: false, error: 'Failed to fetch profile' });
          continue;
        }

        if (!referrerProfileFull) {
          // Create profile if it doesn't exist
          const { data: newProfile, error: createProfileError } = await supabase
            .from('profiles')
            .insert({
              email: referrerEmail,
              credit_balance: 0,
              first_name: '',
              last_name: '',
            })
            .select('id, credit_balance')
            .single();

          if (createProfileError || !newProfile) {
            console.error(`  ❌ Error creating referrer profile:`, createProfileError);
            results.push({ bookingId: booking.id, success: false, error: 'Failed to create profile' });
            continue;
          }
          referrerProfileFull = newProfile;
        }

        const balanceBefore = referrerProfileFull.credit_balance || 0;
        const balanceAfter = balanceBefore + REWARD_AMOUNT;

        // Update referrer's credit balance
        const { error: balanceUpdateError } = await supabase
          .from('profiles')
          .update({
            credit_balance: balanceAfter,
            updated_at: new Date().toISOString(),
          })
          .eq('id', referrerProfileFull.id);

        if (balanceUpdateError) {
          console.error(`  ❌ Error updating referrer balance:`, balanceUpdateError);
          results.push({ bookingId: booking.id, success: false, error: 'Failed to update balance' });
          continue;
        }

        // Create credit transaction record
        const { error: transactionError } = await supabase
          .from('credit_transactions')
          .insert({
            profile_id: referrerProfileFull.id,
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

        if (transactionError) {
          console.error(`  ❌ Error creating credit transaction:`, transactionError);
          results.push({ bookingId: booking.id, success: false, error: 'Failed to create transaction' });
          continue;
        }

        // Update referral record to mark reward as credited
        const { error: referralUpdateError } = await supabase
          .from('referrals')
          .update({
            status: 'completed',
            referrer_reward_status: 'credited',
            updated_at: new Date().toISOString(),
          })
          .eq('id', existingReferral.id);

        if (referralUpdateError) {
          console.error(`  ❌ Error updating referral record:`, referralUpdateError);
          results.push({ bookingId: booking.id, success: false, error: 'Failed to update referral' });
          continue;
        }

        console.log(`  ✅ Successfully credited R${REWARD_AMOUNT} to ${referrerEmail}`);
        console.log(`     Balance: R${balanceBefore} → R${balanceAfter}\n`);

        results.push({
          bookingId: booking.id,
          success: true,
          referrerEmail,
          rewardAmount: REWARD_AMOUNT,
          balanceBefore,
          balanceAfter,
        });
      } else {
        console.log(`  ⚠️  Reward already credited (status: ${existingReferral.referrer_reward_status})\n`);
        results.push({
          bookingId: booking.id,
          success: false,
          error: 'Reward already credited',
          referrer_reward_status: existingReferral.referrer_reward_status,
        });
      }
    }

    // Summary
    console.log('\n📊 Summary:');
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    if (successful.length > 0) {
      console.log(`✅ Successfully processed ${successful.length} booking(s)`);
      successful.forEach((r) => {
        console.log(`   - Booking ${r.bookingId}: R${r.rewardAmount} credited to ${r.referrerEmail}`);
      });
    }

    if (failed.length > 0) {
      console.log(`\n⚠️  ${failed.length} booking(s) had issues:`);
      failed.forEach((r) => {
        console.log(`   - Booking ${r.bookingId}: ${r.error}`);
      });
    }

    if (successful.length === 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

processReferral();

