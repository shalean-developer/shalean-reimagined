'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Gift, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function GetVoucherPage() {
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<'happy_home' | 'give_thanks' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get email from localStorage or URL params
    const storedEmail = localStorage.getItem('dashboard_email');
    const urlParams = new URLSearchParams(window.location.search);
    const urlEmail = urlParams.get('email');
    setEmail(urlEmail || storedEmail || '');
  }, []);

  const handleAmountClick = async (amount: number, type: 'happy_home' | 'give_thanks') => {
    if (!email) {
      toast.error('Please provide your email address');
      return;
    }

    setSelectedAmount(amount);
    setSelectedType(type);
    setIsProcessing(true);

    try {
      const response = await fetch('/api/voucher/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount,
          paymentMethod: 'credit_card',
          voucherType: type,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success && result.authorizationUrl) {
        // Redirect to Paystack payment page
        window.location.href = result.authorizationUrl;
      } else {
        toast.error(result.error || 'Failed to initialize payment');
        setIsProcessing(false);
        setSelectedAmount(null);
        setSelectedType(null);
      }
    } catch (error) {
      console.error('Error initializing voucher purchase:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setIsProcessing(false);
      setSelectedAmount(null);
      setSelectedType(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Buy and Send Gift Vouchers
            </h1>
            <Gift className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-2">
            Select a gift voucher from the list below and send it to someone special who's in need of a good clean.
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Unlike milk, our Gift Vouchers have no expiry date.
          </p>
        </div>

        {/* Voucher Sections */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Happy Home Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="space-y-4 p-6">
                <h2 className="text-2xl font-bold text-primary text-center">Happy Home</h2>
                
                {/* Decorative Graphic */}
                <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary px-6 py-2 rounded-lg">
                      <span className="text-white font-bold text-lg">Happy Home</span>
                    </div>
                  </div>
                  {/* Geometric shapes overlay */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400/30 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-orange-400/30 rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-20 h-20 bg-pink-400/30 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-14 h-14 bg-green-400/30 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-500/40 transform -rotate-45"></div>
                  <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-orange-500/40 transform rotate-45"></div>
                </div>

                <p className="text-muted-foreground text-center">
                  "Clean Home, Happy Home!" Bring a little happiness to yourself or a friend with this Shalean gift voucher.
                </p>

                {/* Amount Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[250, 500, 1000, 1250].map((amount) => (
                    <Button
                      key={amount}
                      variant="default"
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleAmountClick(amount, 'happy_home')}
                      disabled={isProcessing}
                    >
                      {isProcessing && selectedAmount === amount && selectedType === 'happy_home' ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `R${amount}`
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Give Thanks Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="space-y-4 p-6">
                <h2 className="text-2xl font-bold text-primary text-center">Give Thanks</h2>
                
                {/* Decorative Graphic */}
                <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-amber-100 px-6 py-2 rounded-lg border-2 border-amber-200">
                      <span className="text-foreground font-bold text-lg">Thank You</span>
                    </div>
                  </div>
                  {/* Geometric shapes overlay */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-300/40 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-orange-300/40 rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-20 h-20 bg-pink-300/40 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-14 h-14 bg-blue-300/40 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-400/50 transform -rotate-45"></div>
                  <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-orange-400/50 transform rotate-45"></div>
                </div>

                <p className="text-muted-foreground text-center">
                  Show your gratitude to someone special with this Shalean gift voucher.
                </p>

                {/* Amount Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[250, 500, 1000, 5000].map((amount) => (
                    <Button
                      key={amount}
                      variant="default"
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleAmountClick(amount, 'give_thanks')}
                      disabled={isProcessing}
                    >
                      {isProcessing && selectedAmount === amount && selectedType === 'give_thanks' ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `R${amount}`
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

