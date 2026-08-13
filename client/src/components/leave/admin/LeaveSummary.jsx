import React from 'react'
import { 
    CalendarX,
    Hourglass,
    NotepadText,
} from 'lucide-react';
import SummaryCard from '../../dashboard/summaryCard/SummaryCard'
import SummaryCardSkeleton from '../../skeleton/SummaryCardSkeleton';

const LeaveSummary = () => {

    const leaveSummaryData = [
        {
            id: 1,
            title: "Leave Requests",
            value: 1185,
            icon: NotepadText,
            iconVariant: "success",
            tag: "Month",
        },
        {
            id: 2,
            title: "Pending",
            value: 60,
            icon: Hourglass,
            iconVariant: "danger",
            tag: "Daily",
        },
        {
            id: 3,
            title: "Today Leave",
            value: 12,
            icon: CalendarX,
            iconVariant: "amber",
        },
    ];

  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
        {
            leaveSummaryData.map((card)=>(
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

export default LeaveSummary