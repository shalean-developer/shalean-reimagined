'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface NewUsersChartProps {
  data: { month: string; provider: number; client: number }[];
}

const chartConfig = {
  provider: {
    label: 'Provider',
    color: '#f59e0b', // orange/yellow
  },
  client: {
    label: 'Client',
    color: '#ef4444', // red
  },
};

export function NewUsersChart({ data }: NewUsersChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        No data available
      </div>
    );
  }

  // Calculate max value to set Y-axis domain
  const maxValue = Math.max(
    ...data.map(d => Math.max(d.provider || 0, d.client || 0)),
    1
  );
  
  // If max value is small (< 100), show actual numbers instead of thousands
  const useThousands = maxValue >= 100;
  let yAxisMax: number;
  let ticks: number[];
  
  if (useThousands) {
    // For large numbers, use thousands format
    yAxisMax = Math.max(16, Math.ceil(maxValue / 4000) * 4000);
    ticks = [0, 4000, 8000, 12000, 16000].filter(t => t <= yAxisMax);
  } else {
    // For small numbers, show actual values
    yAxisMax = Math.max(5, Math.ceil(maxValue / 1) * 1);
    // Generate ticks: 0, 1, 2, 3, 4, 5, etc. up to yAxisMax
    ticks = Array.from({ length: yAxisMax + 1 }, (_, i) => i);
  }

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            stroke="hsl(var(--border))"
            axisLine={false}
            tickLine={false}
            height={30}
          />
          <YAxis
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            stroke="hsl(var(--border))"
            axisLine={false}
            tickLine={false}
            domain={[0, yAxisMax]}
            ticks={ticks}
            tickFormatter={(value) => useThousands ? `${(value / 1000).toFixed(0)}k` : `${value}`}
            width={40}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="provider"
            stroke={chartConfig.provider.color}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: chartConfig.provider.color }}
          />
          <Line
            type="monotone"
            dataKey="client"
            stroke={chartConfig.client.color}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: chartConfig.client.color }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}