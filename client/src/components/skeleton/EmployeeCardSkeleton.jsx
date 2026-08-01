import React from 'react'
import Skeleton from './Skeleton'

const EmployeeCardSkeleton = () => {
  return (
    <div className='grid gap-6 py-5 lg:grid-cols-[1.5fr_1.3fr_1.8fr_auto_auto] lg:items-center'>
        <div className='flex items-center gap-4'>
            <Skeleton className='h-12 w-12 rounded-full'/>

            <div className='space-y-2'>
                <Skeleton className='h-4 w-36'/>
                <Skeleton className='h-4 w-36'/>
            </div>
        </div>

        <div className="space-y-2">
            <Skeleton className='h-4 w-40'/>
            <Skeleton className='h-6 w-24 rounded-full'/>
        </div>

        <div className='space-y-2'>
            <Skeleton className='h-3 w-52'/>
            <Skeleton className='h-3 w-36'/>
            <Skeleton className='h-3 w-32'/>
        </div>
    </div>
  )
}

export default EmployeeCardSkeleton