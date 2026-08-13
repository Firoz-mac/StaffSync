import React from 'react'
import LeaveSummary from '../../components/leave/admin/LeaveSummary'
import MonthlyLeaveTrend from '../../components/leave/admin/MonthlyLeaveTrend'

const AdminLeave = () => {
  return (
    <div className='p-6 space-y-4'>
      <LeaveSummary/>
      <MonthlyLeaveTrend/>
    </div>
  )
}

export default AdminLeave