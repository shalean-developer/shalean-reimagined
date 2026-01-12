'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface TransactionChartProps {
  data: { month: string; completed: number; pending: number }[];
}

const chartConfig = {
  completed: {
    label: 'Completed',
    color: '#f59e0b', // orange
  },
  pending: {
    label: 'Pending',
    color: '#ef4444', // red
  },
};

export function TransactionChart({ data }: TransactionChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--border))"
          />
          <YAxis
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--border))"
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          {/* Legend removed and moved to parent component for alignment */}
          <Bar
            dataKey="completed"
            stackId="a"
            fill={chartConfig.completed.color}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="pending"
            stackId="a"
            fill={chartConfig.pending.color}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}