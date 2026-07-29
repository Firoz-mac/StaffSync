import React from 'react'
import HolidayCard from './HolidayCard'
import { Calendar, ChevronRight } from "lucide-react";
import { isUpcomingDate } from '../../../utils/formatDate';
import ListSkeleton from '../../skeleton/ListSkeleton';
import EmptyState from '../../emptyState/EmptyState';
import ErrorState from '../../errorState/ErrorState';

const HolidaysAndEvents = () => {

  const holidaysAndEventsData = [
    {
      id: 1,
      title: "Diwali Festival",
      tag: "Public Holiday",
      date: "2026-07-30",
    },
    {
      id: 2,
      title: "Quarterly Town Hall",
      tag: "Main Cafeteria",
      date: "2026-08-10",
      location: true,
    },
    {
      id: 3,
      title: "Christmas Day",
      tag: "Global Holiday",
      date: "2026-08-13",
    },
  ];

  const filterdholidaysAndEventsData = holidaysAndEventsData.filter((data)=>
    isUpcomingDate(data.date, 15)
  )

  return (
    <div className='rounded-xl border border-slate-200 bg-white shadow-sm'>

      <div className='border-b border-slate-200 p-4 lg:p-6'>
        <h4 className="text-lg font-semibold tracking-wide text-slate-900">Holidays & Events</h4>
      </div>

      <div className='space-y-4 p-4 lg:p-6'>

        {
          filterdholidaysAndEventsData.map((data)=>(
            <HolidayCard 
              key={data.id} 
              data={data}
            />
          ))
        }
        
      </div>

      <div className='group flex items-center justify-center border-t border-slate-200 bg-blue-50 p-4 lg:p-6'>
        <button 
          type='button'
          aria-label='Open Calendar' 
          className='flex items-center gap-1 text-blue-600 transition-colors 
          hover:text-blue-500 cursor-pointer'
        >
          Full Calendar
          <ChevronRight 
            size={18} 
            className='transform transition-transform duration-200 
            ease-in-out group-hover:translate-x-1' 
          />

        </button>
      </div>

    </div>
    // <EmptyState 
    //   icon={Calendar} 
    //   title='No upcoming events or holidays' 
    //   description='There are no upcoming events or holidays at the moment.'
    // />
    // <ErrorState 
    //   title='Failed to load holidays' 
    //   description='Upcoming holidays and events couldnt be loaded.'
    // />
    // <ListSkeleton/>
  )
}

export default HolidaysAndEvents