'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DashboardBookingFiltersProps {
  filter: 'upcoming' | 'past';
  onFilterChange: (filter: 'upcoming' | 'past') => void;
}

export function DashboardBookingFilters({ filter, onFilterChange }: DashboardBookingFiltersProps) {
  return (
    <Tabs value={filter} onValueChange={(value) => onFilterChange(value as typeof filter)}>
      <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex h-10 sm:h-11">
        <TabsTrigger value="upcoming" className="text-sm sm:text-base px-3 sm:px-4">Upcoming</TabsTrigger>
        <TabsTrigger value="past" className="text-sm sm:text-base px-3 sm:px-4">Past</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

