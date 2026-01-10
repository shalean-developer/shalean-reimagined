-- Quick SQL script to update pending bookings to paid and confirmed
-- Run this in your Supabase SQL editor

-- Option 1: Simple update (recommended)
-- Updates all bookings with paystack_reference from pending to paid/confirmed
UPDATE bookings
SET 
  payment_status = 'paid',
  status = 'confirmed',
  updated_at = NOW()
WHERE payment_status = 'pending'
  AND paystack_reference IS NOT NULL
  AND paystack_reference != '';

-- Option 2: Update with amount_paid set to total_amount
-- Use this if amount_paid is 0 but should match total_amount
UPDATE bookings
SET 
  payment_status = 'paid',
  status = 'confirmed',
  amount_paid = total_amount,
  updated_at = NOW()
WHERE payment_status = 'pending'
  AND paystack_reference IS NOT NULL
  AND paystack_reference != ''
  AND amount_paid = 0;

-- Option 3: Update only bookings created before a certain date
-- Useful if you want to be more selective
-- UPDATE bookings
-- SET 
--   payment_status = 'paid',
--   status = 'confirmed',
--   updated_at = NOW()
-- WHERE payment_status = 'pending'
--   AND paystack_reference IS NOT NULL
--   AND paystack_reference != ''
--   AND created_at < '2024-01-01'; -- Adjust date as needed

-- Check results
SELECT 
  COUNT(*) as total_updated,
  payment_status,
  status
FROM bookings
WHERE paystack_reference IS NOT NULL
GROUP BY payment_status, status;

