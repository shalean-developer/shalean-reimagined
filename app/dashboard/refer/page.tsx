'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loader2, Share2, Gift, Ticket, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import {
  getOrCreateReferralCode,
  sendReferralInvites,
  getReferralStats,
  getAuthenticatedUser,
} from '../actions';

export default function ReferPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [inviteEmails, setInviteEmails] = useState('');
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<{
    totalReferrals: number;
    completedReferrals: number;
    pendingRewards: number;
    totalRewards: number;
  } | null>(null);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const loadReferralCode = async () => {
      try {
        setLoading(true);

        // Get authenticated user's email
        const authResult = await getAuthenticatedUser();
        
        if (!authResult.success || !authResult.email) {
          setLoading(false);
          return;
        }

        const userEmail = authResult.email;
        setEmail(userEmail);

        // Get or create referral code
        const result = await getOrCreateReferralCode(userEmail);

        if (result.success && result.referralCode) {
          setReferralCode(result.referralCode);
        } else {
          toast.error(result.error || 'Failed to load referral code');
        }

        // Load referral stats
        const statsResult = await getReferralStats(userEmail);
        if (statsResult.success && statsResult.stats) {
          setStats(statsResult.stats);
        }
      } catch (error) {
        console.error('Error loading referral code:', error);
        toast.error('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadReferralCode();
  }, []);

  const handleCopyLink = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shalean.co.za';
    const referralLink = `${baseUrl}/booking/details?ref=${referralCode}`;

    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast.success('Referral link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      toast.error('Failed to copy link');
    }
  };

  const handleShare = (platform: 'facebook' | 'messenger' | 'twitter' | 'whatsapp') => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shalean.co.za';
    const referralLink = `${baseUrl}/booking/details?ref=${referralCode}`;
    const shareText = `Join me on Shalean Cleaning Services! Use my referral code ${referralCode} to get R150 off your first booking. ${referralLink}`;

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
        break;
      case 'messenger':
        shareUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(referralLink)}&app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleSendInvites = async () => {
    if (!inviteEmails.trim()) {
      toast.error('Please enter at least one email address');
      return;
    }

    const emailList = inviteEmails
      .split(',')
      .map((e) => e.trim())
      .filter((e) => e);

    if (emailList.length === 0) {
      toast.error('Please enter valid email addresses');
      return;
    }

    try {
      setSending(true);

      if (!email) {
        toast.error('Please access the dashboard first');
        return;
      }

      const result = await sendReferralInvites(email, emailList, referralCode);

      if (result.success) {
        toast.success(`Invitations sent to ${result.sent} friend${result.sent !== 1 ? 's' : ''}!`);
        setInviteEmails('');
      } else {
        toast.error(result.error || 'Failed to send invitations');
      }
    } catch (error) {
      console.error('Error sending invites:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Refer & Earn</h1>
          <p className="text-muted-foreground mt-2">Earn R150 ShaleanCred per friend referral</p>
        </div>
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Refer & Earn</h1>
          <p className="text-muted-foreground mt-2">Earn R150 ShaleanCred per friend referral</p>
        </div>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <p className="text-muted-foreground mb-4">
              Please log in to access the Refer & Earn program.
            </p>
            <Button
              onClick={() => window.location.href = '/login?redirect=/dashboard/refer'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Log In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Refer & Earn</h1>
        <p className="text-muted-foreground mt-2">Earn R150 ShaleanCred per friend referral</p>
      </div>

      {/* Share Your Unique Code Section */}
      <Card className="border-border">
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div>
            <Label htmlFor="referral-code" className="text-base font-medium">
              Your Code:
            </Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="referral-code"
                value={referralCode}
                readOnly
                className="bg-muted font-mono text-lg"
              />
              <Button
                onClick={handleCopyLink}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Social Sharing Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              onClick={() => handleShare('facebook')}
              className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
              size="sm"
            >
              Facebook
            </Button>
            <Button
              onClick={() => handleShare('messenger')}
              className="bg-[#0084FF] hover:bg-[#0084FF]/90 text-white"
              size="sm"
            >
              Messenger
            </Button>
            <Button
              onClick={() => handleShare('twitter')}
              className="bg-black hover:bg-black/90 text-white"
              size="sm"
            >
              X
            </Button>
            <Button
              onClick={() => handleShare('whatsapp')}
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              size="sm"
            >
              WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invite Your Friends Section */}
      <Card className="border-border">
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div>
            <Label htmlFor="invite-emails" className="text-base font-medium">
              Add email addresses:
            </Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="invite-emails"
                type="text"
                placeholder="comma separated: friend1@mail.com,friend2@mail.com"
                value={inviteEmails}
                onChange={(e) => setInviteEmails(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleSendInvites}
                disabled={sending || !inviteEmails.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Invites'
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How It Works Section */}
      <Card className="border-border">
        <CardContent className="p-4 sm:p-6 space-y-4">
          <h2 className="text-xl font-bold">How it works</h2>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base">
                  Spread the word with your unique code:{' '}
                  <span className="font-mono font-semibold text-primary">{referralCode}</span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base">
                  Each friend that books their first Shalean clean gets R150 off
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base">
                  For each referral you earn R150 ShaleanCred
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Conditions Link */}
          <div className="pt-2">
            <a
              href="/terms"
              className="text-sm text-primary hover:underline"
            >
              T&C's apply.
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

