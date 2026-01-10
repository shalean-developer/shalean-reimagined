# Recurring Bookings Setup Guide

This document explains how to set up the recurring bookings auto-creation system.

## Overview

The recurring bookings system automatically creates future bookings for customers who have selected Weekly, Bi-Weekly, or Monthly cleaning frequencies. The system runs a daily cron job that checks for recurring bookings that need to have their next month's bookings created.

## How It Works

1. **Initial Booking Creation**: When a customer selects a recurring frequency (Weekly, Bi-Weekly, or Monthly), the system creates all bookings for the current month upfront.

2. **Payment**: Customer pays for all bookings in the current month in a single transaction.

3. **Auto-Creation**: A daily cron job runs that:
   - Finds all active recurring bookings where `next_booking_date <= TODAY`
   - Creates bookings for the next month
   - Updates the `next_booking_date` for the next cycle

## Setup Instructions

### Option 1: Vercel Cron (Recommended for Vercel deployments)

If you're deploying to Vercel, the cron job is already configured in `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/bookings/create-recurring",
      "schedule": "0 2 * * *"
    }
  ]
}
```

This runs daily at 2:00 AM UTC.

**To enable:**
1. Deploy your application to Vercel
2. The cron job will automatically be set up
3. Optionally, add an API key for security (see Security section below)

### Option 2: External Cron Service

If you're not using Vercel, you can use any external cron service:

**Examples:**
- **GitHub Actions**: Create a workflow that calls the endpoint daily
- **Cron-job.org**: Free service that can call your endpoint
- **EasyCron**: Another cron service option
- **Supabase Edge Functions**: Use pg_cron extension

**Example GitHub Actions Workflow** (`.github/workflows/recurring-bookings.yml`):

```yaml
name: Create Recurring Bookings

on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  workflow_dispatch:  # Allow manual trigger

jobs:
  create-recurring:
    runs-on: ubuntu-latest
    steps:
      - name: Call API
        run: |
          curl -X GET "${{ secrets.APP_URL }}/api/bookings/create-recurring" \
            -H "x-api-key: ${{ secrets.RECURRING_BOOKINGS_API_KEY }}"
```

### Option 3: Supabase Edge Functions with pg_cron

If you're using Supabase, you can set up a database function that runs via pg_cron:

```sql
-- Create a function to call the API endpoint
CREATE OR REPLACE FUNCTION create_recurring_bookings()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  -- This would need to call your Next.js API endpoint
  -- You might need to use http extension or a different approach
END;
$$;

-- Schedule it with pg_cron (if enabled)
SELECT cron.schedule(
  'create-recurring-bookings',
  '0 2 * * *',
  $$SELECT create_recurring_bookings()$$
);
```

## Security

### API Key Protection

The endpoint supports API key authentication. To enable it:

1. Add an environment variable:
   ```env
   RECURRING_BOOKINGS_API_KEY=your-secret-api-key-here
   ```

2. When calling the endpoint, include the header:
   ```
   x-api-key: your-secret-api-key-here
   ```

3. If the API key is set, requests without it will be rejected with 401 Unauthorized.

**Note**: If `RECURRING_BOOKINGS_API_KEY` is not set, the endpoint will work without authentication (useful for development, but not recommended for production).

## Testing

### Manual Testing

You can manually trigger the endpoint:

```bash
# Without API key (if not set)
curl -X GET http://localhost:3000/api/bookings/create-recurring

# With API key
curl -X GET http://localhost:3000/api/bookings/create-recurring \
  -H "x-api-key: your-secret-api-key"
```

### Testing with Test Data

1. Create a test booking with a recurring frequency
2. Set `next_booking_date` to today or in the past
3. Call the endpoint manually
4. Verify that new bookings were created

## Monitoring

The endpoint returns a JSON response with:
- `success`: Boolean indicating if the operation succeeded
- `message`: Human-readable message
- `created`: Number of bookings created
- `bookingIds`: Array of created booking IDs
- `errors`: Array of error messages (if any)

Example response:
```json
{
  "success": true,
  "message": "Processed 5 recurring booking series",
  "created": 12,
  "bookingIds": ["uuid1", "uuid2", ...],
  "errors": []
}
```

## Troubleshooting

### Bookings Not Being Created

1. Check that `is_recurring = true` and `recurrence_status = 'active'`
2. Verify `next_booking_date <= TODAY`
3. Check that `recurrence_end_date` is NULL or in the future
4. Check application logs for errors

### Cron Job Not Running

1. Verify the cron configuration in `vercel.json` (for Vercel)
2. Check Vercel dashboard for cron job status
3. For external services, verify the schedule and endpoint URL
4. Check that the endpoint is accessible (not behind authentication that blocks cron)

### Date Calculation Issues

- The system uses the same day of week for Weekly/Bi-Weekly bookings
- Monthly bookings use the same day of month (handles edge cases like Jan 31 -> Feb 28/29)
- Check the `calculateBookingDatesForMonth` function in `src/lib/utils/recurring-dates.ts`

## Database Migration

Make sure you've run the migration:

```bash
# Run the migration
psql -d your_database -f supabase/migrations/add_recurring_booking_fields.sql
```

Or apply it through your Supabase dashboard.

## Environment Variables

Required (if using API key):
- `RECURRING_BOOKINGS_API_KEY`: Secret key for API authentication (optional but recommended)

The endpoint will work without this variable, but it's recommended for production.

