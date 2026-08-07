import React from 'react'
import { formatDateAndMonth } from '../../../../utils/formatDate';

const Attendance = ({ 
    date, 
    checkIn, 
    checkOut, 
    duration,
    leaveType,
    description,
    status, 
}) => {

    const { day, month } = formatDateAndMonth(date);
    const isLeave = Boolean(leaveType);

    const dateVariants = {
        default: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        Leave: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
    }

    const statusVariants = {
        "On Time":'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        "Over Time":'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        Late: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        Absent: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
        Leave: 'bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-300',
    };


  return (
    <div 
        className='flex items-center justify-between bg-white 
        dark:bg-slate-900 px-6 py-4 '
    >
        <div className='flex gap-3'>

            <div 
                className={`flex h-12 w-12 flex-col items-center justify-center rounded-lg shrink-0 
                    ${dateVariants[status] || dateVariants.default}
                `}
            >

                <p className='text-[10px] font-semibold tracking-wide'>
                    {month}  
                </p>
                <p className='text-2xl font-bold leading-none'>
                    {day}

                </p>

            </div>

            <div >

                {
                    isLeave ? (
                        <>
                            <p 
                                className='text-sm lg:text-base font-semibold text-slate-900 
                                dark:text-slate-100'
                            >
                                {leaveType}
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                                {description}
                            </p>
                        </>
                    )
                    :
                    (
                        <>
                            <p 
                                className='text-sm lg:text-base font-semibold text-slate-900 
                                dark:text-slate-100'
                            >
                                {checkIn} - {checkOut}
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                                Duration: {duration}
                            </p>
                        </>
                    )
                }

            </div>

        </div>

        <span 
            className={`rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide shrink-0 
                ${statusVariants[status] || statusVariants["Absent"]}
            `}
        >
            {status}
        </span>

    </div>
  )
}

export default Attendance