-- Seed data for cleaning equipment
INSERT INTO cleaning_equipment (name, display_order, is_active) VALUES
  ('Vacuum cleaner', 1, true),
  ('Mop and bucket', 2, true),
  ('Cleaning cloths & microfiber towels', 3, true),
  ('All-purpose cleaner', 4, true),
  ('Glass cleaner', 5, true),
  ('Disinfectant', 6, true),
  ('Broom and dustpan', 7, true),
  ('Trash bags', 8, true),
  ('Rubber gloves', 9, true),
  ('Scrub brushes', 10, true),
  ('Dusting tools', 11, true),
  ('Steam cleaner (if needed)', 12, true)
ON CONFLICT DO NOTHING;

