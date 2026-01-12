'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getRevenueTrends,
  getRevenueByServiceType,
  getRevenueByPaymentStatus,
  getAverageOrderValue,
  getRevenueForecast,
} from '../../../actions';
import { RevenueCharts } from '../../../components/charts/RevenueCharts';
import { MetricCard } from '../../../components/MetricCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, ShoppingCart, BarChart3 } from 'lucide-react';
import { DashboardFilters } from '../../../components/DashboardFilters';

interface RevenueAnalyticsProps {
  filters: {
    dateFrom: Date | null;
    dateTo: Date | null;
    status: string | null;
    serviceType: string | null;
  };
}

export function RevenueAnalytics({ filters }: RevenueAnalyticsProps) {
  const filterParams = {
    dateFrom: filters.dateFrom ? filters.dateFrom.toISOString().split('T')[0] : undefined,
    dateTo: filters.dateTo ? filters.dateTo.toISOString().split('T')[0] : undefined,
  };

  // Get revenue trends
  const { data: trendData, isLoading: trendsLoading } = useQuery({
    queryKey: ['revenue-trends', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getRevenueTrends({
        ...filterParams,
        period: 'monthly',
      });
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get revenue by service type
  const { data: serviceTypeData, isLoading: serviceTypeLoading } = useQuery({
    queryKey: ['revenue-by-service-type', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getRevenueByServiceType(filterParams);
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get revenue by payment status
  const { data: paymentStatusData, isLoading: paymentStatusLoading } = useQuery({
    queryKey: ['revenue-by-payment-status', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getRevenueByPaymentStatus(filterParams);
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get average order value
  const { data: aovData, isLoading: aovLoading } = useQuery({
    queryKey: ['average-order-value', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getAverageOrderValue({
        ...filterParams,
        period: 'monthly',
      });
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get revenue forecast
  const { data: forecastData, isLoading: forecastLoading } = useQuery({
    queryKey: ['revenue-forecast'],
    queryFn: async () => {
      const result = await getRevenueForecast({
        periods: 3,
        period: 'monthly',
      });
      return result.success ? result.data : [];
    },
    staleTime: 5 * 60 * 1000,
  });

  // Calculate summary metrics
  const totalRevenue = trendData?.reduce((sum, item) => sum + item.revenue, 0) || 0;
  const totalBookings = trendData?.reduce((sum, item) => sum + item.bookings, 0) || 0;
  const averageRevenue = trendData && trendData.length > 0 ? totalRevenue / trendData.length : 0;
  const latestGrowth = trendData && trendData.length > 0 ? trendData[trendData.length - 1]?.growth : undefined;
  const averageAOV = aovData && aovData.length > 0
    ? aovData.reduce((sum, item) => sum + item.aov, 0) / aovData.length
    : 0;

  const loading = trendsLoading || serviceTypeLoading || paymentStatusLoading || aovLoading || forecastLoading;

  return (
    <div className="space-y-6">
      {/* Summary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value={`R${Math.round(totalRevenue).toLocaleString()}`}
          subtitle={`${totalBookings} bookings`}
          trend={latestGrowth !== undefined ? {
            value: latestGrowth,
            label: 'vs last period',
            isPositive: latestGrowth >= 0,
          } : undefined}
          icon={<DollarSign className="h-5 w-5" />}
        />
        <MetricCard
          title="Average Monthly Revenue"
          value={`R${Math.round(averageRevenue).toLocaleString()}`}
          subtitle="Per month average"
          icon={<BarChart3 className="h-5 w-5" />}
        />
        <MetricCard
          title="Average Order Value"
          value={`R${Math.round(averageAOV).toLocaleString()}`}
          subtitle="Per booking"
          icon={<ShoppingCart className="h-5 w-5" />}
        />
        <MetricCard
          title="Total Bookings"
          value={totalBookings.toLocaleString()}
          subtitle="In selected period"
          icon={<TrendingUp className="h-5 w-5" />}
        />
      </div>

      {/* Revenue Charts */}
      <RevenueCharts
        trendData={trendData}
        serviceTypeData={serviceTypeData}
        forecastData={forecastData}
        loading={loading}
      />

      {/* Payment Status Breakdown */}
      {paymentStatusData && paymentStatusData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Payment Status</CardTitle>
            <CardDescription>Revenue breakdown by payment status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {paymentStatusData.map((item) => (
                <div key={item.status} className="p-4 border rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.status}</p>
                  <p className="text-2xl font-bold">R{item.revenue.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.bookings} bookings ({item.percentage}%)
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
