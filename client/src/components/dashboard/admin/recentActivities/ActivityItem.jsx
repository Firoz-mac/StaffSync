import React from 'react'
import { activityItemData } from '../../../../constants/dashboard/activityItemData'

const ActivityItem = ({data, isLast}) => {

  const { icon: Icon, bg, text } = activityItemData[data.type];

  return (

    <div className='relative flex gap-3 py-4'>

      {
        !isLast && (
          <div className="absolute left-5 top-10 h-full w-px bg-slate-200" />
        )
      }
      
      <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg}`}>
        <Icon className={`h-5 w-5 ${text}`}/>
      </div>

      <div className='min-w-0 flex-1'>

        <h5 className="truncate text-sm font-semibold text-slate-900">
          {data.title}
        </h5>

        <p className="mt-1 text-xs text-slate-500">
          {data.time} 
          <span className="mx-1">•</span> 
          {data.description}
        </p>

      </div>

    </div>
  )
}

export default ActivityItem