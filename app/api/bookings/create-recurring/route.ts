import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { calculateBookingDatesForMonth, calculateNextBookingDate, formatDateForDB } from '@/lib/utils/recurring-dates';
import { generateBookingNumber } from '@/lib/utils/booking-number';
import { calculatePrice } from '@/lib/pricing/calculator';
import { supportsRecurringBookings } from '@/lib/utils/service-validation';

/**
 * API endpoint to auto-create recurring bookings for the next month
 * This should be called daily by a cron job
 * 
 * Security: Add API key check in production
 */
export async function GET(request: NextRequest) {
  try {
    // Optional: Add API key authentication
    const apiKey = request.headers.get('x-api-key');
    const expectedApiKey = process.env.RECURRING_BOOKINGS_API_KEY;
    
    if (expectedApiKey && apiKey !== expectedApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = await createClient();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = formatDateForDB(today);

    // Find all active recurring bookings where next_booking_date has arrived
    // Note: We'll filter by service type after fetching to ensure only Standard Cleaning and Airbnb are processed
    const { data: activeRecurringBookings, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('is_recurring', true)
      .eq('recurrence_status', 'active')
      .lte('next_booking_date', todayStr)
      .or(`recurrence_end_date.is.null,recurrence_end_date.gt.${todayStr}`)
      .is('parent_booking_id', null); // Only get parent bookings (first in series)

    if (fetchError) {
      console.error('Error fetching recurring bookings:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch recurring bookings', details: fetchError.message },
        { status: 500 }
      );
    }

    if (!activeRecurringBookings || activeRecurringBookings.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No recurring bookings to create',
        created: 0,
      });
    }

    // Filter to only process Standard Cleaning and Airbnb Cleaning services
    const supportedBookings = activeRecurringBookings.filter(booking => 
      supportsRecurringBookings(booking.service_type)
    );

    // Log warnings for unsupported services (but don't fail)
    const unsupportedBookings = activeRecurringBookings.filter(booking => 
      !supportsRecurringBookings(booking.service_type)
    );
    
    if (unsupportedBookings.length > 0) {
      console.warn(`Skipping ${unsupportedBookings.length} recurring bookings for unsupported services:`, 
        unsupportedBookings.map(b => ({ id: b.id, service_type: b.service_type }))
      );
    }

    if (supportedBookings.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No supported recurring bookings to create',
        created: 0,
        skipped: unsupportedBookings.length,
      });
    }

    const createdBookings: string[] = [];
    const errors: string[] = [];

    // Process each recurring booking series (only supported services)
    for (const parentBooking of supportedBookings) {
      try {
        // Get the last booking date from the series to calculate next month
        const { data: lastBooking } = await supabase
          .from('bookings')
          .select('service_date')
          .or(`id.eq.${parentBooking.id},parent_booking_id.eq.${parentBooking.id}`)
          .order('service_date', { ascending: false })
          .limit(1)
          .single();

        if (!lastBooking) {
          errors.push(`No last booking found for parent ${parentBooking.id}`);
          continue;
        }

        const lastBookingDate = new Date(lastBooking.service_date);
        const nextBookingDate = new Date(parentBooking.next_booking_date!);
        
        // Calculate dates for next month
        const bookingDates = calculateBookingDatesForMonth(
          nextBookingDate,
          parentBooking.cleaning_frequency as 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
        );

        if (bookingDates.length === 0) {
          errors.push(`No dates calculated for booking ${parentBooking.id}`);
          continue;
        }

        // Calculate pricing (reuse same pricing as parent booking)
        const priceBreakdown = await calculatePrice({
          serviceId: parentBooking.service_id,
          serviceName: parentBooking.service_type,
          bedrooms: parentBooking.bedrooms,
          bathrooms: parentBooking.bathrooms,
          additionalServiceIds: parentBooking.additional_services || [],
          cleaningFrequency: parentBooking.cleaning_frequency as 'one-time' | 'weekly' | 'bi-weekly' | 'monthly',
          discountAmount: parentBooking.discount_amount || 0,
          numberOfCleaners: (parentBooking as any).number_of_cleaners || 1,
        });

        // Create bookings for all dates in next month
        const bookingsToCreate = [];
        for (let i = 0; i < bookingDates.length; i++) {
          const bookingDate = bookingDates[i];
          const bookingNumber = generateBookingNumber();

          bookingsToCreate.push({
            booking_number: bookingNumber,
            customer_first_name: parentBooking.customer_first_name,
            customer_last_name: parentBooking.customer_last_name,
            customer_email: parentBooking.customer_email,
            customer_phone: parentBooking.customer_phone,
            service_id: parentBooking.service_id,
            service_type: parentBooking.service_type,
            bedrooms: parentBooking.bedrooms,
            bathrooms: parentBooking.bathrooms,
            additional_services: parentBooking.additional_services,
            cleaning_equipment: parentBooking.cleaning_equipment,
            number_of_cleaners: (parentBooking as any).number_of_cleaners || 1,
            additional_cleaners_price: priceBreakdown.additionalCleanersPrice,
            preferred_cleaner_ids: (parentBooking as any).preferred_cleaner_ids || null,
            preferred_cleaner_id: parentBooking.preferred_cleaner_id, // Backward compatibility
            cleaning_frequency: parentBooking.cleaning_frequency,
            service_date: formatDateForDB(bookingDate),
            service_time: parentBooking.service_time,
            service_duration: parentBooking.service_duration,
            service_address: parentBooking.service_address,
            service_apt_unit: parentBooking.service_apt_unit,
            service_suburb: parentBooking.service_suburb,
            service_city: parentBooking.service_city,
            special_instructions: parentBooking.special_instructions,
            tip_amount: parentBooking.tip_amount || 0,
            base_price: priceBreakdown.basePrice,
            additional_services_price: priceBreakdown.additionalServicesPrice,
            equipment_supply_price: priceBreakdown.equipmentSupplyPrice,
            frequency_discount_percent: priceBreakdown.frequencyDiscountPercent,
            frequency_discount_amount: priceBreakdown.frequencyDiscountAmount,
            subtotal: priceBreakdown.subtotal,
            service_fee: priceBreakdown.serviceFee,
            total_amount: priceBreakdown.totalAmount,
            discount_code: parentBooking.discount_code,
            discount_amount: parentBooking.discount_amount || 0,
            amount_paid: 0,
            payment_status: 'pending',
            status: 'pending',
            user_id: parentBooking.user_id,
            parent_booking_id: i === 0 ? parentBooking.id : null, // First booking links to original parent
            is_recurring: true,
            recurrence_status: 'active',
            next_booking_date: null, // Only parent booking has next_booking_date
          });
        }

        // Insert all bookings
        const { data: insertedBookings, error: insertError } = await supabase
          .from('bookings')
          .insert(bookingsToCreate)
          .select('id');

        if (insertError) {
          errors.push(`Failed to create bookings for parent ${parentBooking.id}: ${insertError.message}`);
          continue;
        }

        if (!insertedBookings || insertedBookings.length === 0) {
          errors.push(`No bookings created for parent ${parentBooking.id}`);
          continue;
        }

        // Update parent_booking_id for subsequent bookings in this batch
        // They should all link to the first booking of this batch (which links to original parent)
        if (insertedBookings.length > 1) {
          const firstBookingInBatchId = insertedBookings[0].id;
          const subsequentIds = insertedBookings.slice(1).map(b => b.id);
          
          await supabase
            .from('bookings')
            .update({ parent_booking_id: firstBookingInBatchId })
            .in('id', subsequentIds);
        }

        // Calculate next booking date for the parent
        const lastDate = bookingDates[bookingDates.length - 1];
        const nextDate = calculateNextBookingDate(
          lastDate,
          parentBooking.cleaning_frequency as 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
        );

        // Update parent booking's next_booking_date
        await supabase
          .from('bookings')
          .update({ next_booking_date: formatDateForDB(nextDate) })
          .eq('id', parentBooking.id);

        createdBookings.push(...insertedBookings.map(b => b.id));
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        errors.push(`Error processing booking ${parentBooking.id}: ${errorMessage}`);
        console.error(`Error creating recurring bookings for ${parentBooking.id}:`, error);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${activeRecurringBookings.length} recurring booking series`,
      created: createdBookings.length,
      bookingIds: createdBookings,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Error in create-recurring endpoint:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Also support POST for cron services that prefer POST
export async function POST(request: NextRequest) {
  return GET(request);
}

