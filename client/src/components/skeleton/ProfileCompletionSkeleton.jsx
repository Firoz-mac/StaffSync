import React from 'react'
import Skeleton from './Skeleton'

const ProfileCompletionSkeleton = () => {
  return (
    <div 
      className="rounded-xl border border-slate-200 bg-white p-6 
      dark:border-slate-700 dark:bg-slate-900"
    >
        <Skeleton className="h-20 w-full"/>
        <div className="mt-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-3 w-28" />
        </div>
    </div>
  )
}

export default ProfileCompletionSkeleton