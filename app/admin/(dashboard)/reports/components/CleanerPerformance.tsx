'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getCleanerPerformanceMetrics,
  getTopPerformers,
  getCleanerEarningsReport,
} from '../../../actions';
import { CleanerPerformanceChart } from '../../../components/charts/CleanerPerformanceChart';
import { PerformanceTable } from '../../../components/PerformanceTable';
import { MetricCard } from '../../../components/MetricCard';
import { Users, TrendingUp, Star, DollarSign } from 'lucide-react';

interface CleanerPerformanceProps {
  filters: {
    dateFrom: Date | null;
    dateTo: Date | null;
    status: string | null;
    serviceType: string | null;
  };
}

export function CleanerPerformance({ filters }: CleanerPerformanceProps) {
  const filterParams = {
    dateFrom: filters.dateFrom ? filters.dateFrom.toISOString().split('T')[0] : undefined,
    dateTo: filters.dateTo ? filters.dateTo.toISOString().split('T')[0] : undefined,
  };

  // Get cleaner performance metrics
  const { data: performanceData, isLoading: performanceLoading } = useQuery({
    queryKey: ['cleaner-performance', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getCleanerPerformanceMetrics(filterParams);
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get top performers
  const { data: topPerformers, isLoading: topPerformersLoading } = useQuery({
    queryKey: ['top-performers', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getTopPerformers({
        ...filterParams,
        metric: 'earnings',
        limit: 10,
      });
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get cleaner earnings report
  const { data: earningsData, isLoading: earningsLoading } = useQuery({
    queryKey: ['cleaner-earnings', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getCleanerEarningsReport({
        ...filterParams,
        period: 'monthly',
      });
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const loading = performanceLoading || topPerformersLoading || earningsLoading;

  // Calculate summary metrics
  const totalCleaners = performanceData?.length || 0;
  const totalEarnings = performanceData?.reduce((sum, item) => sum + item.totalEarnings, 0) || 0;
  const averageCompletionRate = performanceData && performanceData.length > 0
    ? performanceData.reduce((sum, item) => sum + item.completionRate, 0) / performanceData.length
    : 0;
  const averageRating = performanceData && performanceData.length > 0
    ? performanceData.reduce((sum, item) => sum + item.averageRating, 0) / performanceData.length
    : 0;

  return (
    <div className="space-y-6">
      {/* Summary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Cleaners"
          value={totalCleaners}
          subtitle="Active cleaners"
          icon={<Users className="h-5 w-5" />}
        />
        <MetricCard
          title="Total Earnings"
          value={`R${Math.round(totalEarnings).toLocaleString()}`}
          subtitle="In selected period"
          icon={<DollarSign className="h-5 w-5" />}
        />
        <MetricCard
          title="Avg Completion Rate"
          value={`${Math.round(averageCompletionRate)}%`}
          subtitle="Across all cleaners"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <MetricCard
          title="Average Rating"
          value={averageRating.toFixed(1)}
          subtitle="Out of 5.0"
          icon={<Star className="h-5 w-5" />}
        />
      </div>

      {/* Performance Charts */}
      <CleanerPerformanceChart
        performanceData={performanceData}
        earningsData={earningsData}
        loading={loading}
      />

      {/* Performance Table */}
      {performanceData && performanceData.length > 0 && (
        <PerformanceTable
          data={performanceData}
          columns={[
            {
              key: 'cleanerName',
              label: 'Cleaner Name',
            },
            {
              key: 'totalBookings',
              label: 'Total Bookings',
              sortable: true,
            },
            {
              key: 'completedBookings',
              label: 'Completed',
              sortable: true,
            },
            {
              key: 'completionRate',
              label: 'Completion Rate',
              render: (value) => `${value}%`,
              sortable: true,
            },
            {
              key: 'onTimeRate',
              label: 'On-Time Rate',
              render: (value) => `${value}%`,
              sortable: true,
            },
            {
              key: 'averageRating',
              label: 'Rating',
              render: (value) => value.toFixed(1),
              sortable: true,
            },
            {
              key: 'totalEarnings',
              label: 'Total Earnings',
              render: (value) => `R${Math.round(value).toLocaleString()}`,
              sortable: true,
            },
            {
              key: 'averageEarningsPerBooking',
              label: 'Avg per Booking',
              render: (value) => `R${Math.round(value).toLocaleString()}`,
              sortable: true,
            },
          ]}
          title="Cleaner Performance Details"
          description="Detailed performance metrics for all cleaners"
          loading={loading}
        />
      )}
    </div>
  );
}
