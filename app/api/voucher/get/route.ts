import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { generateVoucherCode } from '@/lib/utils/voucher';
import { verifyPayment } from '@/lib/paystack/client';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const reference = searchParams.get('reference');

    if (!reference) {
      return NextResponse.json(
        { error: 'Missing payment reference' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Find the transaction (check both pending and completed)
    const { data: transaction } = await supabase
      .from('credit_transactions')
      .select('id, metadata, amount, created_at, payment_status')
      .eq('paystack_reference', reference)
      .eq('transaction_type', 'voucher_purchase')
      .maybeSingle();

    if (!transaction) {
      return NextResponse.json(
        { error: 'Voucher transaction not found' },
        { status: 404 }
      );
    }

    // Try to get voucher code from metadata first
    const metadata = transaction.metadata || {};
    let voucherCode = metadata.voucher_code;
    const voucherId = metadata.voucher_id;
    let voucher = null;

    if (voucherCode) {
      // Get voucher details using code from metadata
      const { data: foundVoucher } = await supabase
        .from('vouchers')
        .select('id, code, amount, status')
        .eq('code', voucherCode)
        .maybeSingle();
      
      if (foundVoucher) {
        voucher = foundVoucher;
      }
    }

    // If voucher not found via metadata, try to find it by matching amount and creation time
    if (!voucher) {
      // Get voucher by matching amount and recent creation time (within last 10 minutes)
      const transactionTime = new Date(transaction.created_at);
      const tenMinutesAgo = new Date(transactionTime.getTime() - 10 * 60 * 1000);
      
      const { data: vouchers } = await supabase
        .from('vouchers')
        .select('id, code, amount, status, created_at')
        .eq('amount', transaction.amount)
        .gte('created_at', tenMinutesAgo.toISOString())
        .order('created_at', { ascending: false })
        .limit(5);

      if (vouchers && vouchers.length > 0) {
        // Find the voucher that was created closest to the transaction time
        const matchingVoucher = vouchers.find(v => {
          const voucherTime = new Date(v.created_at);
          const timeDiff = Math.abs(voucherTime.getTime() - transactionTime.getTime());
          return timeDiff < 5 * 60 * 1000; // Within 5 minutes
        });

        if (matchingVoucher) {
          voucher = matchingVoucher;
          voucherCode = matchingVoucher.code;
          
          // Update transaction metadata with voucher info for future lookups
          await supabase
            .from('credit_transactions')
            .update({
              metadata: {
                ...metadata,
                voucher_id: matchingVoucher.id,
                voucher_code: matchingVoucher.code,
              },
            })
            .eq('id', transaction.id);
        } else if (vouchers.length > 0) {
          // Use the most recent one as fallback
          voucher = vouchers[0];
          voucherCode = vouchers[0].code;
        }
      }
    }

    // If voucher still doesn't exist, check payment status and create voucher if payment succeeded
    // This handles cases where the webhook hasn't run yet (e.g., local development)
    if (!voucher) {
      let paymentSucceeded = transaction.payment_status === 'completed';
      
      // If transaction is still pending, verify payment with Paystack
      if (transaction.payment_status === 'pending') {
        try {
          const verification = await verifyPayment(reference);
          if (verification.status && verification.data.status === 'success') {
            paymentSucceeded = true;
            // Update transaction status
            await supabase
              .from('credit_transactions')
              .update({
                payment_status: 'completed',
                paystack_transaction_id: verification.data.id.toString(),
                updated_at: new Date().toISOString(),
              })
              .eq('id', transaction.id);
          }
        } catch (verifyError) {
          console.error('Error verifying payment:', verifyError);
        }
      }
      
      // Create voucher if payment succeeded
      if (paymentSucceeded) {
        try {
          // Generate unique voucher code
          let newVoucherCode = generateVoucherCode();
          let attempts = 0;
          const maxAttempts = 10;

          // Check for uniqueness
          while (attempts < maxAttempts) {
            const { data: existingVoucher } = await supabase
              .from('vouchers')
              .select('id')
              .eq('code', newVoucherCode)
              .maybeSingle();

            if (!existingVoucher) {
              break; // Code is unique
            }
            newVoucherCode = generateVoucherCode();
            attempts++;
          }

          // If still not unique after max attempts, append timestamp
          if (attempts >= maxAttempts) {
            newVoucherCode = generateVoucherCode() + Date.now().toString(36).substring(0, 4).toUpperCase();
          }

          // Set valid dates (no expiry - set valid_until far in the future)
          const validFrom = new Date();
          const validUntil = new Date();
          validUntil.setFullYear(validUntil.getFullYear() + 100); // 100 years from now

          // Create voucher
          const { data: newVoucher, error: voucherError } = await supabase
            .from('vouchers')
            .insert({
              code: newVoucherCode,
              amount: transaction.amount,
              status: 'active',
              valid_from: validFrom.toISOString().split('T')[0],
              valid_until: validUntil.toISOString().split('T')[0],
            })
            .select('id, code, amount, status')
            .single();

          if (voucherError || !newVoucher) {
            console.error('Error creating voucher fallback:', voucherError);
          } else {
            // Update transaction metadata with voucher info
            await supabase
              .from('credit_transactions')
              .update({
                metadata: {
                  ...metadata,
                  voucher_id: newVoucher.id,
                  voucher_code: newVoucher.code,
                },
              })
              .eq('id', transaction.id);

            voucher = newVoucher;
            voucherCode = newVoucher.code;
            console.log('Created voucher as fallback:', {
              reference,
              voucherCode: newVoucher.code,
              amount: transaction.amount,
            });
          }
        } catch (createError) {
          console.error('Error in voucher creation fallback:', createError);
        }
      }
    }

    if (!voucher || !voucherCode) {
      return NextResponse.json(
        { error: 'Voucher not found. Please wait a moment and try again, or contact support.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      voucher: {
        code: voucher.code,
        amount: voucher.amount,
        status: voucher.status,
        voucherType: metadata.voucher_type || null,
      },
    });
  } catch (error) {
    console.error('Error fetching voucher:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch voucher',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

