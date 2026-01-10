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
  Settings,
  LogOut,
  Home,
  MapPin,
  Ticket,
  Share2,
  CircleDollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'Home',
    icon: Home,
    href: '/dashboard',
  },
  {
    title: 'Profile',
    icon: User,
    href: '/dashboard/profile',
  },
  {
    title: 'Bookings',
    icon: Calendar,
    href: '/dashboard/bookings',
  },
  {
    title: 'Locations',
    icon: MapPin,
    href: '/dashboard/locations',
  },
  {
    title: 'ShaleanCred',
    icon: CircleDollarSign,
    href: '/dashboard/shaleancred',
  },
  {
    title: 'Vouchers',
    icon: Ticket,
    href: '/dashboard/vouchers',
  },
  {
    title: 'Refer & Earn',
    icon: Share2,
    href: '/dashboard/refer',
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="!top-16 !h-[calc(100vh-4rem)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || 
                  (item.href !== '/dashboard' && pathname.startsWith(item.href));
                
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
          onClick={() => {
            // Handle logout - redirect to home for now
            window.location.href = '/';
          }}
        >
          <LogOut className="!w-6 !h-6 mr-2" />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

