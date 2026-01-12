import { redirect } from 'next/navigation';
import { CleanerLayoutClient } from './layout-client';
import { getCurrentCleaner } from '../actions';

export const dynamic = 'force-dynamic';

export default async function CleanerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    // Server-side authentication check using cookie-based session
    const cleanerResult = await getCurrentCleaner();
    
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      // Not authenticated - redirect to login
      redirect('/cleaner/login?redirect=/cleaner');
    }

    return <CleanerLayoutClient>{children}</CleanerLayoutClient>;
  } catch (error) {
    // Handle errors
    console.error('Error in cleaner layout:', error);
    redirect('/cleaner/login?redirect=/cleaner');
  }
}
