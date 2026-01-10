'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { redeemVoucher, getVoucherRedemptions, VoucherRedemption, getAuthenticatedUser } from '../actions';
import { createClient } from '@/lib/supabase/client';

export default function VouchersPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('redeem');
  const [voucherCode, setVoucherCode] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [voucherHistory, setVoucherHistory] = useState<VoucherRedemption[]>([]);
  const [availableVouchers, setAvailableVouchers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingVouchers, setLoadingVouchers] = useState(false);
  const [redeeming, setRedeeming] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Load available vouchers on mount
  useEffect(() => {
    loadAvailableVouchers();
  }, []);

  // Get email/phone - prioritize authenticated user, then URL params or localStorage
  useEffect(() => {
    const loadUserInfo = async () => {
      // First, try to get authenticated user's email
      const authResult = await getAuthenticatedUser();
      let userEmail = '';
      let userPhone = '';

      if (authResult.success && authResult.email) {
        // Use authenticated user's email
        userEmail = authResult.email;
      } else {
        // Fall back to URL params or localStorage (for non-authenticated access)
        const urlEmail = searchParams.get('email');
        const urlPhone = searchParams.get('phone');
        const storedEmail = localStorage.getItem('dashboard_email');
        const storedPhone = localStorage.getItem('dashboard_phone');

        userEmail = urlEmail || storedEmail || '';
        userPhone = urlPhone || storedPhone || '';
      }

      if (userEmail || userPhone) {
        setEmail(userEmail);
        setPhone(userPhone);
        setHasSearched(true);
        loadVoucherHistory(userEmail, userPhone || undefined);
      }
    };

    loadUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Load voucher history when tab changes to history
  useEffect(() => {
    if (activeTab === 'history' && email) {
      loadVoucherHistory(email, phone || undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, email, phone]);

  const loadAvailableVouchers = async () => {
    try {
      setLoadingVouchers(true);
      const response = await fetch('/api/voucher/list?status=active&limit=100');
      const result = await response.json();

      if (response.ok && result.success && result.vouchers) {
        setAvailableVouchers(result.vouchers);
      } else {
        console.error('Error loading vouchers:', result.error);
      }
    } catch (error) {
      console.error('Error loading vouchers:', error);
    } finally {
      setLoadingVouchers(false);
    }
  };

  const loadVoucherHistory = async (userEmail: string, userPhone?: string) => {
    try {
      setLoading(true);
      const result = await getVoucherRedemptions(userEmail, userPhone);
      if (result.success && result.redemptions) {
        setVoucherHistory(result.redemptions);
      } else if (result.error) {
        console.error('Error loading voucher history:', result.error);
        // Don't show error toast for empty history
        if (result.error !== 'No redemptions found') {
          toast.error(result.error);
        }
      }
    } catch (error) {
      console.error('Error loading voucher history:', error);
      toast.error('Failed to load voucher history');
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!voucherCode.trim()) {
      toast.error('Please enter a voucher code');
      return;
    }

    if (!email && !phone) {
      toast.error('Please provide your email or phone number');
      return;
    }

    try {
      setRedeeming(true);
      const result = await redeemVoucher(voucherCode.trim(), email, phone || undefined);
      
      if (result.success) {
        toast.success(
          `Voucher redeemed successfully! R${result.amount?.toFixed(2)} has been added to your ShaleanCred balance.`
        );
        setVoucherCode('');
        // Reload history if on history tab
        if (activeTab === 'history' && email) {
          loadVoucherHistory(email, phone || undefined);
        }
      } else {
        toast.error(result.error || 'Failed to redeem voucher');
      }
    } catch (error) {
      console.error('Error redeeming voucher:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setRedeeming(false);
    }
  };

  const totalItems = voucherHistory.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = voucherHistory.slice(startIndex, endIndex);
  const startItem = totalItems === 0 ? 0 : startIndex + 1;
  const endItem = Math.min(endIndex, totalItems);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Vouchers</h1>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="h-auto bg-transparent p-0 gap-6 border-b border-border rounded-none">
          <TabsTrigger
            value="redeem"
            className="px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Redeem
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            History
          </TabsTrigger>
        </TabsList>

        {/* Redeem Tab Content */}
        <TabsContent value="redeem" className="mt-6 space-y-6">
          {/* Redeem Gift Voucher Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Redeem Gift Voucher</h2>
            
            <form onSubmit={handleRedeem} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="voucher-code">Gift Voucher Code</Label>
                <Input
                  id="voucher-code"
                  type="text"
                  placeholder="Enter voucher code"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                  className="w-full"
                  disabled={redeeming}
                />
              </div>
              
              <p className="text-sm text-muted-foreground">
                Gift voucher will be redeemed into ShaleanCred
              </p>
              
              <Button 
                variant="default" 
                className="w-full sm:w-auto"
                type="submit"
                disabled={redeeming || !voucherCode.trim()}
              >
                {redeeming ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Redeeming...
                  </>
                ) : (
                  'Redeem Gift Voucher'
                )}
              </Button>
            </form>
          </div>

          {/* Separator */}
          <div className="border-t border-border"></div>

          {/* Available Gift Vouchers Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Available Gift Vouchers</h2>
            {loadingVouchers ? (
              <div className="py-8 text-center">
                <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Loading vouchers...</p>
              </div>
            ) : availableVouchers.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No available vouchers at this time.
              </p>
            ) : (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Voucher Code</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Valid Until</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {availableVouchers.map((voucher) => (
                      <TableRow key={voucher.id}>
                        <TableCell className="text-sm font-mono">
                          {voucher.code}
                        </TableCell>
                        <TableCell className="text-sm font-medium">
                          R{voucher.amount.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            voucher.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : voucher.status === 'redeemed'
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {voucher.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {voucher.created_at 
                            ? (typeof voucher.created_at === 'string' 
                                ? formatDate(voucher.created_at) 
                                : new Date(voucher.created_at).toLocaleDateString('en-ZA', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                  }))
                            : 'N/A'}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {voucher.valid_until 
                            ? (typeof voucher.valid_until === 'string' 
                                ? (voucher.valid_until.includes('T') 
                                    ? formatDate(voucher.valid_until)
                                    : new Date(voucher.valid_until).toLocaleDateString('en-ZA', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                      }))
                                : new Date(voucher.valid_until).toLocaleDateString('en-ZA', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                  }))
                            : 'No expiry'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          {/* Separator */}
          <div className="border-t border-border"></div>

          {/* Buy a Gift Voucher Section */}
          <Card>
            <CardHeader>
              <CardTitle>Buy a Gift Voucher</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Looking to buy a gift voucher? You buy a gift voucher and send it to someone special who's in need of a good clean.
              </p>
              <Button variant="default" onClick={() => router.push('/get-voucher')}>
                Buy Vouchers
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab Content */}
        <TabsContent value="history" className="mt-6 space-y-6">
          {/* Table Section */}
          <div className="space-y-4">
            {loading ? (
              <div className="py-12 text-center">
                <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
                <p className="text-muted-foreground">Loading voucher history...</p>
              </div>
            ) : (
              <>
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Voucher Code</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentItems.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                            No voucher redemptions found
                          </TableCell>
                        </TableRow>
                      ) : (
                        currentItems.map((voucher) => (
                          <TableRow key={voucher.id}>
                            <TableCell className="text-sm">
                              {formatDate(voucher.redeemed_at)}
                            </TableCell>
                            <TableCell className="text-sm font-mono">
                              {voucher.voucher_code}
                            </TableCell>
                            <TableCell className="text-sm font-medium">
                              R{voucher.amount.toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}

            {/* Pagination Controls */}
            {totalItems > 0 && (
              <div className="flex items-center justify-between">
                {/* Items per page selector */}
                <div className="flex items-center gap-2">
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value));
                      setCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-[120px] h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Items</SelectItem>
                      <SelectItem value="10">10 Items</SelectItem>
                      <SelectItem value="20">20 Items</SelectItem>
                      <SelectItem value="50">50 Items</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Pagination */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="h-9"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground px-2">
                    {startItem}-{endItem} of {totalItems}
                  </span>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage >= totalPages}
                    className="h-9"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Empty state pagination */}
            {totalItems === 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value));
                      setCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-[120px] h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Items</SelectItem>
                      <SelectItem value="10">10 Items</SelectItem>
                      <SelectItem value="20">20 Items</SelectItem>
                      <SelectItem value="50">50 Items</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    disabled
                    className="h-9"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground px-2">
                    1-0 of 0
                  </span>
                  <Button
                    variant="default"
                    size="sm"
                    disabled
                    className="h-9"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Buy a Gift Voucher Section */}
          <Card>
            <CardHeader>
              <CardTitle>Buy a Gift Voucher</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Looking to buy a gift voucher? You buy a gift voucher and send it to someone special who's in need of a good clean.
              </p>
              <Button variant="default" onClick={() => router.push('/get-voucher')}>
                Buy Vouchers
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

