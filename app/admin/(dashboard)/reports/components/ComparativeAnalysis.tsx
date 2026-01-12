'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getPeriodComparison,
  getYearOverYearGrowth,
  getServiceTypeComparison,
} from '../../../actions';
import { ComparisonChart } from '../../../components/charts/ComparisonChart';
import { MetricCard } from '../../../components/MetricCard';
import { TrendingUp, TrendingDown, BarChart3, ArrowUpRight } from 'lucide-react';

interface ComparativeAnalysisProps {
  filters: {
    dateFrom: Date | null;
    dateTo: Date | null;
    status: string | null;
    serviceType: string | null;
  };
}

export function ComparativeAnalysis({ filters }: ComparativeAnalysisProps) {
  const filterParams = {
    dateFrom: filters.dateFrom ? filters.dateFrom.toISOString().split('T')[0] : undefined,
    dateTo: filters.dateTo ? filters.dateTo.toISOString().split('T')[0] : undefined,
  };

  // Get period comparison
  const { data: periodComparisonData, isLoading: periodComparisonLoading } = useQuery({
    queryKey: ['period-comparison', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getPeriodComparison({
        period: 'monthly',
        currentDateFrom: filterParams.dateFrom,
        currentDateTo: filterParams.dateTo,
      });
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  // Get year-over-year growth
  const { data: yoyData, isLoading: yoyLoading } = useQuery({
    queryKey: ['year-over-year'],
    queryFn: async () => {
      const result = await getYearOverYearGrowth();
      return result.success ? result.data : [];
    },
    staleTime: 5 * 60 * 1000,
  });

  // Get service type comparison
  const { data: serviceTypeComparisonData, isLoading: serviceTypeComparisonLoading } = useQuery({
    queryKey: ['service-type-comparison', filterParams.dateFrom, filterParams.dateTo],
    queryFn: async () => {
      const result = await getServiceTypeComparison(filterParams);
      return result.success ? result.data : [];
    },
    staleTime: 2 * 60 * 1000,
  });

  const loading = periodComparisonLoading || yoyLoading || serviceTypeComparisonLoading;

  // Calculate summary metrics from period comparison
  const revenueComparison = periodComparisonData?.find(m => m.metric === 'Total Revenue');
  const bookingsComparison = periodComparisonData?.find(m => m.metric === 'Total Bookings');
  const customersComparison = periodComparisonData?.find(m => m.metric === 'Total Customers');

  // Calculate YoY growth
  const currentYearTotal = yoyData?.reduce((sum, item) => sum + item.currentYear, 0) || 0;
  const previousYearTotal = yoyData?.reduce((sum, item) => sum + item.previousYear, 0) || 0;
  const yoyGrowth = previousYearTotal > 0
    ? ((currentYearTotal - previousYearTotal) / previousYearTotal) * 100
    : 0;

  return (
    <div className="space-y-6">
      {/* Summary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {revenueComparison && (
          <MetricCard
            title="Revenue Change"
            value={`${revenueComparison.change >= 0 ? '+' : ''}R${Math.round(revenueComparison.change).toLocaleString()}`}
            subtitle="vs previous period"
            trend={{
              value: revenueComparison.changePercentage,
              label: 'vs previous',
              isPositive: revenueComparison.changePercentage >= 0,
            }}
            icon={revenueComparison.changePercentage >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
          />
        )}
        {bookingsComparison && (
          <MetricCard
            title="Bookings Change"
            value={`${bookingsComparison.change >= 0 ? '+' : ''}${Math.round(bookingsComparison.change)}`}
            subtitle="vs previous period"
            trend={{
              value: bookingsComparison.changePercentage,
              label: 'vs previous',
              isPositive: bookingsComparison.changePercentage >= 0,
            }}
            icon={<BarChart3 className="h-5 w-5" />}
          />
        )}
        {customersComparison && (
          <MetricCard
            title="Customers Change"
            value={`${customersComparison.change >= 0 ? '+' : ''}${Math.round(customersComparison.change)}`}
            subtitle="vs previous period"
            trend={{
              value: customersComparison.changePercentage,
              label: 'vs previous',
              isPositive: customersComparison.changePercentage >= 0,
            }}
            icon={<ArrowUpRight className="h-5 w-5" />}
          />
        )}
        <MetricCard
          title="Year over Year Growth"
          value={`${yoyGrowth >= 0 ? '+' : ''}${Math.round(yoyGrowth)}%`}
          subtitle="Annual revenue growth"
          trend={{
            value: yoyGrowth,
            label: 'YoY',
            isPositive: yoyGrowth >= 0,
          }}
          icon={yoyGrowth >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
        />
      </div>

      {/* Comparison Charts */}
      <ComparisonChart
        periodComparisonData={periodComparisonData}
        yearOverYearData={yoyData}
        serviceTypeComparisonData={serviceTypeComparisonData}
        loading={loading}
      />
    </div>
  );
}
