'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAdminStats, getCurrentAdmin } from '../../actions';
import { Loader2, BarChart3, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { DashboardFiltersComponent, DashboardFilters } from '../../components/DashboardFilters';
import { RevenueAnalytics } from './components/RevenueAnalytics';
import { CleanerPerformance } from './components/CleanerPerformance';
import { CustomerInsights } from './components/CustomerInsights';
import { ComparativeAnalysis } from './components/ComparativeAnalysis';
import { ExportSection } from './components/ExportSection';
import { MetricCard } from '../../components/MetricCard';
import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export default function ReportsPage() {
  const [admin, setAdmin] = useState<{
    id: string;
    email: string;
    name?: string;
  } | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<DashboardFilters>({
    dateFrom: null,
    dateTo: null,
    status: null,
    serviceType: null,
  });

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

  // Prepare filter parameters for backend
  const filterParams = {
    dateFrom: filters.dateFrom ? filters.dateFrom.toISOString().split('T')[0] : undefined,
    dateTo: filters.dateTo ? filters.dateTo.toISOString().split('T')[0] : undefined,
    status: filters.status || undefined,
    serviceType: filters.serviceType || undefined,
  };

  // Get admin stats
  useQuery({
    queryKey: ['admin-stats-reports', filterParams.dateFrom, filterParams.dateTo, filterParams.status, filterParams.serviceType],
    queryFn: async () => {
      const result = await getAdminStats(filterParams);
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

  const activeFilterCount =
    (filters.dateFrom || filters.dateTo ? 1 : 0) +
    (filters.status ? 1 : 0) +
    (filters.serviceType ? 1 : 0);

  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics and insights for your business
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1 relative">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
                {activeFilterCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {activeFilterCount}
                  </Badge>
                )}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-0">
              <DashboardFiltersComponent filters={filters} onFiltersChange={setFilters} />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value={`R${Math.round(stats?.totalRevenue || 0).toLocaleString()}`}
          subtitle="All time"
          icon={<DollarSign className="h-5 w-5" />}
        />
        <MetricCard
          title="Total Bookings"
          value={(stats?.totalBookings || 0).toLocaleString()}
          subtitle="All bookings"
          icon={<Calendar className="h-5 w-5" />}
        />
        <MetricCard
          title="Total Customers"
          value={(stats?.totalCustomers || 0).toLocaleString()}
          subtitle="Registered customers"
          icon={<Users className="h-5 w-5" />}
        />
        <MetricCard
          title="Completion Rate"
          value={`${(stats?.completionRate || 0).toFixed(1)}%`}
          subtitle="Booking completion"
          icon={<TrendingUp className="h-5 w-5" />}
        />
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="cleaners">Cleaners</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Overview</CardTitle>
              <CardDescription>Key metrics at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <DollarSign className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Monthly Revenue</p>
                    <p className="text-2xl font-bold">R{stats?.monthlyRevenue?.toFixed(2) || '0.00'}</p>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Active Bookings</p>
                    <p className="text-2xl font-bold">{stats?.activeBookings || 0}</p>
                    <p className="text-xs text-muted-foreground">Currently active</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Users className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Total Cleaners</p>
                    <p className="text-2xl font-bold">{stats?.totalCleaners || 0}</p>
                    <p className="text-xs text-muted-foreground">Registered cleaners</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Users className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Active Cleaners</p>
                    <p className="text-2xl font-bold">{stats?.activeCleaners || 0}</p>
                    <p className="text-xs text-muted-foreground">Currently active</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <ExportSection />
        </TabsContent>

        <TabsContent value="revenue" className="mt-6">
          <RevenueAnalytics filters={filters} />
        </TabsContent>

        <TabsContent value="cleaners" className="mt-6">
          <CleanerPerformance filters={filters} />
        </TabsContent>

        <TabsContent value="customers" className="mt-6">
          <CustomerInsights filters={filters} />
        </TabsContent>

        <TabsContent value="comparison" className="mt-6">
          <ComparativeAnalysis filters={filters} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
