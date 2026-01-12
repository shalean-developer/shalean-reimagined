#!/usr/bin/env tsx
/**
 * Fix booking prices that are incorrectly multiplied by 100
 * 
 * For Standard and Airbnb: prices >= 10000 (like 37000.00) -> divide by 100
 * For Deep and Move in/out: prices >= 100000 (like 140000.00) -> divide by 100
 * 
 * Run with: npx tsx scripts/fix-booking-prices.ts
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

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

interface BookingPriceFix {
  id: string;
  booking_number: string;
  service_type: string;
  total_amount: number;
  base_price: number;
  subtotal: number;
  amount_paid: number;
  service_fee: number;
  new_total_amount: number;
  new_base_price: number;
  new_subtotal: number;
  new_amount_paid: number;
  new_service_fee: number;
}

async function fixBookingPrices() {
  console.log('\n🔍 Scanning bookings for incorrect prices...\n');

  try {
    // Fetch all bookings
    const { data: bookings, error: fetchError } = await supabase
      .from('bookings')
      .select('id, booking_number, service_type, total_amount, base_price, subtotal, amount_paid, service_fee')
      .order('created_at', { ascending: true });

    if (fetchError) {
      console.error('❌ Error fetching bookings:', fetchError);
      process.exit(1);
    }

    if (!bookings || bookings.length === 0) {
      console.log('No bookings found.');
      return;
    }

    console.log(`Found ${bookings.length} bookings to scan.\n`);

    const fixes: BookingPriceFix[] = [];

    // Identify bookings that need fixing
    for (const booking of bookings) {
      const serviceType = (booking.service_type || '').toLowerCase();
      const totalAmount = parseFloat(booking.total_amount as any) || 0;
      const basePrice = parseFloat(booking.base_price as any) || 0;
      const subtotal = parseFloat(booking.subtotal as any) || 0;
      const amountPaid = parseFloat(booking.amount_paid as any) || 0;
      const serviceFee = parseFloat(booking.service_fee as any) || 0;

      let needsFix = false;
      let threshold = 0;

      // Determine threshold based on service type
      if (serviceType === 'standard' || serviceType === 'airbnb') {
        threshold = 10000; // R37000.00 should become R370.00
        if (totalAmount >= threshold && totalAmount < 1000000) {
          needsFix = true;
        }
      } else if (serviceType === 'deep' || serviceType.includes('move') || serviceType.includes('out')) {
        threshold = 100000; // R140000.00 should become R1400.00
        if (totalAmount >= threshold && totalAmount < 10000000) {
          needsFix = true;
        }
      } else {
        // For other service types, use a general threshold
        if (totalAmount >= 10000 && totalAmount < 1000000) {
          needsFix = true;
          threshold = 10000;
        }
      }

      if (needsFix) {
        fixes.push({
          id: booking.id,
          booking_number: booking.booking_number,
          service_type: booking.service_type as string,
          total_amount: totalAmount,
          base_price: basePrice,
          subtotal: subtotal,
          amount_paid: amountPaid,
          service_fee: serviceFee,
          new_total_amount: Math.round((totalAmount / 100) * 100) / 100,
          new_base_price: Math.round((basePrice / 100) * 100) / 100,
          new_subtotal: Math.round((subtotal / 100) * 100) / 100,
          new_amount_paid: Math.round((amountPaid / 100) * 100) / 100,
          new_service_fee: Math.round((serviceFee / 100) * 100) / 100,
        });
      }
    }

    console.log(`Found ${fixes.length} bookings that need price fixes:\n`);

    if (fixes.length === 0) {
      console.log('✅ No bookings need fixing. All prices look correct.');
      return;
    }

    // Show preview
    console.log('Preview of fixes:');
    console.log('─'.repeat(100));
    fixes.slice(0, 10).forEach((fix) => {
      console.log(
        `Booking #${fix.booking_number} (${fix.service_type}): ` +
        `R${fix.total_amount.toFixed(2)} -> R${fix.new_total_amount.toFixed(2)}`
      );
    });
    if (fixes.length > 10) {
      console.log(`... and ${fixes.length - 10} more`);
    }
    console.log('─'.repeat(100));
    console.log(`\nTotal bookings to fix: ${fixes.length}\n`);

    // Apply fixes
    console.log('Applying fixes...\n');
    let successCount = 0;
    let errorCount = 0;

    for (const fix of fixes) {
      try {
        const { error: updateError } = await supabase
          .from('bookings')
          .update({
            total_amount: fix.new_total_amount,
            base_price: fix.new_base_price,
            subtotal: fix.new_subtotal,
            amount_paid: fix.new_amount_paid,
            service_fee: fix.new_service_fee,
            updated_at: new Date().toISOString(),
          })
          .eq('id', fix.id);

        if (updateError) {
          console.error(`❌ Error fixing booking #${fix.booking_number}:`, updateError.message);
          errorCount++;
        } else {
          successCount++;
          if (successCount % 50 === 0) {
            console.log(`  Fixed ${successCount}/${fixes.length} bookings...`);
          }
        }
      } catch (error) {
        console.error(`❌ Error fixing booking #${fix.booking_number}:`, error);
        errorCount++;
      }
    }

    console.log('\n' + '═'.repeat(100));
    console.log(`✅ Successfully fixed: ${successCount} bookings`);
    if (errorCount > 0) {
      console.log(`❌ Errors: ${errorCount} bookings`);
    }
    console.log('═'.repeat(100) + '\n');
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

// Run the fix
fixBookingPrices()
  .then(() => {
    console.log('✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
