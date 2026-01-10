-- Seed carpet pricing rules for fitted rooms and loose carpets/rugs
-- These are per-unit prices that will be multiplied by the quantity

-- Fitted room pricing (per room)
-- Delete any existing fitted_room rules to avoid duplicates
DELETE FROM pricing_rules WHERE rule_type = 'fitted_room';

INSERT INTO pricing_rules (rule_type, rule_key, price, is_active, display_order) VALUES
  ('fitted_room', 'per_room', 150.00, true, 1) -- R150 per fitted room
ON CONFLICT DO NOTHING;

-- Loose carpet/rug pricing (per carpet/rug)
-- Delete any existing loose_carpet rules to avoid duplicates
DELETE FROM pricing_rules WHERE rule_type = 'loose_carpet';

INSERT INTO pricing_rules (rule_type, rule_key, price, is_active, display_order) VALUES
  ('loose_carpet', 'per_carpet', 120.00, true, 1) -- R120 per loose carpet/rug
ON CONFLICT DO NOTHING;

