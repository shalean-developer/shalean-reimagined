-- Seed discount codes for testing
-- This file inserts sample discount codes with various configurations

INSERT INTO discount_codes (
  code,
  discount_type,
  discount_value,
  max_discount_amount,
  min_purchase_amount,
  max_uses,
  used_count,
  valid_from,
  valid_until,
  is_active,
  created_at,
  updated_at
) VALUES
  -- Active percentage discount codes
  (
    'SAVE10',
    'percentage',
    10.00,
    NULL, -- No max discount amount
    NULL, -- No min purchase amount
    100,  -- Max 100 uses
    0,    -- Not used yet
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '90 days',
    true,
    NOW(),
    NOW()
  ),
  (
    'WELCOME20',
    'percentage',
    20.00,
    200.00, -- Max discount of R200
    NULL,   -- No min purchase amount
    50,     -- Max 50 uses
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '60 days',
    true,
    NOW(),
    NOW()
  ),
  (
    'SUMMER15',
    'percentage',
    15.00,
    NULL,
    500.00, -- Min purchase of R500
    200,    -- Max 200 uses
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '30 days',
    true,
    NOW(),
    NOW()
  ),
  -- Active fixed amount discount codes
  (
    'FLAT50',
    'fixed',
    50.00,
    NULL, -- Not applicable for fixed
    NULL,
    NULL, -- Unlimited uses
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '120 days',
    true,
    NOW(),
    NOW()
  ),
  (
    'CLEAN100',
    'fixed',
    100.00,
    NULL,
    300.00, -- Min purchase of R300
    25,     -- Max 25 uses
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '45 days',
    true,
    NOW(),
    NOW()
  ),
  (
    'FIRST25',
    'fixed',
    25.00,
    NULL,
    NULL,
    500,    -- Max 500 uses
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '180 days',
    true,
    NOW(),
    NOW()
  ),
  -- Expired discount codes (for testing expired handling)
  (
    'EXPIRED10',
    'percentage',
    10.00,
    NULL,
    NULL,
    100,
    15,     -- Already used 15 times
    CURRENT_DATE - INTERVAL '30 days',
    CURRENT_DATE - INTERVAL '1 day',
    true,   -- Still active but expired
    NOW(),
    NOW()
  ),
  -- Maxed out discount code
  (
    'MAXEDOUT',
    'percentage',
    15.00,
    NULL,
    NULL,
    10,     -- Max 10 uses
    10,     -- Already used 10 times
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '60 days',
    true,
    NOW(),
    NOW()
  ),
  -- Inactive discount code
  (
    'INACTIVE',
    'fixed',
    30.00,
    NULL,
    NULL,
    50,
    5,      -- Used 5 times
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '90 days',
    false,  -- Inactive
    NOW(),
    NOW()
  ),
  -- Future discount code (not yet valid)
  (
    'FUTURE20',
    'percentage',
    20.00,
    150.00,
    NULL,
    100,
    0,
    CURRENT_DATE + INTERVAL '7 days',
    CURRENT_DATE + INTERVAL '90 days',
    true,
    NOW(),
    NOW()
  ),
  -- High value discount for large purchases
  (
    'PREMIUM25',
    'percentage',
    25.00,
    500.00, -- Max discount of R500
    1000.00, -- Min purchase of R1000
    NULL,   -- Unlimited uses
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '365 days',
    true,
    NOW(),
    NOW()
  ),
  -- Small fixed discount for testing
  (
    'TINY10',
    'fixed',
    10.00,
    NULL,
    NULL,
    NULL,   -- Unlimited
    0,
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '365 days',
    true,
    NOW(),
    NOW()
  )
ON CONFLICT (code) DO NOTHING;

