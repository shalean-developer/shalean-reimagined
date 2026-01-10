-- Create discount_codes table for promotional codes
CREATE TABLE IF NOT EXISTS discount_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  discount_type TEXT NOT NULL, -- 'percentage' or 'fixed'
  discount_value DECIMAL(10, 2) NOT NULL,
  max_discount_amount DECIMAL(10, 2), -- For percentage discounts
  min_purchase_amount DECIMAL(10, 2),
  max_uses INTEGER,
  used_count INTEGER NOT NULL DEFAULT 0,
  valid_from DATE NOT NULL,
  valid_until DATE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_discount_codes_code ON discount_codes(code);
CREATE INDEX IF NOT EXISTS idx_discount_codes_is_active ON discount_codes(is_active);
CREATE INDEX IF NOT EXISTS idx_discount_codes_valid_dates ON discount_codes(valid_from, valid_until);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_discount_codes_updated_at BEFORE UPDATE ON discount_codes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

