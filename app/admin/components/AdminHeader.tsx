'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { getCurrentAdmin } from '../actions';

export function AdminHeader() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [admin, setAdmin] = useState<{
    id: string;
    email: string;
    name?: string;
  } | null>(null);
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    setMounted(true);

    const loadAdminProfile = async () => {
      try {
        const adminResult = await getCurrentAdmin();
        if (adminResult.success && adminResult.admin) {
          setAdmin(adminResult.admin);
          // Generate initials from email or name
          if (adminResult.admin.name) {
            const nameParts = adminResult.admin.name.trim().split(/\s+/);
            if (nameParts.length >= 2) {
              setUserInitials(
                (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
              );
            } else if (nameParts.length === 1 && nameParts[0].length >= 2) {
              setUserInitials(nameParts[0].substring(0, 2).toUpperCase());
            } else {
              setUserInitials('A');
            }
          } else if (adminResult.admin.email) {
            const emailParts = adminResult.admin.email.split('@')[0].split(/[._-]/);
            if (emailParts.length >= 2) {
              setUserInitials(
                (emailParts[0][0] + emailParts[1][0]).toUpperCase()
              );
            } else {
              setUserInitials(adminResult.admin.email.substring(0, 2).toUpperCase());
            }
          } else {
            setUserInitials('A');
          }
        }
      } catch (error) {
        console.error('Error loading admin profile:', error);
      }
    };

    loadAdminProfile();

    // Listen for auth changes
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async () => {
      // Reload admin profile when auth state changes
      await loadAdminProfile();
    });

    return () => subscription.unsubscribe();
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
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 w-full max-w-full overflow-x-hidden">
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink-0">
        <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Shalean Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <span className="font-bold text-base md:text-lg truncate">Shalean Admin</span>
      </div>

      {/* Profile icon on right */}
      <div className="flex items-center ml-auto">
        {mounted ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 md:h-10 md:w-10 rounded-full">
                <Avatar className="h-9 w-9 md:h-10 md:w-10">
                  <AvatarFallback className="text-xs md:text-sm">{userInitials || 'A'}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {admin?.name || 'Admin Account'}
              </DropdownMenuLabel>
              {admin?.email && (
                <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                  {admin.email}
                </DropdownMenuLabel>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="ghost" className="relative h-9 w-9 md:h-10 md:w-10 rounded-full" disabled>
            <Avatar className="h-9 w-9 md:h-10 md:w-10">
              <AvatarFallback className="text-xs md:text-sm">A</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </div>
    </header>
  );
}
