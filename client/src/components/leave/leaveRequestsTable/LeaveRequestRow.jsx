import React from 'react'
import Profile from './Profile'
import Button from '../../Button'

const LeaveRequestRow = ({
  name,
  avatar,
  empId,
  position,
  leaveType,
  startingDate,
  endingDate,
  duration, 
  status, 
}) => {

  const statusVariants = {
    approved: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    pending: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div 
      className='grid grid-cols-1 gap-4 p-6 dark:border-slate-700 
      lg:grid-cols-4 lg:items-center lg:gap-6'
    >

      <div className='min-w-0'>
        <Profile 
          name={name} 
          avatar={avatar} 
          position={position}
        />
      </div>

      <div className='min-w-0'>
        <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>Reason</p>
        <p className='mt-1 truncate text-sm font-medium text-slate-900 dark:text-slate-100'>
          {leaveType}
        </p>
      </div>

      <div className='flex justify-between'>

        <div>

          <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>Leave Period</p>
          <span className='text-sm font-medium text-slate-900 dark:text-slate-100'>
            {startingDate} -{endingDate}
          </span>

        </div>

        <div>
          <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>Duration</p>
          <span className='text-sm font-medium text-slate-900 dark:text-slate-100'>
            {duration} Days
          </span>
        </div>
        
      </div>

      {
        status === 'pending' ? (
          <div className='flex justify-center gap-2'>

            <Button 
              variant='primary' 
              className='flex-1 lg:flex-none'
            >
              Accept
            </Button>
            <Button 
              variant='secondary' 
              className='flex-1 lg:flex-none'
            >
              Reject
            </Button>

          </div>
        )
        :
        (
          <div className='flex justify-center'>
            <span 
              className={`w-full lg:w-fit rounded-md px-4 py-2 text-center text-xs font-semibold
              capitalize ${statusVariants[status]}`}
            >
              {status}
            </span>
          </div>
        )
      }

    </div>
  )
}

export default LeaveRequestRow