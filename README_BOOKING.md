# Booking System Implementation

This document provides information about the 3-step booking form implementation.

## Features

- **3-Step Booking Form**: Service & Details → Schedule & Cleaner → Contact & Review
- **Dynamic Working Hours**: Configurable 3-hour time slots stored in database
- **Real-time Price Calculation**: Sidebar updates as user makes selections
- **Paystack Integration**: Secure online payment processing
- **Email Confirmations**: Automated booking confirmation emails via Resend
- **Guest Booking Support**: Customers can book without logging in
- **Discount Codes**: Support for promotional codes with validation
- **Frequency Discounts**: Automatic discounts for recurring bookings (weekly, bi-weekly, monthly)

## Database Setup

Run the following migrations in order:

1. `create_bookings_table.sql` - Main bookings table
2. `create_pricing_rules_table.sql` - Configurable pricing rules
3. `create_discount_codes_table.sql` - Discount code management
4. `create_working_hours_table.sql` - Working hours configuration
5. `seed_working_hours.sql` - Seed 3-hour time slots
6. `seed_pricing_rules.sql` - Seed initial pricing rules

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Paystack
PAYSTACK_SECRET_KEY=sk_test_your_secret_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_public_key
PAYSTACK_WEBHOOK_SECRET=your_webhook_secret

# Resend
RESEND_API_KEY=re_your_resend_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Installation

Install required dependencies:

```bash
npm install resend @react-email/components
```

## Paystack Webhook Setup

1. Go to your Paystack Dashboard → Settings → Webhooks
2. Add a webhook URL: `https://yourdomain.com/api/paystack/webhook`
3. Copy the webhook secret and add it to `.env.local` as `PAYSTACK_WEBHOOK_SECRET`
4. Select events to listen to: `charge.success`, `transfer.success`

## Resend Email Setup

1. Create an account at [Resend](https://resend.com)
2. Verify your domain or use the provided test domain
3. Get your API key and add it to `.env.local`
4. Update the `from` email address in `send-confirmation-email.ts` with your verified domain

## Usage

Access the booking form at: `/booking/book`

The booking flow:
1. User fills out the 3-step form
2. Clicks "Confirm & Pay" on step 3
3. Redirected to Paystack payment page
4. After successful payment, Paystack webhook updates booking status
5. Confirmation email is sent to customer
6. User is redirected to confirmation page

## Booking Flow

```
User fills form → Save draft → Step 3: Review → Click Pay
→ Initialize Paystack payment → User pays on Paystack
→ Paystack webhook → Verify payment → Create booking in DB
→ Send confirmation email → Redirect to confirmation page
```

## File Structure

```
app/booking/
  book/
    page.tsx                    # Main booking page
    actions.ts                  # Server actions
    hooks/
      useBookingForm.ts        # Form state management
    components/
      Step1ServiceDetails.tsx  # Step 1 component
      Step2ScheduleCleaner.tsx # Step 2 component
      Step3ContactReview.tsx   # Step 3 component
      BookingSummary.tsx       # Sidebar summary
      ProgressIndicator.tsx    # Step progress indicator
  confirmation/
    [bookingId]/
      page.tsx                 # Confirmation page

app/api/paystack/
  initialize/
    route.ts                   # Initialize payment
  webhook/
    route.ts                   # Webhook handler
  callback/
    route.ts                   # Payment callback handler

src/lib/
  pricing/
    calculator.ts              # Price calculation
    rules.ts                   # Pricing rules fetcher
  paystack/
    client.ts                  # Paystack API client
  email/
    booking-confirmation.tsx   # Email template
  utils/
    booking-number.ts          # Generate booking numbers
```

## Notes

- Pricing rules are stored in database for easy management
- Booking is only created after successful payment verification
- Webhook handler verifies Paystack signature for security
- Form validation at each step prevents incomplete submissions
- Working hours are configurable and stored in database
- Time slots are displayed in 3-hour intervals

