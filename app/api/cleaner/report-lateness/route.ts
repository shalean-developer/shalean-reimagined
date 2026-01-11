import { NextRequest, NextResponse } from 'next/server';
import { reportLateness } from '../../../cleaner/actions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingId, expectedArrivalTime, reason } = body;

    if (!bookingId || !expectedArrivalTime || !reason) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await reportLateness(bookingId, expectedArrivalTime, reason);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      booking: result.booking,
    });
  } catch (error) {
    console.error('Error in report-lateness API:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
