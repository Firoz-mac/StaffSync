import React from 'react'
import WelcomeBanner from '../../components/dashboard/WelcomeBanner'
import SummaryCardSection from '../../components/dashboard/summaryCard/SummaryCardSection'
import EmployeeGrowthChart from '../../components/dashboard/admin/EmployeeGrowthChart'
import DepartmentDistribution from '../../components/dashboard/admin/DepartmentDistribution'

const AdminDashboard = () => {

  return (
    <div className='p-6'>
        <WelcomeBanner/>
        <SummaryCardSection/>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-[4fr_2fr]'>
          
          <div>
            <EmployeeGrowthChart/>
          </div>

          <div>
            <DepartmentDistribution/>
          </div>

        </div>

    </div>
  )
}

export default AdminDashboard