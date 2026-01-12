import { NextRequest, NextResponse } from 'next/server';
import { authenticateCleaner } from '../../../cleaner/actions-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, password } = body;

    if (!phone || !password) {
      return NextResponse.json(
        { success: false, error: 'Phone number and password are required' },
        { status: 400 }
      );
    }

    // Authenticate cleaner using database password
    const result = await authenticateCleaner(phone, password);

    if (!result.success || !result.cleaner) {
      return NextResponse.json(
        { success: false, error: result.error || 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Set session cookie
    const response = NextResponse.json({
      success: true,
      cleaner: {
        id: result.cleaner.id,
        name: result.cleaner.name,
        phone: result.cleaner.phone,
      },
    });

    // Set cleaner session cookie
    response.cookies.set('cleaner_session', result.cleaner.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error in cleaner login:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
