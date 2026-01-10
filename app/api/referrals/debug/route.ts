import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/referrals/debug
 * Debug referral issues for a specific referred email
 * 
 * Query params: referredEmail, referralCode (optional)
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    
    const referredEmail = searchParams.get('referredEmail');
    const referralCode = searchParams.get('referralCode');

    if (!referredEmail) {
      return NextResponse.json(
        { error: 'referredEmail is required' },
        { status: 400 }
      );
    }

    const email = referredEmail.trim().toLowerCase();

    // Find all bookings for this email
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('id, booking_number, customer_email, referral_code, payment_status, status, paystack_reference, paystack_transaction_id, total_amount, amount_paid, created_at')
      .eq('customer_email', email)
      .order('created_at', { ascending: false });

    if (bookingsError) {
      return NextResponse.json(
        { error: 'Failed to find bookings', details: bookingsError.message },
        { status: 500 }
      );
    }

    // Filter by referral code if provided
    let relevantBookings = bookings || [];
    if (referralCode) {
      relevantBookings = relevantBookings.filter(b => 
        b.referral_code?.toUpperCase() === referralCode.toUpperCase()
      );
    }

    // Find referral records
    let referralQuery = supabase
      .from('referrals')
      .select('*')
      .eq('referred_email', email);

    if (referralCode) {
      referralQuery = referralQuery.eq('referral_code', referralCode.toUpperCase());
    }

    const { data: referrals, error: referralsError } = await referralQuery.order('created_at', { ascending: false });

    if (referralsError) {
      console.error('Error fetching referrals:', referralsError);
    }

    // Find referrer information from bookings with referral codes
    const referrerCodes = new Set<string>();
    relevantBookings.forEach(booking => {
      if (booking.referral_code) {
        referrerCodes.add(booking.referral_code.toUpperCase());
      }
    });

    const referrers = [];
    for (const code of referrerCodes) {
      const { data: referrerProfile } = await supabase
        .from('profiles')
        .select('email, credit_balance, first_name, last_name, referral_code')
        .eq('referral_code', code)
        .maybeSingle();

      if (referrerProfile) {
        // Get credit transactions for this referrer related to this referral
        const { data: transactions } = await supabase
          .from('credit_transactions')
          .select('*')
          .eq('email', referrerProfile.email)
          .eq('transaction_type', 'referral_reward')
          .order('created_at', { ascending: false });

        const relevantTransactions = transactions?.filter(tx => {
          const metadata = tx.metadata as any;
          return metadata?.referred_email === email || 
                 (referralCode && metadata?.referral_code === referralCode.toUpperCase());
        }) || [];

        referrers.push({
          ...referrerProfile,
          referralCode: code,
          rewardTransactions: relevantTransactions,
        });
      }
    }

    return NextResponse.json({
      success: true,
      referredEmail: email,
      referralCode: referralCode || 'any',
      bookings: relevantBookings,
      referrals: referrals || [],
      referrers,
      analysis: {
        totalBookings: relevantBookings.length,
        paidBookings: relevantBookings.filter(b => b.payment_status === 'paid').length,
        bookingsWithReferralCode: relevantBookings.filter(b => b.referral_code).length,
        paidBookingsWithReferralCode: relevantBookings.filter(b => 
          b.payment_status === 'paid' && b.referral_code
        ).length,
        totalReferrals: referrals?.length || 0,
        completedReferrals: referrals?.filter(r => r.status === 'completed').length || 0,
        creditedReferrals: referrals?.filter(r => r.referrer_reward_status === 'credited').length || 0,
      },
    });
  } catch (error) {
    console.error('Error debugging referral:', error);
    return NextResponse.json(
      {
        error: 'Failed to debug referral',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

