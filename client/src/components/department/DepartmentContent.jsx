import React from 'react'
import DepartmentCard from './DepartmentCard'
import EmptyState from '../emptyState/EmptyState';
import SummaryCardSkeleton from '../skeleton/SummaryCardSkeleton';

const DepartmentContent = () => {

    const departmentData = [
        {
            id:1,
            department:'Engineering',
            departmentHead: 'Mac'
        },
        {
            id:2,
            department:'Sales',
            departmentHead: 'Mac'
        },
        {
            id:3,
            department:'Design',
            departmentHead: 'Mac'
        },
        {
            id:4,
            department:'Support',
            departmentHead: 'Mac'
        },
        {
            id:5,
            department:'Production',
            departmentHead: 'Mac'
        },

    ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

        {
            departmentData.map((dpt)=>(
                <DepartmentCard 
                    key={dpt.id} 
                    {...dpt}
                />
            ))
        }

        {/* {
            [...Array(6)].map((_,i)=>(
                <SummaryCardSkeleton/>
            ))
        } */}

        
        
    </div>
    // <EmptyState/>
    
  )
}

export default DepartmentContent