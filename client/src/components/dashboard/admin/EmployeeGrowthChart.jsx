import React, { useEffect } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from "recharts";
import { employeeGrowthData } from '../../../constants/dashboard/employeeGrowthData';

const EmployeeGrowthChart = () => {

  return (
    <div className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-6'>
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Employee Growth</h2>
            <button 
                className='rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium 
                text-slate-700 transition-colors hover:bg-slate-100 cursor-pointer'
            >
                Last 12 Months
            </button>
        </div>

        <div 
            className='mt-8 flex h-80 items-center justify-center rounded-lg 
            border border-dashed border-slate-200'
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
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false}
                    />
                    <Tooltip />

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
                        activeDot={{ r: 5 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default EmployeeGrowthChart