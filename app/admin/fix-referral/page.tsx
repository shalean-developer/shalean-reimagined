'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function FixReferralPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [checkResult, setCheckResult] = useState<any>(null);
  const [checkLoading, setCheckLoading] = useState(false);
  const [debugResult, setDebugResult] = useState<any>(null);
  const [debugLoading, setDebugLoading] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customReferralCode, setCustomReferralCode] = useState('849E23');
  const [referredEmail, setReferredEmail] = useState('farachits@gmail.com');

  const checkReferralStatus = async (referralCode?: string, email?: string) => {
    const code = referralCode || customReferralCode;
    const emailToCheck = email || referredEmail;
    
    setCheckLoading(true);
    setCheckResult(null);
    try {
      const response = await fetch(
        `/api/referrals/check?referralCode=${encodeURIComponent(code)}&referredEmail=${encodeURIComponent(emailToCheck)}`
      );
      const data = await response.json();
      setCheckResult(data);
    } catch (err) {
      console.error('Error checking referral:', err);
    } finally {
      setCheckLoading(false);
    }
  };

  useEffect(() => {
    // Auto-check on mount with default values
    if (customReferralCode && referredEmail) {
      checkReferralStatus(customReferralCode, referredEmail);
    }
  }, []);

  const processReferral = async (referralCode?: string, email?: string) => {
    const code = referralCode || customReferralCode;
    const emailToProcess = email || referredEmail;
    
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // First, verify and update payment status for bookings
      const verifyResponse = await fetch('/api/bookings/verify-payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referralCode: code,
          referredEmail: emailToProcess,
        }),
      });

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        setError(verifyData.error || 'Failed to verify payments');
        setResult(verifyData);
        setLoading(false);
        return;
      }

      // If payments were verified, now process the referral
      if (verifyData.updatedBookings > 0 || verifyData.results?.some((r: any) => r.success)) {
        const referralResponse = await fetch('/api/referrals/process', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            referralCode: code,
            referredEmail: emailToProcess,
          }),
        });

        const referralData = await referralResponse.json();

        if (referralResponse.ok) {
          setResult({
            paymentVerification: verifyData,
            referralProcessing: referralData,
            success: referralData.success,
          });
          toast.success('Referral reward processed successfully!');
          // Refresh check results
          await checkReferralStatus(code, emailToProcess);
        } else {
          setError(referralData.error || 'Failed to process referral');
          setResult({
            paymentVerification: verifyData,
            referralProcessing: referralData,
          });
        }
      } else {
        // No payments to verify, try direct referral processing
        const referralResponse = await fetch('/api/referrals/process', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            referralCode: code,
            referredEmail: emailToProcess,
          }),
        });

        const referralData = await referralResponse.json();

        if (referralResponse.ok) {
          setResult({
            paymentVerification: verifyData,
            referralProcessing: referralData,
            success: referralData.success,
          });
          toast.success('Referral reward processed successfully!');
          // Refresh check results
          await checkReferralStatus(code, emailToProcess);
        } else {
          setError(referralData.error || 'Failed to process referral');
          setResult({
            paymentVerification: verifyData,
            referralProcessing: referralData,
          });
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      toast.error('Failed to process referral');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Fix Missing Referral Reward</CardTitle>
          <CardDescription>
            Process missing referral rewards for any referral code and email combination
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Referral Code</label>
              <Input
                type="text"
                placeholder="Enter referral code (e.g., 849E23)"
                value={customReferralCode}
                onChange={(e) => setCustomReferralCode(e.target.value.toUpperCase())}
                className="font-mono"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Referred Email</label>
              <Input
                type="email"
                placeholder="Enter referred email (e.g., farachits@gmail.com)"
                value={referredEmail}
                onChange={(e) => setReferredEmail(e.target.value)}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Reward Amount:</strong> R150.00
            </p>
          </div>

          <Button 
            onClick={() => processReferral(customReferralCode, referredEmail)} 
            disabled={loading || !customReferralCode || !referredEmail} 
            className="w-full"
          >
            {loading ? 'Processing...' : 'Process Referral Reward'}
          </Button>

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm font-medium text-destructive">Error:</p>
              <p className="text-sm text-destructive/80">{error}</p>
            </div>
          )}

          {result && (
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-medium mb-2">Result:</p>
              <pre className="text-xs overflow-auto bg-background p-3 rounded border">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          {result?.referralProcessing?.success && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm font-medium text-green-800">✅ Success!</p>
              {result.referralProcessing?.results?.map((r: any, idx: number) => (
                <div key={idx} className="mt-2 text-sm text-green-700">
                  {r.success ? (
                    <div>
                      <p>Booking {r.bookingId}: R{r.rewardAmount} credited to {r.referrerEmail}</p>
                      <p className="text-xs">Balance: R{r.balanceBefore} → R{r.balanceAfter}</p>
                    </div>
                  ) : (
                    <p className="text-amber-700">⚠️ {r.error}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Referral Status Check */}
          <div className="mt-6 border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Referral Status Details</h3>
              <Button
                onClick={() => checkReferralStatus()}
                disabled={checkLoading}
                variant="outline"
                size="sm"
              >
                {checkLoading ? 'Checking...' : 'Refresh Status'}
              </Button>
            </div>

            {checkResult && (
              <div className="space-y-4">
                {checkResult.success ? (
                  <>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-sm font-medium text-blue-800 mb-2">Referrer Information</p>
                      <p className="text-sm text-blue-700">
                        <strong>Email:</strong> {checkResult.referrer.email}
                      </p>
                      <p className="text-sm text-blue-700">
                        <strong>Name:</strong> {checkResult.referrer.name}
                      </p>
                      <p className="text-sm text-blue-700 font-semibold">
                        <strong>Current Credit Balance:</strong> R{checkResult.referrer.creditBalance.toFixed(2)}
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                      <p className="text-sm font-medium mb-2">Summary</p>
                      <ul className="text-sm space-y-1">
                        <li>Total Bookings: {checkResult.summary.totalBookings}</li>
                        <li>Paid Bookings: {checkResult.summary.paidBookings}</li>
                        <li>Total Referrals: {checkResult.summary.totalReferrals}</li>
                        <li>Credited Referrals: {checkResult.summary.creditedReferrals}</li>
                        <li className="font-semibold text-green-700">
                          Total Rewards Credited: R{checkResult.summary.totalRewardsCredited.toFixed(2)}
                        </li>
                      </ul>
                    </div>

                    {checkResult.rewardTransactions && checkResult.rewardTransactions.length > 0 && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm font-medium text-green-800 mb-2">Reward Transactions</p>
                        {checkResult.rewardTransactions.map((tx: any, idx: number) => (
                          <div key={idx} className="text-sm text-green-700 mb-2 pb-2 border-b border-green-200 last:border-0">
                            <p><strong>Amount:</strong> R{tx.amount.toFixed(2)}</p>
                            <p className="text-xs">
                              <strong>Date:</strong> {new Date(tx.created_at).toLocaleString()}
                            </p>
                            <p className="text-xs">
                              <strong>Balance:</strong> R{tx.balance_before.toFixed(2)} → R{tx.balance_after.toFixed(2)}
                            </p>
                            {tx.description && (
                              <p className="text-xs"><strong>Description:</strong> {tx.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {checkResult.referrals && checkResult.referrals.length > 0 && (
                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
                        <p className="text-sm font-medium text-purple-800 mb-2">Referral Records</p>
                        {checkResult.referrals.map((ref: any, idx: number) => (
                          <div key={idx} className="text-sm text-purple-700 mb-2 pb-2 border-b border-purple-200 last:border-0">
                            <p><strong>Status:</strong> {ref.status}</p>
                            <p><strong>Reward Status:</strong> {ref.referrer_reward_status}</p>
                            <p><strong>Reward Amount:</strong> R{ref.referrer_reward_amount.toFixed(2)}</p>
                            <p className="text-xs">
                              <strong>Created:</strong> {new Date(ref.created_at).toLocaleString()}
                            </p>
                            {ref.updated_at && (
                              <p className="text-xs">
                                <strong>Updated:</strong> {new Date(ref.updated_at).toLocaleString()}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-800">{checkResult.error}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Debug Results */}
          {debugResult && (
            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Debug Results for {customEmail}</h3>
              
              {debugResult.success ? (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm font-medium text-blue-800 mb-2">Analysis Summary</p>
                    <ul className="text-sm space-y-1">
                      <li>Total Bookings: {debugResult.analysis.totalBookings}</li>
                      <li>Paid Bookings: {debugResult.analysis.paidBookings}</li>
                      <li>Bookings with Referral Code: {debugResult.analysis.bookingsWithReferralCode}</li>
                      <li>Paid Bookings with Referral Code: {debugResult.analysis.paidBookingsWithReferralCode}</li>
                      <li>Total Referral Records: {debugResult.analysis.totalReferrals}</li>
                      <li>Completed Referrals: {debugResult.analysis.completedReferrals}</li>
                      <li>Credited Referrals: {debugResult.analysis.creditedReferrals}</li>
                    </ul>
                  </div>

                  {debugResult.bookings && debugResult.bookings.length > 0 && (
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                      <p className="text-sm font-medium mb-2">Bookings</p>
                      {debugResult.bookings.map((booking: any, idx: number) => (
                        <div key={idx} className="text-sm mb-2 pb-2 border-b last:border-0">
                          <p><strong>Booking:</strong> {booking.booking_number}</p>
                          <p><strong>Referral Code:</strong> {booking.referral_code || 'None'}</p>
                          <p><strong>Payment Status:</strong> {booking.payment_status}</p>
                          <p><strong>Status:</strong> {booking.status}</p>
                          <p><strong>Paystack Reference:</strong> {booking.paystack_reference || 'None'}</p>
                          <p><strong>Transaction ID:</strong> {booking.paystack_transaction_id || 'None'}</p>
                          <p className="text-xs text-gray-600">Created: {new Date(booking.created_at).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {debugResult.referrers && debugResult.referrers.length > 0 && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm font-medium text-green-800 mb-2">Referrer(s)</p>
                      {debugResult.referrers.map((referrer: any, idx: number) => (
                        <div key={idx} className="text-sm mb-3 pb-3 border-b border-green-200 last:border-0">
                          <p><strong>Email:</strong> {referrer.email}</p>
                          <p><strong>Referral Code:</strong> {referrer.referralCode}</p>
                          <p><strong>Credit Balance:</strong> R{referrer.credit_balance.toFixed(2)}</p>
                          <p><strong>Reward Transactions:</strong> {referrer.rewardTransactions.length}</p>
                          {referrer.rewardTransactions.length > 0 && (
                            <div className="mt-2 text-xs">
                              {referrer.rewardTransactions.map((tx: any, txIdx: number) => (
                                <div key={txIdx} className="mb-1">
                                  R{tx.amount.toFixed(2)} - {new Date(tx.created_at).toLocaleString()}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {debugResult.referrals && debugResult.referrals.length > 0 && (
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
                      <p className="text-sm font-medium text-purple-800 mb-2">Referral Records</p>
                      {debugResult.referrals.map((ref: any, idx: number) => (
                        <div key={idx} className="text-sm mb-2 pb-2 border-b border-purple-200 last:border-0">
                          <p><strong>Referrer:</strong> {ref.referrer_email}</p>
                          <p><strong>Code:</strong> {ref.referral_code}</p>
                          <p><strong>Status:</strong> {ref.status}</p>
                          <p><strong>Reward Status:</strong> {ref.referrer_reward_status}</p>
                          <p><strong>Reward Amount:</strong> R{ref.referrer_reward_amount.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {debugResult.analysis.paidBookingsWithReferralCode > 0 && 
                   debugResult.analysis.creditedReferrals === 0 && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-sm font-medium text-yellow-800 mb-2">
                        ⚠️ Issue Detected: Paid bookings with referral code but no credited rewards
                      </p>
                      <Button
                        onClick={async () => {
                          // Find the referral code from bookings
                          const bookingWithCode = debugResult.bookings.find((b: any) => 
                            b.payment_status === 'paid' && b.referral_code
                          );
                          if (bookingWithCode && customEmail) {
                            setLoading(true);
                            setError(null);
                            try {
                              // First verify payments
                              const verifyResponse = await fetch('/api/bookings/verify-payments', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  referralCode: bookingWithCode.referral_code,
                                  referredEmail: customEmail,
                                }),
                              });
                              const verifyData = await verifyResponse.json();

                              // Then process referral
                              const referralResponse = await fetch('/api/referrals/process', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  referralCode: bookingWithCode.referral_code,
                                  referredEmail: customEmail,
                                }),
                              });
                              const referralData = await referralResponse.json();

                              if (referralResponse.ok && referralData.success) {
                                toast.success('Referral reward processed successfully!');
                                // Refresh debug results
                                const debugResponse = await fetch(
                                  `/api/referrals/debug?referredEmail=${encodeURIComponent(customEmail)}`
                                );
                                const newDebugData = await debugResponse.json();
                                setDebugResult(newDebugData);
                              } else {
                                toast.error(referralData.error || 'Failed to process referral');
                                setError(referralData.error || 'Failed to process referral');
                              }
                            } catch (err) {
                              toast.error('Failed to process referral');
                              setError(err instanceof Error ? err.message : 'Unknown error');
                            } finally {
                              setLoading(false);
                            }
                          }
                        }}
                        className="mt-2"
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Process Missing Reward'}
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-800">{debugResult.error}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


