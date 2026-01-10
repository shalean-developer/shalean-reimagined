-- Seed working hours with 30-minute interval start times (7:00 AM to 12:00 PM)
INSERT INTO working_hours (start_time, end_time, duration_hours, day_of_week, is_active, display_order) VALUES
  ('07:00:00', '10:30:00', 3.5, NULL, true, 1),
  ('07:30:00', '11:00:00', 3.5, NULL, true, 2),
  ('08:00:00', '11:30:00', 3.5, NULL, true, 3),
  ('08:30:00', '12:00:00', 3.5, NULL, true, 4),
  ('09:00:00', '12:30:00', 3.5, NULL, true, 5),
  ('09:30:00', '13:00:00', 3.5, NULL, true, 6),
  ('10:00:00', '13:30:00', 3.5, NULL, true, 7),
  ('10:30:00', '14:00:00', 3.5, NULL, true, 8),
  ('11:00:00', '14:30:00', 3.5, NULL, true, 9),
  ('11:30:00', '15:00:00', 3.5, NULL, true, 10),
  ('12:00:00', '15:30:00', 3.5, NULL, true, 11)
ON CONFLICT DO NOTHING;

-- Also add to home_detail_options for backward compatibility
INSERT INTO home_detail_options (option_type, value, label, display_order, is_active) VALUES
  ('working_hours', '07:00', '07:00', 1, true),
  ('working_hours', '07:30', '07:30', 2, true),
  ('working_hours', '08:00', '08:00', 3, true),
  ('working_hours', '08:30', '08:30', 4, true),
  ('working_hours', '09:00', '09:00', 5, true),
  ('working_hours', '09:30', '09:30', 6, true),
  ('working_hours', '10:00', '10:00', 7, true),
  ('working_hours', '10:30', '10:30', 8, true),
  ('working_hours', '11:00', '11:00', 9, true),
  ('working_hours', '11:30', '11:30', 10, true),
  ('working_hours', '12:00', '12:00', 11, true)
ON CONFLICT DO NOTHING;

