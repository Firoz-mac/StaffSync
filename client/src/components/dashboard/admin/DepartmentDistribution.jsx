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
import Card from '../../Card';

const DepartmentDistribution = () => {

    const chartData = departmentPieChartPercentage(departmentDistributionData);

  return (
    <Card className="p-6 lg:p-6">

        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Dept. Distribution</h4>

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
                            aria-hidden="true" 
                            className='w-4 h-4 rounded-full' 
                            style={{ backgroundColor: dept.color }}
                        />
                        <span 
                            className="flex text-sm font-medium text-slate-500 dark:text-slate-400 
                            gap-px items-center"
                        >
                            {dept.name} 
                            <span className='font-normal'>({dept.percentage}%)</span>
                        </span>
                    </div>
                ))
            }
            
        </div>
    </Card>
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