import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/paystack/client';
import { createClient } from '@/lib/supabase/server';

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

    // Check if this is a credit purchase transaction
    const metadata = (verification.data.metadata || {}) as any;
    const isCreditPurchase = metadata.transaction_type === 'credit_purchase' || 
                            reference?.startsWith('CREDIT_');

    if (!isCreditPurchase) {
      return NextResponse.json(
        { error: 'This is not a credit purchase transaction' },
        { status: 400 }
      );
    }

    // Find the credit transaction
    const { data: creditTransaction } = await supabase
      .from('credit_transactions')
      .select('id, email, amount, payment_status, profile_id')
      .eq('paystack_reference', reference)
      .maybeSingle();

    if (!creditTransaction) {
      return NextResponse.json(
        { error: 'Credit transaction not found' },
        { status: 404 }
      );
    }

    // If already completed, return success
    if (creditTransaction.payment_status === 'completed') {
      // Get current balance
      const { data: profile } = await supabase
        .from('profiles')
        .select('credit_balance')
        .eq('email', creditTransaction.email)
        .maybeSingle();

      return NextResponse.json({
        success: true,
        alreadyCredited: true,
        balance: profile?.credit_balance || 0,
        message: 'Credits already allocated',
      });
    }

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
        return NextResponse.json(
          { error: 'Failed to create profile' },
          { status: 500 }
        );
      }
      profile = newProfile;
    }

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

    if (balanceError) {
      console.error('Error updating credit balance:', balanceError);
      return NextResponse.json(
        { error: 'Failed to update credit balance', details: balanceError.message },
        { status: 500 }
      );
    }

    // Update the credit transaction record
    const { error: transactionError } = await supabase
      .from('credit_transactions')
      .update({
        payment_status: 'completed',
        paystack_transaction_id: verification.data.id.toString(),
        balance_before: balanceBefore,
        balance_after: balanceAfter,
        updated_at: new Date().toISOString(),
      })
      .eq('id', creditTransaction.id);

    if (transactionError) {
      console.error('Error updating credit transaction:', transactionError);
      // Balance was already updated, so we still return success but log the error
    }

    return NextResponse.json({
      success: true,
      alreadyCredited: false,
      balance: balanceAfter,
      amount: paidAmount,
      message: 'Credits successfully allocated',
    });
  } catch (error) {
    console.error('Error verifying credit purchase:', error);
    return NextResponse.json(
      {
        error: 'Failed to verify credit purchase',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

