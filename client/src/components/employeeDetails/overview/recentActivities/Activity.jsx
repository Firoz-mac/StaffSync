import React from 'react'
import { employeeActivityItemData } from '../../../../constants/dashboard/activityItemData';

const Activity = ({ data, isLast}) => {

    const { type, date, title} = data;

    const activityColors = employeeActivityItemData[type];

    const { bg, main } = activityColors;

  return (
    <div className='flex gap-4'>

        <div className="flex flex-col items-center">

            <div className={`flex items-center justify-center w-6 h-6 ${bg} rounded-full`}>
                <div className={`w-2 h-2 rounded-full ${main}`}/>
            </div>

            {
                !isLast && (
                    <div className='mt-1 w-px flex-1 bg-slate-300 dark:bg-slate-700'/>
                )
            }

        </div>

        <div className='flex-1 pb-6'>

            <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                {date}
            </p>

            <h6 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
                {title}
            </h6>
            
        </div>

    </div>
  )
}

export default Activity