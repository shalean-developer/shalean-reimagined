'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if we have a valid session/token from the reset link
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      // If there's a session, we likely have a valid token
      setIsValidToken(!!session);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        toast.error(error.message || 'Failed to reset password');
        setIsLoading(false);
        return;
      }

      toast.success('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  // Show loading state while checking token validity
  if (isValidToken === null) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show error if token is invalid
  if (isValidToken === false) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Invalid Reset Link</CardTitle>
            <CardDescription className="text-center">
              This password reset link is invalid or has expired. Please request a new one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                type="button"
                className="w-full"
                onClick={() => router.push('/forgot-password')}
              >
                Request New Reset Link
              </Button>
              <div className="text-center text-sm">
                <Link
                  href="/login"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to Login
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
          <CardDescription className="text-center">
            Enter your new password below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                autoComplete="new-password"
                minLength={6}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
                autoComplete="new-password"
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Resetting Password...
                </>
              ) : (
                'Reset Password'
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link
              href="/login"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

