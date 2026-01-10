import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { DiscountCode } from '@/types/booking';

/**
 * GET /api/discount-codes
 * List all discount codes with optional pagination and filtering
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const isActive = searchParams.get('is_active');
    const search = searchParams.get('search');

    let query = supabase
      .from('discount_codes')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    // Filter by active status
    if (isActive !== null) {
      query = query.eq('is_active', isActive === 'true');
    }

    // Search by code
    if (search) {
      query = query.ilike('code', `%${search}%`);
    }

    // Pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching discount codes:', error);
      return NextResponse.json(
        { error: 'Failed to fetch discount codes', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: data || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('Unexpected error fetching discount codes:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/discount-codes
 * Create a new discount code
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const body = await request.json();

    // Validate required fields
    const {
      code,
      discount_type,
      discount_value,
      valid_from,
      valid_until,
      max_discount_amount,
      min_purchase_amount,
      max_uses,
      is_active = true,
    } = body;

    // Validation
    if (!code || typeof code !== 'string' || code.trim().length === 0) {
      return NextResponse.json(
        { error: 'Code is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    if (!discount_type || !['percentage', 'fixed'].includes(discount_type)) {
      return NextResponse.json(
        { error: 'discount_type must be either "percentage" or "fixed"' },
        { status: 400 }
      );
    }

    if (
      typeof discount_value !== 'number' ||
      discount_value <= 0 ||
      (discount_type === 'percentage' && discount_value > 100)
    ) {
      return NextResponse.json(
        {
          error:
            discount_type === 'percentage'
              ? 'discount_value must be a number between 0 and 100'
              : 'discount_value must be a positive number',
        },
        { status: 400 }
      );
    }

    if (!valid_from || !valid_until) {
      return NextResponse.json(
        { error: 'valid_from and valid_until are required' },
        { status: 400 }
      );
    }

    // Validate dates
    const validFromDate = new Date(valid_from);
    const validUntilDate = new Date(valid_until);
    const now = new Date();

    if (isNaN(validFromDate.getTime()) || isNaN(validUntilDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format for valid_from or valid_until' },
        { status: 400 }
      );
    }

    if (validUntilDate <= validFromDate) {
      return NextResponse.json(
        { error: 'valid_until must be after valid_from' },
        { status: 400 }
      );
    }

    // Validate optional fields
    if (
      max_discount_amount !== null &&
      max_discount_amount !== undefined &&
      (typeof max_discount_amount !== 'number' || max_discount_amount <= 0)
    ) {
      return NextResponse.json(
        { error: 'max_discount_amount must be a positive number if provided' },
        { status: 400 }
      );
    }

    if (
      min_purchase_amount !== null &&
      min_purchase_amount !== undefined &&
      (typeof min_purchase_amount !== 'number' || min_purchase_amount < 0)
    ) {
      return NextResponse.json(
        { error: 'min_purchase_amount must be a non-negative number if provided' },
        { status: 400 }
      );
    }

    if (
      max_uses !== null &&
      max_uses !== undefined &&
      (typeof max_uses !== 'number' || max_uses <= 0 || !Number.isInteger(max_uses))
    ) {
      return NextResponse.json(
        { error: 'max_uses must be a positive integer if provided' },
        { status: 400 }
      );
    }

    // Check if code already exists
    const normalizedCode = code.trim().toUpperCase();
    const { data: existingCode } = await supabase
      .from('discount_codes')
      .select('id')
      .eq('code', normalizedCode)
      .single();

    if (existingCode) {
      return NextResponse.json(
        { error: 'A discount code with this code already exists' },
        { status: 409 }
      );
    }

    // Create the discount code
    const discountCodeData = {
      code: normalizedCode,
      discount_type,
      discount_value: Number(discount_value),
      max_discount_amount:
        max_discount_amount !== null && max_discount_amount !== undefined
          ? Number(max_discount_amount)
          : null,
      min_purchase_amount:
        min_purchase_amount !== null && min_purchase_amount !== undefined
          ? Number(min_purchase_amount)
          : null,
      max_uses:
        max_uses !== null && max_uses !== undefined ? Number(max_uses) : null,
      valid_from: validFromDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
      valid_until: validUntilDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
      is_active: Boolean(is_active),
      used_count: 0,
    };

    const { data: newDiscountCode, error: insertError } = await supabase
      .from('discount_codes')
      .insert(discountCodeData)
      .select()
      .single();

    if (insertError) {
      console.error('Error creating discount code:', insertError);
      return NextResponse.json(
        { error: 'Failed to create discount code', details: insertError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { data: newDiscountCode, message: 'Discount code created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unexpected error creating discount code:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

