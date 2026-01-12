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
import { toast } from 'sonner';
import { getCurrentCleaner } from '../actions';
import { Cleaner } from '@/types/booking';
import { NotificationBell } from '@/components/NotificationBell';

export function CleanerHeader() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    setMounted(true);
    
    const loadCleanerProfile = async () => {
      try {
        const cleanerResult = await getCurrentCleaner();
        if (cleanerResult.success && cleanerResult.cleaner) {
          setCleaner(cleanerResult.cleaner);
          // Generate initials from cleaner name
          const nameParts = cleanerResult.cleaner.name.trim().split(/\s+/);
          if (nameParts.length >= 2) {
            setUserInitials(
              (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
            );
          } else if (nameParts.length === 1 && nameParts[0].length >= 2) {
            setUserInitials(nameParts[0].substring(0, 2).toUpperCase());
          } else {
            setUserInitials('C');
          }
        }
      } catch (error) {
        console.error('Error loading cleaner profile:', error);
      }
    };

    loadCleanerProfile();

    // Note: Session management is now cookie-based, so we don't need auth state listeners
    // The profile will be reloaded on page refresh/navigation
  }, []);

  const handleLogout = async () => {
    try {
      // Call logout API to clear session cookie
      const response = await fetch('/api/cleaner/logout', {
        method: 'POST',
      });

      if (!response.ok) {
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
        <span className="font-bold text-base md:text-lg truncate">Shalean Cleaner</span>
      </div>

      {/* Profile icon on right */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        {/* Notification Bell */}
        <NotificationBell userType="cleaner" />

        {mounted ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 md:h-10 md:w-10 rounded-full">
                <Avatar className="h-9 w-9 md:h-10 md:w-10">
                  {(cleaner?.avatar_url || cleaner?.photo_url) && (
                    <AvatarImage 
                      src={cleaner.avatar_url || cleaner.photo_url || ''} 
                      alt={cleaner?.name || 'Cleaner'}
                      className="object-cover"
                    />
                  )}
                  <AvatarFallback className="text-xs md:text-sm">{userInitials || 'C'}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {cleaner?.name || 'Cleaner Account'}
              </DropdownMenuLabel>
              {cleaner?.phone && (
                <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                  {cleaner.phone}
                </DropdownMenuLabel>
              )}
              {cleaner?.rating && (
                <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                  Rating: {cleaner.rating.toFixed(1)} ⭐
                </DropdownMenuLabel>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="/cleaner/profile">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="ghost" className="relative h-9 w-9 md:h-10 md:w-10 rounded-full" disabled>
            <Avatar className="h-9 w-9 md:h-10 md:w-10">
              <AvatarFallback className="text-xs md:text-sm">C</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </div>
    </header>
  );
}
