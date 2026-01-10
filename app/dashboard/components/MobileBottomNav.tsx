'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, Calendar, User, Menu, MapPin, Ticket, Share2, Settings, LogOut, X, CircleDollarSign } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navItems = [
  {
    title: 'Home',
    icon: Home,
    href: '/dashboard',
  },
  {
    title: 'Bookings',
    icon: Calendar,
    href: '/dashboard/bookings',
  },
  {
    title: 'Profile',
    icon: User,
    href: '/dashboard/profile',
  },
];

const moreMenuItems = [
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
  {
    title: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
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
              (item.href !== '/dashboard' && pathname.startsWith(item.href));

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
              <h2 className="text-lg font-semibold">Shalean</h2>
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
                    (item.href !== '/dashboard' && pathname.startsWith(item.href));

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

