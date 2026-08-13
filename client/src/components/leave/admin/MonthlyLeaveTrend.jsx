import React, { useEffect, useState } from 'react'
import BarChart from '../../BarChartCard'

const MonthlyLeaveTrend = () => {

    const leaveTrendData = [
        {
            month: "JAN",
            leave: 12,
            active: false,
        },
        {
            month: "FEB",
            leave: 30,
            active: false,
        },
        {
            month: "MAR",
            leave: 42,
            active: false,
        },
        {
            month: "APR",
            leave: 21,
            active: false,
        },
        {
            month: "MAY",
            leave: 42,
            active: false,
        },
        {
            month: "JUN",
            leave: 42,
            active: false,
        },
        {
            month: "JUL",
            leave: 45,
            active: false,
        },
        {
            month: "AUG",
            leave: 72,
            active: false,
        },
        {
            month: "SEP",
            leave: 90,
            active: true,
        },
        {
            month: "OCT",
            leave: 64,
            active: false,
        },
        {
            month: "NOV",
            leave: 74,
            active: false,
        },
        {
            month: "DEC",
            leave: 84,
            active: false,
        },
    ];

    const filters = [
        { value: "6", label: "Last 6 Month" },
        { value: "12", label: "Last 12 Month" },
    ];

  return (
    <div>
        <BarChart
            title='Leave Trend'
            filters={filters} 
            data={leaveTrendData} 
            xAxisKey='month'
            barKey='leave'
            activeKey="active"
            tooltipUnit = "Employees"
            tooltipLabel = "leave"
        />
    </div>
  )
}

export default MonthlyLeaveTrend