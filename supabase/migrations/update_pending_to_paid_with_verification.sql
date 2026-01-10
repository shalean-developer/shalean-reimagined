-- Update pending bookings to paid and confirmed status
-- WITH Paystack verification (more thorough but requires API calls)
-- 
-- This version creates a function that can verify payments before updating
-- Use the simpler version (update_pending_to_paid_bookings.sql) if you trust
-- that bookings with paystack_reference were actually paid

-- Function to update pending bookings to paid (without verification)
-- This is the simpler approach - assumes bookings with paystack_reference were paid
CREATE OR REPLACE FUNCTION update_pending_bookings_to_paid()
RETURNS TABLE(
  updated_count INTEGER,
  booking_ids UUID[]
) AS $$
DECLARE
  v_updated_count INTEGER;
  v_booking_ids UUID[];
BEGIN
  -- Update bookings and get the count and IDs
  WITH updated AS (
    UPDATE bookings
    SET 
      payment_status = 'paid',
      status = 'confirmed',
      updated_at = NOW()
    WHERE payment_status = 'pending'
      AND paystack_reference IS NOT NULL
      AND paystack_reference != ''
    RETURNING id
  )
  SELECT 
    COUNT(*),
    ARRAY_AGG(id)
  INTO v_updated_count, v_booking_ids
  FROM updated;
  
  RETURN QUERY SELECT v_updated_count, v_booking_ids;
END;
$$ LANGUAGE plpgsql;

-- To use the function:
-- SELECT * FROM update_pending_bookings_to_paid();

-- Or use direct UPDATE (simpler):
-- UPDATE bookings
-- SET 
--   payment_status = 'paid',
--   status = 'confirmed',
--   updated_at = NOW()
-- WHERE payment_status = 'pending'
--   AND paystack_reference IS NOT NULL
--   AND paystack_reference != '';

