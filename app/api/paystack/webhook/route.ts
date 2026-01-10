import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature, verifyPayment } from '@/lib/paystack/client';
import { createClient } from '@/lib/supabase/server';
import { generateVoucherCode } from '@/lib/utils/voucher';

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text();
    const signature = request.headers.get('x-paystack-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Paystack signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    if (!verifyWebhookSignature(rawBody, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const payload = JSON.parse(rawBody);
    const { event, data } = payload;

    // Handle different event types
    if (event === 'charge.success' || event === 'transfer.success') {
      const reference = data.reference;

      // Verify the transaction
      const verification = await verifyPayment(reference);

      if (verification.status && verification.data.status === 'success') {
        const supabase = await createClient();
        const paidAmount = verification.data.amount / 100; // Convert from kobo/cents to ZAR
        
        // Check transaction type
        const metadata = (verification.data.metadata || {}) as any;
        const isCreditPurchase = metadata.transaction_type === 'credit_purchase' || 
                                 reference?.startsWith('CREDIT_');
        const isVoucherPurchase = metadata.transaction_type === 'voucher_purchase' || 
                                  reference?.startsWith('VOUCHER_');

        if (isVoucherPurchase) {
          // Handle voucher purchase
          // Find transaction by reference (check all statuses)
          const { data: voucherTransaction } = await supabase
            .from('credit_transactions')
            .select('id, email, amount, payment_status, profile_id, metadata')
            .eq('paystack_reference', reference)
            .maybeSingle();

          if (voucherTransaction) {
            // Check if voucher already exists in metadata
            const existingMetadata = voucherTransaction.metadata || {};
            const existingVoucherCode = existingMetadata.voucher_code;
            
            // Verify if voucher already exists
            let shouldCreateVoucher = true;
            if (existingVoucherCode) {
              const { data: existingVoucher } = await supabase
                .from('vouchers')
                .select('id, code')
                .eq('code', existingVoucherCode)
                .maybeSingle();
              
              if (existingVoucher) {
                console.log('Voucher already exists for this transaction:', existingVoucherCode);
                // Ensure transaction status is completed
                if (voucherTransaction.payment_status !== 'completed') {
                  await supabase
                    .from('credit_transactions')
                    .update({
                      payment_status: 'completed',
                      paystack_transaction_id: verification.data.id.toString(),
                      updated_at: new Date().toISOString(),
                    })
                    .eq('id', voucherTransaction.id);
                }
                // Skip voucher creation
                shouldCreateVoucher = false;
              } else {
                console.log('Voucher code in metadata but voucher not found, will create new one');
              }
            }
            
            // Generate unique voucher code only if we need to create a voucher
            if (shouldCreateVoucher) {
            // Generate unique voucher code
            let voucherCode = generateVoucherCode();
            let attempts = 0;
            const maxAttempts = 10;

            // Check for uniqueness
            while (attempts < maxAttempts) {
              const { data: existingVoucher } = await supabase
                .from('vouchers')
                .select('id')
                .eq('code', voucherCode)
                .maybeSingle();

              if (!existingVoucher) {
                break; // Code is unique
              }
              voucherCode = generateVoucherCode();
              attempts++;
            }

            // If still not unique after max attempts, append timestamp
            if (attempts >= maxAttempts) {
              voucherCode = generateVoucherCode() + Date.now().toString(36).substring(0, 4).toUpperCase();
            }

            // Set valid dates (no expiry - set valid_until far in the future)
            const validFrom = new Date();
            const validUntil = new Date();
            validUntil.setFullYear(validUntil.getFullYear() + 100); // 100 years from now

            // Create voucher
            const { data: newVoucher, error: voucherError } = await supabase
              .from('vouchers')
              .insert({
                code: voucherCode,
                amount: paidAmount,
                status: 'active',
                valid_from: validFrom.toISOString().split('T')[0],
                valid_until: validUntil.toISOString().split('T')[0],
              })
              .select('id, code')
              .single();

            if (voucherError || !newVoucher) {
              console.error('Error creating voucher:', voucherError);
            } else {
              // Update the transaction record
              const { error: transactionUpdateError } = await supabase
                .from('credit_transactions')
                .update({
                  payment_status: 'completed',
                  paystack_transaction_id: verification.data.id.toString(),
                  updated_at: new Date().toISOString(),
                  metadata: {
                    ...(voucherTransaction.metadata || {}),
                    voucher_id: newVoucher.id,
                    voucher_code: newVoucher.code,
                  },
                })
                .eq('id', voucherTransaction.id);

              if (transactionUpdateError) {
                console.error('Error updating voucher transaction:', transactionUpdateError);
              } else {
                console.log('Successfully created voucher:', {
                  email: voucherTransaction.email,
                  amount: paidAmount,
                  voucherCode: newVoucher.code,
                });
              }
            }
            }
          } else {
            console.error('Voucher transaction not found for reference:', reference);
          }
        } else if (isCreditPurchase) {
          // Handle credit purchase
          // Find transaction by reference, checking both pending and failed statuses
          const { data: creditTransaction } = await supabase
            .from('credit_transactions')
            .select('id, email, amount, payment_status, profile_id')
            .eq('paystack_reference', reference)
            .in('payment_status', ['pending', 'failed'])
            .maybeSingle();

          if (creditTransaction) {
            // Skip if already processed
            if (creditTransaction.payment_status === 'completed') {
              console.log('Credit transaction already processed:', reference);
            } else {
              // Get or create profile
              let { data: profile } = await supabase
                .from('profiles')
                .select('id, credit_balance')
                .eq('email', creditTransaction.email)
                .maybeSingle();

              if (!profile) {
                // Create a basic profile if it doesn't exist
                const { data: newProfile, error: createError } = await supabase
                  .from('profiles')
                  .insert({
                    email: creditTransaction.email,
                    credit_balance: 0,
                    first_name: '',
                    last_name: '',
                  })
                  .select('id, credit_balance')
                  .single();

                if (createError || !newProfile) {
                  console.error('Error creating profile for credit purchase:', createError);
                } else {
                  profile = newProfile;
                }
              }

              if (profile) {
                const balanceBefore = profile.credit_balance || 0;
                const balanceAfter = balanceBefore + paidAmount;

                // Update profile balance
                const { error: balanceError } = await supabase
                  .from('profiles')
                  .update({
                    credit_balance: balanceAfter,
                    updated_at: new Date().toISOString(),
                  })
                  .eq('id', profile.id);

                if (!balanceError) {
                  // Update the credit transaction record with payment details and new balance
                  const { error: transactionUpdateError } = await supabase
                    .from('credit_transactions')
                    .update({
                      payment_status: 'completed',
                      paystack_transaction_id: verification.data.id.toString(),
                      balance_before: balanceBefore,
                      balance_after: balanceAfter,
                      updated_at: new Date().toISOString(),
                    })
                    .eq('id', creditTransaction.id);

                  if (transactionUpdateError) {
                    console.error('Error updating credit transaction:', transactionUpdateError);
                  } else {
                    console.log('Successfully credited account:', {
                      email: creditTransaction.email,
                      amount: paidAmount,
                      balanceAfter,
                    });
                  }
                } else {
                  console.error('Error updating credit balance:', balanceError);
                }
              }
            }
          } else {
            console.error('Credit transaction not found for reference:', reference);
          }
        } else {
          // Handle booking payment
          console.log('Processing booking payment webhook:', {
            reference,
            transactionId: verification.data.id,
            amount: paidAmount,
            metadata,
          });

          // First, get all bookings with this reference
          // Check for both pending and paid to handle webhook retries
          let { data: bookingsToUpdate, error: bookingsFetchError } = await supabase
            .from('bookings')
            .select('id, total_amount, payment_status, paystack_transaction_id')
            .eq('paystack_reference', reference)
            .in('payment_status', ['pending', 'paid']);

          if (bookingsFetchError) {
            console.error('Error fetching bookings by reference:', bookingsFetchError);
          }

          // Fallback: If no bookings found by reference, try to find by booking_ids in metadata
          if ((!bookingsToUpdate || bookingsToUpdate.length === 0) && metadata.booking_ids) {
            const bookingIds = Array.isArray(metadata.booking_ids) 
              ? metadata.booking_ids 
              : metadata.booking_id 
                ? [metadata.booking_id] 
                : [];
            
            if (bookingIds.length > 0) {
              console.log('No bookings found by reference, trying metadata booking_ids:', {
                reference,
                bookingIds,
              });
              
              const { data: bookingsByMetadata, error: metadataFetchError } = await supabase
                .from('bookings')
                .select('id, total_amount, payment_status, paystack_transaction_id, paystack_reference')
                .in('id', bookingIds)
                .in('payment_status', ['pending', 'paid']);
              
              if (metadataFetchError) {
                console.error('Error fetching bookings by metadata:', metadataFetchError);
              } else if (bookingsByMetadata && bookingsByMetadata.length > 0) {
                // Update these bookings with the correct reference if they don't have it
                const bookingsWithoutRef = bookingsByMetadata.filter(b => !b.paystack_reference || b.paystack_reference !== reference);
                if (bookingsWithoutRef.length > 0) {
                  const idsToUpdate = bookingsWithoutRef.map(b => b.id);
                  await supabase
                    .from('bookings')
                    .update({ paystack_reference: reference })
                    .in('id', idsToUpdate);
                }
                
                bookingsToUpdate = bookingsByMetadata;
                console.log('Found bookings via metadata:', {
                  count: bookingsByMetadata.length,
                  bookingIds: bookingsByMetadata.map(b => b.id),
                });
              } else {
                console.log('No bookings found via metadata either');
              }
            }
          }

          if (!bookingsToUpdate || bookingsToUpdate.length === 0) {
            console.warn('No bookings found for payment reference:', {
              reference,
              metadata,
              transactionId: verification.data.id,
            });
          }

          if (bookingsToUpdate && bookingsToUpdate.length > 0) {
            // Filter bookings that need updating (pending or missing transaction_id)
            const bookingsNeedingUpdate = bookingsToUpdate.filter(
              booking => booking.payment_status === 'pending' || !booking.paystack_transaction_id
            );

            if (bookingsNeedingUpdate.length > 0) {
              const bookingIds = bookingsNeedingUpdate.map(b => b.id);
              
              // Update all bookings that need updating
              const { error: updateError, data: updatedBookings } = await supabase
                .from('bookings')
                .update({
                  payment_status: 'paid',
                  paystack_reference: verification.data.reference,
                  paystack_transaction_id: verification.data.id.toString(),
                  amount_paid: paidAmount, // Total amount paid (will be same for all in a series)
                  status: 'confirmed',
                  updated_at: new Date().toISOString(),
                })
                .in('id', bookingIds)
                .select('id, paystack_transaction_id');

              if (updateError) {
                console.error('Error updating bookings after payment:', updateError);
                console.error('Update details:', {
                  reference,
                  transactionId: verification.data.id,
                  bookingIds,
                  error: updateError.message,
                });
                // Don't fail the webhook, return success so Paystack doesn't retry
              } else {
                console.log('Successfully updated bookings:', {
                  count: updatedBookings?.length || 0,
                  bookingIds,
                  transactionId: verification.data.id.toString(),
                  reference,
                });
              }
            } else {
              console.log('All bookings already processed:', {
                reference,
                transactionId: verification.data.id,
                totalBookings: bookingsToUpdate.length,
              });
            }
          }

          // Get all bookings with this reference (including already paid ones) for email sending
          const { data: allBookings } = await supabase
            .from('bookings')
            .select('*')
            .eq('paystack_reference', reference)
            .eq('payment_status', 'paid');

          if (allBookings && allBookings.length > 0) {
              // Increment discount code usage count if a discount code was used
              // Only increment once per booking series (use the first booking's discount code)
              const firstBooking = allBookings[0];
              if (firstBooking.discount_code && firstBooking.discount_code.trim()) {
                try {
                  const discountCode = firstBooking.discount_code.trim().toUpperCase();
                  
                  // Try using RPC function first (more atomic)
                  const { error: rpcError } = await supabase.rpc('increment_discount_code_usage', {
                    code_input: discountCode,
                  });

                  // If RPC function doesn't exist, fall back to manual update
                  if (rpcError) {
                    console.warn('RPC function not available, using manual update:', rpcError.message);
                    
                    // Get current used_count
                    const { data: discountCodeData, error: fetchError } = await supabase
                      .from('discount_codes')
                      .select('used_count')
                      .eq('code', discountCode)
                      .eq('is_active', true)
                      .single();

                    if (!fetchError && discountCodeData) {
                      // Increment the count
                      const { error: incrementError } = await supabase
                        .from('discount_codes')
                        .update({
                          used_count: (discountCodeData.used_count || 0) + 1,
                        })
                        .eq('code', discountCode)
                        .eq('is_active', true);

                      if (incrementError) {
                        console.error('Error incrementing discount code usage:', incrementError);
                        // Don't fail the webhook if discount increment fails
                      }
                    } else if (fetchError) {
                      console.warn('Discount code not found or inactive:', discountCode, fetchError.message);
                    }
                  }
                } catch (discountError) {
                  console.error('Error incrementing discount code usage:', discountError);
                  // Don't fail the webhook if discount increment fails
                }
              }

              // Process referral rewards for bookings with referral codes
              // Process each booking individually to handle multiple referrals
              for (const booking of allBookings) {
                if (booking.referral_code && booking.referral_code.trim() && booking.customer_email) {
                  try {
                    const referralCode = booking.referral_code.trim().toUpperCase();
                    
                    // Get the referrer's email from the referral code
                    const { data: referrerProfile, error: referrerError } = await supabase
                      .from('profiles')
                      .select('email')
                      .eq('referral_code', referralCode)
                      .maybeSingle();

                    if (referrerError) {
                      console.error('Error finding referrer profile:', referrerError);
                      continue;
                    }

                    if (!referrerProfile || !referrerProfile.email) {
                      console.warn(`Referrer not found for referral code: ${referralCode}`);
                      continue;
                    }

                    const referrerEmail = referrerProfile.email;
                    const referredEmail = booking.customer_email;

                    // Skip if referrer is referring themselves
                    if (referrerEmail.toLowerCase() === referredEmail.toLowerCase()) {
                      console.log('Skipping self-referral:', referrerEmail);
                      continue;
                    }

                    // Check if referral record already exists
                    let { data: existingReferral, error: referralCheckError } = await supabase
                      .from('referrals')
                      .select('id, status, referrer_reward_status, referred_booking_id')
                      .eq('referral_code', referralCode)
                      .eq('referred_email', referredEmail)
                      .maybeSingle();

                    if (referralCheckError) {
                      console.error('Error checking existing referral:', referralCheckError);
                      continue;
                    }

                    // Create referral record if it doesn't exist
                    if (!existingReferral) {
                      const { data: newReferral, error: createReferralError } = await supabase
                        .from('referrals')
                        .insert({
                          referrer_email: referrerEmail,
                          referred_email: referredEmail,
                          referral_code: referralCode,
                          status: 'pending',
                          referred_booking_id: booking.id,
                          referrer_reward_amount: 150.00,
                          referrer_reward_status: 'pending',
                        })
                        .select('id, status, referrer_reward_status, referred_booking_id')
                        .single();

                      if (createReferralError) {
                        console.error('Error creating referral record:', createReferralError);
                        continue;
                      }
                      existingReferral = newReferral;
                    } else {
                      // Update existing referral record with booking ID if not set
                      if (!existingReferral.referred_booking_id || existingReferral.status === 'pending') {
                        await supabase
                          .from('referrals')
                          .update({
                            referred_booking_id: booking.id,
                            status: 'completed',
                            updated_at: new Date().toISOString(),
                          })
                          .eq('id', existingReferral.id);
                      }
                    }

                    // Process reward if not already credited
                    if (existingReferral && existingReferral.referrer_reward_status === 'pending') {
                      // Get or create referrer's profile
                      let { data: referrerProfileFull, error: profileError } = await supabase
                        .from('profiles')
                        .select('id, credit_balance')
                        .eq('email', referrerEmail)
                        .maybeSingle();

                      if (profileError) {
                        console.error('Error fetching referrer profile:', profileError);
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
                          description: `Referral reward for ${referredEmail}`,
                          metadata: {
                            referral_code: referralCode,
                            referred_email: referredEmail,
                            booking_id: booking.id,
                          },
                          payment_status: 'completed',
                        });

                      if (transactionError) {
                        console.error('Error creating credit transaction:', transactionError);
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
                      } else {
                        console.log('Successfully processed referral reward:', {
                          referrerEmail,
                          referredEmail,
                          referralCode,
                          rewardAmount,
                          bookingId: booking.id,
                        });
                      }
                    }
                  } catch (referralError) {
                    console.error('Error processing referral reward:', referralError);
                    // Don't fail the webhook if referral processing fails
                  }
                }
              }

              // Import and send email for each booking
              const { sendBookingConfirmationEmail } = await import('../../../booking/book/send-confirmation-email');
              
              // Send emails for all bookings (in parallel, but don't fail if one fails)
              await Promise.allSettled(
                allBookings.map((booking) =>
                  sendBookingConfirmationEmail(booking as any).catch((emailError) => {
                    console.error(`Error sending confirmation email for booking ${booking.id}:`, emailError);
                  })
                )
              );
          }
        }
      }

      // Always return 200 to acknowledge receipt
      return NextResponse.json({ received: true });
    }
  } catch (error) {
    console.error('Error processing Paystack webhook:', error);
    // Return 200 to prevent Paystack from retrying
    return NextResponse.json(
      { error: 'Webhook processing failed', received: true },
      { status: 200 }
    );
  }
}

