import React from 'react'
import { Landmark, UsersRound, ClipboardClock } from 'lucide-react';
import SummaryCard from '../../dashboard/summaryCard/SummaryCard';

const summaryCardData = [
    {
        id: 1,
        title: "Total Payroll",
        value: "450k",
        icon: Landmark,
        iconVariant: "blue",
        trendValue: "2.4%",
        trendDirection: "positive"
    },
    {
        id: 2,
        title: "Employees Paid",
        value: "450k",
        icon: UsersRound,
        iconVariant: "success",
    },
    {
        id: 3,
        title: "Pending",
        value: "450k",
        icon: ClipboardClock,
        iconVariant: "amber",
    },
];

const SummaryCardScetion = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 py-5'>
        {
            summaryCardData.map((card)=>(
                <SummaryCard 
                    key={card.id}
                    {...card}
                />
            ))
        }
        
    </div>
  )
}

export default SummaryCardScetion