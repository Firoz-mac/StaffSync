import React from 'react'
import Skeleton from './Skeleton'

const SummaryCardSkeleton = () => {
  return (
    <div className='rounded-md lg:rounded-xl border border-slate-200 bg-white p-3 lg:p-6'>

        <Skeleton className="h-10 w-10 rounded-lg"/>

        <Skeleton className="mt-6 h-5 w-24" />

        <Skeleton className="mt-3 h-8 w-20" />

        <Skeleton className="mt-4 h-4 w-32" />

    </div>
  );
};

export default SummaryCardSkeleton