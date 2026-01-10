-- Add number_of_cleaners and additional_cleaners_price columns to bookings table
-- This allows customers to request multiple cleaners for Standard and Airbnb services

ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS number_of_cleaners INTEGER NOT NULL DEFAULT 1;

ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS additional_cleaners_price DECIMAL(10, 2) NOT NULL DEFAULT 0;

-- Add comments to explain the columns
COMMENT ON COLUMN bookings.number_of_cleaners IS 'Number of cleaners requested for this booking (1-5, only for Standard and Airbnb services)';
COMMENT ON COLUMN bookings.additional_cleaners_price IS 'Price charged for additional cleaners beyond the first (R250 per additional cleaner)';

