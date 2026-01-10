-- Create function to calculate and update reliability score for a cleaner
-- Reliability Score Formula:
-- - Completion Rate (40%): (completed_bookings / total_bookings) * 40
-- - On-Time Rate (30%): (on_time_bookings / total_bookings) * 30
-- - Rating Factor (20%): (rating / 5.0) * 20
-- - Booking Volume (10%): min(total_bookings / 50, 1) * 10

CREATE OR REPLACE FUNCTION calculate_cleaner_reliability_score(cleaner_id UUID)
RETURNS DECIMAL(5,2)
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  total_bookings_count INTEGER;
  completed_bookings_count INTEGER;
  on_time_bookings_count INTEGER;
  cleaner_rating DECIMAL(3,2);
  completion_rate_score DECIMAL(5,2);
  on_time_rate_score DECIMAL(5,2);
  rating_score DECIMAL(5,2);
  volume_score DECIMAL(5,2);
  final_score DECIMAL(5,2);
BEGIN
  -- Get cleaner's booking metrics
  SELECT 
    COALESCE(total_bookings, 0),
    COALESCE(completed_bookings, 0),
    COALESCE(on_time_bookings, 0),
    COALESCE(rating, 0.0)
  INTO 
    total_bookings_count,
    completed_bookings_count,
    on_time_bookings_count,
    cleaner_rating
  FROM cleaners
  WHERE id = cleaner_id;

  -- If no bookings, return default score of 50.00
  IF total_bookings_count = 0 THEN
    RETURN 50.00;
  END IF;

  -- Calculate completion rate score (40% weight)
  completion_rate_score := (completed_bookings_count::DECIMAL / total_bookings_count::DECIMAL) * 40.0;

  -- Calculate on-time rate score (30% weight)
  on_time_rate_score := (on_time_bookings_count::DECIMAL / total_bookings_count::DECIMAL) * 30.0;

  -- Calculate rating score (20% weight)
  rating_score := (cleaner_rating / 5.0) * 20.0;

  -- Calculate volume score (10% weight) - normalized to max 50 bookings
  volume_score := LEAST(total_bookings_count::DECIMAL / 50.0, 1.0) * 10.0;

  -- Calculate final score
  final_score := completion_rate_score + on_time_rate_score + rating_score + volume_score;

  -- Ensure score is between 0 and 100
  final_score := GREATEST(0.00, LEAST(100.00, final_score));

  RETURN ROUND(final_score, 2);
END;
$$;

-- Create function to update reliability score for a cleaner
CREATE OR REPLACE FUNCTION update_cleaner_reliability_score(cleaner_id UUID)
RETURNS VOID AS $$
DECLARE
  calculated_score DECIMAL(5,2);
BEGIN
  calculated_score := calculate_cleaner_reliability_score(cleaner_id);
  
  UPDATE cleaners
  SET reliability_score = calculated_score
  WHERE id = cleaner_id;
END;
$$ LANGUAGE plpgsql;

