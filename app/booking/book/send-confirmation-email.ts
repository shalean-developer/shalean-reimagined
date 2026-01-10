'use server';

import { Resend } from 'resend';
import BookingConfirmationEmail from '@/lib/email/booking-confirmation';
import { Booking } from '@/types/booking';
import { format } from 'date-fns';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingConfirmationEmail(booking: Booking): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return { success: false, error: 'Email service not configured' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Shalean <noreply@shalean.co.za>', // Update with your verified domain
      to: booking.customer_email,
      subject: `Booking Confirmation - ${booking.booking_number}`,
      react: BookingConfirmationEmail({
        bookingNumber: booking.booking_number,
        customerName: `${booking.customer_first_name} ${booking.customer_last_name}`,
        serviceType: booking.service_type,
        serviceDate: format(new Date(booking.service_date), 'EEEE, MMMM d, yyyy'),
        serviceTime: booking.service_time,
        serviceAddress: `${booking.service_address}${booking.service_apt_unit ? `, ${booking.service_apt_unit}` : ''}, ${booking.service_suburb}, ${booking.service_city}`,
        subtotal: booking.subtotal,
        serviceFee: booking.service_fee,
        discountAmount: booking.discount_amount,
        totalAmount: booking.total_amount,
        paymentStatus: booking.payment_status,
      }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}

