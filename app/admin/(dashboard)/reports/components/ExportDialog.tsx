'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Download } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ExportDialogProps {
  onExport: (config: {
    format: 'csv' | 'pdf';
    reportType: string;
    dateFrom?: string;
    dateTo?: string;
  }) => void;
  loading?: boolean;
}

const REPORT_TYPES = [
  { value: 'revenue', label: 'Revenue Report' },
  { value: 'cleaner-performance', label: 'Cleaner Performance' },
  { value: 'customer-insights', label: 'Customer Insights' },
  { value: 'comparative-analysis', label: 'Comparative Analysis' },
  { value: 'bookings', label: 'Bookings Report' },
];

export function ExportDialog({ onExport, loading }: ExportDialogProps) {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState<'csv' | 'pdf'>('csv');
  const [reportType, setReportType] = useState('revenue');
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleExport = () => {
    onExport({
      format,
      reportType,
      dateFrom: dateFrom ? dateFrom.toISOString().split('T')[0] : undefined,
      dateTo: dateTo ? dateTo.toISOString().split('T')[0] : undefined,
    });
    setOpen(false);
  };

  const getDateRangeText = () => {
    if (dateFrom && dateTo) {
      return `${format(dateFrom, 'MMM d')} - ${format(dateTo, 'MMM d, yyyy')}`;
    }
    if (dateFrom) {
      return `From ${format(dateFrom, 'MMM d, yyyy')}`;
    }
    if (dateTo) {
      return `Until ${format(dateTo, 'MMM d, yyyy')}`;
    }
    return 'All time';
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={loading}>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Export Report</DialogTitle>
          <DialogDescription>
            Configure and export your analytics report
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {/* Format Selection */}
          <div className="space-y-2">
            <Label>Export Format</Label>
            <RadioGroup value={format} onValueChange={(value) => setFormat(value as 'csv' | 'pdf')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="csv" id="csv" />
                <Label htmlFor="csv" className="font-normal cursor-pointer">
                  CSV (Excel compatible)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pdf" id="pdf" />
                <Label htmlFor="pdf" className="font-normal cursor-pointer">
                  PDF (Formatted report)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Report Type */}
          <div className="space-y-2">
            <Label htmlFor="report-type">Report Type</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                {REPORT_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          <div className="space-y-2">
            <Label>Date Range (Optional)</Label>
            <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !dateFrom && !dateTo && 'text-muted-foreground'
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
                    from: dateFrom,
                    to: dateTo,
                  }}
                  onSelect={(range) => {
                    setDateFrom(range?.from);
                    setDateTo(range?.to);
                    if (range?.from && range?.to) {
                      setDatePickerOpen(false);
                    }
                  }}
                  numberOfMonths={2}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={loading}>
            {loading ? 'Exporting...' : 'Export'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
