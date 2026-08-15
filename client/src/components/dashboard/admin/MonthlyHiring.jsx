import React from 'react'
import Card from '../../Card';
import BarChartCard from '../../BarChartCard';

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
    <BarChartCard
      title='Monthly Hiring'
      data={monthlyHiringData}
      xAxisKey='month'
      barKey='hired'
      activeKey="active"
      tooltipUnit="Employees"
      tooltipLabel="hired"
    />
  )
}

export default MonthlyHiring