'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export interface DashboardFilters {
  dateFrom: Date | null;
  dateTo: Date | null;
  status: string | null;
  serviceType: string | null;
}

interface DashboardFiltersProps {
  filters: DashboardFilters;
  onFiltersChange: (filters: DashboardFilters) => void;
}

const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'on_my_way', label: 'On My Way' },
  { value: 'started', label: 'Started' },
];

const SERVICE_TYPE_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'Standard Cleaning', label: 'Standard Cleaning' },
  { value: 'Deep Cleaning', label: 'Deep Cleaning' },
  { value: 'Airbnb Cleaning', label: 'Airbnb Cleaning' },
  { value: 'Move In/Out', label: 'Move In/Out' },
  { value: 'Carpet Cleaning', label: 'Carpet Cleaning' },
];

export function DashboardFiltersComponent({ filters, onFiltersChange }: DashboardFiltersProps) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleDateSelect = (range: { from: Date | undefined; to?: Date | undefined } | undefined) => {
    if (!range) {
      onFiltersChange({
        ...filters,
        dateFrom: null,
        dateTo: null,
      });
      setDatePickerOpen(false);
      return;
    }

    onFiltersChange({
      ...filters,
      dateFrom: range.from || null,
      dateTo: range.to || null,
    });

    // Close the date picker when both dates are selected
    if (range.from && range.to) {
      setDatePickerOpen(false);
    }
  };

  const handleStatusChange = (value: string) => {
    onFiltersChange({
      ...filters,
      status: value === 'all' ? null : value,
    });
  };

  const handleServiceTypeChange = (value: string) => {
    onFiltersChange({
      ...filters,
      serviceType: value === 'all' ? null : value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      dateFrom: null,
      dateTo: null,
      status: null,
      serviceType: null,
    });
  };

  const hasActiveFilters =
    filters.dateFrom !== null ||
    filters.dateTo !== null ||
    filters.status !== null ||
    filters.serviceType !== null;

  const activeFilterCount =
    (filters.dateFrom !== null || filters.dateTo !== null ? 1 : 0) +
    (filters.status !== null ? 1 : 0) +
    (filters.serviceType !== null ? 1 : 0);

  const getDateRangeText = () => {
    if (filters.dateFrom && filters.dateTo) {
      return `${format(filters.dateFrom, 'MMM d')} - ${format(filters.dateTo, 'MMM d, yyyy')}`;
    }
    if (filters.dateFrom) {
      return `From ${format(filters.dateFrom, 'MMM d, yyyy')}`;
    }
    if (filters.dateTo) {
      return `Until ${format(filters.dateTo, 'MMM d, yyyy')}`;
    }
    return 'Date Range';
  };

  return (
    <div className="space-y-4 p-4 w-[320px]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm">Filter Options</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-7 px-2 text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Time Period Presets */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Quick Presets</label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              const today = new Date();
              onFiltersChange({
                ...filters,
                dateFrom: today,
                dateTo: today,
              });
            }}
          >
            Today
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              const now = new Date();
              const weekStart = new Date(now);
              weekStart.setDate(now.getDate() - now.getDay());
              onFiltersChange({
                ...filters,
                dateFrom: weekStart,
                dateTo: now,
              });
            }}
          >
            This Week
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              const now = new Date();
              const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
              onFiltersChange({
                ...filters,
                dateFrom: monthStart,
                dateTo: now,
              });
            }}
          >
            This Month
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              const now = new Date();
              const yearStart = new Date(now.getFullYear(), 0, 1);
              onFiltersChange({
                ...filters,
                dateFrom: yearStart,
                dateTo: now,
              });
            }}
          >
            This Year
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              const now = new Date();
              const lastWeekStart = new Date(now);
              lastWeekStart.setDate(now.getDate() - now.getDay() - 7);
              const lastWeekEnd = new Date(now);
              lastWeekEnd.setDate(now.getDate() - now.getDay() - 1);
              onFiltersChange({
                ...filters,
                dateFrom: lastWeekStart,
                dateTo: lastWeekEnd,
              });
            }}
          >
            Last Week
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              const now = new Date();
              const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
              const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
              onFiltersChange({
                ...filters,
                dateFrom: lastMonthStart,
                dateTo: lastMonthEnd,
              });
            }}
          >
            Last Month
          </Button>
        </div>
      </div>

      {/* Date Range Picker */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Custom Date Range</label>
        <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal',
                !filters.dateFrom && !filters.dateTo && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {getDateRangeText()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={{
                from: filters.dateFrom || undefined,
                to: filters.dateTo || undefined,
              }}
              onSelect={handleDateSelect}
              numberOfMonths={2}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Status Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Status</label>
        <Select
          value={filters.status || 'all'}
          onValueChange={handleStatusChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Service Type Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Service Type</label>
        <Select
          value={filters.serviceType || 'all'}
          onValueChange={handleServiceTypeChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select service type" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_TYPE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters Badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2 border-t">
          {filters.dateFrom && (
            <Badge variant="secondary" className="text-xs">
              Date: {getDateRangeText()}
              <button
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    dateFrom: null,
                    dateTo: null,
                  })
                }
                className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.status && (
            <Badge variant="secondary" className="text-xs">
              Status: {STATUS_OPTIONS.find((o) => o.value === filters.status)?.label}
              <button
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    status: null,
                  })
                }
                className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.serviceType && (
            <Badge variant="secondary" className="text-xs">
              Type: {filters.serviceType}
              <button
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    serviceType: null,
                  })
                }
                className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
