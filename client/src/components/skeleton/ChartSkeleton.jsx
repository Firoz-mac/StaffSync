import React from 'react'
import Skeleton from './Skeleton'

const ChartSkeleton = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

        <Skeleton className="h-6 w-44"/>

        <Skeleton className="mt-6 h-72 w-full rounded-xl" />
        
    </div>
  )
}

export default ChartSkeleton