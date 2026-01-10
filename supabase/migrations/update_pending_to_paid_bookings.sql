-- Update pending bookings to paid and confirmed status
-- This script updates bookings that have a Paystack reference but are still marked as pending

-- First, let's see what we're working with
-- This query shows bookings that will be updated (for verification)
-- SELECT 
--   id,
--   booking_number,
--   customer_email,
--   payment_status,
--   status,
--   paystack_reference,
--   paystack_transaction_id,
--   total_amount,
--   amount_paid,
--   created_at
-- FROM bookings
-- WHERE payment_status = 'pending'
--   AND paystack_reference IS NOT NULL
-- ORDER BY created_at DESC;

-- Update bookings with Paystack references from pending to paid
-- Only updates bookings that have a paystack_reference (indicating payment was initiated)
UPDATE bookings
SET 
  payment_status = 'paid',
  status = 'confirmed',
  updated_at = NOW()
WHERE payment_status = 'pending'
  AND paystack_reference IS NOT NULL
  AND paystack_reference != '';

-- Optional: If you want to also set amount_paid to total_amount for these bookings
-- (uncomment if needed)
-- UPDATE bookings
-- SET 
--   payment_status = 'paid',
--   status = 'confirmed',
--   amount_paid = total_amount,
--   updated_at = NOW()
-- WHERE payment_status = 'pending'
--   AND paystack_reference IS NOT NULL
--   AND paystack_reference != ''
--   AND amount_paid = 0;

-- Verify the update
-- Run this to see how many bookings were updated:
-- SELECT 
--   COUNT(*) as updated_count,
--   payment_status,
--   status
-- FROM bookings
-- WHERE paystack_reference IS NOT NULL
-- GROUP BY payment_status, status;

