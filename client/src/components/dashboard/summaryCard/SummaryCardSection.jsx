import React from 'react'
import SummaryCard from './SummaryCard'
import { adminSummaryCards } from '../../../constants/dashboard/adminSummaryCards'
import SummaryCardSkeleton from '../../skeleton/SummaryCardSkeleton'
import ErrorState from '../../errorState/ErrorState'

const SummaryCardSection = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 py-5'>
        {adminSummaryCards.map((card)=>(
          
          <SummaryCard 
              key={card.id} 
              {...card}
          />

          // <SummaryCardSkeleton/>

        ))}
    </div>
  )
}

export default SummaryCardSection