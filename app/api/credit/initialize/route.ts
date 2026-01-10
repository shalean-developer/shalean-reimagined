import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { initializePayment } from '@/lib/paystack/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, amount, paymentMethod } = body;

    // Validate input
    if (!email || !amount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields: email, amount, paymentMethod' },
        { status: 400 }
      );
    }

    if (amount < 20 || amount > 5000) {
      return NextResponse.json(
        { error: 'Amount must be between R20 and R5000' },
        { status: 400 }
      );
    }

    // Generate a unique reference for this credit purchase
    const reference = `CREDIT_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Create a pending credit transaction
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

    // Create pending credit transaction
    const { error: transactionError } = await supabase
      .from('credit_transactions')
      .insert({
        profile_id: profile.id,
        email,
        transaction_type: 'purchase',
        amount,
        balance_before: profile.credit_balance || 0,
        balance_after: profile.credit_balance || 0, // Won't update until payment succeeds
        payment_method: paymentMethod,
        paystack_reference: reference,
        payment_status: 'pending',
        description: `Purchase of R${amount} ShaleanCred`,
      });

    if (transactionError) {
      console.error('Error creating credit transaction:', transactionError);
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
        transaction_type: 'credit_purchase',
        payment_method: paymentMethod,
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
    console.error('Error initializing credit purchase:', error);
    return NextResponse.json(
      { 
        error: 'Failed to initialize payment',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

