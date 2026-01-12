'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CleanerPerformanceData {
  cleanerId: string;
  cleanerName: string;
  totalBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  completionRate: number;
  onTimeRate: number;
  averageRating: number;
  totalEarnings: number;
  averageEarningsPerBooking: number;
}

interface CleanerEarningsData {
  period: string;
  cleanerId: string;
  cleanerName: string;
  earnings: number;
  bookings: number;
  averageEarnings: number;
}

interface CleanerPerformanceChartProps {
  performanceData?: CleanerPerformanceData[];
  earningsData?: CleanerEarningsData[];
  loading?: boolean;
}

const chartConfig = {
  earnings: {
    label: 'Earnings',
    color: '#f59e0b',
  },
  bookings: {
    label: 'Bookings',
    color: '#3b82f6',
  },
};

export function CleanerPerformanceChart({ performanceData, earningsData, loading }: CleanerPerformanceChartProps) {
  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Loading cleaner performance data...</p>
      </div>
    );
  }

  // Prepare radar chart data for top performers
  const topPerformers = performanceData
    ?.slice()
    .sort((a, b) => b.totalEarnings - a.totalEarnings)
    .slice(0, 5) || [];

  const radarData = topPerformers.map((cleaner) => ({
    cleaner: cleaner.cleanerName.substring(0, 15),
    completionRate: cleaner.completionRate,
    onTimeRate: cleaner.onTimeRate,
    rating: cleaner.averageRating * 20, // Scale to 0-100 for radar
    earnings: Math.min(cleaner.totalEarnings / 100, 100), // Normalize for radar
  }));

  return (
    <Tabs defaultValue="performance" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
        <TabsTrigger value="earnings">Earnings</TabsTrigger>
        <TabsTrigger value="comparison">Comparison</TabsTrigger>
      </TabsList>

      <TabsContent value="performance" className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers by Earnings</CardTitle>
              <CardDescription>Cleaners ranked by total earnings</CardDescription>
            </CardHeader>
            <CardContent>
              {performanceData && performanceData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData.slice().sort((a, b) => b.totalEarnings - a.totalEarnings).slice(0, 10)}
                      margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="cleanerName"
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
                            const data = payload[0].payload as CleanerPerformanceData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.cleanerName}</div>
                                <div className="text-sm text-muted-foreground">
                                  Earnings: R{data.totalEarnings.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Bookings: {data.totalBookings}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Completion Rate: {data.completionRate}%
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="totalEarnings" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No performance data available
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completion Rate</CardTitle>
              <CardDescription>Top cleaners by completion rate</CardDescription>
            </CardHeader>
            <CardContent>
              {performanceData && performanceData.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData.slice().sort((a, b) => b.completionRate - a.completionRate).slice(0, 10)}
                      margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="cleanerName"
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
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
                            const data = payload[0].payload as CleanerPerformanceData;
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="font-medium">{data.cleanerName}</div>
                                <div className="text-sm text-muted-foreground">
                                  Completion Rate: {data.completionRate}%
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Completed: {data.completedBookings} / {data.totalBookings}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="completionRate" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-muted-foreground">
                  No performance data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="earnings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Cleaner Earnings Over Time</CardTitle>
            <CardDescription>Earnings trends by cleaner</CardDescription>
          </CardHeader>
          <CardContent>
            {earningsData && earningsData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={earningsData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                  >
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
                          const data = payload[0].payload as CleanerEarningsData;
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">{data.cleanerName}</div>
                              <div className="text-sm text-muted-foreground">
                                Period: {data.period}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Earnings: R{data.earnings.toLocaleString()}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Bookings: {data.bookings}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Avg per Booking: R{data.averageEarnings.toLocaleString()}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Bar dataKey="earnings" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No earnings data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="comparison" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance Radar Chart</CardTitle>
            <CardDescription>Multi-dimensional performance comparison for top 5 cleaners</CardDescription>
          </CardHeader>
          <CardContent>
            {radarData.length > 0 ? (
              <ChartContainer config={{}} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="cleaner" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Radar
                      name="Completion Rate"
                      dataKey="completionRate"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="On-Time Rate"
                      dataKey="onTimeRate"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Rating"
                      dataKey="rating"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              {payload.map((entry, index) => (
                                <div key={index} className="text-sm">
                                  <span style={{ color: entry.color }}>{entry.name}:</span>{' '}
                                  {typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}%
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                No comparison data available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
