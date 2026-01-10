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

    // Get profile balance
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('credit_balance')
      .eq('email', email)
      .maybeSingle();

    if (error) {
      console.error('Error fetching balance:', error);
      return NextResponse.json(
        { error: 'Failed to fetch balance' },
        { status: 500 }
      );
    }

    if (!profile) {
      // Return 0 if profile doesn't exist
      return NextResponse.json({
        success: true,
        balance: 0,
      });
    }

    return NextResponse.json({
      success: true,
      balance: profile.credit_balance || 0,
    });
  } catch (error) {
    console.error('Error in balance API:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch balance',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

