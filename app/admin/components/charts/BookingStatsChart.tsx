'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface BookingStatsChartProps {
  data: { status: string; count: number; percentage: number }[];
  total?: number;
  growthPercentage?: number;
}

// Color mapping: Yellow for Pending, Blue for Requested, Red for Cancelled, Green for Completed
const STATUS_COLORS: { [key: string]: string } = {
  'Pending': '#f59e0b',    // Yellow
  'Requested': '#3b82f6',  // Blue
  'Cancelled': '#ef4444',  // Red
  'Completed': '#10b981',  // Green
};

// Default color fallback
const DEFAULT_COLOR = '#94a3b8';

export function BookingStatsChart({ data, total, growthPercentage }: BookingStatsChartProps) {
  // Define all required statuses
  const allStatuses = ['Pending', 'Cancelled', 'Completed', 'Requested'];
  
  // Create a map of existing data
  const dataMap = new Map(
    data.map((item) => [item.status, item])
  );
  
  // Ensure all statuses are present, with 0 count if missing
  const completeData = allStatuses.map((status) => {
    const existing = dataMap.get(status);
    if (existing) {
      return {
        ...existing,
        fill: STATUS_COLORS[status] || DEFAULT_COLOR,
      };
    }
    return {
      status,
      count: 0,
      percentage: 0,
      fill: STATUS_COLORS[status] || DEFAULT_COLOR,
    };
  });

  // Sort data to match the legend order: Pending, Cancelled, Completed, Requested
  const sortedData = completeData;

  return (
    <div className="w-full">
      <div className="h-[220px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sortedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={70}
              innerRadius={38}
              fill="#8884d8"
              dataKey="count"
            >
              {sortedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Center text showing growth percentage */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{growthPercentage !== undefined ? growthPercentage : 0}%</p>
            <p className="text-xs text-gray-500 uppercase mt-1">GROWTH</p>
          </div>
        </div>
      </div>
      
      {/* Custom Legend - Two Column Layout matching image design */}
      <div className="mt-4 flex gap-8">
        {/* Left Column: Pending, Cancelled */}
        <div className="flex flex-col gap-3">
          {sortedData.filter(item => ['Pending', 'Cancelled'].includes(item.status)).map((item) => (
            <div key={item.status} className="flex items-center gap-2.5">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-sm text-gray-700">{item.status}</span>
              <span className="text-sm text-gray-700 font-medium ml-auto">{item.percentage}%</span>
            </div>
          ))}
        </div>
        
        {/* Right Column: Completed, Requested */}
        <div className="flex flex-col gap-3">
          {sortedData.filter(item => ['Completed', 'Requested'].includes(item.status)).map((item) => (
            <div key={item.status} className="flex items-center gap-2.5">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-sm text-gray-700">{item.status}</span>
              <span className="text-sm text-gray-700 font-medium ml-auto">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
