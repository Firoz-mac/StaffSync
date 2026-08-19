import React from 'react'
import Card from '../../../Card'
import RecentPayrollRow from './RecentPayrollRow'

const RecentPayrolls = () => {
  return (
    <Card>

      <div className='flex justify-between p-6 border-b border-slate-200 dark:border-slate-700'>

        <h4 className='text-base font-semibold text-slate-900 dark:text-slate-100'>RecentPayroll</h4>
        <button 
          type='button' 
          className='text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 
          dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
        >
          View All
        </button>

      </div>

      <div className='divide-y divide-slate-200 dark:divide-slate-700'>
        <RecentPayrollRow/>
        <RecentPayrollRow/>
      </div>

    </Card>
  )
}

export default RecentPayrolls