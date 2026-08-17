import React from 'react'

const LeaveTypeAndDuration = ({
    leaveType,
    startDate,
    endDate,
    duration,
}) => {
  return (
    <div className='mt-5 flex justify-between px-6 py-3'>
        <div>
            <h6 className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                Leave Type
            </h6>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100'>
                Sick
            </p>
        </div>

        <div>
            <h6 className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                Duration
            </h6>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100'>
                Oct 28 - Oct 30 (3 Days)
            </p>
          </div>
    </div>
  )
}

export default LeaveTypeAndDuration