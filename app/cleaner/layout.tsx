// Root layout for /cleaner routes - pass-through for login, auth handled in (dashboard) layout
export default function CleanerRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is a pass-through layout - no auth checks here
  // Login page at /cleaner/login will use this (no auth required)
  // Dashboard pages in (dashboard) route group will use (dashboard)/layout.tsx (with auth)
  return <>{children}</>;
}
