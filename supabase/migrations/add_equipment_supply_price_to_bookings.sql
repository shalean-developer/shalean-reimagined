-- Add equipment_supply_price column to bookings table
-- This tracks the R500 charge when cleaning equipment is provided

ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS equipment_supply_price DECIMAL(10, 2) NOT NULL DEFAULT 0;

-- Add comment to explain the column
COMMENT ON COLUMN bookings.equipment_supply_price IS 'Price charged for providing cleaning equipment and supplies (R500 when selected)';

