import React, { useState } from 'react'
import Card from '../../Card';
import { 
    Area, 
    ComposedChart, 
    Line, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis 
} from 'recharts';
import { useThemeStore } from '../../../store/useThemeStore';
import Chart from '../../Chart';

const AttendanceTrendChart = () => {

    const theme = useThemeStore();
    const isDark = theme === "dark";

    const attendanceTrendData = [
        { day: "M", present: 68,},
        { day: "T", present: 60,},
        { day: "W", present: 100,},
        { day: "T", present: 38,},
        { day: "F", present: 72,},
        { day: "S", present: 56,},
        { day: "S", present: 66,},
    ];

    const filters = [
        { value: "0", label: "Today" },
        { value: "1", label: "Yesterday" },
        { value: "7", label: "Last 7 Days" },
    ];

    const handleFilterChange = (value)=>{
        setSelectedFilter()
    }

    return (
        <Chart 
            title='Attendence Trend'
            filters={filters}
            data={attendanceTrendData}
            xAxisKey='day'
            series={[
                {
                    dataKey:'present',
                    name:'employees presented',
                    area:true
                },
            ]}
        />
    )
}

export default AttendanceTrendChart