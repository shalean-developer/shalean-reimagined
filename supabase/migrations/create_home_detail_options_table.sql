-- Create home_detail_options table for bedrooms, bathrooms, carpet types, and room status options
CREATE TABLE IF NOT EXISTS home_detail_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  option_type TEXT NOT NULL, -- 'bedrooms', 'bathrooms', 'carpet_type', 'room_status'
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_home_detail_options_type ON home_detail_options(option_type);
CREATE INDEX IF NOT EXISTS idx_home_detail_options_type_active ON home_detail_options(option_type, is_active);
CREATE INDEX IF NOT EXISTS idx_home_detail_options_display_order ON home_detail_options(display_order);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_home_detail_options_updated_at BEFORE UPDATE ON home_detail_options
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

