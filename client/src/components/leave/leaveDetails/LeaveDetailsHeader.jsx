import React from 'react'
import Avatar from '../../Avatar'

const LeaveDetailsHeader = ({
    status='pending',
}) => {

    const statusVariants = {
        pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        approved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };

  return (
    <div className='flex justify-between border-b border-slate-200 dark:border-slate-700 p-6'>

        <div className='flex items-center gap-3'>
            
            <Avatar 
                name='Mac' 
                size='w-16 lg:h-16'
            />
            <div className='min-w-0'>
                <h6 className='text-base font-semibold text-slate-900 dark:text-slate-100'>
                    Mac
                </h6>

                <div className='flex flex-col lg:flex-row space-x-3'>
                    <p className='text-sm font-medium text-slate-600 dark:text-slate-300'>
                        Product Designer
                    </p>
                    <p className='text-sm text-slate-400 dark:text-slate-500'>
                        ID: LEV-2026-0482
                    </p>
                </div>
                
            </div>
        </div>

        <span 
            className={`w-fit h-fit rounded-full px-2 py-0.5 text-xs font-semibold 
                ${statusVariants[status]}
            `}
        >
            Pending
        </span>

    </div>
  )
}

export default LeaveDetailsHeader