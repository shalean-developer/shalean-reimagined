'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Gift, Check, Copy, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface VoucherData {
  code: string;
  amount: number;
  voucherType?: string;
}

export default function VoucherSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [voucherData, setVoucherData] = useState<VoucherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const reference = searchParams.get('reference');

    if (!reference) {
      setError('Missing payment reference');
      setLoading(false);
      return;
    }

    // Fetch voucher data from transaction with retry logic
    // The webhook might still be processing, so we'll retry a few times
    const fetchVoucherData = async (retries = 0) => {
      try {
        const response = await fetch(`/api/voucher/get?reference=${reference}`);
        const result = await response.json();

        if (response.ok && result.success && result.voucher) {
          setVoucherData({
            code: result.voucher.code,
            amount: result.voucher.amount,
            voucherType: result.voucher.voucherType,
          });
          setLoading(false);
        } else if (retries < 5 && result.error?.includes('not found')) {
          // Retry if voucher not found yet (webhook might still be processing)
          setTimeout(() => fetchVoucherData(retries + 1), 1000);
        } else {
          setError(result.error || 'Failed to retrieve voucher information');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching voucher data:', err);
        if (retries < 5) {
          // Retry on error
          setTimeout(() => fetchVoucherData(retries + 1), 1000);
        } else {
          setError('An unexpected error occurred');
          setLoading(false);
        }
      }
    };

    // Initial delay to allow webhook to process
    setTimeout(() => fetchVoucherData(), 500);
  }, [searchParams]);

  const handleCopy = () => {
    if (voucherData?.code) {
      navigator.clipboard.writeText(voucherData.code);
      setCopied(true);
      toast.success('Voucher code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-md">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading voucher information...</p>
        </div>
      </div>
    );
  }

  if (error || !voucherData) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Voucher Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Unable to retrieve voucher information'}</p>
          <Button onClick={() => router.push('/dashboard/vouchers')}>
            Return to Vouchers
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <Card>
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Voucher Purchased Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Your gift voucher has been created and is ready to use.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Voucher Code</p>
                <div className="flex items-center justify-center gap-3">
                  <code className="text-2xl font-bold text-primary font-mono tracking-wider">
                    {voucherData.code}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopy}
                    className="h-9 w-9"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-bold text-lg">R{voucherData.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-600 font-semibold">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Expiry:</span>
                  <span className="font-semibold">No expiry date</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                className="w-full"
                onClick={() => router.push('/dashboard/vouchers')}
              >
                Go to Vouchers
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push('/')}
              >
                Return to Home
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground text-center">
                Share this code with the recipient. They can redeem it at{' '}
                <span className="font-semibold">/dashboard/vouchers</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

