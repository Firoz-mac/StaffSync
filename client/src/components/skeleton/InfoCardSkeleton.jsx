import React from 'react'
import Skeleton from './Skeleton'

const InfoCardSkeleton = () => {
  return (
    <div 
        className='rounded-xl border border-slate-200 bg-white p-6
      dark:border-slate-700 dark:bg-slate-900'
    >
        <Skeleton className='w-40 h-5'/>

        <div className='mt-5 space-y-2'>
            {
                [...Array(4)].map((_,i)=>(
                    <Skeleton 
                        key={i} 
                        className='w-full h-5'
                    />
                ))
            }
            
        </div>
    </div>
  )
}

export default InfoCardSkeleton