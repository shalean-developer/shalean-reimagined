'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCurrentCleaner, getCleanerStats } from '../../actions';
import { Cleaner } from '@/types/booking';
import { Loader2, DollarSign, Calendar, CheckCircle2, TrendingUp, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function CleanerEarningsPage() {
  const [cleaner, setCleaner] = useState<Cleaner | null>(null);
  const [stats, setStats] = useState<any>(null);

  // Get current cleaner
  useQuery({
    queryKey: ['current-cleaner'],
    queryFn: async () => {
      const result = await getCurrentCleaner();
      if (result.success && result.cleaner) {
        setCleaner(result.cleaner);
        return result.cleaner;
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });

  // Get cleaner stats
  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['cleaner-stats', cleaner?.id],
    queryFn: async () => {
      if (!cleaner?.id) return null;
      const result = await getCleanerStats();
      if (result.success && result.stats) {
        setStats(result.stats);
        return result.stats;
      }
      return null;
    },
    enabled: !!cleaner?.id,
    staleTime: 2 * 60 * 1000,
  });

  if (!cleaner) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Earnings & Stats</h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-1">
          Track your performance and earnings
        </p>
      </div>

      {statsLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : stats ? (
        <>
          {/* Earnings Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R{stats.monthlyEarnings?.toFixed(2) || '0.00'}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Current month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R{stats.totalEarnings?.toFixed(2) || '0.00'}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  All time
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalBookings || 0}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  All bookings
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.completedBookings || 0}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.totalBookings ? `${((stats.completedBookings / stats.totalBookings) * 100).toFixed(1)}% completion rate` : 'No bookings yet'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground fill-yellow-400 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.averageRating?.toFixed(1) || '0.0'}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Customer ratings
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reliability Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.reliabilityScore?.toFixed(1) || '0.0'}%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Performance metric
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Stats */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Completion Rate</CardTitle>
                <CardDescription>Percentage of bookings completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.completionRate?.toFixed(1) || '0.0'}%</div>
                <div className="mt-4 w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${stats.completionRate || 0}%` }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>On-Time Rate</CardTitle>
                <CardDescription>Percentage of bookings completed on time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.onTimeRate?.toFixed(1) || '0.0'}%</div>
                <div className="mt-4 w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${stats.onTimeRate || 0}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bookings</CardTitle>
              <CardDescription>Bookings scheduled for the future</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.upcomingBookings || 0}</div>
              <p className="text-sm text-muted-foreground mt-1">
                Bookings waiting to be completed
              </p>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No stats available yet</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
