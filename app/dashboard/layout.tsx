import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { DashboardLayoutClient } from './layout-client';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    // Server-side authentication check (backup protection)
    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error('Error getting user in dashboard layout:', error.message);
      redirect('/login?redirect=/dashboard');
    }

    if (!user) {
      redirect('/login?redirect=/dashboard');
    }

    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
  } catch (error) {
    // Handle errors from createClient or other operations
    console.error('Error in dashboard layout:', error);
    // redirect() throws internally, which Next.js handles
    // This catch prevents the error from bubbling up as an unhandled exception
    redirect('/login?redirect=/dashboard');
  }
}

