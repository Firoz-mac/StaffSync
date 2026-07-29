import React from 'react'
import { activityItemData } from '../../../../constants/dashboard/activityItemData'

const ActivityItem = ({data, isLast}) => {

  const { title, time, description, type } = data;

  const activity = activityItemData[type];
  if (!activity) return null;
  const { icon: Icon, bg, text } = activity;

  return (

    <div className='relative flex items-start gap-3 py-4'>

      {
        !isLast && (
          <div className="absolute left-5 top-10 h-full w-px bg-slate-200 dark:bg-slate-700" />
        )
      }
      
      <div 
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center 
        rounded-full transition-colors ${bg}`}
      >
        <Icon 
          aria-hidden="true" 
          className={`h-5 w-5 ${text}`}
        />
      </div>

      <div className='min-w-0 flex-1'>

        <h5 className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h5>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {time} 
          <span className="mx-1">•</span> 
          {description}
        </p>

      </div>

    </div>
  )
}

export default ActivityItem