import React from 'react'
import { formatDateAndMonth } from '../../../utils/formatDate'

const HolidayCard = ({data}) => {

  const { title, tag, date } = data;

  const { month, day } = formatDateAndMonth(date);

  return (
    <div className='w-full flex gap-3'>

      <div 
        className='flex h-16 w-16 flex-col items-center justify-center shrink-0
        rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
      >
        <span className="text-xs font-semibold tracking-wide uppercase">
          {month}
        </span>
        <h4 className="text-2xl font-bold leading-none">
          {day}
        </h4>
      </div>

      <div className='flex flex-1 flex-col justify-center'>
        <h4 className="font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h4>
        <p className="mt-px text-sm text-slate-500 dark:text-slate-400">
          {tag}
        </p>
      </div>

    </div>
  )
}

export default HolidayCard