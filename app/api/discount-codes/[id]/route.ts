import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/discount-codes/[id]
 * Get a single discount code by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Discount code ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Discount code not found' },
          { status: 404 }
        );
      }
      console.error('Error fetching discount code:', error);
      return NextResponse.json(
        { error: 'Failed to fetch discount code', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Unexpected error fetching discount code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/discount-codes/[id]
 * Update a discount code
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Discount code ID is required' }, { status: 400 });
    }

    // Check if discount code exists
    const { data: existingCode, error: fetchError } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !existingCode) {
      return NextResponse.json(
        { error: 'Discount code not found' },
        { status: 404 }
      );
    }

    // Build update object with only provided fields
    const updateData: any = {};

    if (body.code !== undefined) {
      if (typeof body.code !== 'string' || body.code.trim().length === 0) {
        return NextResponse.json(
          { error: 'Code must be a non-empty string' },
          { status: 400 }
        );
      }
      const normalizedCode = body.code.trim().toUpperCase();
      // Check if new code conflicts with existing (except current one)
      if (normalizedCode !== existingCode.code) {
        const { data: conflictingCode } = await supabase
          .from('discount_codes')
          .select('id')
          .eq('code', normalizedCode)
          .single();

        if (conflictingCode) {
          return NextResponse.json(
            { error: 'A discount code with this code already exists' },
            { status: 409 }
          );
        }
      }
      updateData.code = normalizedCode;
    }

    if (body.discount_type !== undefined) {
      if (!['percentage', 'fixed'].includes(body.discount_type)) {
        return NextResponse.json(
          { error: 'discount_type must be either "percentage" or "fixed"' },
          { status: 400 }
        );
      }
      updateData.discount_type = body.discount_type;
    }

    if (body.discount_value !== undefined) {
      const discountValue = Number(body.discount_value);
      const discountType = updateData.discount_type || existingCode.discount_type;
      if (
        isNaN(discountValue) ||
        discountValue <= 0 ||
        (discountType === 'percentage' && discountValue > 100)
      ) {
        return NextResponse.json(
          {
            error:
              discountType === 'percentage'
                ? 'discount_value must be a number between 0 and 100'
                : 'discount_value must be a positive number',
          },
          { status: 400 }
        );
      }
      updateData.discount_value = discountValue;
    }

    if (body.valid_from !== undefined) {
      const validFromDate = new Date(body.valid_from);
      if (isNaN(validFromDate.getTime())) {
        return NextResponse.json(
          { error: 'Invalid date format for valid_from' },
          { status: 400 }
        );
      }
      updateData.valid_from = validFromDate.toISOString().split('T')[0];
    }

    if (body.valid_until !== undefined) {
      const validUntilDate = new Date(body.valid_until);
      if (isNaN(validUntilDate.getTime())) {
        return NextResponse.json(
          { error: 'Invalid date format for valid_until' },
          { status: 400 }
        );
      }
      updateData.valid_until = validUntilDate.toISOString().split('T')[0];
    }

    // Validate date range
    const validFrom = updateData.valid_from || existingCode.valid_from;
    const validUntil = updateData.valid_until || existingCode.valid_until;
    if (new Date(validUntil) <= new Date(validFrom)) {
      return NextResponse.json(
        { error: 'valid_until must be after valid_from' },
        { status: 400 }
      );
    }

    if (body.max_discount_amount !== undefined) {
      if (
        body.max_discount_amount !== null &&
        (typeof body.max_discount_amount !== 'number' ||
          body.max_discount_amount <= 0)
      ) {
        return NextResponse.json(
          { error: 'max_discount_amount must be a positive number or null' },
          { status: 400 }
        );
      }
      updateData.max_discount_amount =
        body.max_discount_amount !== null
          ? Number(body.max_discount_amount)
          : null;
    }

    if (body.min_purchase_amount !== undefined) {
      if (
        body.min_purchase_amount !== null &&
        (typeof body.min_purchase_amount !== 'number' ||
          body.min_purchase_amount < 0)
      ) {
        return NextResponse.json(
          { error: 'min_purchase_amount must be a non-negative number or null' },
          { status: 400 }
        );
      }
      updateData.min_purchase_amount =
        body.min_purchase_amount !== null
          ? Number(body.min_purchase_amount)
          : null;
    }

    if (body.max_uses !== undefined) {
      if (
        body.max_uses !== null &&
        (typeof body.max_uses !== 'number' ||
          body.max_uses <= 0 ||
          !Number.isInteger(body.max_uses))
      ) {
        return NextResponse.json(
          { error: 'max_uses must be a positive integer or null' },
          { status: 400 }
        );
      }
      updateData.max_uses =
        body.max_uses !== null ? Number(body.max_uses) : null;
    }

    if (body.is_active !== undefined) {
      updateData.is_active = Boolean(body.is_active);
    }

    // Don't allow updating used_count directly through API
    if (body.used_count !== undefined) {
      return NextResponse.json(
        { error: 'used_count cannot be updated directly' },
        { status: 400 }
      );
    }

    // Update the discount code
    const { data: updatedCode, error: updateError } = await supabase
      .from('discount_codes')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating discount code:', updateError);
      return NextResponse.json(
        { error: 'Failed to update discount code', details: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: updatedCode,
      message: 'Discount code updated successfully',
    });
  } catch (error) {
    console.error('Unexpected error updating discount code:', error);
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

/**
 * DELETE /api/discount-codes/[id]
 * Delete a discount code (soft delete by setting is_active to false)
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Discount code ID is required' }, { status: 400 });
    }

    // Check if discount code exists
    const { data: existingCode, error: fetchError } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !existingCode) {
      return NextResponse.json(
        { error: 'Discount code not found' },
        { status: 404 }
      );
    }

    // Soft delete by setting is_active to false
    // This preserves historical data and allows reactivation if needed
    const { error: deleteError } = await supabase
      .from('discount_codes')
      .update({ is_active: false })
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting discount code:', deleteError);
      return NextResponse.json(
        { error: 'Failed to delete discount code', details: deleteError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Discount code deleted successfully',
    });
  } catch (error) {
    console.error('Unexpected error deleting discount code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

