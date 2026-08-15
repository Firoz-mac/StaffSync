import React, { useEffect, useState } from 'react'
import Card from './Card'
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Area,
} from "recharts";
import { useThemeStore } from '../store/useThemeStore';
import ChartSkeleton from './skeleton/ChartSkeleton';

const Chart = ({
    title,
    filters,
    data,
    xAxisKey,
    series = [],
    loading=false,
}) => {

    const theme = useThemeStore((state) => state.theme);
    const isDark = theme === "dark";

    const [filterValue, setFilterValue] = useState(0);
    const filterLength = filters.length;

    const handleFilterChange = () => {
        setFilterValue((prev) => (
            prev === filters.length - 1 ? 0 : prev + 1
        ))
    };

    return (
        <Card className='p-4 lg:p-6'>

            {/* header */}

            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>

                <button
                    type='button'
                    onClick={handleFilterChange}
                    className='rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 
                    dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 
                    transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer'
                >
                    {filters[filterValue].label}
                </button>

            </div>

            {/* chart */}

            {
                loading ? (
                    <ChartSkeleton/>
                )
                :
                (
                    <div
                        className='mt-8 flex h-80 items-center justify-center rounded-lg 
                        border border-dashed border-slate-200 dark:border-slate-700'
                    >

                        <ResponsiveContainer width="100%" height="100%">

                            <ComposedChart data={data}>

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
                                    dataKey={xAxisKey}
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

                                {
                                    series.map((item) => (

                                        <React.Fragment key={item.dataKey}>

                                            {
                                                item.area && (
                                                    <Area
                                                        type="monotone"
                                                        dataKey={item.dataKey}
                                                        stroke="none"
                                                        fill="url(#employeeGrowthGradient)"
                                                    />
                                                )
                                            }

                                            <Line
                                                type="monotone"
                                                dataKey={item.dataKey}
                                                name={item.name}
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

                                        </React.Fragment>

                                    ))
                                }

                            </ComposedChart>

                        </ResponsiveContainer>

                    </div>
                )

            }

        </Card>
    )
}

export default Chart