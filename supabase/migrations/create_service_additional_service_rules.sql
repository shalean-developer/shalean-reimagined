-- Create service_additional_service_rules table to define which additional services are available for each main service
CREATE TABLE IF NOT EXISTS service_additional_service_rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  additional_service_id UUID NOT NULL REFERENCES additional_services(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(service_id, additional_service_id)
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_service_rules_service_id ON service_additional_service_rules(service_id);
CREATE INDEX IF NOT EXISTS idx_service_rules_additional_service_id ON service_additional_service_rules(additional_service_id);

