'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Plus, Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase/client';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  transactionType: string;
  paymentStatus: string;
  balanceBefore: number;
  balanceAfter: number;
  paymentMethod?: string;
}

export default function ShaleanCredPage() {
  const [mounted, setMounted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [balance, setBalance] = useState(0);
  const [email, setEmail] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Get email from authenticated user
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) {
        setEmail(user.email);
      }
    });
  }, []);

  const loadBalance = useCallback(async (userEmail: string) => {
    if (!userEmail) return;
    try {
      const response = await fetch('/api/profile/balance');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setBalance(data.balance || 0);
        }
      } else if (response.status === 401) {
        console.error('Unauthorized - user not authenticated');
      }
    } catch (error) {
      console.error('Error loading balance:', error);
    }
  }, []);

  const loadTransactions = useCallback(async (userEmail: string, page: number, limit: number) => {
    if (!userEmail) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `/api/credit/transactions?page=${page}&limit=${limit}`
      );
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setTransactions(data.transactions || []);
          setTotalItems(data.total || 0);
        }
      } else if (response.status === 401) {
        console.error('Unauthorized - user not authenticated');
      }
    } catch (error) {
      console.error('Error loading transactions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const checkPendingCredits = useCallback(async (userEmail: string) => {
    if (!userEmail) return;
    try {
      const response = await fetch('/api/credit/retry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.results && result.results.length > 0) {
          const successCount = result.results.filter((r: any) => r.success).length;
          if (successCount > 0) {
            toast.success(`Credited ${successCount} pending purchase(s) to your account!`);
            // Reload balance and transactions
            loadBalance(userEmail);
            loadTransactions(userEmail, currentPage, itemsPerPage);
          }
        }
      } else if (response.status === 401) {
        console.error('Unauthorized - user not authenticated');
      }
    } catch (error) {
      console.error('Error checking pending credits:', error);
      // Silently fail - don't show error to user for background checks
    }
  }, [loadBalance, loadTransactions, currentPage, itemsPerPage]);

  // Load data when email is available
  useEffect(() => {
    if (email) {
      // Load balance first
      loadBalance(email);
      
      // Load transactions
      loadTransactions(email, currentPage, itemsPerPage);
      
      // Check for pending credits automatically (this runs in background)
      checkPendingCredits(email);
    }
  }, [email, currentPage, itemsPerPage, loadBalance, loadTransactions, checkPendingCredits]);

  // Set up periodic checking
  useEffect(() => {
    if (!email) return;

    // Check periodically in case credits arrive later (every 30 seconds for 2 minutes)
    let checkCount = 0;
    const maxChecks = 4;
    const intervalId = setInterval(() => {
      checkCount++;
      if (checkCount <= maxChecks) {
        checkPendingCredits(email);
        loadBalance(email); // Reload balance after each check
        loadTransactions(email, currentPage, itemsPerPage); // Reload transactions
      } else {
        clearInterval(intervalId);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(intervalId);
  }, [email, currentPage, itemsPerPage, loadBalance, loadTransactions, checkPendingCredits]);


  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
      case 'failed':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Failed</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      if (email) {
        loadTransactions(email, newPage, itemsPerPage);
      }
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      if (email) {
        loadTransactions(email, newPage, itemsPerPage);
      }
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">ShaleanCred</h1>
      </div>

      {/* Buy ShaleanCred Button and Balance Card */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Buy ShaleanCred Button */}
        <Button
          variant="default"
          size="lg"
          className="bg-primary-light hover:bg-primary-light/90 text-primary font-semibold h-auto py-4 px-6 text-lg"
          onClick={() => {
            window.location.href = '/dashboard/shaleancred/buy';
          }}
        >
          <Plus className="h-5 w-5 mr-2" />
          Buy ShaleanCred
        </Button>

        {/* ShaleanCred Balance Card */}
        <Card className="flex-1 sm:max-w-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              ShaleanCred Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Wallet className="h-6 w-6 text-muted-foreground" />
            <span className="text-2xl font-bold">R{balance.toFixed(2)}</span>
          </CardContent>
        </Card>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        {/* Items per page selector */}
        <div className="flex items-center gap-2">
          {mounted ? (
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => {
                const newItemsPerPage = Number(value);
                setItemsPerPage(newItemsPerPage);
                setCurrentPage(1);
                if (email) {
                  loadTransactions(email, 1, newItemsPerPage);
                }
              }}
            >
              <SelectTrigger className="w-[120px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 Items</SelectItem>
                <SelectItem value="25">25 Items</SelectItem>
                <SelectItem value="50">50 Items</SelectItem>
                <SelectItem value="100">100 Items</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <div className="w-[120px] h-9 flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm">
              <span>{itemsPerPage} Items</span>
            </div>
          )}
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
            {currentPage}
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

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Loading transactions...</p>
            </div>
          ) : totalItems === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No transactions to display</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Description</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Type</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm">Amount</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm">Balance After</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-accent/50">
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          {formatDate(transaction.date)}
                        </td>
                        <td className="py-3 px-4 text-sm">{transaction.description}</td>
                        <td className="py-3 px-4 text-sm">
                          <span
                            className={`font-medium ${
                              transaction.type === 'credit'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                          >
                            {transaction.type === 'credit' ? '+' : '-'}
                          </span>
                          {transaction.transactionType === 'purchase' && ' Purchase'}
                          {transaction.transactionType === 'usage' && ' Usage'}
                          {transaction.transactionType === 'refund' && ' Refund'}
                          {transaction.transactionType === 'referral_reward' && ' Referral Reward'}
                        </td>
                        <td className="py-3 px-4 text-sm text-right font-medium">
                          <span
                            className={
                              transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                            }
                          >
                            {transaction.type === 'credit' ? '+' : '-'}R
                            {transaction.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-right text-muted-foreground">
                          R{transaction.balanceAfter.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-sm text-center">
                          {getStatusBadge(transaction.paymentStatus)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {totalItems > 0 && (
                <div className="mt-4 text-sm text-muted-foreground text-center">
                  Showing {startItem} to {endItem} of {totalItems} transactions
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

