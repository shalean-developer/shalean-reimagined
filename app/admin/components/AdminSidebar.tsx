'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  BarChart3,
  Ticket,
  UserPlus,
  LogOut,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/admin',
  },
  {
    title: 'Users',
    icon: Users,
    href: '/admin/users',
  },
  {
    title: 'Bookings',
    icon: Calendar,
    href: '/admin/bookings',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
  {
    title: 'Reports',
    icon: BarChart3,
    href: '/admin/reports',
  },
  {
    title: 'Discount Codes',
    icon: Ticket,
    href: '/admin/discount-codes',
  },
  {
    title: 'Create Cleaner',
    icon: UserPlus,
    href: '/admin/create-cleaner',
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        toast.error('Failed to sign out');
        return;
      }

      toast.success('Signed out successfully');
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred while signing out');
    }
  };

  return (
    <Sidebar className="!top-16 !h-[calc(100vh-4rem)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href ||
                  (item.href !== '/admin' && pathname.startsWith(item.href));

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      size="lg"
                      className={`[&>svg]:!size-6 ${isActive ? 'bg-primary-light text-primary' : ''}`}
                    >
                      <Link href={item.href}>
                        <Icon className="!w-6 !h-6" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="!w-6 !h-6 mr-2" />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
