import React from 'react'
import WelcomeBanner from '../../components/dashboard/WelcomeBanner'
import SummaryCardSection from '../../components/dashboard/summaryCard/SummaryCardSection'
import EmployeeGrowthChart from '../../components/dashboard/admin/EmployeeGrowthChart'
import DepartmentDistribution from '../../components/dashboard/admin/DepartmentDistribution'
import AttendanceTrend from '../../components/dashboard/admin/AttendanceTrend'
import LeaveStatistics from '../../components/dashboard/admin/leaveStatistics/LeaveStatistics'
import MonthlyHiring from '../../components/dashboard/admin/MonthlyHiring'
import RecentEmployees from '../../components/dashboard/admin/recentEmployees/RecentEmployees'
import UpcomingBirthdays from '../../components/dashboard/admin/upcomingBirthdays/UpcomingBirthdays'
import HolidaysAndEvents from '../../components/dashboard/holidaysAndEvents/HolidaysAndEvents'
import Announcements from '../../components/dashboard/Announcements'
import RecentActivities from '../../components/dashboard/admin/recentActivities/RecentActivities'

const AdminDashboard = () => {

  return (
    <div className='p-6'>
        <WelcomeBanner/>
        <SummaryCardSection/>

        <div className='grid grid-cols-1 gap-6 items-start lg:grid-cols-[4fr_2fr]'>

          <div className='grid grid-cols-1 gap-6'>
            <EmployeeGrowthChart/>

            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              <AttendanceTrend/>
              <LeaveStatistics/>
              <RecentEmployees/>
              <RecentActivities/>
            </div>

          </div>

          <div className='flex flex-col gap-6'>
            <DepartmentDistribution/>
            <MonthlyHiring/>
            <UpcomingBirthdays/>
            <HolidaysAndEvents/>
            <Announcements/>
          </div>

        </div>

    </div>
  )
}

export default AdminDashboard