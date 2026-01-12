'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
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
  Building2,
  FolderKanban,
  Briefcase,
  CreditCard,
  Handshake,
  Grid3x3,
  UserCircle,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getCurrentAdmin } from '../actions';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Grid3x3,
    href: '/admin',
  },
  {
    title: 'Manage Clients',
    icon: Users,
    href: '/admin/users',
  },
  {
    title: 'Manage Providers',
    icon: Building2,
    href: '/admin/create-cleaner',
  },
  {
    title: 'Bookings',
    icon: FolderKanban,
    href: '/admin/bookings',
  },
  {
    title: 'Services',
    icon: Briefcase,
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
    title: 'Manage Transactions',
    icon: CreditCard,
    href: '/admin/payments',
  },
  {
    title: 'ShaleanCred Management',
    icon: Wallet,
    href: '/admin/shaleancred',
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [admin, setAdmin] = useState<{
    id: string;
    email: string;
    name?: string;
  } | null>(null);

  useEffect(() => {
    const loadAdminProfile = async () => {
      try {
        const adminResult = await getCurrentAdmin();
        if (adminResult.success && adminResult.admin) {
          setAdmin(adminResult.admin);
        }
      } catch (error) {
        console.error('Error loading admin profile:', error);
      }
    };

    loadAdminProfile();
  }, []);

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
    <Sidebar className="!top-16 !h-[calc(100vh-4rem)] bg-white">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href ||
                  (item.href !== '/admin' && pathname.startsWith(item.href));

                return (
                  <SidebarMenuItem key={`${item.href}-${index}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      size="lg"
                      className={`
                        [&>svg]:!size-5
                        rounded-lg
                        transition-colors
                        ${
                          isActive
                            ? 'bg-[#f59e0b]/10 text-[#f59e0b] [&>svg]:text-[#f59e0b]'
                            : 'text-gray-700 [&>svg]:text-gray-500 hover:bg-gray-50'
                        }
                      `}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                        <Icon className="!w-5 !h-5" />
                        <span className="font-medium">{item.title}</span>
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
