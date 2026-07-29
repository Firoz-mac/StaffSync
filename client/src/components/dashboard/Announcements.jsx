import React from 'react'
import { Megaphone } from "lucide-react";
import { formatDateAndMonth, isToday } from '../../utils/formatDate';
import ListSkeleton from '../skeleton/ListSkeleton';
import EmptyState from '../emptyState/EmptyState';
import ErrorState from '../errorState/ErrorState';
import Card from '../Card';

const Announcements = () => {

    const announcementsData = [
        {
            id: 1,
            department: "Developer",
            message: "The annual company retreat has been scheduled for December 15–18. Check your inbox for details!",
            date: "2026-07-29",
            time: "12:56 AM",
        },
        {
            id: 2,
            department: "HR",
            message: "Annual performance reviews will begin next Monday.",
            date: "2026-07-28",
            time: "09:15 AM",
        },
    ];

    const latestAnnouncements = [...announcementsData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);

  return (
    <Card
        withDefaultBackground={false}
        withDefaultBorder={false} 
        className='relative overflow-hidden p-4 lg:p-6 
        bg-blue-600 dark:border-blue-700 border-blue-600 dark:bg-blue-950'
    >

        <Megaphone 
            className="absolute -bottom-8 -right-8 h-40 w-40 rotate-20 text-blue-500/20"
            aria-hidden="true"
        />
        
        <h4 className='text-xl font-medium text-white'>Announcements</h4>

        <div className='divide-y divide-blue-300/30 relative z-10'>

            {
                latestAnnouncements
                    .map((announcement)=>{

                        const { id, department, message, date, time, } = announcement;

                        const { month, day } = formatDateAndMonth(date);

                        return (

                            <div 
                                key={id} 
                                className='text-blue-100 py-4'
                            >

                                <span 
                                    className='inline-flex rounded-full bg-white/90 px-3 py-1 
                                    text-xs font-medium text-blue-700'
                                >
                                    {department}
                                </span>

                                <p className='mt-2 text-base leading-7 text-blue-100'>
                                    {message}
                                </p>

                                <time 
                                    className='text-sm text-blue-200'
                                    dateTime={date}
                                >
                                    {
                                        isToday(date)
                                            ? `Today • ${time}`
                                            : `${month} ${day} • ${time}`
                                    }

                                </time>

                            </div>

                        )

                    })

            }
            
        </div>

        
        <button 
            type='button'
            aria-label='Read More' 
            className="mt-8 rounded-lg bg-white px-5 py-2.5 text-sm font-medium 
            text-blue-700 transition-all duration-200 hover:scale-105 hover:bg-blue-50 
            dark:hover:bg-slate-100 hover:shadow-lg cursor-pointer z-10"
        >
            Read More
        </button>

    </Card>
    // <EmptyState 
    //     icon={Megaphone}
    //     title="No announcements"
    //     description="There are no announcements at the moment."
    // />
    // <ErrorState 
    //     title='Failed to load announcements' 
    //     description='We couldnt retrieve the latest announcements.'
    // />
    // <ListSkeleton/>
  )
}

export default Announcements