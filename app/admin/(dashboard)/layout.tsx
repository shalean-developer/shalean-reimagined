import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { AdminLayoutClient } from './layout-client';
import { getCurrentAdmin } from '../actions';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardLayout({
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
      console.error('Error getting user in admin layout:', error.message);
      redirect('/admin/login?redirect=/admin');
    }

    if (!user) {
      redirect('/admin/login?redirect=/admin');
    }

    // Verify user is an admin
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success || !adminResult.admin) {
      // User is authenticated but not an admin - redirect to login
      redirect('/admin/login?redirect=/admin');
    }

    return <AdminLayoutClient>{children}</AdminLayoutClient>;
  } catch (error) {
    // Handle errors from createClient or other operations
    console.error('Error in admin layout:', error);
    redirect('/admin/login?redirect=/admin');
  }
}
