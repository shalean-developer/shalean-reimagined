import { NextRequest, NextResponse } from 'next/server';
import { getCurrentAdmin } from '@/app/admin/actions';
import {
  getRevenueTrends,
  getRevenueByServiceType,
  getCleanerPerformanceMetrics,
  getCustomerLifetimeValue,
  getPeriodComparison,
} from '@/app/admin/actions';

export async function POST(request: NextRequest) {
  try {
    // Verify admin access
    const adminResult = await getCurrentAdmin();
    if (!adminResult.success) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { format, reportType, dateFrom, dateTo } = body;

    if (format !== 'csv') {
      return NextResponse.json({ error: 'Invalid format' }, { status: 400 });
    }

    let csvData: string = '';
    let filename = 'report';

    switch (reportType) {
      case 'revenue': {
        const trendsResult = await getRevenueTrends({
          dateFrom,
          dateTo,
          period: 'monthly',
        });
        const serviceTypeResult = await getRevenueByServiceType({ dateFrom, dateTo });

        if (trendsResult.success && trendsResult.data) {
          csvData = 'Period,Revenue,Bookings,Growth%\n';
          trendsResult.data.forEach((item) => {
            csvData += `${item.period},${item.revenue},${item.bookings},${item.growth || ''}\n`;
          });
        }

        if (serviceTypeResult.success && serviceTypeResult.data) {
          csvData += '\n\nService Type Breakdown\n';
          csvData += 'Service Type,Revenue,Bookings,Percentage\n';
          serviceTypeResult.data.forEach((item) => {
            csvData += `${item.serviceType},${item.revenue},${item.bookings},${item.percentage}\n`;
          });
        }

        filename = `revenue-report-${dateFrom || 'all'}-${dateTo || 'all'}`;
        break;
      }

      case 'cleaner-performance': {
        const result = await getCleanerPerformanceMetrics({ dateFrom, dateTo });

        if (result.success && result.data) {
          csvData = 'Cleaner Name,Total Bookings,Completed,Cancelled,Completion Rate%,On-Time Rate%,Average Rating,Total Earnings,Avg Earnings per Booking\n';
          result.data.forEach((item) => {
            csvData += `"${item.cleanerName}",${item.totalBookings},${item.completedBookings},${item.cancelledBookings},${item.completionRate},${item.onTimeRate},${item.averageRating},${item.totalEarnings},${item.averageEarningsPerBooking}\n`;
          });
        }

        filename = `cleaner-performance-${dateFrom || 'all'}-${dateTo || 'all'}`;
        break;
      }

      case 'customer-insights': {
        const result = await getCustomerLifetimeValue({ dateFrom, dateTo });

        if (result.success && result.data) {
          csvData = 'Customer Name,Email,Total Revenue,Total Bookings,Average Order Value,CLV,First Booking,Last Booking\n';
          result.data.forEach((item) => {
            csvData += `"${item.customerName}","${item.customerEmail}",${item.totalRevenue},${item.totalBookings},${item.averageOrderValue},${item.clv},${item.firstBookingDate},${item.lastBookingDate}\n`;
          });
        }

        filename = `customer-insights-${dateFrom || 'all'}-${dateTo || 'all'}`;
        break;
      }

      case 'comparative-analysis': {
        const result = await getPeriodComparison({
          period: 'monthly',
          currentDateFrom: dateFrom,
          currentDateTo: dateTo,
        });

        if (result.success && result.data) {
          csvData = 'Metric,Current,Previous,Change,Change%\n';
          result.data.forEach((item) => {
            csvData += `${item.metric},${item.current},${item.previous},${item.change},${item.changePercentage}\n`;
          });
        }

        filename = `comparative-analysis-${dateFrom || 'all'}-${dateTo || 'all'}`;
        break;
      }

      default:
        return NextResponse.json({ error: 'Invalid report type' }, { status: 400 });
    }

    // Return CSV file
    return new NextResponse(csvData, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}.csv"`,
      },
    });
  } catch (error) {
    console.error('Error exporting CSV:', error);
    return NextResponse.json(
      { error: 'Failed to export CSV' },
      { status: 500 }
    );
  }
}
