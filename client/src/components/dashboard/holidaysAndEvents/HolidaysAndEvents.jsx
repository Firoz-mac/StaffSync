import React from 'react'
import HolidayCard from './HolidayCard'
import { ChevronRight } from "lucide-react";
import { isUpcomingDate } from '../../../utils/formatDate';
import ListSkeleton from '../../skeleton/ListSkeleton';
import EmptyState from '../../emptyState/EmptyState';
import ErrorState from '../../errorState/ErrorState';
import Card from '../../Card';

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

  const filteredHolidaysAndEventsData = holidaysAndEventsData.filter((event)=>
    isUpcomingDate(event.date, 15)
  );

  return (
    <Card>

      <div className='border-b border-slate-200 dark:border-slate-700 p-4 lg:p-6'>
        <h4 
          className="text-lg font-semibold tracking-wide 
          text-slate-900 dark:text-slate-100"
        >
          Holidays & Events
        </h4>
      </div>

      <div className='space-y-4 p-4 lg:p-6'>

        {
          filteredHolidaysAndEventsData.map((event)=>(
            <HolidayCard 
              key={event.id} 
              data={event}
            />
          ))
        }
        
      </div>

      <div 
        className='group flex items-center justify-center border-t border-slate-200 
        dark:border-slate-700 bg-blue-50 dark:bg-slate-900/50 p-4 lg:p-6'
      >
        <button 
          type='button'
          aria-label='Open Calendar' 
          className='flex items-center gap-1 text-blue-600 dark:text-blue-400 
          transition-colors hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer'
        >
          Full Calendar
          <ChevronRight 
            size={18}
            aria-hidden="true" 
            className='transform transition-transform duration-200 
            ease-in-out group-hover:translate-x-1' 
          />

        </button>
      </div>

    </Card>
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