/**
 * Script to retroactively process a missing referral reward
 * 
 * Usage: node scripts/process-missing-referral.js
 * 
 * This script calls the API endpoint to process the referral reward
 * for referral code C75D3A and email faraic3@gmail.com
 */

const API_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const REFERRAL_CODE = 'C75D3A';
const REFERRED_EMAIL = 'faraic3@gmail.com';

async function processReferral() {
  try {
    console.log(`Processing referral reward for code ${REFERRAL_CODE} and email ${REFERRED_EMAIL}...`);
    
    const response = await fetch(`${API_URL}/api/referrals/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        referralCode: REFERRAL_CODE,
        referredEmail: REFERRED_EMAIL,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Error processing referral:', result);
      process.exit(1);
    }

    console.log('Referral processing result:', JSON.stringify(result, null, 2));

    if (result.success) {
      console.log('✅ Successfully processed referral reward!');
      result.results.forEach((r) => {
        if (r.success) {
          console.log(`  - Booking ${r.bookingId}: R${r.rewardAmount} credited to ${r.referrerEmail}`);
          console.log(`    Balance: R${r.balanceBefore} → R${r.balanceAfter}`);
        }
      });
    } else if (result.partialSuccess) {
      console.log('⚠️  Partially processed (some bookings failed):');
      result.results.forEach((r) => {
        if (r.success) {
          console.log(`  ✅ Booking ${r.bookingId}: R${r.rewardAmount} credited`);
        } else {
          console.log(`  ❌ Booking ${r.bookingId}: ${r.error}`);
        }
      });
    } else {
      console.log('❌ Failed to process referral:');
      result.results.forEach((r) => {
        console.log(`  - Booking ${r.bookingId}: ${r.error || 'Unknown error'}`);
      });
      process.exit(1);
    }
  } catch (error) {
    console.error('Error calling API:', error);
    process.exit(1);
  }
}

processReferral();

