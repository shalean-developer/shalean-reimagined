-- Seed data for quote form

-- Insert main services
INSERT INTO services (name, icon_name, display_order, is_active) VALUES
  ('Standard Cleaning', 'Home', 1, true),
  ('Deep Cleaning', 'Star', 2, true),
  ('Airbnb Cleaning', 'Calendar', 3, true),
  ('Move In/Out', 'Building2', 4, true),
  ('Carpet Cleaning', 'Armchair', 5, true)
ON CONFLICT DO NOTHING;

-- Insert additional services
INSERT INTO additional_services (name, icon_name, display_order, requires_quantity, is_active) VALUES
  ('Balcony Cleaning', 'Grid3X3', 1, false, true),
  ('Ceiling Cleaning', 'Layers', 2, true, true),
  ('Couch Cleaning', 'Armchair', 3, true, true),
  ('Garage Cleaning', 'Home', 4, true, true),
  ('Inside Cabinets', 'LayoutGrid', 5, false, true),
  ('Inside Fridge', 'Refrigerator', 6, false, true),
  ('Inside Oven', 'CookingPot', 7, false, true),
  ('Interior Walls', 'Layers', 8, false, true),
  ('Interior Windows', 'LayoutGrid', 9, false, true),
  ('Ironing', 'Shirt', 10, false, true),
  ('Laundry', 'WashingMachine', 11, false, true),
  ('Mattress Cleaning', 'Bed', 12, true, true),
  ('Outside Window', 'Wind', 13, false, true),
  ('Carpet Cleaning', 'Armchair', 14, true, true)
ON CONFLICT DO NOTHING;

-- Insert service-to-additional-service rules
-- Carpet service: couch, mattress
INSERT INTO service_additional_service_rules (service_id, additional_service_id)
SELECT 
  s.id,
  a.id
FROM services s
CROSS JOIN additional_services a
WHERE s.name = 'Carpet Cleaning'
  AND a.name IN ('Couch Cleaning', 'Mattress Cleaning')
ON CONFLICT DO NOTHING;

-- Standard and Airbnb services: cabinets, fridge, oven, walls, windows, ironing, laundry
INSERT INTO service_additional_service_rules (service_id, additional_service_id)
SELECT 
  s.id,
  a.id
FROM services s
CROSS JOIN additional_services a
WHERE s.name IN ('Standard Cleaning', 'Airbnb Cleaning')
  AND a.name IN ('Inside Cabinets', 'Inside Fridge', 'Inside Oven', 'Interior Walls', 'Interior Windows', 'Ironing', 'Laundry')
ON CONFLICT DO NOTHING;

-- Deep and Move services: balcony, ceiling, couch, garage, mattress, outside-windows, carpet-cleaning
INSERT INTO service_additional_service_rules (service_id, additional_service_id)
SELECT 
  s.id,
  a.id
FROM services s
CROSS JOIN additional_services a
WHERE s.name IN ('Deep Cleaning', 'Move In/Out')
  AND a.name IN ('Balcony Cleaning', 'Ceiling Cleaning', 'Couch Cleaning', 'Garage Cleaning', 'Mattress Cleaning', 'Outside Window', 'Carpet Cleaning')
ON CONFLICT DO NOTHING;

-- Insert home detail options for bedrooms (0-6)
INSERT INTO home_detail_options (option_type, value, label, display_order, is_active) VALUES
  ('bedrooms', '0', '0 Bedrooms', 0, true),
  ('bedrooms', '1', '1 Bedroom', 1, true),
  ('bedrooms', '2', '2 Bedrooms', 2, true),
  ('bedrooms', '3', '3 Bedrooms', 3, true),
  ('bedrooms', '4', '4 Bedrooms', 4, true),
  ('bedrooms', '5', '5 Bedrooms', 5, true),
  ('bedrooms', '6', '6 Bedrooms', 6, true)
ON CONFLICT DO NOTHING;

-- Insert home detail options for bathrooms (1-5)
INSERT INTO home_detail_options (option_type, value, label, display_order, is_active) VALUES
  ('bathrooms', '1', '1 Bathroom', 1, true),
  ('bathrooms', '2', '2 Bathrooms', 2, true),
  ('bathrooms', '3', '3 Bathrooms', 3, true),
  ('bathrooms', '4', '4 Bathrooms', 4, true),
  ('bathrooms', '5', '5 Bathrooms', 5, true)
ON CONFLICT DO NOTHING;

-- Insert home detail options for carpet types
INSERT INTO home_detail_options (option_type, value, label, display_order, is_active) VALUES
  ('carpet_type', 'fitted', 'Fitted Carpets', 1, true),
  ('carpet_type', 'loose', 'Loose Carpets/Rugs', 2, true)
ON CONFLICT DO NOTHING;

-- Insert home detail options for room status
INSERT INTO home_detail_options (option_type, value, label, display_order, is_active) VALUES
  ('room_status', 'empty', 'Room is Empty', 1, true),
  ('room_status', 'has-property', 'Has Property (Needs to be Moved)', 2, true)
ON CONFLICT DO NOTHING;

