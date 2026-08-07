import React from 'react'
import Skeleton from './Skeleton'

const ChartSkeleton = () => {
  return (
    <div 
      className="rounded-xl border border-slate-200 bg-white p-6
      dark:border-slate-700 dark:bg-slate-900"
    >

        <Skeleton className="h-6 w-44"/>

        <Skeleton className="mt-6 h-72 w-full rounded-xl" />
        
    </div>
  )
}

export default ChartSkeleton