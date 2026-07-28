import React from 'react'
import WelcomeBanner from '../../components/dashboard/WelcomeBanner'
import SummaryCardSection from '../../components/dashboard/summaryCard/SummaryCardSection'
import EmployeeGrowthChart from '../../components/dashboard/admin/EmployeeGrowthChart'
import DepartmentDistribution from '../../components/dashboard/admin/DepartmentDistribution'
import AttendanceTrend from '../../components/dashboard/admin/AttendanceTrend'
import LeaveStatistics from '../../components/dashboard/admin/leaveStatistics/LeaveStatistics'
import MonthlyHiring from '../../components/dashboard/admin/MonthlyHiring'

const AdminDashboard = () => {

  return (
    <div className='p-6'>
        <WelcomeBanner/>
        <SummaryCardSection/>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-[4fr_2fr]'>

          <div className='grid grid-cols-1 gap-6'>
            <EmployeeGrowthChart/>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <AttendanceTrend/>
              <LeaveStatistics/>
              <p>Recent Employees</p>
              <p>Recent Activities</p>
            </div>

          </div>

          <div className='flex flex-col gap-6'>
            <DepartmentDistribution/>
            <MonthlyHiring/>
          </div>

        </div>

    </div>
  )
}

export default AdminDashboard