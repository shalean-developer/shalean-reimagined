/**
 * Calculate all booking dates for the current month based on frequency
 * @param startDate - The initial booking date selected by the user
 * @param frequency - 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
 * @returns Array of dates for bookings in the current month
 */
export function calculateBookingDatesForMonth(
  startDate: Date,
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
): Date[] {
  const dates: Date[] = [];
  const currentDate = new Date(startDate);
  
  // Get the month and year of the start date
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  
  // Get the last day of the month
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  
  switch (frequency) {
    case 'one-time':
      // Return only the start date
      dates.push(new Date(startDate));
      break;
      
    case 'weekly':
      // Find all occurrences of the same day of week in the month
      const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const startDay = currentDate.getDate();
      
      // Start from the selected date
      let weeklyDate = new Date(year, month, startDay);
      
      // Add all remaining occurrences in the month
      while (weeklyDate.getMonth() === month && weeklyDate.getDate() <= lastDayOfMonth) {
        dates.push(new Date(weeklyDate));
        weeklyDate.setDate(weeklyDate.getDate() + 7); // Add 7 days
      }
      break;
      
    case 'bi-weekly':
      // Find occurrences every 2 weeks in the month
      const biWeeklyStartDay = currentDate.getDate();
      let biWeeklyDate = new Date(year, month, biWeeklyStartDay);
      
      // Add all occurrences in the month (every 2 weeks)
      while (biWeeklyDate.getMonth() === month && biWeeklyDate.getDate() <= lastDayOfMonth) {
        dates.push(new Date(biWeeklyDate));
        biWeeklyDate.setDate(biWeeklyDate.getDate() + 14); // Add 14 days
      }
      break;
      
    case 'monthly':
      // Return only the start date (one booking per month)
      dates.push(new Date(startDate));
      break;
      
    default:
      dates.push(new Date(startDate));
  }
  
  return dates;
}

/**
 * Calculate the next booking date for auto-creation
 * @param lastDate - The last booking date in the current series
 * @param frequency - 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
 * @returns The next booking date
 */
export function calculateNextBookingDate(
  lastDate: Date,
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly'
): Date {
  const nextDate = new Date(lastDate);
  
  switch (frequency) {
    case 'one-time':
      // Should not be called for one-time, but return next month just in case
      nextDate.setMonth(nextDate.getMonth() + 1);
      break;
      
    case 'weekly':
      // Next booking is 1 week from last date, but we want first of next month
      // So calculate first occurrence of next month
      nextDate.setMonth(nextDate.getMonth() + 1);
      // Keep the same day of week - find first occurrence in next month
      const dayOfWeek = lastDate.getDay();
      const dayOfMonth = lastDate.getDate();
      
      // Start from the 1st of next month
      nextDate.setDate(1);
      
      // Find the first occurrence of the same day of week
      while (nextDate.getDay() !== dayOfWeek) {
        nextDate.setDate(nextDate.getDate() + 1);
      }
      break;
      
    case 'bi-weekly':
      // Next booking is 2 weeks from last date, but we want first of next month
      // Calculate first occurrence in next month (same day of week)
      nextDate.setMonth(nextDate.getMonth() + 1);
      const biWeeklyDayOfWeek = lastDate.getDay();
      nextDate.setDate(1);
      
      // Find the first occurrence of the same day of week
      while (nextDate.getDay() !== biWeeklyDayOfWeek) {
        nextDate.setDate(nextDate.getDate() + 1);
      }
      break;
      
    case 'monthly':
      // Next booking is same day next month
      nextDate.setMonth(nextDate.getMonth() + 1);
      // Handle edge case where day doesn't exist in next month (e.g., Jan 31 -> Feb 28/29)
      const originalDay = lastDate.getDate();
      const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
      nextDate.setDate(Math.min(originalDay, daysInNextMonth));
      break;
      
    default:
      nextDate.setMonth(nextDate.getMonth() + 1);
  }
  
  return nextDate;
}

/**
 * Format date to YYYY-MM-DD string for database storage
 */
export function formatDateForDB(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

