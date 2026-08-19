import React from 'react'
import SummaryCardScetion from '../../components/payroll/admin/SummaryCardScetion'
import MonthSelector from '../../components/MonthSelector'
import PayrollTrendChart from '../../components/payroll/admin/PayrollTrendChart'
import RecentPayrolls from '../../components/payroll/admin/recentPayrolls/RecentPayrolls'

const AdminPayroll = () => {
  return (
    <div className='p-6 space-y-3'>
      <MonthSelector/>
      <SummaryCardScetion/>
      <PayrollTrendChart/>
      <RecentPayrolls/>
    </div>
  )
}

export default AdminPayroll