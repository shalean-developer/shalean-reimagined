import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/paystack/client';
import { createClient } from '@/lib/supabase/server';

/**
 * POST /api/bookings/verify
 * Verify and update booking payment status by Paystack reference
 * Similar to /api/credit/verify but for bookings
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference } = body;

    if (!reference) {
      return NextResponse.json(
        { error: 'Missing payment reference' },
        { status: 400 }
      );
    }

    // Verify the payment with Paystack
    const verification = await verifyPayment(reference);

    if (!verification.status || verification.data.status !== 'success') {
      return NextResponse.json(
        { error: 'Payment not successful or not verified' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const paidAmount = verification.data.amount / 100; // Convert from kobo/cents to ZAR
    const metadata = verification.data.metadata || {};

    // Check if this is a booking payment (not credit or voucher)
    const isCreditPurchase = metadata.transaction_type === 'credit_purchase' || 
                            reference?.startsWith('CREDIT_');
    const isVoucherPurchase = metadata.transaction_type === 'voucher_purchase' || 
                             reference?.startsWith('VOUCHER_');

    if (isCreditPurchase || isVoucherPurchase) {
      return NextResponse.json(
        { error: 'This is not a booking payment transaction' },
        { status: 400 }
      );
    }

    // Find bookings by reference
    let { data: bookings, error: fetchError } = await supabase
      .from('bookings')
      .select('id, payment_status, paystack_transaction_id')
      .eq('paystack_reference', reference)
      .in('payment_status', ['pending', 'paid']);

    if (fetchError) {
      console.error('Error fetching bookings:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch bookings', details: fetchError.message },
        { status: 500 }
      );
    }

    if (!bookings || bookings.length === 0) {
      // Try to find by metadata booking_ids as fallback
      const bookingIds = metadata.booking_ids || (metadata.booking_id ? [metadata.booking_id] : []);
      
      if (bookingIds.length > 0) {
        const { data: bookingsByMetadata, error: metadataError } = await supabase
          .from('bookings')
          .select('id, payment_status, paystack_transaction_id')
          .in('id', bookingIds)
          .in('payment_status', ['pending', 'paid']);

        if (!metadataError && bookingsByMetadata && bookingsByMetadata.length > 0) {
          // Update these bookings with the reference
          const bookingIdsToUpdate = bookingsByMetadata.map(b => b.id);
          const { error: updateRefError } = await supabase
            .from('bookings')
            .update({ paystack_reference: reference })
            .in('id', bookingIdsToUpdate);

          if (!updateRefError) {
            // Retry the query
            const { data: retryBookings } = await supabase
              .from('bookings')
              .select('id, payment_status, paystack_transaction_id')
              .eq('paystack_reference', reference)
              .in('payment_status', ['pending', 'paid']);

            if (retryBookings && retryBookings.length > 0) {
              bookings = retryBookings;
            }
          }
        }
      }

      if (!bookings || bookings.length === 0) {
        return NextResponse.json(
          { error: 'No bookings found for this reference' },
          { status: 404 }
        );
      }
    }

    // Filter bookings that need updating
    const bookingsNeedingUpdate = bookings.filter(
      booking => booking.payment_status === 'pending' || !booking.paystack_transaction_id
    );

    if (bookingsNeedingUpdate.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'All bookings already verified',
        alreadyVerified: true,
        bookingIds: bookings.map(b => b.id),
      });
    }

    const bookingIds = bookingsNeedingUpdate.map(b => b.id);

    // Update all bookings that need updating
    const { error: updateError, data: updatedBookings } = await supabase
      .from('bookings')
      .update({
        payment_status: 'paid',
        paystack_reference: verification.data.reference,
        paystack_transaction_id: verification.data.id.toString(),
        amount_paid: paidAmount,
        status: 'confirmed',
        updated_at: new Date().toISOString(),
      })
      .in('id', bookingIds)
      .select('id, payment_status, paystack_transaction_id');

    if (updateError) {
      console.error('Error updating bookings:', updateError);
      return NextResponse.json(
        { error: 'Failed to update bookings', details: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Bookings verified and updated successfully',
      updatedCount: updatedBookings?.length || 0,
      bookingIds: updatedBookings?.map(b => b.id) || [],
      paidAmount,
      paystackReference: reference,
      paystackTransactionId: verification.data.id.toString(),
    });
  } catch (error) {
    console.error('Error verifying booking payment:', error);
    return NextResponse.json(
      {
        error: 'Failed to verify booking payment',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

