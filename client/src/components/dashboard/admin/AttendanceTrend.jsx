import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AttendanceTrend = () => {

    const attendanceTrendData = [
        { day: "M", present: 68, absent: 12 },
        { day: "T", present: 60, absent: 18 },
        { day: "W", present: 100, absent: 0 },
        { day: "T", present: 38, absent: 32 },
        { day: "F", present: 72, absent: 16 },
        { day: "S", present: 56, absent: 20 },
        { day: "S", present: 66, absent: 16 },
    ];

  return (
    <div className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-6'>
        <h4 className="text-lg font-semibold text-slate-900">Attendance Trend</h4>

        <div className="h-72 mt-4">

            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    data={attendanceTrendData} 
                    barSize={32} 
                    barGap={8}
                >
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "#334155",
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                        dy={10}
                    />

                    <YAxis hide />

                    <Tooltip cursor={false} />

                    <Bar 
                        dataKey="present" 
                        stackId="attendance" 
                        radius={[4, 4, 0, 0]} 
                        fill="#1D4ED8"
                    />
                    
                    
                    <Bar 
                        dataKey="absent" 
                        stackId="attendance" 
                        radius={[4, 4, 0, 0]} 
                        fill="#C7D2FE"
                    />
                    
                </BarChart>
            </ResponsiveContainer>

        </div>

    </div>
  )
}

export default AttendanceTrend