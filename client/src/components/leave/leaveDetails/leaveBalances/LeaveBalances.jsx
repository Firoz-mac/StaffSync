import React from 'react'
import LeaveBalanceCard from './LeaveBalanceCard'

const LeaveBalances = () => {
  return (
    <div className='p-6 bg-blue-100/50 dark:bg-blue-900/30 border-l border-slate-200 dark:border-slate-700'>

      <h6 className='text-md font-semibold text-slate-900 dark:text-slate-100'>
        Leave Balances
      </h6>

      <div className='mt-3 space-y-3'>
        <LeaveBalanceCard/>
        <LeaveBalanceCard/>
        <LeaveBalanceCard/>
        <LeaveBalanceCard/>
      </div>

    </div>
  )
}

export default LeaveBalances