import React, { useState } from 'react'
import Card from './Card'
import { Bar, ResponsiveContainer, XAxis, YAxis, BarChart, Cell, Tooltip } from 'recharts'
import { useThemeStore } from '../store/useThemeStore'
import ChartSkeleton from './skeleton/ChartSkeleton'

const BarChartCard = ({
    title,
    filters=[], 
    data=[],
    xAxisKey,
    barKey,
    activeKey="active",
    tooltipUnit,
    tooltipLabel,
    loading=false,
}) => {

    const theme = useThemeStore((state) => state.theme);
    const isDark = theme === "dark";

    const [filterValue, setFilerValue] = useState(0);
    const filter = filters.length > 0 ? filters[filterValue] : null;

    const handleFilterChange = ()=>{
        if (!filters.length) return;

        setFilerValue((prev)=> (
            prev === filters.length - 1 ? 0 : prev + 1
        ))
    };

    const filteredData = filter ? data.slice(-Number(filter.value)) : data;

  return (
    <Card className='p-4 lg:p-6'>

        {/* header */}

        <div className='flex justify-between items-center'>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h4>

            {
                filter && (
                    <button 
                        type='button'
                        onClick={handleFilterChange}
                        disabled={loading} 
                        className='rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50
                        dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300
                        transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer
                        disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-50 
                        dark:disabled:hover:bg-slate-800'
                    >
                        {filter.label}
                    </button>
                )
            }
            
        </div>

        {/* chart */}

        {
            loading ? (
                <ChartSkeleton/>
            )
            :
            (
                <div 
                    className='mt-8 flex h-80 items-center justify-center rounded-lg border border-dashed 
                    border-slate-200 dark:border-slate-700'
                >
                    <ResponsiveContainer width="100%" height="100%">

                        <BarChart 
                            data={filteredData} 
                            barSize={52}
                        >

                            <XAxis 
                                dataKey={xAxisKey}
                                axisLine={false} 
                                tickLine={false}
                                tick={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    fill: isDark ? "#CBD5E1" : "#64748B",
                                }}
                            />

                            <YAxis hide/>

                            <Bar 
                                dataKey={barKey}
                                radius={[6, 6, 0, 0]} 
                                animationDuration={800}
                            >

                                {
                                    filteredData.map((entry)=>(
                                        <Cell 
                                            key={entry[xAxisKey]}
                                            fill={entry[activeKey] ? "#1D4ED8" : "#C7D2FE"}
                                        />
                                    ))
                                }

                            </Bar>

                            <Tooltip 
                                cursor={false}
                                formatter={(value) => [`${value} ${tooltipUnit}, ${tooltipLabel}`]}
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
            )
        }
        
    </Card>
  )
}

export default BarChartCard