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
import Chart from '../../Chart';

const EmployeeGrowthChart = () => {

    const { theme } = useThemeStore();
    const isDark = theme === "dark";

    const filters = [
        { value: "12", label: "Last 12 Month" },
        { value: "6", label: "Last 6 Month" },
        { value: "3", label: "Last 3 Month" },
    ];

  return (

    <Chart 
        title='Employee Growth'
        filters={filters}
        data={employeeGrowthData}
        xAxisKey='month'
        series={[
            {
                dataKey:'employees',
                name:'employees',
                area:true
            },
        ]}
    />
  )
}

export default EmployeeGrowthChart