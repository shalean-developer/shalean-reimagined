'use client';

import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface RevenueTrendData {
  period: string;
  revenue: number;
  bookings: number;
  growth?: number;
}

interface ServiceTypeData {
  serviceType: string;
  revenue: number;
  bookings: number;
  percentage: number;
}

interface ForecastData {
  period: string;
  forecast: number;
  lowerBound: number;
  upperBound: number;
}

interface RevenueChartsProps {
  trendData?: RevenueTrendData[];
  serviceTypeData?: ServiceTypeData[];
  forecastData?: ForecastData[];
  loading?: boolean;
}

const COLORS = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#f59e0b',
  },
  bookings: {
    label: 'Bookings',
    color: '#3b82f6',
  },
};

export function RevenueCharts({ trendData, serviceTypeData, forecastData, loading }: RevenueChartsProps) {
  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Loading revenue data...</p>
      </div>
    );
  }

  return (
    <Tabs defaultValue="trend" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="trend">Revenue Trend</TabsTrigger>
        <TabsTrigger value="service">By Service Type</TabsTrigger>
        <TabsTrigger value="forecast">Forecast</TabsTrigger>
      </TabsList>

      <TabsContent value="trend" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Revenue and booking trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            {trendData && trendData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="period"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      stroke="hsl(var(--border))"
                    />
                    <YAxis
                      yAxisId="left"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      stroke="hsl(var(--border))"
                      tickFormatter={(value) => `R${(value / 1000).toFixed(0)}K`}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      stroke="hsl(var(--border))"
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid gap-2">
                                {payload.map((entry, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <div
                                      className="h-2.5 w-2.5 rounded-full"
                                      style={{ backgroundColor: entry.color }}
                                    />
                                    <span className="text-sm font-medium">
                                      {entry.name}: {entry.name === 'revenue' ? `R${entry.value?.toLocaleString()}` : entry.value}
                                    </span>
                                  </div>
                                ))}
                                {payload[0]?.payload?.growth !== undefined && (
                                  <div className="text-xs text-muted-foreground mt-1">
                                    Growth: {payload[0].payload.growth > 0 ? '+' : ''}{payload[0].payload.growth}%
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      stroke={chartConfig.revenue.color}
                      strokeWidth={2}
                      name="Revenue (R)"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="bookings"
                      stroke={chartConfig.bookings.color}
                      strokeWidth={2}
                      name="Bookings"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No revenue trend data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="service" className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Service Type</CardTitle>
              <CardDescription>Revenue breakdown by service category</CardDescription>
            </CardHeader>
            <CardContent>
              {serviceTypeData && serviceTypeData.length > 0 ? (
                <ChartContainer config={{}} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ serviceType, percentage }) => `${serviceType}: ${percentage}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="revenue"
                      >
                        {serviceTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload as ServiceTypeData;
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
                                  Percentage: {data.percentage}%
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No service type data available
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Type Comparison</CardTitle>
              <CardDescription>Revenue comparison across service types</CardDescription>
            </CardHeader>
            <CardContent>
              {serviceTypeData && serviceTypeData.length > 0 ? (
                <ChartContainer config={{}} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={serviceTypeData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
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
                            const data = payload[0].payload as ServiceTypeData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.serviceType}</div>
                                <div className="text-sm text-muted-foreground">
                                  Revenue: R{data.revenue.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Bookings: {data.bookings}
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
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No service type data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="forecast" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Forecast</CardTitle>
            <CardDescription>Projected revenue based on historical trends</CardDescription>
          </CardHeader>
          <CardContent>
            {forecastData && forecastData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="period"
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
                          const data = payload[0].payload as ForecastData;
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">Period: {data.period}</div>
                              <div className="text-sm text-muted-foreground">
                                Forecast: R{data.forecast.toLocaleString()}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Range: R{data.lowerBound.toLocaleString()} - R{data.upperBound.toLocaleString()}
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
                      dataKey="forecast"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      name="Forecast"
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="lowerBound"
                      stroke="#ef4444"
                      strokeWidth={1}
                      strokeDasharray="5 5"
                      name="Lower Bound"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="upperBound"
                      stroke="#10b981"
                      strokeWidth={1}
                      strokeDasharray="5 5"
                      name="Upper Bound"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No forecast data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
