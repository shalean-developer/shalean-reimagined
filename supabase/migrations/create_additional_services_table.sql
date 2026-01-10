-- Create additional_services table for optional services
CREATE TABLE IF NOT EXISTS additional_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  requires_quantity BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_additional_services_is_active ON additional_services(is_active);
CREATE INDEX IF NOT EXISTS idx_additional_services_display_order ON additional_services(display_order);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_additional_services_updated_at BEFORE UPDATE ON additional_services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

