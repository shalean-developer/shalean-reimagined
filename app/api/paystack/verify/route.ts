import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/paystack/client';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const reference = searchParams.get('reference');

  if (!reference) {
    return NextResponse.json(
      { error: 'Missing payment reference' },
      { status: 400 }
    );
  }

  try {
    // Verify the payment with Paystack
    const verification = await verifyPayment(reference);

    // Log verification result for debugging
    console.log('Payment verification result:', {
      reference,
      status: verification.status,
      paymentStatus: verification.data?.status,
      transactionId: verification.data?.id,
    });

    // Return the verification response
    return NextResponse.json(verification);
  } catch (error) {
    console.error('Error verifying payment:', {
      reference,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to verify payment',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

