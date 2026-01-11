'use client';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { CleanerSidebar } from '../components/CleanerSidebar';
import { CleanerHeader } from '../components/CleanerHeader';
import { CleanerMobileBottomNav } from '../components/CleanerMobileBottomNav';
import { Separator } from '@/components/ui/separator';

export function CleanerLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden pt-16">
        {/* Header - Fixed at top */}
        <CleanerHeader />
        
        <div className="flex flex-1 overflow-x-hidden">
          {/* Sidebar - Below header */}
          <CleanerSidebar />
          
          {/* Main Content */}
          <SidebarInset className="flex flex-col overflow-x-hidden w-full min-w-0">
            <Separator />
            
            {/* Page Content */}
            <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6 w-full min-w-0 overflow-x-hidden">
              <div className="w-full max-w-full overflow-x-hidden">
                {children}
              </div>
            </main>
            
            {/* Footer - Hidden on mobile, shown on desktop */}
            <footer className="hidden md:block border-t bg-muted/30 py-4 px-4 md:px-6 w-full min-w-0 overflow-x-hidden">
              <p className="text-sm text-muted-foreground text-center">
                © 2026 Shalean (Pty) Ltd, all rights reserved
              </p>
            </footer>
          </SidebarInset>
        </div>
        
        {/* Mobile Bottom Navigation - Only visible on mobile */}
        <CleanerMobileBottomNav />
      </div>
    </SidebarProvider>
  );
}
