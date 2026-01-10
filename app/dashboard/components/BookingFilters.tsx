'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BookingFiltersProps {
  filter: 'all' | 'upcoming' | 'completed' | 'cancelled';
  onFilterChange: (filter: 'all' | 'upcoming' | 'completed' | 'cancelled') => void;
}

export function BookingFilters({ filter, onFilterChange }: BookingFiltersProps) {
  return (
    <Tabs value={filter} onValueChange={(value) => onFilterChange(value as typeof filter)}>
      <TabsList className="w-full sm:w-auto grid grid-cols-4 sm:inline-flex h-10 sm:h-11">
        <TabsTrigger value="all" className="text-sm sm:text-base px-2 sm:px-3">All</TabsTrigger>
        <TabsTrigger value="upcoming" className="text-sm sm:text-base px-2 sm:px-3">Upcoming</TabsTrigger>
        <TabsTrigger value="completed" className="text-sm sm:text-base px-2 sm:px-3">Completed</TabsTrigger>
        <TabsTrigger value="cancelled" className="text-sm sm:text-base px-2 sm:px-3">Cancelled</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

