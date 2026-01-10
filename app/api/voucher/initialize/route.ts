import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { initializePayment } from '@/lib/paystack/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, amount, paymentMethod, voucherType } = body;

    // Validate input
    if (!email || !amount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields: email, amount, paymentMethod' },
        { status: 400 }
      );
    }

    if (amount < 20 || amount > 10000) {
      return NextResponse.json(
        { error: 'Amount must be between R20 and R10000' },
        { status: 400 }
      );
    }

    // Generate a unique reference for this voucher purchase
    const reference = `VOUCHER_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Create a pending transaction record
    const supabase = await createClient();
    
    // Get or create profile
    let { data: profile } = await supabase
      .from('profiles')
      .select('id, credit_balance')
      .eq('email', email)
      .maybeSingle();

    if (!profile) {
      // Create a basic profile if it doesn't exist
      const { data: newProfile, error: createError } = await supabase
        .from('profiles')
        .insert({
          email,
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

    // Create pending transaction record in credit_transactions (we can reuse this table)
    // We'll use transaction_type 'voucher_purchase' to distinguish it
    const { error: transactionError } = await supabase
      .from('credit_transactions')
      .insert({
        profile_id: profile.id,
        email,
        transaction_type: 'voucher_purchase',
        amount,
        balance_before: profile.credit_balance || 0,
        balance_after: profile.credit_balance || 0, // Won't update balance for vouchers
        payment_method: paymentMethod,
        paystack_reference: reference,
        payment_status: 'pending',
        description: `Purchase of R${amount} Gift Voucher${voucherType ? ` (${voucherType})` : ''}`,
        metadata: {
          voucher_type: voucherType || null,
          is_voucher_purchase: true,
        },
      });

    if (transactionError) {
      console.error('Error creating voucher transaction:', transactionError);
      return NextResponse.json(
        { error: 'Failed to create transaction record' },
        { status: 500 }
      );
    }

    // Initialize Paystack payment
    const paymentResponse = await initializePayment(
      email,
      amount,
      reference,
      {
        transaction_type: 'voucher_purchase',
        payment_method: paymentMethod,
        voucher_type: voucherType || null,
      }
    );

    if (!paymentResponse.status) {
      return NextResponse.json(
        { error: paymentResponse.message || 'Failed to initialize payment' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      authorizationUrl: paymentResponse.data.authorization_url,
      reference: paymentResponse.data.reference,
    });
  } catch (error) {
    console.error('Error initializing voucher purchase:', error);
    return NextResponse.json(
      { 
        error: 'Failed to initialize payment',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

