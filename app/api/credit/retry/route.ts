import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/paystack/client';
import { createClient } from '@/lib/supabase/server';

/**
 * This endpoint can be used to manually retry credit allocation for a payment.
 * Useful if the webhook failed or was missed.
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userEmail = user.email;
    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email not found' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { reference } = body;
    
    // Use authenticated user's email, ignore email from request body for security
    const email = userEmail;

    let creditTransactions = [];

    if (reference) {
      // Find credit transactions matching the reference for the authenticated user
      const query = supabase
        .from('credit_transactions')
        .select('id, email, amount, payment_status, paystack_reference, profile_id')
        .eq('paystack_reference', reference)
        .eq('email', email)
        .in('payment_status', ['pending', 'failed']);

      const { data: transactionsByReference } = await query;
      if (transactionsByReference && transactionsByReference.length > 0) {
        creditTransactions = transactionsByReference;
      }
    }

    // If no transactions found by reference, search by email for authenticated user
    if (creditTransactions.length === 0) {
      const { data: transactionsByEmail } = await supabase
        .from('credit_transactions')
        .select('id, email, amount, payment_status, paystack_reference, profile_id')
        .eq('email', email)
        .eq('transaction_type', 'purchase')
        .in('payment_status', ['pending', 'failed'])
        .order('created_at', { ascending: false })
        .limit(10); // Limit to 10 most recent pending transactions

      if (transactionsByEmail && transactionsByEmail.length > 0) {
        creditTransactions = transactionsByEmail;
      }
    }

    if (creditTransactions.length === 0) {
      return NextResponse.json(
        { 
          success: false,
          error: 'No pending credit transactions found',
          message: reference 
            ? 'No pending credit transaction found with this reference' 
            : 'No pending credit purchases found for this email'
        },
        { status: 404 }
      );
    }

    const results = [];

    for (const creditTransaction of creditTransactions) {
      // Verify the payment with Paystack
      const verification = await verifyPayment(creditTransaction.paystack_reference);

      if (!verification.status || verification.data.status !== 'success') {
        results.push({
          reference: creditTransaction.paystack_reference,
          success: false,
          error: 'Payment not successful or not verified',
        });
        continue;
      }

      const paidAmount = verification.data.amount / 100;

      // Get or create profile
      let { data: profile } = await supabase
        .from('profiles')
        .select('id, credit_balance')
        .eq('email', creditTransaction.email)
        .maybeSingle();

      if (!profile) {
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
          results.push({
            reference: creditTransaction.paystack_reference,
            success: false,
            error: 'Failed to create profile',
          });
          continue;
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
        results.push({
          reference: creditTransaction.paystack_reference,
          success: false,
          error: balanceError.message,
        });
        continue;
      }

      // Update the credit transaction
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

      results.push({
        reference: creditTransaction.paystack_reference,
        success: !transactionError,
        amount: paidAmount,
        balance: balanceAfter,
        error: transactionError?.message,
      });
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      success: successCount > 0,
      results,
      message: `Successfully processed ${successCount} of ${results.length} transaction(s)`,
    });
  } catch (error) {
    console.error('Error retrying credit allocation:', error);
    return NextResponse.json(
      {
        error: 'Failed to retry credit allocation',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

