'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, Users, Calendar, Menu, Settings, BarChart3, LogOut, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

const navItems = [
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
];

const moreMenuItems = [
  {
    title: 'Reports',
    icon: BarChart3,
    href: '/admin/reports',
  },
  {
    title: 'Discount Codes',
    icon: Calendar,
    href: '/admin/discount-codes',
  },
  {
    title: 'Create Cleaner',
    icon: Users,
    href: '/admin/create-cleaner',
  },
];

export function AdminMobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

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

  const handleMenuItemClick = (href: string) => {
    setIsMoreMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden safe-area-inset-bottom">
        <div className="grid grid-cols-4 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== '/admin' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground active:text-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.title}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setIsMoreMenuOpen(true)}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              isMoreMenuOpen
                ? 'text-primary'
                : 'text-muted-foreground active:text-foreground'
            }`}
          >
            <Menu className="w-5 h-5" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>

      {/* More Menu Sheet - Slides from right to left */}
      <Sheet open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
        <SheetContent side="right" className="w-full sm:max-w-sm p-0 [&>button]:hidden">
          <SheetTitle className="sr-only">More Menu</SheetTitle>
          <div className="flex flex-col h-full">
            {/* Close Button Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Shalean Admin</h2>
              <button
                onClick={() => setIsMoreMenuOpen(false)}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-2">
                {moreMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/admin' && pathname.startsWith(item.href));

                  return (
                    <button
                      key={item.href}
                      onClick={() => handleMenuItemClick(item.href)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary-light text-primary'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-base font-medium">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer with Logout */}
            <div className="border-t p-4">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-12 text-base"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
