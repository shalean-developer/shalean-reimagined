'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PeriodComparisonData {
  metric: string;
  current: number;
  previous: number;
  change: number;
  changePercentage: number;
}

interface YearOverYearData {
  month: string;
  currentYear: number;
  previousYear: number;
  growth: number;
  growthPercentage: number;
}

interface ServiceTypeComparisonData {
  serviceType: string;
  revenue: number;
  bookings: number;
  averageRevenue: number;
  growth: number;
  growthPercentage: number;
}

interface ComparisonChartProps {
  periodComparisonData?: PeriodComparisonData[];
  yearOverYearData?: YearOverYearData[];
  serviceTypeComparisonData?: ServiceTypeComparisonData[];
  loading?: boolean;
}

const chartConfig = {
  current: {
    label: 'Current',
    color: '#f59e0b',
  },
  previous: {
    label: 'Previous',
    color: '#3b82f6',
  },
  growth: {
    label: 'Growth',
    color: '#10b981',
  },
};

export function ComparisonChart({ periodComparisonData, yearOverYearData, serviceTypeComparisonData, loading }: ComparisonChartProps) {
  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Loading comparison data...</p>
      </div>
    );
  }

  return (
    <Tabs defaultValue="period" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="period">Period Comparison</TabsTrigger>
        <TabsTrigger value="yoy">Year over Year</TabsTrigger>
        <TabsTrigger value="service">Service Type</TabsTrigger>
      </TabsList>

      <TabsContent value="period" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Period Comparison</CardTitle>
            <CardDescription>Current period vs previous period</CardDescription>
          </CardHeader>
          <CardContent>
            {periodComparisonData && periodComparisonData.length > 0 ? (
              <div className="space-y-4">
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={periodComparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="metric"
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        stroke="hsl(var(--border))"
                      />
                      <YAxis
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        stroke="hsl(var(--border))"
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload as PeriodComparisonData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.metric}</div>
                                <div className="text-sm text-muted-foreground">
                                  Current: {data.current.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Previous: {data.previous.toLocaleString()}
                                </div>
                                <div className={`text-sm flex items-center gap-1 ${data.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  Change: {data.change >= 0 ? '+' : ''}{data.change.toLocaleString()} ({data.changePercentage >= 0 ? '+' : ''}{data.changePercentage}%)
                                  {data.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                      <Bar dataKey="current" fill={chartConfig.current.color} radius={[4, 4, 0, 0]} />
                      <Bar dataKey="previous" fill={chartConfig.previous.color} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {periodComparisonData.map((item) => (
                    <div key={item.metric} className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">{item.metric}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">{item.current.toLocaleString()}</p>
                        <div className={`flex items-center gap-1 text-xs ${item.changePercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {item.changePercentage >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                          {Math.abs(item.changePercentage)}%
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Previous: {item.previous.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No period comparison data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="yoy" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Year over Year Growth</CardTitle>
            <CardDescription>Monthly revenue comparison between years</CardDescription>
          </CardHeader>
          <CardContent>
            {yearOverYearData && yearOverYearData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearOverYearData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      stroke="hsl(var(--border))"
                    />
                    <YAxis
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      stroke="hsl(var(--border))"
                      tickFormatter={(value) => `R${(value / 1000).toFixed(0)}K`}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as YearOverYearData;
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">Month: {data.month}</div>
                              <div className="text-sm text-muted-foreground">
                                Current Year: R{data.currentYear.toLocaleString()}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Previous Year: R{data.previousYear.toLocaleString()}
                              </div>
                              <div className={`text-sm flex items-center gap-1 ${data.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                Growth: {data.growth >= 0 ? '+' : ''}R{data.growth.toLocaleString()} ({data.growthPercentage >= 0 ? '+' : ''}{data.growthPercentage}%)
                                {data.growth >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="currentYear"
                      stroke={chartConfig.current.color}
                      strokeWidth={2}
                      name="Current Year"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="previousYear"
                      stroke={chartConfig.previous.color}
                      strokeWidth={2}
                      name="Previous Year"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No year-over-year data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="service" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Service Type Performance Comparison</CardTitle>
            <CardDescription>Service type performance with growth metrics</CardDescription>
          </CardHeader>
          <CardContent>
            {serviceTypeComparisonData && serviceTypeComparisonData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serviceTypeComparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="serviceType"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      stroke="hsl(var(--border))"
                    />
                    <YAxis
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      stroke="hsl(var(--border))"
                      tickFormatter={(value) => `R${(value / 1000).toFixed(0)}K`}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as ServiceTypeComparisonData;
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">{data.serviceType}</div>
                              <div className="text-sm text-muted-foreground">
                                Revenue: R{data.revenue.toLocaleString()}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Bookings: {data.bookings}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Avg Revenue: R{data.averageRevenue.toLocaleString()}
                              </div>
                              <div className={`text-sm flex items-center gap-1 ${data.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                Growth: {data.growth >= 0 ? '+' : ''}R{data.growth.toLocaleString()} ({data.growthPercentage >= 0 ? '+' : ''}{data.growthPercentage}%)
                                {data.growth >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="revenue" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No service type comparison data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
