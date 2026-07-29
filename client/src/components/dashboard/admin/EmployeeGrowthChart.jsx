import React from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import { employeeGrowthData } from '../../../constants/dashboard/employeeGrowthData';
import ChartSkeleton from '../../skeleton/ChartSkeleton';
import EmptyState from '../../emptyState/EmptyState';
import ErrorState from '../../errorState/ErrorState';
import Card from '../../Card';
import { useThemeStore } from '../../../store/useThemeStore';

const EmployeeGrowthChart = () => {

    const { theme } = useThemeStore();
    const isDark = theme === "dark";

  return (
    <Card className='p-4 lg:p-6'>
        
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Employee Growth</h2>
            <button 
                className='rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 
                px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors 
                hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer'
            >
                Last 12 Months
            </button>
        </div>

        <div 
            className='mt-8 flex h-80 items-center justify-center rounded-lg 
            border border-dashed border-slate-200 dark:border-slate-700'
        >
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={employeeGrowthData}>

                    <defs>
                        <linearGradient 
                            id="employeeGrowthGradient" 
                            x1="0" y1="0" x2="0" y2="1"
                        >
                            <stop 
                                offset="5%" 
                                stopColor="#2563eb" 
                                stopOpacity={0.25} 
                            />
                            <stop 
                                offset="95%" 
                                stopColor="#2563eb" 
                                stopOpacity={0} 
                            />
                        </linearGradient>
                    </defs>

                    <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: isDark ? "#94a3b8" : "#64748b", }}
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: isDark ? "#94a3b8" : "#64748b" }}
                    />

                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
                            backgroundColor: isDark ? "#0f172a" : "#fff",
                            color: isDark ? "#f8fafc" : "#0f172a",
                        }}
                        labelStyle={{
                            color: isDark ? "#f8fafc" : "#0f172a",
                        }}
                    />

                    <Area 
                        type="monotone" 
                        dataKey="employees" 
                        stroke="none" 
                        fill="url(#employeeGrowthGradient)"
                    />

                    <Line 
                        type="monotone" 
                        dataKey="employees"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ 
                            r: 6, 
                            fill: "#2563eb", 
                            stroke: "#fff", 
                            strokeWidth: 2, 
                        }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    </Card>
    // <EmptyState 
    //     title='No growth data' 
    //     description="Employee growth statistics will appear here."
    // />
    // <ErrorState 
    //     title='Failed to load employee growth' 
    //     description='We couldnt retrieve employee growth data. Please try again later.'
    // />
    // <ChartSkeleton/>
  )
}

export default EmployeeGrowthChart