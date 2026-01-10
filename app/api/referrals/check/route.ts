import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/referrals/check
 * Check referral status and reward information
 * 
 * Query params: referralCode, referredEmail
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    
    const referralCode = searchParams.get('referralCode');
    const referredEmail = searchParams.get('referredEmail');

    if (!referralCode || !referredEmail) {
      return NextResponse.json(
        { error: 'referralCode and referredEmail are required' },
        { status: 400 }
      );
    }

    const code = referralCode.trim().toUpperCase();
    const email = referredEmail.trim().toLowerCase();

    // Get referrer information
    const { data: referrerProfile, error: referrerError } = await supabase
      .from('profiles')
      .select('email, credit_balance, first_name, last_name')
      .eq('referral_code', code)
      .maybeSingle();

    if (referrerError) {
      return NextResponse.json(
        { error: 'Failed to find referrer', details: referrerError.message },
        { status: 500 }
      );
    }

    if (!referrerProfile) {
      return NextResponse.json(
        { error: `No referrer found for code: ${code}` },
        { status: 404 }
      );
    }

    // Find bookings
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('id, booking_number, customer_email, referral_code, payment_status, total_amount, paystack_reference, created_at')
      .eq('customer_email', email)
      .eq('referral_code', code)
      .order('created_at', { ascending: false });

    if (bookingsError) {
      return NextResponse.json(
        { error: 'Failed to find bookings', details: bookingsError.message },
        { status: 500 }
      );
    }

    // Find referral records
    const { data: referrals, error: referralsError } = await supabase
      .from('referrals')
      .select('id, referrer_email, referred_email, referral_code, status, referrer_reward_amount, referrer_reward_status, referred_booking_id, created_at, updated_at')
      .eq('referral_code', code)
      .eq('referred_email', email)
      .order('created_at', { ascending: false });

    if (referralsError) {
      return NextResponse.json(
        { error: 'Failed to find referrals', details: referralsError.message },
        { status: 500 }
      );
    }

    // Find credit transactions for referral rewards
    const { data: transactions, error: transactionsError } = await supabase
      .from('credit_transactions')
      .select('id, email, amount, transaction_type, balance_before, balance_after, description, metadata, created_at')
      .eq('email', referrerProfile.email)
      .eq('transaction_type', 'referral_reward')
      .order('created_at', { ascending: false });

    if (transactionsError) {
      console.error('Error fetching transactions:', transactionsError);
    }

    // Filter transactions related to this referral
    const relevantTransactions = transactions?.filter(tx => {
      const metadata = tx.metadata as any;
      return metadata?.referral_code === code && metadata?.referred_email === email;
    }) || [];

    return NextResponse.json({
      success: true,
      referrer: {
        email: referrerProfile.email,
        name: `${referrerProfile.first_name} ${referrerProfile.last_name}`.trim() || referrerProfile.email,
        creditBalance: referrerProfile.credit_balance || 0,
        referralCode: code,
      },
      referredEmail: email,
      bookings: bookings || [],
      referrals: referrals || [],
      rewardTransactions: relevantTransactions,
      summary: {
        totalBookings: bookings?.length || 0,
        paidBookings: bookings?.filter(b => b.payment_status === 'paid').length || 0,
        totalReferrals: referrals?.length || 0,
        creditedReferrals: referrals?.filter(r => r.referrer_reward_status === 'credited').length || 0,
        totalRewardsCredited: relevantTransactions.reduce((sum, tx) => sum + (tx.amount || 0), 0),
      },
    });
  } catch (error) {
    console.error('Error checking referral:', error);
    return NextResponse.json(
      {
        error: 'Failed to check referral',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

