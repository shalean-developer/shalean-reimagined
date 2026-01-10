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
import { getAuthenticatedUser, getCustomerProfile } from '../actions';
import { Profile } from '@/types/profile';

export function DashboardHeader() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userInitials, setUserInitials] = useState('');
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    setMounted(true);
    
    const loadUserProfile = async () => {
      try {
        // Get authenticated user's email
        const authResult = await getAuthenticatedUser();
        if (authResult.success && authResult.email) {
          setUserEmail(authResult.email);
          
          // Fetch profile to get avatar and name
          const profileResult = await getCustomerProfile(authResult.email);
          if (profileResult.success && profileResult.profile) {
            setProfile(profileResult.profile);
            // Use actual name for initials if available
            if (profileResult.profile.first_name && profileResult.profile.last_name) {
              setUserInitials(
                (profileResult.profile.first_name[0] + profileResult.profile.last_name[0]).toUpperCase()
              );
            } else {
              // Fallback to email-based initials
              const nameParts = authResult.email.split('@')[0].split(/[._-]/);
              if (nameParts.length >= 2) {
                setUserInitials(
                  (nameParts[0][0] + nameParts[1][0]).toUpperCase()
                );
              } else {
                setUserInitials(authResult.email.substring(0, 2).toUpperCase());
              }
            }
          } else {
            // No profile found, use email-based initials
            const nameParts = authResult.email.split('@')[0].split(/[._-]/);
            if (nameParts.length >= 2) {
              setUserInitials(
                (nameParts[0][0] + nameParts[1][0]).toUpperCase()
              );
            } else {
              setUserInitials(authResult.email.substring(0, 2).toUpperCase());
            }
          }
        }
      } catch (error) {
        console.error('Error loading user profile:', error);
      }
    };

    loadUserProfile();

    // Listen for auth changes
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user?.email) {
        setUserEmail(session.user.email);
        // Reload profile when auth state changes
        try {
          const profileResult = await getCustomerProfile(session.user.email);
          if (profileResult.success && profileResult.profile) {
            setProfile(profileResult.profile);
            if (profileResult.profile.first_name && profileResult.profile.last_name) {
              setUserInitials(
                (profileResult.profile.first_name[0] + profileResult.profile.last_name[0]).toUpperCase()
              );
            } else {
              const nameParts = session.user.email.split('@')[0].split(/[._-]/);
              if (nameParts.length >= 2) {
                setUserInitials(
                  (nameParts[0][0] + nameParts[1][0]).toUpperCase()
                );
              } else {
                setUserInitials(session.user.email.substring(0, 2).toUpperCase());
              }
            }
          } else {
            const nameParts = session.user.email.split('@')[0].split(/[._-]/);
            if (nameParts.length >= 2) {
              setUserInitials(
                (nameParts[0][0] + nameParts[1][0]).toUpperCase()
              );
            } else {
              setUserInitials(session.user.email.substring(0, 2).toUpperCase());
            }
          }
        } catch (error) {
          console.error('Error loading profile on auth change:', error);
        }
      } else {
        setUserEmail(null);
        setUserInitials('');
        setProfile(null);
      }
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
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred while signing out');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 w-full max-w-full overflow-x-hidden">
      {/* Logo and menu trigger */}
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
        <span className="font-bold text-base md:text-lg truncate">Shalean</span>
      </div>

      {/* Profile icon on right */}
      <div className="flex items-center ml-auto">
        {mounted ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 md:h-10 md:w-10 rounded-full">
                <Avatar className="h-9 w-9 md:h-10 md:w-10">
                  {profile?.avatar_url && (
                    <AvatarImage 
                      src={profile.avatar_url} 
                      alt={profile.first_name && profile.last_name ? `${profile.first_name} ${profile.last_name}` : userEmail || 'User'}
                      className="object-cover"
                    />
                  )}
                  <AvatarFallback className="text-xs md:text-sm">{userInitials || 'U'}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {profile?.first_name && profile?.last_name 
                  ? `${profile.first_name} ${profile.last_name}`
                  : userEmail || 'My Account'}
              </DropdownMenuLabel>
              {profile?.first_name && profile?.last_name && userEmail && (
                <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                  {userEmail}
                </DropdownMenuLabel>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="/dashboard/profile">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/dashboard/settings">Settings</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="ghost" className="relative h-9 w-9 md:h-10 md:w-10 rounded-full" disabled>
            <Avatar className="h-9 w-9 md:h-10 md:w-10">
              <AvatarFallback className="text-xs md:text-sm">U</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </div>
    </header>
  );
}

