import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
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

    const email = user.email;
    if (!email) {
      return NextResponse.json(
        { error: 'User email not found' },
        { status: 400 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '25');

    // Calculate offset for pagination
    const offset = (page - 1) * limit;

    // Fetch transactions with pagination
    const { data: transactions, error: fetchError } = await supabase
      .from('credit_transactions')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (fetchError) {
      console.error('Error fetching transactions:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch transactions' },
        { status: 500 }
      );
    }

    // Get total count for pagination
    const { count, error: countError } = await supabase
      .from('credit_transactions')
      .select('*', { count: 'exact', head: true })
      .eq('email', email);

    if (countError) {
      console.error('Error counting transactions:', countError);
    }

    // Format transactions for display
    const formattedTransactions = (transactions || []).map((tx) => ({
      id: tx.id,
      date: tx.created_at,
      description: tx.description || getTransactionDescription(tx.transaction_type, tx.amount),
      amount: parseFloat(tx.amount.toString()),
      type: tx.transaction_type === 'purchase' || tx.transaction_type === 'referral_reward' ? 'credit' : 'debit',
      transactionType: tx.transaction_type,
      paymentStatus: tx.payment_status,
      balanceBefore: parseFloat(tx.balance_before?.toString() || '0'),
      balanceAfter: parseFloat(tx.balance_after?.toString() || '0'),
      paymentMethod: tx.payment_method,
    }));

    return NextResponse.json({
      success: true,
      transactions: formattedTransactions,
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
    });
  } catch (error) {
    console.error('Error in transactions API:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch transactions',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

function getTransactionDescription(transactionType: string, amount: number): string {
  switch (transactionType) {
    case 'purchase':
      return `Purchase of R${amount} ShaleanCred`;
    case 'usage':
      return `Used R${amount} ShaleanCred for booking`;
    case 'refund':
      return `Refund of R${amount} ShaleanCred`;
    case 'referral_reward':
      return `Referral reward: R${amount} ShaleanCred`;
    default:
      return `Transaction: R${amount}`;
  }
}

