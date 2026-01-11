'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAdminStats } from '../../actions';
import { Loader2, BarChart3, TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReportsPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Get admin stats
  useQuery({
    queryKey: ['admin-stats-reports'],
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
    staleTime: 2 * 60 * 1000,
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Reports & Analytics</h1>
        <p className="text-muted-foreground">
          View system analytics and insights
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Financial metrics and revenue trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <DollarSign className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Total Revenue</p>
                <p className="text-2xl font-bold">R{stats?.totalRevenue?.toFixed(2) || '0.00'}</p>
                <p className="text-xs text-muted-foreground">All time</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Monthly Revenue</p>
                <p className="text-2xl font-bold">R{stats?.monthlyRevenue?.toFixed(2) || '0.00'}</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Booking Metrics</CardTitle>
          <CardDescription>Booking statistics and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Calendar className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Total Bookings</p>
                <p className="text-2xl font-bold">{stats?.totalBookings || 0}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Calendar className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Active Bookings</p>
                <p className="text-2xl font-bold">{stats?.activeBookings || 0}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Completion Rate</p>
                <p className="text-2xl font-bold">{stats?.completionRate?.toFixed(1) || '0.0'}%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Metrics</CardTitle>
          <CardDescription>User statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Users className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Total Customers</p>
                <p className="text-2xl font-bold">{stats?.totalCustomers || 0}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Users className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Total Cleaners</p>
                <p className="text-2xl font-bold">{stats?.totalCleaners || 0}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Users className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Active Cleaners</p>
                <p className="text-2xl font-bold">{stats?.activeCleaners || 0}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Analytics</CardTitle>
          <CardDescription>Advanced reporting features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-2">
              Advanced analytics and charts are coming soon.
            </p>
            <p className="text-sm text-muted-foreground">
              Revenue charts, booking trends, cleaner performance metrics, and export functionality will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
