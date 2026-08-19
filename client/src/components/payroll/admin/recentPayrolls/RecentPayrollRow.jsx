import React from 'react'
import { ChevronRight } from 'lucide-react';
import Avatar from '../../../Avatar'
import Button from '../../../Button'

const RecentPayrollRow = ({ 
    status = 'paid',
}) => {

    const statusVariants = {
        paid:'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-4 p-6'>

        <div className='flex min-w-0 items-center gap-3'>

            <Avatar 
                name='mac'
                size='w-10 h-10'
            />
    
            <div className='min-w-0'>
                <p className='truncate text-sm font-semibold text-slate-900 dark:text-slate-100'>
                    Mac
                </p>
                <p className='truncate text-xs text-slate-500 dark:text-slate-400'>
                    EMP-2024-001
                </p>
            </div>

        </div>

        <div className='flex justify-between'>

            <div>
                <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                    Net Salary
                </p>
                <p className='mt-1 truncate text-sm font-medium text-slate-900 dark:text-slate-100'>
                    51500
                </p>
            </div>

            <div>
                <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                    Status
                </p>
                <span 
                    className={`mt-1 inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1
                    text-xs font-semibold ${statusVariants[status]}`}
                >
                    Paid
                </span>
            </div>

        </div>

        <div className='flex items-center justify-center'>
            <Button 
                variant='outline' 
                className='shrink-0 w-full lg:px-10 lg:w-fit'
            >
                View
            </Button>
        </div>

        

    </div>
  )
}

export default RecentPayrollRow