'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getCustomerLifetimeValue,
  getCustomerRetentionRate,
  getCustomerSegmentation,
  getRepeatCustomerRate,
} from '../../../actions';
import { CustomerAnalyticsChart } from '../../../components/charts/CustomerAnalyticsChart';
import { PerformanceTable } from '../../../components/PerformanceTable';
import { MetricCard } from '../../../components/MetricCard';
import { Users, TrendingUp, Repeat, Target } from 'lucide-react';

interface CustomerInsightsProps {
  filters: {
    dateFrom: Date | null;
    dateTo: Date | null;
    status: string | null;
    serviceType: string | null;
  };
}

export function CustomerInsights({ filters }: CustomerInsightsProps) {
  const filterParams = {
    dateFrom: filters.dateFrom ? filters.dateFrom.toISOString().split('T')[0] : undefined,
    dateTo: filters.dateTo ? filters.dateTo.toISOString().split('T')[0] : undefined,
  };

  // Get customer lifetime value
  const { data: clvData, isLoading: clvLoading } = useQuery({
    queryKey: ['customer-clv', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getCustomerLifetimeValue(filterParams);
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get customer retention rate
  const { data: retentionData, isLoading: retentionLoading } = useQuery({
    queryKey: ['customer-retention', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getCustomerRetentionRate(filterParams);
      return result.success ? result.data : undefined;
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get customer segmentation
  const { data: segmentationData, isLoading: segmentationLoading } = useQuery({
    queryKey: ['customer-segmentation', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getCustomerSegmentation(filterParams);
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get repeat customer rate
  const { data: repeatRateData, isLoading: repeatRateLoading } = useQuery({
    queryKey: ['repeat-customer-rate', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getRepeatCustomerRate(filterParams);
      return result.success ? result.data : undefined;
    },
    staleTime: 2 * 60 * 1000,
  });

  const loading = clvLoading || retentionLoading || segmentationLoading || repeatRateLoading;

  // Calculate summary metrics
  const totalCustomers = clvData?.length || 0;
  const totalCLV = clvData?.reduce((sum, item) => sum + item.clv, 0) || 0;
  const averageCLV = totalCustomers > 0 ? totalCLV / totalCustomers : 0;
  const retentionRate = retentionData?.retentionRate || 0;
  const repeatCustomerRate = repeatRateData?.repeatCustomerRate || 0;

  return (
    <div className="space-y-6">
      {/* Summary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Customers"
          value={totalCustomers}
          subtitle="In selected period"
          icon={<Users className="h-5 w-5" />}
        />
        <MetricCard
          title="Average CLV"
          value={`R${Math.round(averageCLV).toLocaleString()}`}
          subtitle="Customer lifetime value"
          icon={<Target className="h-5 w-5" />}
        />
        <MetricCard
          title="Retention Rate"
          value={`${retentionRate}%`}
          subtitle="Returning customers"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <MetricCard
          title="Repeat Customer Rate"
          value={`${repeatCustomerRate}%`}
          subtitle="Multiple bookings"
          icon={<Repeat className="h-5 w-5" />}
        />
      </div>

      {/* Customer Analytics Charts */}
      <CustomerAnalyticsChart
        clvData={clvData}
        retentionData={retentionData}
        segmentationData={segmentationData}
        loading={loading}
      />

      {/* Top Customers Table */}
      {clvData && clvData.length > 0 && (
        <PerformanceTable
          data={clvData.slice(0, 20)}
          columns={[
            {
              key: 'customerName',
              label: 'Customer Name',
            },
            {
              key: 'customerEmail',
              label: 'Email',
            },
            {
              key: 'totalRevenue',
              label: 'Total Revenue',
              render: (value) => `R${Math.round(value).toLocaleString()}`,
              sortable: true,
            },
            {
              key: 'totalBookings',
              label: 'Bookings',
              sortable: true,
            },
            {
              key: 'averageOrderValue',
              label: 'AOV',
              render: (value) => `R${Math.round(value).toLocaleString()}`,
              sortable: true,
            },
            {
              key: 'clv',
              label: 'CLV',
              render: (value) => `R${Math.round(value).toLocaleString()}`,
              sortable: true,
            },
          ]}
          title="Top Customers by Lifetime Value"
          description="Top 20 customers ranked by customer lifetime value"
          loading={loading}
        />
      )}
    </div>
  );
}
