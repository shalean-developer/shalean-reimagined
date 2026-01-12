'use client';

interface SubscriptionChartProps {
  data: { type: string; count: number }[];
}

export function SubscriptionChart({ data }: SubscriptionChartProps) {
  // Find max value for scaling
  const maxValue = Math.max(...data.map(d => d.count), 35000);
  const maxDisplayValue = Math.ceil(maxValue / 5000) * 5000; // Round up to nearest 5k
  
  // X-axis ticks: 0, 5k, 10k, 20k, 25k, 30k, 35k
  const xAxisTicks = [0, 5000, 10000, 20000, 25000, 30000, 35000].filter(t => t <= maxDisplayValue);
  
  // Map data to ensure correct order: One-Time, Weekly, Bi-Weekly, Monthly
  const orderedData = ['One-Time', 'Weekly', 'Bi-Weekly', 'Monthly'].map(type => {
    const item = data.find(d => d.type === type);
    return item || { type, count: 0 };
  });

  return (
    <div className="w-full">
      {/* Chart Content */}
      <div className="space-y-6 mt-4">
        {orderedData.map((item) => {
          const percentage = maxDisplayValue > 0 ? (item.count / maxDisplayValue) * 100 : 0;
          const displayValue = item.count >= 1000 
            ? `${(item.count / 1000).toFixed(0)}k` 
            : item.count.toString();
          
          return (
            <div key={item.type} className="space-y-2">
              {/* Label */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{item.type}</span>
                <span className="text-sm font-medium text-gray-900">{displayValue}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative w-full h-6 bg-gray-200 rounded">
                <div
                  className="absolute left-0 top-0 h-full bg-[#f59e0b] rounded"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* X-Axis */}
      <div className="mt-8 relative">
        <div className="flex justify-between items-center text-xs text-gray-500">
          {xAxisTicks.map((tick, index) => (
            <span key={index} className="flex-1 text-center first:text-left last:text-right">
              {tick >= 1000 ? `${(tick / 1000).toFixed(0)}k` : tick}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}