import React from 'react'
import Skeleton from './Skeleton'

const ListSkeleton = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
        <Skeleton className="h-6 w-40"/>

        <div className="mt-6 space-y-5">
            {
                [...Array(4)].map((_,i)=> (
                    <div 
                        key={i} 
                        className="flex items-center gap-3"
                    >
                        <Skeleton className="h-12 w-12 rounded-full" />

                        <div className="flex-1">
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="mt-2 h-3 w-28" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ListSkeleton