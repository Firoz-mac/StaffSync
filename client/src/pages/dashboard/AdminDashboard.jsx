import React from 'react'
import WelcomeBanner from '../../components/dashboard/WelcomeBanner'
import SummaryCardSection from '../../components/dashboard/summaryCard/SummaryCardSection'

const AdminDashboard = () => {

  return (
    <div className='p-6'>
        <WelcomeBanner/>
        <SummaryCardSection/>
    </div>
  )
}

export default AdminDashboard