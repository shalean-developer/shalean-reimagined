-- Create pricing_rules table for configurable pricing
CREATE TABLE IF NOT EXISTS pricing_rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rule_type TEXT NOT NULL, -- 'base_price', 'bedroom', 'bathroom', 'additional_service', 'service_fee', 'frequency_discount', 'fitted_room', 'loose_carpet'
  service_id UUID REFERENCES services(id),
  additional_service_id UUID REFERENCES additional_services(id),
  rule_key TEXT, -- e.g., 'bedroom_count', 'bathroom_count', service identifier
  rule_value TEXT, -- e.g., '2', '3', 'weekly', 'bi-weekly'
  price DECIMAL(10, 2),
  percentage DECIMAL(5, 2), -- For percentage-based pricing
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_pricing_rules_rule_type ON pricing_rules(rule_type);
CREATE INDEX IF NOT EXISTS idx_pricing_rules_service_id ON pricing_rules(service_id);
CREATE INDEX IF NOT EXISTS idx_pricing_rules_additional_service_id ON pricing_rules(additional_service_id);
CREATE INDEX IF NOT EXISTS idx_pricing_rules_is_active ON pricing_rules(is_active);
CREATE INDEX IF NOT EXISTS idx_pricing_rules_rule_type_active ON pricing_rules(rule_type, is_active);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_pricing_rules_updated_at BEFORE UPDATE ON pricing_rules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

