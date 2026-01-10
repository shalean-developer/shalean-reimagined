import { NextRequest, NextResponse } from 'next/server';
import { initializePayment } from '@/lib/paystack/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, amount, reference, metadata } = body;

    // Validate input
    if (!email || !amount || !reference) {
      return NextResponse.json(
        { error: 'Missing required fields: email, amount, reference' },
        { status: 400 }
      );
    }

    if (amount <= 0) {
      return NextResponse.json(
        { error: 'Amount must be greater than 0' },
        { status: 400 }
      );
    }

    // Initialize payment with Paystack
    const response = await initializePayment(email, amount, reference, metadata);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error initializing Paystack payment:', error);
    return NextResponse.json(
      { 
        error: 'Failed to initialize payment',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

