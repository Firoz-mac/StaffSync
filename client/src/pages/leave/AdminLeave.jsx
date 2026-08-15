import React, { useEffect, useState } from 'react'
import LeaveSummary from '../../components/leave/admin/LeaveSummary'
import MonthlyLeaveTrend from '../../components/leave/admin/MonthlyLeaveTrend'
import FilterTabMenu from '../../components/FilterTabMenu'
import { leaveTabs } from '../../constants/leaveTabs'
import LeaveRequestsTable from '../../components/leave/leaveRequestsTable/LeaveRequestsTable'

const AdminLeave = () => {

  const tabs = leaveTabs;
  const [filter, setFilter] = useState('all');

  return (
    <div className='p-6 space-y-4'>
      <LeaveSummary/>

      <FilterTabMenu 
        tabs={tabs} 
        value={filter}
        onChange={setFilter}
      />

      <LeaveRequestsTable 
        filter={filter}
      />

      <MonthlyLeaveTrend/>

    </div>
  )
}

export default AdminLeave