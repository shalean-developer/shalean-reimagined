import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/paystack/client';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const reference = searchParams.get('reference');
  const bookingId = searchParams.get('booking_id');

  if (!reference) {
    return NextResponse.redirect(new URL('/booking/details?error=missing_reference', request.url));
  }

  try {
    // Verify the payment
    const verification = await verifyPayment(reference);

    if (verification.status && verification.data.status === 'success') {
      // Check transaction type
      const metadata = verification.data.metadata || {};
      const isCreditPurchase = metadata.transaction_type === 'credit_purchase' || 
                              reference?.startsWith('CREDIT_');
      const isVoucherPurchase = metadata.transaction_type === 'voucher_purchase' || 
                               reference?.startsWith('VOUCHER_');

      if (isVoucherPurchase) {
        // For voucher purchases, redirect to voucher success page
        return NextResponse.redirect(
          new URL(`/voucher/success?reference=${reference}`, request.url)
        );
      }

      if (isCreditPurchase) {
        // For credit purchases, redirect to payment success page which will handle crediting
        return NextResponse.redirect(
          new URL(`/payment/success?reference=${reference}`, request.url)
        );
      }

      // Payment was successful (booking payment)
      // The webhook should have already updated the booking, but we'll update it here as a fallback
      const supabase = await createClient();
      const paidAmount = verification.data.amount / 100; // Convert from cents to ZAR
      
      // Find bookings by reference (check both pending and paid to handle webhook retries)
      const { data: bookingsToUpdate } = await supabase
        .from('bookings')
        .select('id, payment_status, paystack_transaction_id')
        .eq('paystack_reference', reference)
        .in('payment_status', ['pending', 'paid']);

      if (bookingsToUpdate && bookingsToUpdate.length > 0) {
        // Filter bookings that need updating (pending or missing transaction_id)
        const bookingsNeedingUpdate = bookingsToUpdate.filter(
          booking => booking.payment_status === 'pending' || !booking.paystack_transaction_id
        );

        if (bookingsNeedingUpdate.length > 0) {
          const bookingIds = bookingsNeedingUpdate.map(b => b.id);
          
          // Update all bookings that need updating (fallback if webhook missed them)
          const { error: updateError } = await supabase
            .from('bookings')
            .update({
              payment_status: 'paid',
              paystack_reference: verification.data.reference,
              paystack_transaction_id: verification.data.id.toString(),
              amount_paid: paidAmount,
              status: 'confirmed',
              updated_at: new Date().toISOString(),
            })
            .in('id', bookingIds);

          if (updateError) {
            console.error('Error updating bookings in callback handler:', updateError);
          } else {
            console.log('Successfully updated bookings in callback handler (webhook fallback):', {
              count: bookingsNeedingUpdate.length,
              bookingIds,
              reference,
            });
          }
        }
      }

      // If bookingId is provided, redirect to confirmation page
      if (bookingId) {
        return NextResponse.redirect(
          new URL(`/booking/confirmation/${bookingId}?payment=success`, request.url)
        );
      }

      // Try to find booking by reference
      const { data: booking } = await supabase
        .from('bookings')
        .select('id')
        .eq('paystack_reference', reference)
        .single();

      if (booking) {
        return NextResponse.redirect(
          new URL(`/booking/confirmation/${booking.id}?payment=success`, request.url)
        );
      }

      // If no booking found, redirect to payment success page
      return NextResponse.redirect(
        new URL(`/payment/success?reference=${reference}`, request.url)
      );
    }

    // Payment failed or was cancelled
    return NextResponse.redirect(
      new URL(`/booking/details?error=payment_failed&reference=${reference}`, request.url)
    );
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.redirect(
      new URL('/booking/details?error=verification_failed', request.url)
    );
  }
}

