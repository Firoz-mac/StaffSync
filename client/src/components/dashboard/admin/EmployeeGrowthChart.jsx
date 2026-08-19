import React from 'react'
import { employeeGrowthData } from '../../../constants/dashboard/employeeGrowthData';
import Chart from '../../Chart';

const EmployeeGrowthChart = () => {

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
        },
      ]}
    />
  )
}

export default EmployeeGrowthChart