-- Create quotes table for storing quote form data
CREATE TABLE IF NOT EXISTS quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft', -- 'draft' or 'submitted'
  form_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_quotes_email ON quotes(email);
CREATE INDEX IF NOT EXISTS idx_quotes_email_status ON quotes(email, status);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_quotes_updated_at BEFORE UPDATE ON quotes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

