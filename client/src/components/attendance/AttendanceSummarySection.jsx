import React from 'react'
import SummaryCard from '../dashboard/summaryCard/SummaryCard';
import SummaryCardSkeleton from '../skeleton/SummaryCardSkeleton';

const AttendanceSummarySection = ({ data }) => {
    

  return (
    <div className='grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 py-5'>

        {
            data.map((card)=>(
                <SummaryCard
                    key={card.id} 
                    title={card.title} 
                    {...card}
                />
                // <SummaryCardSkeleton/>

            ))
        }
        
    </div>
  )
}

export default AttendanceSummarySection