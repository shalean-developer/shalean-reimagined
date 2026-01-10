-- Seed pricing rules for additional services
-- Note: These are example values. Adjust based on actual pricing requirements.

-- Delete any existing additional_service pricing rules to avoid duplicates
DELETE FROM pricing_rules WHERE rule_type = 'additional_service';

-- Insert pricing for additional services
-- Prices are per service unless requires_quantity is true
INSERT INTO pricing_rules (rule_type, additional_service_id, price, is_active, display_order)
SELECT 
  'additional_service',
  id,
  CASE 
    WHEN name = 'Balcony Cleaning' THEN 150.00
    WHEN name = 'Ceiling Cleaning' THEN 200.00
    WHEN name = 'Couch Cleaning' THEN 300.00
    WHEN name = 'Garage Cleaning' THEN 250.00
    WHEN name = 'Inside Cabinets' THEN 180.00
    WHEN name = 'Inside Fridge' THEN 120.00
    WHEN name = 'Inside Oven' THEN 150.00
    WHEN name = 'Interior Walls' THEN 400.00
    WHEN name = 'Interior Windows' THEN 200.00
    WHEN name = 'Ironing' THEN 100.00
    WHEN name = 'Laundry' THEN 150.00
    WHEN name = 'Mattress Cleaning' THEN 250.00
    WHEN name = 'Outside Window' THEN 300.00
    WHEN name = 'Carpet Cleaning' THEN 350.00
    ELSE 150.00
  END,
  true,
  display_order
FROM additional_services
WHERE is_active = true;

