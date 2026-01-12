'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  getAllCustomersWithCredits,
  allocateCreditsToCustomer,
  setCustomerCredits,
  adjustCustomerCredits,
} from '../../actions';
import { Profile } from '@/types/profile';
import { Loader2, Wallet, DollarSign, Users, Plus, Edit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { AllocateCreditsDialog } from './components/AllocateCreditsDialog';
import { EditCreditsDialog } from './components/EditCreditsDialog';

type CustomerWithCredits = Profile & { credit_balance: number };

export default function ShaleanCredPage() {
  const [customers, setCustomers] = useState<CustomerWithCredits[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [allocatingCustomer, setAllocatingCustomer] = useState<CustomerWithCredits | null>(null);
  const [editingCustomer, setEditingCustomer] = useState<CustomerWithCredits | null>(null);

  // Get all customers with credits
  const { refetch } = useQuery({
    queryKey: ['admin-all-customers-credits'],
    queryFn: async () => {
      const result = await getAllCustomersWithCredits();
      if (result.success && result.customers) {
        setCustomers(result.customers);
        setLoading(false);
        return result.customers;
      }
      setLoading(false);
      return [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const filteredCustomers = customers.filter((customer) => {
    const searchLower = search.toLowerCase();
    return (
      customer.first_name.toLowerCase().includes(searchLower) ||
      customer.last_name.toLowerCase().includes(searchLower) ||
      customer.email.toLowerCase().includes(searchLower) ||
      (customer.phone && customer.phone.toLowerCase().includes(searchLower))
    );
  });

  // Calculate statistics
  const totalBalance = customers.reduce((sum, c) => sum + (c.credit_balance || 0), 0);
  const customersWithCredits = customers.filter((c) => (c.credit_balance || 0) > 0).length;
  const totalAllocated = customers.reduce((sum, c) => {
    // This is an approximation - we'd need transaction history for exact total
    return sum + (c.credit_balance || 0);
  }, 0);

  const handleAllocateSuccess = () => {
    refetch();
    setAllocatingCustomer(null);
  };

  const handleEditSuccess = () => {
    refetch();
    setEditingCustomer(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">ShaleanCred Management</h1>
        <p className="text-muted-foreground">
          View and manage customer credit balances
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Active Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R{totalBalance.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Across all customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers with Credits</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{customersWithCredits}</div>
            <p className="text-xs text-muted-foreground">
              Out of {customers.length} total customers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Credits Allocated</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R{totalAllocated.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Approximate total</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Credit Balances</CardTitle>
          <CardDescription>
            Manage credit balances for all customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Search by customer name, email, or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium">Customer</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Current Balance</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Joined</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="h-24 text-center text-muted-foreground">
                        No customers found
                      </td>
                    </tr>
                  ) : (
                    filteredCustomers.map((customer) => (
                      <tr key={customer.id} className="border-b">
                        <td className="p-4">
                          <div className="font-medium">
                            {customer.first_name} {customer.last_name}
                          </div>
                        </td>
                        <td className="p-4">{customer.email}</td>
                        <td className="p-4">
                          <div className="font-medium text-lg">
                            R{(customer.credit_balance || 0).toFixed(2)}
                          </div>
                        </td>
                        <td className="p-4">
                          {customer.created_at
                            ? format(new Date(customer.created_at), 'MMM d, yyyy')
                            : '—'}
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setAllocatingCustomer(customer)}
                            >
                              <Plus className="h-4 w-4 mr-1" />
                              Allocate
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingCustomer(customer)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dialogs */}
      {allocatingCustomer && (
        <AllocateCreditsDialog
          open={!!allocatingCustomer}
          onOpenChange={(open) => !open && setAllocatingCustomer(null)}
          customer={allocatingCustomer}
          onSuccess={handleAllocateSuccess}
        />
      )}

      {editingCustomer && (
        <EditCreditsDialog
          open={!!editingCustomer}
          onOpenChange={(open) => !open && setEditingCustomer(null)}
          customer={editingCustomer}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
}
