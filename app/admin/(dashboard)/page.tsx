'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCurrentAdmin, getAdminStats } from '../actions';
import { Loader2, Calendar, Users, DollarSign, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AdminDashboardPage() {
  const [admin, setAdmin] = useState<{
    id: string;
    email: string;
    name?: string;
  } | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Get current admin
  const { data: adminData } = useQuery({
    queryKey: ['current-admin'],
    queryFn: async () => {
      const result = await getCurrentAdmin();
      if (result.success && result.admin) {
        setAdmin(result.admin);
        return result.admin;
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });

  // Get admin stats
  useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const result = await getAdminStats();
      if (result.success && result.stats) {
        setStats(result.stats);
        setLoading(false);
        return result.stats;
      }
      setLoading(false);
      return null;
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  if (!admin || loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-full overflow-x-hidden">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome back, Admin!
        </h1>
        <p className="text-muted-foreground">
          Here's your overview of the system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4 w-full overflow-x-hidden">
        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Total Bookings</CardDescription>
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              {stats?.totalBookings || 0}
            </CardTitle>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Active Bookings</CardDescription>
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              {stats?.activeBookings || 0}
            </CardTitle>
            <p className="text-xs text-muted-foreground">Pending/Confirmed</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Total Revenue</CardDescription>
              <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              R{stats?.totalRevenue?.toFixed(2) || '0.00'}
            </CardTitle>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Monthly Revenue</CardDescription>
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              R{stats?.monthlyRevenue?.toFixed(2) || '0.00'}
            </CardTitle>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4 w-full overflow-x-hidden">
        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Total Customers</CardDescription>
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              {stats?.totalCustomers || 0}
            </CardTitle>
            <p className="text-xs text-muted-foreground">All customers</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Total Cleaners</CardDescription>
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              {stats?.totalCleaners || 0}
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              {stats?.activeCleaners || 0} active
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Completion Rate</CardDescription>
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              {stats?.completionRate?.toFixed(1) || '0.0'}%
            </CardTitle>
            <p className="text-xs text-muted-foreground">Success rate</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="px-2 pb-2 sm:px-6 sm:pb-6 pt-3 sm:pt-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <CardDescription className="text-xs sm:text-sm">Active Cleaners</CardDescription>
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
              {stats?.activeCleaners || 0}
            </CardTitle>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/bookings">
              <Button variant="outline" className="w-full justify-between">
                <span>Manage Bookings</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/users">
              <Button variant="outline" className="w-full justify-between">
                <span>Manage Users</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/create-cleaner">
              <Button variant="outline" className="w-full justify-between">
                <span>Create Cleaner</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/discount-codes">
              <Button variant="outline" className="w-full justify-between">
                <span>Manage Discount Codes</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
            <CardDescription>Key metrics and insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Bookings</span>
                <span className="font-medium">{stats?.totalBookings || 0}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Active Bookings</span>
                <span className="font-medium">{stats?.activeBookings || 0}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Revenue</span>
                <span className="font-medium">R{stats?.totalRevenue?.toFixed(2) || '0.00'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium">R{stats?.monthlyRevenue?.toFixed(2) || '0.00'}</span>
              </div>
            </div>
            <Link href="/admin/reports">
              <Button variant="outline" className="w-full">
                View Detailed Reports
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
