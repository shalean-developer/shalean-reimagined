-- Calculate initial reliability scores for all existing cleaners
-- This migration updates booking metrics and calculates reliability scores based on booking history

-- First, update booking metrics for each cleaner based on their booking history
UPDATE cleaners c
SET 
  total_bookings = COALESCE((
    SELECT COUNT(*)
    FROM bookings b
    WHERE b.preferred_cleaner_id = c.id
  ), 0),
  completed_bookings = COALESCE((
    SELECT COUNT(*)
    FROM bookings b
    WHERE b.preferred_cleaner_id = c.id
      AND b.status = 'completed'
  ), 0),
  on_time_bookings = COALESCE((
    SELECT COUNT(*)
    FROM bookings b
    WHERE b.preferred_cleaner_id = c.id
      AND b.status = 'completed'
      -- For now, assume all completed bookings were on-time
      -- In a real system, you'd have an on_time field or arrival_time tracking
  ), 0);

-- Calculate and update reliability scores for all cleaners
UPDATE cleaners
SET reliability_score = calculate_cleaner_reliability_score(id);

-- For cleaners with no bookings, set default score of 50.00
UPDATE cleaners
SET reliability_score = 50.00
WHERE total_bookings = 0 OR reliability_score IS NULL;

