'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, FileText, Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase/client';

export default function BuyShaleanCredPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('20');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get email from authenticated user
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) {
        setEmail(user.email);
      }
    });
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  };

  const validateAmount = (): boolean => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 20) {
      toast.error('Minimum purchase is R20');
      return false;
    }
    if (numAmount > 5000) {
      toast.error('Maximum purchase is R5000 at a time');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please provide your email address');
      return;
    }

    if (!validateAmount()) {
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/credit/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: parseFloat(amount),
          paymentMethod,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success && result.authorizationUrl) {
        // Redirect to Paystack payment page
        window.location.href = result.authorizationUrl;
      } else {
        toast.error(result.error || 'Failed to initialize payment');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Error initializing payment:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Buy ShaleanCred</h1>
        <p className="text-muted-foreground mt-2">
          ShaleanCred enables you to load credits into your account to use for any upcoming bookings.
        </p>
      </div>

      {/* Buy Form */}
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Section */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-3">Amount of ShaleanCred</h2>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    R
                  </span>
                  <Input
                    id="amount"
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={handleAmountChange}
                    className="pl-8 h-12 text-lg"
                    placeholder="20"
                    required
                    disabled={isProcessing}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Minimum purchase is R20 and the maximum is R5000 at a time
                </p>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
              </div>

              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <RadioGroupItem value="credit_card" id="credit_card" />
                  <Label
                    htmlFor="credit_card"
                    className="flex-1 cursor-pointer flex items-center gap-3"
                  >
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span>Credit Card</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <RadioGroupItem value="eft" id="eft" />
                  <Label
                    htmlFor="eft"
                    className="flex-1 cursor-pointer flex items-center gap-3"
                  >
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <span>EFT</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Continue to Payment'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

