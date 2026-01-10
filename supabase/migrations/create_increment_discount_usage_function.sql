-- Create a function to atomically increment discount code usage
-- This is optional but recommended for better concurrency handling

CREATE OR REPLACE FUNCTION increment_discount_code_usage(code_input TEXT)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE discount_codes
  SET used_count = used_count + 1
  WHERE code = UPPER(code_input)
    AND is_active = true;
END;
$$;

