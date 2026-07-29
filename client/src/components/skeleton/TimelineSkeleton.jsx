import React from 'react'
import Skeleton from './Skeleton'

const TimelineSkeleton = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
        <Skeleton className="h-6 w-40"/>

        <div className="mt-6 space-y-6">
            {
                [...Array(4)].map((_,i)=> (
                    <div 
                        key={i} 
                        className="flex items-start gap-3"
                    >
                        <Skeleton className="h-10 w-10 rounded-full"/>

                        <div className="flex-1">
                            <Skeleton className="h-4 w-44"/>
                            <Skeleton className="mt-2 h-3 w-32"/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TimelineSkeleton