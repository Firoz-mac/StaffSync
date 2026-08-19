import React from 'react'
import Button from '../../Button';

const PayrollHistoryRow = ({
    date, 
    status,
    netSalary,
}) => {

    const statusVariants = {
        paid:'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 p-6 gap-3'>
        <div className='grid grid-cols-2 lg:items-center'>

            <div>
                <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                    Payment Date
                </p>
                <p className='mt-1 truncate text-sm font-medium text-slate-900 dark:text-slate-100'>
                    {date}
                </p>
            </div>

            <div className='flex justify-end lg:justify-center'>

                <span 
                    className={`mt-1 inline-flex w-fit h-fit items-center gap-1.5 rounded-full px-3.5 py-1
                    text-xs font-semibold capitalize ${statusVariants[status]}`}
                >
                    {status}
                </span>

            </div>

        </div>

        <div>
            <p className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>
                Net Salary
            </p>
            <p className='mt-1 truncate text-sm font-medium text-slate-900 dark:text-slate-100'>
                {netSalary}
            </p>
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

export default PayrollHistoryRow