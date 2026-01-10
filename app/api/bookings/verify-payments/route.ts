import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { verifyPayment } from '@/lib/paystack/client';

/**
 * POST /api/bookings/verify-payments
 * Retroactively verify and update payment status for bookings
 * 
 * This endpoint checks Paystack for successful payments and updates booking status
 * Can be used to fix bookings that have payment_status='pending' but were actually paid
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const body = await request.json();
    
    const { 
      bookingIds, // Optional: specific booking IDs to check
      email, // Optional: check all bookings for this email
      referralCode, // Optional: check bookings with this referral code
      referredEmail, // Optional: check bookings for this referred email
      paystackReference, // Optional: check booking(s) with this Paystack reference
    } = body;

    // Build query to find bookings to verify
    let query = supabase
      .from('bookings')
      .select('id, paystack_reference, customer_email, payment_status, referral_code, total_amount')
      .eq('payment_status', 'pending')
      .not('paystack_reference', 'is', null);

    if (paystackReference) {
      // Query by Paystack reference (most specific)
      query = query.eq('paystack_reference', paystackReference);
    } else if (bookingIds && Array.isArray(bookingIds) && bookingIds.length > 0) {
      query = query.in('id', bookingIds);
    } else if (email) {
      query = query.eq('customer_email', email);
    } else if (referralCode && referredEmail) {
      query = query
        .eq('referral_code', referralCode)
        .eq('customer_email', referredEmail);
    }

    const { data: bookings, error: fetchError } = await query;

    if (fetchError) {
      console.error('Error fetching bookings:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch bookings', details: fetchError.message },
        { status: 500 }
      );
    }

    if (!bookings || bookings.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No pending bookings with Paystack references found',
        updated: [],
      });
    }

    const results = [];
    const updatedBookings = [];

    // Verify each booking's payment status with Paystack
    for (const booking of bookings) {
      if (!booking.paystack_reference) {
        results.push({
          bookingId: booking.id,
          success: false,
          error: 'No Paystack reference found',
        });
        continue;
      }

      try {
        // Verify payment with Paystack
        const verification = await verifyPayment(booking.paystack_reference);

        if (verification.status && verification.data.status === 'success') {
          const paidAmount = verification.data.amount / 100; // Convert from cents to ZAR

          // Update booking payment status
          const { error: updateError } = await supabase
            .from('bookings')
            .update({
              payment_status: 'paid',
              paystack_transaction_id: verification.data.id.toString(),
              amount_paid: paidAmount,
              status: 'confirmed',
              updated_at: new Date().toISOString(),
            })
            .eq('id', booking.id);

          if (updateError) {
            console.error(`Error updating booking ${booking.id}:`, updateError);
            results.push({
              bookingId: booking.id,
              success: false,
              error: 'Failed to update booking',
            });
            continue;
          }

          updatedBookings.push(booking.id);
          results.push({
            bookingId: booking.id,
            success: true,
            paidAmount,
            paystackReference: booking.paystack_reference,
          });
        } else {
          results.push({
            bookingId: booking.id,
            success: false,
            error: `Payment not successful. Status: ${verification.data?.status || 'unknown'}`,
            paystackStatus: verification.data?.status,
          });
        }
      } catch (error) {
        console.error(`Error verifying payment for booking ${booking.id}:`, error);
        results.push({
          bookingId: booking.id,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    // If we updated bookings and there's a referral code, trigger referral processing
    if (updatedBookings.length > 0 && referralCode && referredEmail) {
      try {
        // Trigger referral processing for the updated bookings
        const referralResponse = await fetch(
          new URL('/api/referrals/process', request.url),
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              referralCode,
              referredEmail,
            }),
          }
        );

        if (referralResponse.ok) {
          const referralResult = await referralResponse.json();
          return NextResponse.json({
            success: true,
            updatedBookings: updatedBookings.length,
            results,
            referralProcessed: referralResult.success,
            referralDetails: referralResult,
          });
        }
      } catch (referralError) {
        console.error('Error processing referral:', referralError);
        // Continue even if referral processing fails
      }
    }

    return NextResponse.json({
      success: true,
      updatedBookings: updatedBookings.length,
      results,
    });
  } catch (error) {
    console.error('Error verifying payments:', error);
    return NextResponse.json(
      {
        error: 'Failed to verify payments',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

