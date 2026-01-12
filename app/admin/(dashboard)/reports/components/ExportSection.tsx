'use client';

import { useState } from 'react';
import { ExportDialog } from './ExportDialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export function ExportSection() {
  const [loading, setLoading] = useState(false);

  const handleExport = async (config: {
    format: 'csv' | 'pdf';
    reportType: string;
    dateFrom?: string;
    dateTo?: string;
  }) => {
    setLoading(true);
    try {
      const endpoint = config.format === 'csv' ? '/api/admin/export/csv' : '/api/admin/export/pdf';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Export failed');
      }

      if (config.format === 'csv') {
        // Download CSV file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${config.reportType}-${config.dateFrom || 'all'}-${config.dateTo || 'all'}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast.success('CSV file downloaded successfully');
      } else {
        // For PDF, show message (would need PDF library implementation)
        const data = await response.json();
        toast.info(data.note || 'PDF export prepared. See console for data.');
        console.log('PDF Data:', data);
      }
    } catch (error) {
      console.error('Export error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to export report');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Export Reports</CardTitle>
        <CardDescription>
          Download analytics reports in CSV or PDF format
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ExportDialog onExport={handleExport} loading={loading} />
      </CardContent>
    </Card>
  );
}
