'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getAllCustomers, getAllCleaners } from '../../../actions';
import { Profile } from '@/types/profile';
import { Cleaner } from '@/types/booking';
import { Loader2, ArrowLeft, User, Mail, Phone, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UserDetailPage() {
  const params = useParams();
  const userId = params.id as string;
  const [user, setUser] = useState<Profile | Cleaner | null>(null);
  const [userType, setUserType] = useState<'customer' | 'cleaner' | null>(null);

  // Get all customers and cleaners to find the user
  const { data: customers } = useQuery({
    queryKey: ['all-customers'],
    queryFn: async () => {
      const result = await getAllCustomers();
      return result.success ? result.customers || [] : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const { data: cleaners } = useQuery({
    queryKey: ['all-cleaners'],
    queryFn: async () => {
      const result = await getAllCleaners();
      return result.success ? result.cleaners || [] : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  useEffect(() => {
    if (customers && cleaners) {
      // Try to find as customer first
      const customer = customers.find((c) => c.id === userId);
      if (customer) {
        setUser(customer);
        setUserType('customer');
        return;
      }

      // Try to find as cleaner
      const cleaner = cleaners.find((c) => c.id === userId);
      if (cleaner) {
        setUser(cleaner);
        setUserType('cleaner');
        return;
      }
    }
  }, [customers, cleaners, userId]);

  if (!user || !userType) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const isCustomer = userType === 'customer';
  const customer = isCustomer ? (user as Profile) : null;
  const cleaner = !isCustomer ? (user as Cleaner) : null;

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/users">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Users
          </Link>
        </Button>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {isCustomer
            ? `${customer?.first_name} ${customer?.last_name}`
            : cleaner?.name}
        </h1>
        <p className="text-muted-foreground">
          {isCustomer ? 'Customer' : 'Cleaner'} Profile
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Basic user details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isCustomer && customer ? (
              <>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Name</p>
                    <p className="text-sm text-muted-foreground">
                      {customer.first_name} {customer.last_name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                </div>
                {customer.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{customer.phone}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Joined</p>
                    <p className="text-sm text-muted-foreground">
                      {customer.created_at
                        ? new Date(customer.created_at).toLocaleDateString()
                        : '—'}
                    </p>
                  </div>
                </div>
              </>
            ) : cleaner ? (
              <>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Name</p>
                    <p className="text-sm text-muted-foreground">{cleaner.name}</p>
                  </div>
                </div>
                {cleaner.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{cleaner.email}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{cleaner.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-sm text-muted-foreground">
                      {cleaner.is_active ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                </div>
                {cleaner.rating && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Rating</p>
                      <p className="text-sm text-muted-foreground">
                        {cleaner.rating.toFixed(1)}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Joined</p>
                    <p className="text-sm text-muted-foreground">
                      {cleaner.created_at
                        ? new Date(cleaner.created_at).toLocaleDateString()
                        : '—'}
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>Additional details</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              More information about this user will be available here in the future.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Booking history, activity logs, and other details can be added later.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
