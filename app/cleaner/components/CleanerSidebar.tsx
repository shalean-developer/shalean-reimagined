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
  Calendar,
  User,
  LogOut,
  Home,
  DollarSign,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/cleaner',
  },
  {
    title: 'Bookings',
    icon: Calendar,
    href: '/cleaner/bookings',
  },
  {
    title: 'Schedule',
    icon: Clock,
    href: '/cleaner/schedule',
  },
  {
    title: 'Profile',
    icon: User,
    href: '/cleaner/profile',
  },
  {
    title: 'Earnings',
    icon: DollarSign,
    href: '/cleaner/earnings',
  },
];

export function CleanerSidebar() {
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
      router.push('/cleaner/login');
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
                  (item.href !== '/cleaner' && pathname.startsWith(item.href));
                
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
