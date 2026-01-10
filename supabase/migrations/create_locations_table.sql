-- Create locations table for storing customer saved locations
CREATE TABLE IF NOT EXISTS locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  nickname TEXT NOT NULL,
  address TEXT NOT NULL,
  apt_unit TEXT,
  suburb TEXT NOT NULL,
  city TEXT NOT NULL,
  postal_code TEXT,
  is_default BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_locations_customer_email ON locations(customer_email);
CREATE INDEX IF NOT EXISTS idx_locations_customer_phone ON locations(customer_phone);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_locations_updated_at BEFORE UPDATE ON locations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

