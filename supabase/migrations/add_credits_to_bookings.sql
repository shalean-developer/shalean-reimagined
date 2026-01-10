-- Add credits_used column to bookings table
-- This tracks how much ShaleanCred was applied to each booking

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS credits_used DECIMAL(10, 2) NOT NULL DEFAULT 0.00;

-- Create index for efficient querying by credits_used
CREATE INDEX IF NOT EXISTS idx_bookings_credits_used ON bookings(credits_used);

-- Add comment to explain the column
COMMENT ON COLUMN bookings.credits_used IS 'Amount of ShaleanCred used for this booking. When credits are used, this amount is deducted from the total_amount, and the remaining amount is paid via Paystack.';
