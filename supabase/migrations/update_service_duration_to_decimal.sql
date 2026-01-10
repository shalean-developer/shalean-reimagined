-- Update service_duration column from INTEGER to DECIMAL to support half-hour increments
ALTER TABLE bookings 
ALTER COLUMN service_duration TYPE DECIMAL(4, 1) USING service_duration::DECIMAL(4, 1);

-- Update default value to 3.5
ALTER TABLE bookings 
ALTER COLUMN service_duration SET DEFAULT 3.5;

-- Update duration_hours in working_hours table to support decimal values
ALTER TABLE working_hours 
ALTER COLUMN duration_hours TYPE DECIMAL(4, 1) USING duration_hours::DECIMAL(4, 1);

-- Update default value to 3.5
ALTER TABLE working_hours 
ALTER COLUMN duration_hours SET DEFAULT 3.5;

