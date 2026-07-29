import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { departmentDistributionData } from '../../../constants/dashboard/departmentDistributionData';
import { departmentPieChartPercentage } from '../../../utils/chartUtils';
import ChartSkeleton from '../../skeleton/ChartSkeleton';
import EmptyState from '../../emptyState/EmptyState';
import ErrorState from '../../errorState/ErrorState';

const DepartmentDistribution = () => {

    const chartData = departmentPieChartPercentage(departmentDistributionData);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">Dept. Distribution</h4>

        <div className='h-71'>

            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie 
                        data={chartData} 
                        dataKey="value" 
                        innerRadius={70} 
                        outerRadius={95} 
                        paddingAngle={2}
                    >
                        {
                            chartData.map((entry)=>(
                                <Cell key={entry.name} fill={entry.color}/>
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

        </div>

        <div className='grid grid-cols-2 gap-3 mt-6'>
            
            {
                chartData.map((dept)=>(
                    <div 
                        key={dept.name} 
                        className='flex gap-2 items-center'
                    >
                        <span 
                            className='w-4 h-4 rounded-full' 
                            style={{ backgroundColor: dept.color }}
                        />
                        <span className="flex text-sm font-medium text-slate-700 gap-px items-center">
                            {dept.name} 
                            <span className='font-normal'>({dept.percentage}%)</span>
                        </span>
                    </div>
                ))
            }
            
        </div>
    </div>
    // <EmptyState 
    //     title='No departments' 
    //     description='Department distribution is unavailable.'
    // />
    // <ErrorState 
    //     title='Failed to load departments' 
    //     description='Department distribution data is unavailable at the moment.'
    // />
    // <ChartSkeleton/>
  )
}

export default DepartmentDistribution