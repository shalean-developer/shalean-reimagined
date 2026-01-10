'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast.error(error.message || 'Failed to send password reset email');
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      toast.success('Password reset email sent! Please check your inbox.');
    } catch (error) {
      console.error('Forgot password error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
          <CardDescription className="text-center">
            {isSuccess
              ? 'Check your email for a password reset link'
              : 'Enter your email address and we\'ll send you a link to reset your password'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Please check your email and click the link to reset your password.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail('');
                  }}
                >
                  Send Another Email
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => router.push('/login')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="email"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </Button>
            </form>
          )}
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

