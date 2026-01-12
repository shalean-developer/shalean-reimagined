'use client';

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CustomerLifetimeValueData {
  customerEmail: string;
  customerName: string;
  totalRevenue: number;
  totalBookings: number;
  averageOrderValue: number;
  clv: number;
  firstBookingDate: string;
  lastBookingDate: string;
}

interface RetentionData {
  retentionRate: number;
  newCustomers: number;
  returningCustomers: number;
  totalCustomers: number;
  periodBreakdown: Array<{ period: string; newCustomers: number; returningCustomers: number; retentionRate: number }>;
}

interface SegmentationData {
  segment: string;
  customerCount: number;
  totalRevenue: number;
  averageRevenue: number;
  percentage: number;
}

interface CustomerAnalyticsChartProps {
  clvData?: CustomerLifetimeValueData[];
  retentionData?: RetentionData;
  segmentationData?: SegmentationData[];
  loading?: boolean;
}

const COLORS = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981'];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#f59e0b',
  },
  customers: {
    label: 'Customers',
    color: '#3b82f6',
  },
};

export function CustomerAnalyticsChart({ clvData, retentionData, segmentationData, loading }: CustomerAnalyticsChartProps) {
  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Loading customer analytics data...</p>
      </div>
    );
  }

  return (
    <Tabs defaultValue="clv" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="clv">Customer Lifetime Value</TabsTrigger>
        <TabsTrigger value="retention">Retention</TabsTrigger>
        <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
      </TabsList>

      <TabsContent value="clv" className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Customers by CLV</CardTitle>
              <CardDescription>Customers with highest lifetime value</CardDescription>
            </CardHeader>
            <CardContent>
              {clvData && clvData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={clvData.slice(0, 10)}
                      margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="customerName"
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
                            const data = payload[0].payload as CustomerLifetimeValueData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.customerName}</div>
                                <div className="text-sm text-muted-foreground">
                                  CLV: R{data.clv.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Total Revenue: R{data.totalRevenue.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Bookings: {data.totalBookings}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  AOV: R{data.averageOrderValue.toLocaleString()}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="clv" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No CLV data available
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CLV Distribution</CardTitle>
              <CardDescription>Distribution of customer lifetime values</CardDescription>
            </CardHeader>
            <CardContent>
              {clvData && clvData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        {
                          range: '0-500',
                          count: clvData.filter(c => c.clv >= 0 && c.clv < 500).length,
                        },
                        {
                          range: '500-1000',
                          count: clvData.filter(c => c.clv >= 500 && c.clv < 1000).length,
                        },
                        {
                          range: '1000-2500',
                          count: clvData.filter(c => c.clv >= 1000 && c.clv < 2500).length,
                        },
                        {
                          range: '2500-5000',
                          count: clvData.filter(c => c.clv >= 2500 && c.clv < 5000).length,
                        },
                        {
                          range: '5000+',
                          count: clvData.filter(c => c.clv >= 5000).length,
                        },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="range"
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
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">Range: {payload[0].payload.range}</div>
                                <div className="text-sm text-muted-foreground">
                                  Customers: {payload[0].value}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No CLV data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="retention" className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Retention Overview</CardTitle>
              <CardDescription>Customer retention metrics</CardDescription>
            </CardHeader>
            <CardContent>
              {retentionData ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Retention Rate</p>
                      <p className="text-2xl font-bold">{retentionData.retentionRate}%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">New Customers</p>
                      <p className="text-xl font-bold">{retentionData.newCustomers}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Returning Customers</p>
                      <p className="text-xl font-bold">{retentionData.returningCustomers}</p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Customers</p>
                    <p className="text-xl font-bold">{retentionData.totalCustomers}</p>
                  </div>
                </div>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  No retention data available
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retention Trend</CardTitle>
              <CardDescription>Monthly retention rate over time</CardDescription>
            </CardHeader>
            <CardContent>
              {retentionData && retentionData.periodBreakdown && retentionData.periodBreakdown.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={retentionData.periodBreakdown} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="period"
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        stroke="hsl(var(--border))"
                      />
                      <YAxis
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        stroke="hsl(var(--border))"
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">Period: {data.period}</div>
                                <div className="text-sm text-muted-foreground">
                                  Retention Rate: {data.retentionRate}%
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  New: {data.newCustomers}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Returning: {data.returningCustomers}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="retentionRate"
                        stroke="#10b981"
                        strokeWidth={2}
                        name="Retention Rate (%)"
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No retention trend data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="segmentation" className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Customer Segmentation</CardTitle>
              <CardDescription>Customers segmented by value</CardDescription>
            </CardHeader>
            <CardContent>
              {segmentationData && segmentationData.length > 0 ? (
                <ChartContainer config={{}} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={segmentationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ segment, percentage }) => `${segment}: ${percentage}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="customerCount"
                      >
                        {segmentationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload as SegmentationData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.segment}</div>
                                <div className="text-sm text-muted-foreground">
                                  Customers: {data.customerCount}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Total Revenue: R{data.totalRevenue.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Avg Revenue: R{data.averageRevenue.toLocaleString()}
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
                  No segmentation data available
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue by Segment</CardTitle>
              <CardDescription>Revenue contribution by customer segment</CardDescription>
            </CardHeader>
            <CardContent>
              {segmentationData && segmentationData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={segmentationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="segment"
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
                            const data = payload[0].payload as SegmentationData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.segment}</div>
                                <div className="text-sm text-muted-foreground">
                                  Revenue: R{data.totalRevenue.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Customers: {data.customerCount}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="totalRevenue" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No segmentation data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
