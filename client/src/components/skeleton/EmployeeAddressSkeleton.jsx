import React from 'react'
import Skeleton from './Skeleton'

const EmployeeAddressSkeleton = () => {
  return (
    <div 
        className='rounded-xl border border-slate-200 bg-white p-6 
        dark:border-slate-700 dark:bg-slate-900'
    >
        <Skeleton className='h-5 w-30'/>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-3 gap-5'>
            <Skeleton className='h-5 w-full'/>
            <Skeleton className='h-5 w-full'/>
        </div>

    </div>
  )
}

export default EmployeeAddressSkeleton