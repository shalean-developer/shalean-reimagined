import { Cleaner, CleanerWithAvailability } from '@/types/booking';

export type SortCriteria = 'best-match' | 'highest-rated' | 'most-reliable' | 'most-experienced';

/**
 * Calculate reliability score from booking metrics
 * Formula:
 * - Completion Rate (40%): (completed_bookings / total_bookings) * 40
 * - On-Time Rate (30%): (on_time_bookings / total_bookings) * 30
 * - Rating Factor (20%): (rating / 5.0) * 20
 * - Booking Volume (10%): min(total_bookings / 50, 1) * 10
 */
export function calculateReliabilityScore(cleaner: Cleaner): number {
  const totalBookings = cleaner.total_bookings || 0;
  const completedBookings = cleaner.completed_bookings || 0;
  const onTimeBookings = cleaner.on_time_bookings || 0;
  const rating = cleaner.rating || 0;

  // If no bookings, return default score of 50
  if (totalBookings === 0) {
    return 50.0;
  }

  // Calculate completion rate score (40% weight)
  const completionRateScore = (completedBookings / totalBookings) * 40.0;

  // Calculate on-time rate score (30% weight)
  const onTimeRateScore = (onTimeBookings / totalBookings) * 30.0;

  // Calculate rating score (20% weight)
  const ratingScore = (rating / 5.0) * 20.0;

  // Calculate volume score (10% weight) - normalized to max 50 bookings
  const volumeScore = Math.min(totalBookings / 50.0, 1.0) * 10.0;

  // Calculate final score
  let finalScore = completionRateScore + onTimeRateScore + ratingScore + volumeScore;

  // Ensure score is between 0 and 100
  finalScore = Math.max(0.0, Math.min(100.0, finalScore));

  return Math.round(finalScore * 100) / 100; // Round to 2 decimal places
}

/**
 * Format reliability score for display
 */
export function formatReliabilityScore(score: number | null | undefined): string {
  if (score === null || score === undefined) {
    return 'N/A';
  }
  return `${score.toFixed(0)}%`;
}

/**
 * Sort cleaners by selected criteria
 */
export function sortCleanersByCriteria(
  cleaners: CleanerWithAvailability[],
  criteria: SortCriteria
): CleanerWithAvailability[] {
  const sorted = [...cleaners];

  switch (criteria) {
    case 'best-match':
      // Sort by: reliability_score (60%) + rating (40%)
      sorted.sort((a, b) => {
        const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
        const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
        return scoreB - scoreA;
      });
      break;

    case 'highest-rated':
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;

    case 'most-reliable':
      sorted.sort((a, b) => (b.reliability_score || 0) - (a.reliability_score || 0));
      break;

    case 'most-experienced':
      sorted.sort((a, b) => (b.years_experience || 0) - (a.years_experience || 0));
      break;

    default:
      // Default to best-match
      sorted.sort((a, b) => {
        const scoreA = (a.reliability_score || 0) * 0.6 + (a.rating || 0) * 0.4;
        const scoreB = (b.reliability_score || 0) * 0.6 + (b.rating || 0) * 0.4;
        return scoreB - scoreA;
      });
  }

  return sorted;
}

/**
 * Calculate completion rate for a cleaner
 */
export function calculateCompletionRate(cleaner: Cleaner): number {
  const total = cleaner.total_bookings || 0;
  const completed = cleaner.completed_bookings || 0;
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

/**
 * Calculate on-time rate for a cleaner
 */
export function calculateOnTimeRate(cleaner: Cleaner): number {
  const total = cleaner.total_bookings || 0;
  const onTime = cleaner.on_time_bookings || 0;
  if (total === 0) return 0;
  return Math.round((onTime / total) * 100);
}

