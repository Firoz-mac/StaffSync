import React from 'react'
import SummaryCard from './SummaryCard'
import { summaryCards } from '../../../constants/dashboard/summaryCards'
import SummaryCardSkeleton from '../../skeleton/SummaryCardSkeleton'
import ErrorState from '../../errorState/ErrorState'
import { useAuthStore } from '../../../store/authStore'

const SummaryCardSection = () => {

  const role = useAuthStore((state)=> state.user?.role);

  const summaryCardData = summaryCards[role] || [];

  return (
    <div className='grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 py-5'>
        {
          summaryCardData.map((card)=>(
            
            <SummaryCard 
                key={card.id} 
                {...card}
            />

            // <SummaryCardSkeleton/>

          ))
        }
    </div>
  )
}

export default SummaryCardSection