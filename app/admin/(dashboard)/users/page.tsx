'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllCustomers, getAllCleaners } from '../../actions';
import { Profile } from '@/types/profile';
import { Cleaner } from '@/types/booking';
import { Loader2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function UsersPage() {
  const [customers, setCustomers] = useState<Profile[]>([]);
  const [cleaners, setCleaners] = useState<Cleaner[]>([]);
  const [customerSearch, setCustomerSearch] = useState('');
  const [cleanerSearch, setCleanerSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Get all customers
  useQuery({
    queryKey: ['all-customers'],
    queryFn: async () => {
      const result = await getAllCustomers();
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

  // Get all cleaners
  useQuery({
    queryKey: ['all-cleaners'],
    queryFn: async () => {
      const result = await getAllCleaners();
      if (result.success && result.cleaners) {
        setCleaners(result.cleaners);
        setLoading(false);
        return result.cleaners;
      }
      setLoading(false);
      return [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const filteredCustomers = customers.filter((customer) => {
    const search = customerSearch.toLowerCase();
    return (
      customer.first_name?.toLowerCase().includes(search) ||
      customer.last_name?.toLowerCase().includes(search) ||
      customer.email?.toLowerCase().includes(search) ||
      customer.phone?.toLowerCase().includes(search)
    );
  });

  const filteredCleaners = cleaners.filter((cleaner) => {
    const search = cleanerSearch.toLowerCase();
    return (
      cleaner.name?.toLowerCase().includes(search) ||
      cleaner.email?.toLowerCase().includes(search) ||
      cleaner.phone?.toLowerCase().includes(search)
    );
  });

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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">User Management</h1>
        <p className="text-muted-foreground">
          Manage customers and cleaners
        </p>
      </div>

      <Tabs defaultValue="customers" className="w-full">
        <TabsList>
          <TabsTrigger value="customers">Customers ({customers.length})</TabsTrigger>
          <TabsTrigger value="cleaners">Cleaners ({cleaners.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>
                Manage customer accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Search customers by name, email, or phone..."
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Phone</th>
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
                              {customer.first_name} {customer.last_name}
                            </td>
                            <td className="p-4">{customer.email}</td>
                            <td className="p-4">{customer.phone || '—'}</td>
                            <td className="p-4">
                              {customer.created_at
                                ? new Date(customer.created_at).toLocaleDateString()
                                : '—'}
                            </td>
                            <td className="p-4">
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/admin/users/${customer.id}`}>View</Link>
                              </Button>
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
        </TabsContent>

        <TabsContent value="cleaners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cleaners</CardTitle>
              <CardDescription>
                Manage cleaner accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Search cleaners by name, email, or phone..."
                  value={cleanerSearch}
                  onChange={(e) => setCleanerSearch(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Phone</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Rating</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Joined</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCleaners.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="h-24 text-center text-muted-foreground">
                            No cleaners found
                          </td>
                        </tr>
                      ) : (
                        filteredCleaners.map((cleaner) => (
                          <tr key={cleaner.id} className="border-b">
                            <td className="p-4">{cleaner.name}</td>
                            <td className="p-4">{cleaner.email || '—'}</td>
                            <td className="p-4">{cleaner.phone}</td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  cleaner.is_active
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                                }`}
                              >
                                {cleaner.is_active ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="p-4">
                              {cleaner.rating ? cleaner.rating.toFixed(1) : '—'}
                            </td>
                            <td className="p-4">
                              {cleaner.created_at
                                ? new Date(cleaner.created_at).toLocaleDateString()
                                : '—'}
                            </td>
                            <td className="p-4">
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/admin/users/${cleaner.id}`}>View</Link>
                              </Button>
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
