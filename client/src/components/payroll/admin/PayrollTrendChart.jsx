import React from 'react'
import Chart from '../../Chart';

const PayrollTrendChart = () => {

    const payrollTrendData = [
        { month: "Jan", value: 68,},
        { month: "Feb", value: 60,},
        { month: "Mar", value: 100,},
        { month: "Apr", value: 38,},
        { month: "May", value: 72,},
        { month: "Jun", value: 56,},
        { month: "Jul", value: 66,},
    ];

    const filters = [
        { value: "12", label: "Last 12 Month" },
        { value: "6", label: "Last 6 Month" },
        { value: "3", label: "Last 3 Month" },
    ];

  return (
    <Chart
        title='Payroll Trend'
        filters={filters}
        data={payrollTrendData}
        xAxisKey='month'
        series={[
            {
                dataKey:'value',
                name:'value',
            },
        ]}
    />
  )
}

export default PayrollTrendChart