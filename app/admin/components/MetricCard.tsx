'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    label?: string;
    isPositive?: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ title, value, subtitle, trend, icon, className }: MetricCardProps) {
  const isPositive = trend?.isPositive !== undefined ? trend.isPositive : (trend?.value || 0) >= 0;
  const trendValue = trend?.value !== undefined ? Math.abs(trend.value) : null;

  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{value}</p>
              {trendValue !== null && (
                <div className={cn(
                  'flex items-center gap-1 text-xs font-medium',
                  isPositive ? 'text-green-600' : 'text-red-600'
                )}>
                  {isPositive ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {trendValue}%
                  {trend?.label && (
                    <span className="text-muted-foreground ml-1">({trend.label})</span>
                  )}
                </div>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {icon && (
            <div className="text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
