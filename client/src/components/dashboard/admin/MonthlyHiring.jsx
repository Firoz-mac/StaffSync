import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const MonthlyHiring = () => {

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
    <div className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-6'>
      <h4 className="text-lg font-semibold text-slate-900">Monthly Hiring</h4>

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
                fill: "#64748B",
              }}
            />

            <YAxis hide />

            <Bar 
              dataKey="hired" 
              radius={[6, 6, 0, 0]}
            >

              {monthlyHiringData.map((data)=>(
                <Cell 
                  key={data.month} 
                  fill={data.active ? "#1D4ED8" : "#C7D2FE"}
                />
              ))}

            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MonthlyHiring