import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status') || 'active'; // Default to active vouchers
    const limit = parseInt(searchParams.get('limit') || '100');
    const page = parseInt(searchParams.get('page') || '1');

    const supabase = await createClient();

    // Build query
    let query = supabase
      .from('vouchers')
      .select('id, code, amount, status, valid_from, valid_until, created_at, redeemed_at', { count: 'exact' })
      .order('created_at', { ascending: false });

    // Filter by status if provided
    if (status) {
      query = query.eq('status', status);
    }

    // Pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data: vouchers, error, count } = await query;

    if (error) {
      console.error('Error fetching vouchers:', error);
      return NextResponse.json(
        { error: 'Failed to fetch vouchers', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      vouchers: vouchers || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('Error in voucher list API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch vouchers',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

