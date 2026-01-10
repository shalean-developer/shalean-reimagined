-- Seed initial pricing rules
-- Note: These are example values. Adjust based on actual pricing requirements.

-- Base prices for services
-- First, delete any existing base_price rules to avoid duplicates
DELETE FROM pricing_rules WHERE rule_type = 'base_price';

-- Insert base prices for all services
INSERT INTO pricing_rules (rule_type, service_id, price, is_active, display_order)
SELECT 'base_price', id, 
  CASE 
    WHEN name ILIKE '%deep%' THEN 1200.00
    WHEN name ILIKE '%airbnb%' THEN 230.00
    WHEN name ILIKE '%move%' OR name ILIKE '%in/out%' THEN 980.00
    WHEN name ILIKE '%carpet%' THEN 350.00
    WHEN name ILIKE '%standard%' THEN 250.00
    ELSE 250.00
  END,
  true, 
  CASE 
    WHEN name ILIKE '%standard%' THEN 1
    WHEN name ILIKE '%deep%' THEN 2
    WHEN name ILIKE '%airbnb%' THEN 3
    WHEN name ILIKE '%move%' OR name ILIKE '%in/out%' THEN 4
    WHEN name ILIKE '%carpet%' THEN 5
    ELSE 99
  END
FROM services
WHERE is_active = true;

-- Bedroom pricing (per bedroom)
INSERT INTO pricing_rules (rule_type, rule_key, rule_value, price, is_active, display_order) VALUES
  ('bedroom', 'bedroom_count', '1', 0.00, true, 1),
  ('bedroom', 'bedroom_count', '2', 35.00, true, 2),
  ('bedroom', 'bedroom_count', '3', 50.00, true, 3),
  ('bedroom', 'bedroom_count', '4', 65.00, true, 4),
  ('bedroom', 'bedroom_count', '5', 80.00, true, 5),
  ('bedroom', 'bedroom_count', '6+', 100.00, true, 6)
ON CONFLICT DO NOTHING;

-- Bathroom pricing (per bathroom)
INSERT INTO pricing_rules (rule_type, rule_key, rule_value, price, is_active, display_order) VALUES
  ('bathroom', 'bathroom_count', '1', 35.00, true, 1),
  ('bathroom', 'bathroom_count', '2', 60.00, true, 2),
  ('bathroom', 'bathroom_count', '3', 85.00, true, 3),
  ('bathroom', 'bathroom_count', '4', 110.00, true, 4),
  ('bathroom', 'bathroom_count', '5+', 140.00, true, 5)
ON CONFLICT DO NOTHING;

-- Service fee (percentage of subtotal)
INSERT INTO pricing_rules (rule_type, rule_key, percentage, is_active, display_order) VALUES
  ('service_fee', 'default', 11.76, true, 1) -- ~11.76% of subtotal (e.g., R40 on R340 = ~11.76%)
ON CONFLICT DO NOTHING;

-- Frequency discounts
INSERT INTO pricing_rules (rule_type, rule_key, rule_value, percentage, is_active, display_order) VALUES
  ('frequency_discount', 'frequency', 'weekly', 15.00, true, 1), -- 15% off
  ('frequency_discount', 'frequency', 'bi-weekly', 10.00, true, 2), -- 10% off
  ('frequency_discount', 'frequency', 'monthly', 5.00, true, 3) -- 5% off
ON CONFLICT DO NOTHING;

