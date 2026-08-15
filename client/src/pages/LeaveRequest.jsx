import React from 'react'
import LeaveRequestForm from '../components/leave/employee/LeaveRequestForm/LeaveRequestForm'

const LeaveRequest = () => {
  return (
    <div className='p-6'>
        <div className='mb-6'>
            <h1 className='text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                Create Leave Request
            </h1>
            <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
                Submit a new leave request for approval.
            </p>
        </div>
        <LeaveRequestForm/>
    </div>
  )
}

export default LeaveRequest