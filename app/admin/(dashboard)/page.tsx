'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  getCurrentAdmin,
  getAdminStats,
  getMonthlyUserData,
  getBookingStatusDistribution,
  getMonthlyTransactionData,
  getTopActiveUsers,
  getServicePopularity,
  getRatingStats,
  getServiceTypeDistribution,
} from '../actions';
import { Loader2, Calendar, Users, DollarSign, TrendingUp, CheckCircle2, Clock, Briefcase, Star, ArrowRight, Search, Filter, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { DashboardFiltersComponent, DashboardFilters } from '../components/DashboardFilters';
import { NewUsersChart } from '../components/charts/NewUsersChart';
import { BookingStatsChart } from '../components/charts/BookingStatsChart';
import { TransactionChart } from '../components/charts/TransactionChart';
import { SubscriptionChart } from '../components/charts/SubscriptionChart';

export default function AdminDashboardPage() {
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
    queryKey: ['admin-stats', filterParams.dateFrom, filterParams.dateTo, filterParams.status, filterParams.serviceType],
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

  // Get chart data
  const { data: monthlyUserData } = useQuery({
    queryKey: ['monthly-user-data', filterParams.dateFrom, filterParams.dateTo, filterParams.serviceType],
    queryFn: async () => {
      const result = await getMonthlyUserData({
        dateFrom: filterParams.dateFrom,
        dateTo: filterParams.dateTo,
        serviceType: filterParams.serviceType,
      });
      return result.success ? result.data : [];
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  const { data: bookingStatusData } = useQuery({
    queryKey: ['booking-status-distribution', filterParams.dateFrom, filterParams.dateTo, filterParams.serviceType],
    queryFn: async () => {
      const result = await getBookingStatusDistribution({
        dateFrom: filterParams.dateFrom,
        dateTo: filterParams.dateTo,
        serviceType: filterParams.serviceType,
      });
      return result.success ? { 
        data: result.data || [], 
        total: result.total || 0,
        growthPercentage: result.growthPercentage || 0
      } : { data: [], total: 0, growthPercentage: 0 };
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  const { data: transactionData } = useQuery({
    queryKey: ['monthly-transaction-data', filterParams.dateFrom, filterParams.dateTo, filterParams.status, filterParams.serviceType],
    queryFn: async () => {
      const result = await getMonthlyTransactionData({
        dateFrom: filterParams.dateFrom,
        dateTo: filterParams.dateTo,
        status: filterParams.status,
        serviceType: filterParams.serviceType,
      });
      return result.success ? result.data : [];
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  const { data: topUsers } = useQuery({
    queryKey: ['top-active-users', filterParams.dateFrom, filterParams.dateTo, filterParams.status, filterParams.serviceType],
    queryFn: async () => {
      const result = await getTopActiveUsers();
      return result.success ? result.users : [];
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  const { data: servicePopularity } = useQuery({
    queryKey: ['service-popularity', filterParams.dateFrom, filterParams.dateTo, filterParams.status],
    queryFn: async () => {
      const result = await getServicePopularity({
        dateFrom: filterParams.dateFrom,
        dateTo: filterParams.dateTo,
        status: filterParams.status,
      });
      return result.success ? result.services : [];
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  const { data: ratingStats } = useQuery({
    queryKey: ['rating-stats', filterParams.dateFrom, filterParams.dateTo, filterParams.serviceType],
    queryFn: async () => {
      const result = await getRatingStats({
        dateFrom: filterParams.dateFrom,
        dateTo: filterParams.dateTo,
        serviceType: filterParams.serviceType,
      });
      return result.success ? result.stats : null;
    },
    enabled: !!admin,
    staleTime: 2 * 60 * 1000,
  });

  const { data: serviceDistribution } = useQuery({
    queryKey: ['service-type-distribution', filterParams.dateFrom, filterParams.dateTo, filterParams.status],
    queryFn: async () => {
      const result = await getServiceTypeDistribution({
        dateFrom: filterParams.dateFrom,
        dateTo: filterParams.dateTo,
        status: filterParams.status,
      });
      return result.success ? result.data : [];
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
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Overview Section with Search and Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-3xl font-bold">Overview</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-9 rounded-full border-gray-300 w-[200px] md:w-[250px]"
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1 rounded-full border-gray-300 relative">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                  {(filters.dateFrom || filters.dateTo || filters.status || filters.serviceType) && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {(filters.dateFrom || filters.dateTo ? 1 : 0) + (filters.status ? 1 : 0) + (filters.serviceType ? 1 : 0)}
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
        
        {/* 5 Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-2">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Cleaners</p>
              <p className="text-2xl font-bold">{stats?.totalCleaners || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Clients</p>
              <p className="text-2xl font-bold">{stats?.totalCustomers || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Bookings</p>
              <p className="text-2xl font-bold">{stats?.totalBookings || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Active Bookings</p>
              <p className="text-2xl font-bold">{stats?.activeBookings || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
              <p className="text-2xl font-bold">R{Math.round(stats?.totalRevenue || 0).toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* New Users Chart */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>New Users</CardTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-sm text-muted-foreground">Provider</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                  <span className="text-sm text-muted-foreground">Client</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {monthlyUserData && monthlyUserData.length > 0 ? (
              <NewUsersChart data={monthlyUserData} />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        {/* Booking Statistics Donut Chart */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Booking Statistics</CardTitle>
            {bookingStatusData && bookingStatusData.total !== undefined && (
              <p className="text-sm text-muted-foreground mt-1">
                Total Bookings : {bookingStatusData.total.toLocaleString()}
              </p>
            )}
          </CardHeader>
          <CardContent>
            {bookingStatusData && bookingStatusData.data.length > 0 ? (
              <BookingStatsChart 
                data={bookingStatusData.data} 
                total={bookingStatusData.total}
                growthPercentage={bookingStatusData.growthPercentage}
              />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        {/* Transaction Overview Bar Chart */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Transaction Overview</CardTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-sm text-muted-foreground">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                  <span className="text-sm text-muted-foreground">Pending</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {transactionData && transactionData.length > 0 ? (
              <TransactionChart data={transactionData} />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recurring Stats Horizontal Bar Chart */}
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recurring Stats</CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                <span>Provider</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {serviceDistribution && serviceDistribution.length > 0 ? (
              <SubscriptionChart data={serviceDistribution} />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Lists Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Top 10 Active Users */}
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Active Users</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topUsers && topUsers.length > 0 ? (
              topUsers.slice(0, 10).map((user, index) => (
                <Link
                  key={user.id}
                  href={`/admin/users/${user.id}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Avatar>
                    <AvatarFallback>
                      {user.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{user.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{user.role}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </Link>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No active users</p>
            )}
          </CardContent>
        </Card>

        {/* Top Requested Services */}
        <Card>
          <CardHeader>
            <CardTitle>Top Requested Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {servicePopularity && servicePopularity.length > 0 ? (
              servicePopularity.slice(0, 5).map((service, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.percentage}%</p>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ef4444] transition-all"
                      style={{ width: `${service.percentage}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No services data</p>
            )}
          </CardContent>
        </Card>

        {/* Ratings Section */}
        <Card>
          <CardHeader>
            <CardTitle>Ratings</CardTitle>
          </CardHeader>
          <CardContent>
            {ratingStats ? (
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{ratingStats.averageRating.toFixed(1)}</span>
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {ratingStats.totalRatings.toLocaleString()} total
                </p>
                {/* Rating breakdown */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = ratingStats.breakdown[star] || 0;
                    const percentage = ratingStats.totalRatings > 0
                      ? (count / ratingStats.totalRatings) * 100
                      : 0;
                    return (
                      <div key={star} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-8">{star}-star</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-12 text-right">
                            {percentage.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No ratings data</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
