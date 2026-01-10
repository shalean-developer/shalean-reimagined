-- Create cleaning_equipment table for storing equipment and supplies provided
CREATE TABLE IF NOT EXISTS cleaning_equipment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_cleaning_equipment_is_active ON cleaning_equipment(is_active);
CREATE INDEX IF NOT EXISTS idx_cleaning_equipment_display_order ON cleaning_equipment(display_order);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_cleaning_equipment_updated_at BEFORE UPDATE ON cleaning_equipment
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

