import React from 'react'
import WelcomeBanner from '../../components/dashboard/WelcomeBanner'
import SummaryCardSection from '../../components/dashboard/summaryCard/SummaryCardSection'
import Announcements from '../../components/dashboard/Announcements'
import MySchedule from '../../components/dashboard/employee/mySchedule/MySchedule'
import ProfileCompletionCard from '../../components/dashboard/employee/ProfileCompletionCard'
import HolidaysAndEvents from '../../components/dashboard/holidaysAndEvents/HolidaysAndEvents'

const EmployeeDashboard = () => {
  return (
    <div className='p-6'>
      <WelcomeBanner/>
      <SummaryCardSection/>

      <div className='grid grid-cols-1 gap-6 items-start lg:grid-cols-[4fr_2fr]'>

        <div className='grid grid-cols-1 gap-6'>

          <MySchedule/>
          <Announcements/>
          
        </div>

        <div  className='flex flex-col gap-6'>
          <ProfileCompletionCard/>
          <HolidaysAndEvents/>
        </div>

      </div>
    </div>
  )
}

export default EmployeeDashboard