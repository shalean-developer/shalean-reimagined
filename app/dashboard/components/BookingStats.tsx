'use client';

import { Booking } from '@/types/booking';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle2, DollarSign } from 'lucide-react';

interface BookingStatsProps {
  bookings: Booking[];
}

export function BookingStats({ bookings }: BookingStatsProps) {
  const stats = {
    total: bookings.length,
    upcoming: bookings.filter((b) => b.status === 'pending' || b.status === 'confirmed').length,
    completed: bookings.filter((b) => b.status === 'completed').length,
    cancelled: bookings.filter((b) => b.status === 'cancelled').length,
    totalSpent: bookings
      .filter((b) => b.payment_status === 'paid')
      .reduce((sum, b) => sum + b.total_amount, 0),
  };

  const statCards = [
    {
      title: 'Total Bookings',
      value: stats.total,
      icon: Calendar,
      description: 'All time',
    },
    {
      title: 'Upcoming',
      value: stats.upcoming,
      icon: CheckCircle2,
      description: 'Scheduled',
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: CheckCircle2,
      description: 'Finished',
    },
    {
      title: 'Total Spent',
      value: `R${stats.totalSpent.toFixed(2)}`,
      icon: DollarSign,
      description: 'All payments',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4 w-full max-w-full overflow-x-hidden">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="overflow-hidden w-full max-w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1.5 sm:pb-2 px-3 pt-3 sm:px-4 sm:pt-4">
              <CardTitle className="text-sm sm:text-base font-medium leading-tight">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
            </CardHeader>
            <CardContent className="px-3 pb-3 sm:px-4 sm:pb-4 pt-0">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

