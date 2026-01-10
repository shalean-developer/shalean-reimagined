-- Update base prices for services
-- This migration updates existing base_price records in the pricing_rules table

-- Update Deep Cleaning base price to R1200
UPDATE pricing_rules
SET price = 1200.00, updated_at = NOW()
WHERE rule_type = 'base_price'
  AND service_id IN (SELECT id FROM services WHERE name ILIKE '%deep%' AND is_active = true);

-- Update Airbnb Cleaning base price to R230
UPDATE pricing_rules
SET price = 230.00, updated_at = NOW()
WHERE rule_type = 'base_price'
  AND service_id IN (SELECT id FROM services WHERE name ILIKE '%airbnb%' AND is_active = true);

-- Update Move In/Out base price to R980
UPDATE pricing_rules
SET price = 980.00, updated_at = NOW()
WHERE rule_type = 'base_price'
  AND service_id IN (SELECT id FROM services WHERE (name ILIKE '%move%' OR name ILIKE '%in/out%') AND is_active = true);

-- Update Carpet Cleaning base price to R350
UPDATE pricing_rules
SET price = 350.00, updated_at = NOW()
WHERE rule_type = 'base_price'
  AND service_id IN (SELECT id FROM services WHERE name ILIKE '%carpet%' AND is_active = true);

-- Insert base prices for services that don't have them yet
INSERT INTO pricing_rules (rule_type, service_id, price, is_active, display_order)
SELECT 'base_price', s.id,
  CASE 
    WHEN s.name ILIKE '%deep%' THEN 1200.00
    WHEN s.name ILIKE '%airbnb%' THEN 230.00
    WHEN s.name ILIKE '%move%' OR s.name ILIKE '%in/out%' THEN 980.00
    WHEN s.name ILIKE '%carpet%' THEN 350.00
    WHEN s.name ILIKE '%standard%' THEN 250.00
    ELSE 250.00
  END,
  true,
  CASE 
    WHEN s.name ILIKE '%standard%' THEN 1
    WHEN s.name ILIKE '%deep%' THEN 2
    WHEN s.name ILIKE '%airbnb%' THEN 3
    WHEN s.name ILIKE '%move%' OR s.name ILIKE '%in/out%' THEN 4
    WHEN s.name ILIKE '%carpet%' THEN 5
    ELSE 99
  END
FROM services s
WHERE s.is_active = true
  AND NOT EXISTS (
    SELECT 1 FROM pricing_rules pr 
    WHERE pr.rule_type = 'base_price' 
    AND pr.service_id = s.id
  );

