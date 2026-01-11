import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { CleanerLayoutClient } from './layout-client';
import { getCurrentCleaner } from '../actions';

export const dynamic = 'force-dynamic';

export default async function CleanerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    // Server-side authentication check
    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error('Error getting user in cleaner layout:', error.message);
      redirect('/cleaner/login?redirect=/cleaner');
    }

    if (!user) {
      redirect('/cleaner/login?redirect=/cleaner');
    }

    // Verify user is a cleaner
    const cleanerResult = await getCurrentCleaner();
    if (!cleanerResult.success || !cleanerResult.cleaner) {
      // User is authenticated but not a cleaner - redirect to login
      redirect('/cleaner/login?redirect=/cleaner');
    }

    return <CleanerLayoutClient>{children}</CleanerLayoutClient>;
  } catch (error) {
    // Handle errors from createClient or other operations
    console.error('Error in cleaner layout:', error);
    redirect('/cleaner/login?redirect=/cleaner');
  }
}
