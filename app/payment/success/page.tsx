'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');

  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState<{
    amount: number;
    currency: string;
    status: string;
    customerEmail?: string;
    isCreditPurchase?: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!reference) {
      setError('Payment reference is missing');
      setLoading(false);
      return;
    }

    // Verify payment with Paystack
    const verifyPayment = async () => {
      try {
        // Check if this is a voucher purchase based on reference prefix
        const isVoucherPurchase = reference?.startsWith('VOUCHER_');
        
        // For voucher purchases, redirect immediately (webhook will handle voucher creation)
        if (isVoucherPurchase) {
          router.push(`/voucher/success?reference=${reference}`);
          return;
        }

        // Try to verify payment with Paystack (with retry logic)
        let response;
        let data;
        let verificationSuccess = false;
        
        // Retry verification up to 3 times (payment might still be processing)
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            response = await fetch(`/api/paystack/verify?reference=${reference}`);
            data = await response.json();
            
            if (response.ok && !data.error && data.status && data.data && data.data.status === 'success') {
              verificationSuccess = true;
              break;
            }
            
            // If payment is still pending, wait and retry
            if (data.data && data.data.status === 'pending' && attempt < 2) {
              await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
              continue;
            }
            
            // If we get here, verification failed or payment status is not success
            break;
          } catch (fetchError) {
            console.error(`Verification attempt ${attempt + 1} failed:`, fetchError);
            if (attempt < 2) {
              await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds before retry
              continue;
            }
          }
        }

        // If verification failed, try to verify booking directly (might still be successful)
        if (!verificationSuccess) {
          console.warn('Paystack verification failed, trying booking verification as fallback');
          
          // For booking payments, try to verify via booking endpoint (might work even if Paystack verify fails)
          if (!isVoucherPurchase && !reference?.startsWith('CREDIT_') && !reference?.startsWith('VOUCHER_')) {
            try {
              const bookingResponse = await fetch('/api/bookings/verify', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reference }),
              });

              const bookingResult = await bookingResponse.json();
              
              if (bookingResponse.ok && bookingResult.success) {
                console.log('Booking verified successfully via fallback:', bookingResult);
                if (bookingResult.bookingIds && bookingResult.bookingIds.length > 0) {
                  // Redirect to booking confirmation
                  const firstBookingId = bookingResult.bookingIds[0];
                  router.push(`/booking/confirmation/${firstBookingId}?payment=success`);
                  return;
                }
                // If booking was verified, show success even if Paystack verify failed
                verificationSuccess = true;
                // Use booking result data
                data = {
                  status: true,
                  data: {
                    status: 'success',
                    amount: bookingResult.paidAmount * 100, // Convert to cents
                    currency: 'ZAR',
                  }
                };
              }
            } catch (bookingError) {
              console.error('Booking verification fallback also failed:', bookingError);
            }
          }
        }

        // If verification still failed after all attempts, show error
        if (!verificationSuccess) {
          // If it's a voucher purchase, still redirect (webhook handles it)
          if (isVoucherPurchase) {
            router.push(`/voucher/success?reference=${reference}`);
            return;
          }
          
          // Show error message
          const errorMessage = data?.error || 
                              (data?.data?.status ? `Payment status: ${data.data.status}` : null) ||
                              'Payment verification failed. Please contact support if this issue persists.';
          setError(errorMessage);
          setLoading(false);
          return;
        }

        // If verification succeeded, process the payment
        if (verificationSuccess && data && data.data) {
          // Convert amount from cents/kobo to ZAR
          const amountInZar = data.data.amount / 100;
          const metadata = data.data.metadata || {};
          const isCreditPurchase = metadata.transaction_type === 'credit_purchase' || 
                                  reference?.startsWith('CREDIT_');
          const isVoucherPurchaseFromMeta = metadata.transaction_type === 'voucher_purchase' || 
                                           reference?.startsWith('VOUCHER_');
          
          // If it's a voucher purchase, redirect to voucher success page
          if (isVoucherPurchaseFromMeta) {
            router.push(`/voucher/success?reference=${reference}`);
            return;
          }
          
          // If it's a credit purchase, verify and credit the account
          if (isCreditPurchase) {
            try {
              const creditResponse = await fetch('/api/credit/verify', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reference }),
              });

              const creditResult = await creditResponse.json();
              
              if (creditResponse.ok && creditResult.success) {
                // Credits were allocated (or already allocated)
                console.log('Credit allocation result:', creditResult);
                if (!creditResult.alreadyCredited) {
                  // Show success message to user
                  console.log(`Successfully credited R${creditResult.amount} to account. New balance: R${creditResult.balance}`);
                }
              } else {
                console.error('Credit allocation failed:', creditResult);
                // Try the retry endpoint as a fallback
                try {
                  const retryResponse = await fetch('/api/credit/retry', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ reference }),
                  });
                  const retryResult = await retryResponse.json();
                  if (retryResponse.ok && retryResult.success) {
                    console.log('Credit allocated via retry endpoint:', retryResult);
                  }
                } catch (retryError) {
                  console.error('Retry endpoint also failed:', retryError);
                }
              }
            } catch (creditError) {
              console.error('Error allocating credits:', creditError);
              // Don't fail the payment success page if credit allocation fails
            }
          } else {
            // This is a booking payment - verify and update booking status
            try {
              const bookingResponse = await fetch('/api/bookings/verify', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reference }),
              });

              const bookingResult = await bookingResponse.json();
              
              if (bookingResponse.ok && bookingResult.success) {
                console.log('Booking verification result:', bookingResult);
                if (!bookingResult.alreadyVerified && bookingResult.bookingIds && bookingResult.bookingIds.length > 0) {
                  // Redirect to booking confirmation if we have a booking ID
                  const firstBookingId = bookingResult.bookingIds[0];
                  router.push(`/booking/confirmation/${firstBookingId}?payment=success`);
                  return;
                }
              } else {
                console.error('Booking verification failed:', bookingResult);
              }
            } catch (bookingError) {
              console.error('Error verifying booking:', bookingError);
              // Don't fail the payment success page if booking verification fails
            }
          }
          
          setPaymentData({
            amount: amountInZar,
            currency: data.data.currency || 'ZAR',
            status: data.data.status,
            customerEmail: data.data.customer?.email,
            isCreditPurchase,
          });
        } else {
          // If verification failed but it's a voucher purchase, still redirect
          if (isVoucherPurchase) {
            router.push(`/voucher/success?reference=${reference}`);
            return;
          }
          setError('Payment verification failed. Please contact support if this issue persists.');
        }
      } catch (err) {
        console.error('Error verifying payment:', err);
        // If it's a voucher purchase, still redirect (webhook handles it)
        if (reference?.startsWith('VOUCHER_')) {
          router.push(`/voucher/success?reference=${reference}`);
          return;
        }
        setError('Failed to verify payment. Please contact support if this issue persists.');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference]);

  const handleClose = () => {
    if (paymentData?.isCreditPurchase) {
      router.push('/dashboard/shaleancred');
    } else {
      router.push('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying payment...</p>
        </div>
      </div>
    );
  }

  if (error || !paymentData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <X className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Unable to verify payment'}</p>
          <Button onClick={handleClose}>Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Success Modal */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {paymentData.isCreditPurchase ? 'ShaleanCred Purchase Successful' : 'Payment Successful'}
          </h1>

          {/* Payment Details */}
          <p className="text-gray-600 mb-6">
            {paymentData.isCreditPurchase ? (
              <>
                You successfully purchased <strong>R{paymentData.amount.toFixed(2)}</strong> ShaleanCred.
                <br />
                Your credits have been added to your account.
              </>
            ) : (
              <>
                You paid {paymentData.currency} {paymentData.amount.toFixed(2)} to Shalean Cleaning Services
              </>
            )}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            {paymentData.isCreditPurchase ? (
              <>
                <Button asChild variant="outline" size="lg">
                  <Link href="/dashboard/shaleancred">View ShaleanCred</Link>
                </Button>
                <Button asChild variant="default" size="lg">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="outline" size="lg">
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
                <Button asChild variant="default" size="lg">
                  <Link href="/">Go back to home</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Secured by Paystack Indicator */}
      <div className="mt-8 flex items-center gap-2 text-gray-700 text-sm">
        <Lock className="w-4 h-4" />
        <span>Secured by</span>
        <span className="font-bold text-blue-600">paystack</span>
      </div>
    </div>
  );
}

