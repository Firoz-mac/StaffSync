import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";
import ChartSkeleton from '../../skeleton/ChartSkeleton';
import EmptyState from '../../emptyState/EmptyState';
import ErrorState from '../../errorState/ErrorState';
import Card from '../../Card';
import { useThemeStore } from '../../../store/useThemeStore';

const MonthlyHiring = () => {

  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  const monthlyHiringData = [
    {
      month: "JUL",
      hired: 45,
      active: false,
    },
    {
      month: "AUG",
      hired: 72,
      active: false,
    },
    {
      month: "SEP",
      hired: 90,
      active: true,
    },
    {
      month: "OCT",
      hired: 64,
      active: false,
    },
  ];
  
  return (
    <Card className='p-4 lg:p-6'>
      
      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Monthly Hiring</h4>

      <div className="h-72 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={monthlyHiringData} 
            barSize={52}
          >
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{
                fontSize: 12,
                fontWeight: 700,
                fill: isDark ? "#CBD5E1" : "#64748B",
              }}
            />

            <YAxis hide />

            <Bar 
              dataKey="hired" 
              radius={[6, 6, 0, 0]}
              animationDuration={800}
            >

              {monthlyHiringData.map((entry)=>(
                <Cell 
                  key={entry.month} 
                  fill={entry.active ? "#1D4ED8" : "#C7D2FE"}
                />
              ))}

            </Bar>

            <Tooltip
              cursor={false}
              formatter={(value) => [`${value} Employees`, "Hired"]}
              contentStyle={{
                borderRadius: "12px",
                border: `1px solid ${isDark ? "#334155" : "#E2E8F0"}`,
                backgroundColor: isDark ? "#0F172A" : "#FFFFFF",
                color: isDark ? "#F8FAFC" : "#0F172A",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              labelStyle={{
                color: isDark ? "#F8FAFC" : "#0F172A",
                fontWeight: 600,
              }}
              itemStyle={{
                color: isDark ? "#F8FAFC" : "#0F172A",
              }}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
    // <EmptyState 
    //   title='No hiring data' 
    //   description='Hiring trends will appear here.'
    // />
    // <ErrorState 
    //   title='Failed to load hiring data' 
    //   description='Hiring statistics couldnt be retrieved.'
    // />
    // <ChartSkeleton/>
  )
}

export default MonthlyHiring