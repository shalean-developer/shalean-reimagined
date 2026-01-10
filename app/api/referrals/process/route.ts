import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * POST /api/referrals/process
 * Retroactively process referral rewards for a booking
 * 
 * Body: { referralCode: string, referredEmail: string, bookingId?: string }
 * 
 * This endpoint can be used to manually process referral rewards that were missed
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const body = await request.json();
    
    const { referralCode, referredEmail, bookingId } = body;

    if (!referralCode || !referredEmail) {
      return NextResponse.json(
        { error: 'referralCode and referredEmail are required' },
        { status: 400 }
      );
    }

    const code = referralCode.trim().toUpperCase();
    const email = referredEmail.trim().toLowerCase();

    // Get the referrer's email from the referral code
    const { data: referrerProfile, error: referrerError } = await supabase
      .from('profiles')
      .select('email')
      .eq('referral_code', code)
      .maybeSingle();

    if (referrerError) {
      console.error('Error finding referrer profile:', referrerError);
      return NextResponse.json(
        { error: 'Failed to find referrer profile', details: referrerError.message },
        { status: 500 }
      );
    }

    if (!referrerProfile || !referrerProfile.email) {
      return NextResponse.json(
        { error: `Referrer not found for referral code: ${code}` },
        { status: 404 }
      );
    }

    const referrerEmail = referrerProfile.email.toLowerCase();

    // Skip if referrer is referring themselves
    if (referrerEmail === email) {
      return NextResponse.json(
        { error: 'Cannot process self-referral' },
        { status: 400 }
      );
    }

    // Find booking(s) with this referral code and email
    // First try to find paid bookings
    let bookingQuery = supabase
      .from('bookings')
      .select('id, customer_email, referral_code, payment_status, total_amount, paystack_reference')
      .eq('customer_email', email)
      .eq('referral_code', code)
      .eq('payment_status', 'paid'); // Only process paid bookings

    if (bookingId) {
      bookingQuery = bookingQuery.eq('id', bookingId);
    }

    const bookingResult = await bookingQuery;
    let finalBookings: any[] | null = bookingResult.data;
    let finalBookingsError: any = bookingResult.error;

    // If no paid bookings found, check for pending bookings with Paystack references
    // and verify their payment status
    if ((!finalBookings || finalBookings.length === 0) && !finalBookingsError) {
      let pendingQuery = supabase
        .from('bookings')
        .select('id, customer_email, referral_code, payment_status, total_amount, paystack_reference')
        .eq('customer_email', email)
        .eq('referral_code', code)
        .eq('payment_status', 'pending')
        .not('paystack_reference', 'is', null);

      if (bookingId) {
        pendingQuery = pendingQuery.eq('id', bookingId);
      }

      const { data: pendingBookings, error: pendingError } = await pendingQuery;

      if (!pendingError && pendingBookings && pendingBookings.length > 0) {
        // Verify payments for pending bookings
        const { verifyPayment } = await import('@/lib/paystack/client');
        const verifiedBookings: any[] = [];

        for (const booking of pendingBookings) {
          if (booking.paystack_reference) {
            try {
              const verification = await verifyPayment(booking.paystack_reference);
              if (verification.status && verification.data.status === 'success') {
                // Update booking to paid status
                const paidAmount = verification.data.amount / 100;
                await supabase
                  .from('bookings')
                  .update({
                    payment_status: 'paid',
                    paystack_transaction_id: verification.data.id.toString(),
                    amount_paid: paidAmount,
                    status: 'confirmed',
                    updated_at: new Date().toISOString(),
                  })
                  .eq('id', booking.id);
                
                verifiedBookings.push({
                  ...booking,
                  payment_status: 'paid',
                });
              }
            } catch (verifyError) {
              console.error(`Error verifying payment for booking ${booking.id}:`, verifyError);
            }
          }
        }

        if (verifiedBookings.length > 0) {
          // Update bookings with verified ones
          finalBookings = verifiedBookings;
          finalBookingsError = null;
        }
      }
    }

    // Assign to bookings for the rest of the function
    const bookings = finalBookings;
    const bookingsError = finalBookingsError;

    if (bookingsError) {
      console.error('Error finding bookings:', bookingsError);
      return NextResponse.json(
        { error: 'Failed to find bookings', details: bookingsError.message },
        { status: 500 }
      );
    }

    if (!bookings || bookings.length === 0) {
      return NextResponse.json(
        { error: 'No paid bookings found with this referral code and email' },
        { status: 404 }
      );
    }

    const results = [];

    // Process each booking
    for (const booking of bookings) {
      // Check if referral record already exists
      let { data: existingReferral, error: referralCheckError } = await supabase
        .from('referrals')
        .select('id, status, referrer_reward_status')
        .eq('referral_code', code)
        .eq('referred_email', email)
        .eq('referred_booking_id', booking.id)
        .maybeSingle();

      if (referralCheckError) {
        console.error('Error checking existing referral:', referralCheckError);
        results.push({
          bookingId: booking.id,
          success: false,
          error: 'Failed to check existing referral',
        });
        continue;
      }

      // Create referral record if it doesn't exist
      if (!existingReferral) {
        const { data: newReferral, error: createReferralError } = await supabase
          .from('referrals')
          .insert({
            referrer_email: referrerEmail,
            referred_email: email,
            referral_code: code,
            status: 'completed',
            referred_booking_id: booking.id,
            referrer_reward_amount: 150.00,
            referrer_reward_status: 'pending',
          })
          .select('id, status, referrer_reward_status')
          .single();

        if (createReferralError) {
          console.error('Error creating referral record:', createReferralError);
          results.push({
            bookingId: booking.id,
            success: false,
            error: 'Failed to create referral record',
          });
          continue;
        }
        existingReferral = newReferral;
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
          console.error('Error fetching referrer profile:', profileError);
          results.push({
            bookingId: booking.id,
            success: false,
            error: 'Failed to fetch referrer profile',
          });
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
            console.error('Error creating referrer profile:', createProfileError);
            results.push({
              bookingId: booking.id,
              success: false,
              error: 'Failed to create referrer profile',
            });
            continue;
          }
          referrerProfileFull = newProfile;
        }

        const balanceBefore = referrerProfileFull.credit_balance || 0;
        const rewardAmount = 150.00;
        const balanceAfter = balanceBefore + rewardAmount;

        // Update referrer's credit balance
        const { error: balanceUpdateError } = await supabase
          .from('profiles')
          .update({
            credit_balance: balanceAfter,
            updated_at: new Date().toISOString(),
          })
          .eq('id', referrerProfileFull.id);

        if (balanceUpdateError) {
          console.error('Error updating referrer balance:', balanceUpdateError);
          results.push({
            bookingId: booking.id,
            success: false,
            error: 'Failed to update referrer balance',
          });
          continue;
        }

        // Create credit transaction record
        const { error: transactionError } = await supabase
          .from('credit_transactions')
          .insert({
            profile_id: referrerProfileFull.id,
            email: referrerEmail,
            transaction_type: 'referral_reward',
            amount: rewardAmount,
            balance_before: balanceBefore,
            balance_after: balanceAfter,
            description: `Referral reward for ${email}`,
            metadata: {
              referral_code: code,
              referred_email: email,
              booking_id: booking.id,
              processed_retroactively: true,
            },
            payment_status: 'completed',
          });

        if (transactionError) {
          console.error('Error creating credit transaction:', transactionError);
          results.push({
            bookingId: booking.id,
            success: false,
            error: 'Failed to create credit transaction',
          });
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
          console.error('Error updating referral record:', referralUpdateError);
          results.push({
            bookingId: booking.id,
            success: false,
            error: 'Failed to update referral record',
          });
          continue;
        }

        results.push({
          bookingId: booking.id,
          success: true,
          referrerEmail,
          rewardAmount,
          balanceBefore,
          balanceAfter,
        });
      } else {
        results.push({
          bookingId: booking.id,
          success: false,
          error: 'Reward already credited',
          referrer_reward_status: existingReferral.referrer_reward_status,
        });
      }
    }

    const allSuccessful = results.every((r) => r.success);
    const anySuccessful = results.some((r) => r.success);

    return NextResponse.json({
      success: allSuccessful,
      partialSuccess: anySuccessful && !allSuccessful,
      results,
    });
  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json(
      {
        error: 'Failed to process referral',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

