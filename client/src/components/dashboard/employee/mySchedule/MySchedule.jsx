import React from 'react'
import Card from '../../../Card'
import ScheduleItem from './ScheduleItem'
import { isUpcomingDate } from '../../../../utils/formatDate';
import EmptyState from '../../../emptyState/EmptyState';
import ErrorState from '../../../errorState/ErrorState';
import ListSkeleton from '../../../skeleton/ListSkeleton';

const MySchedule = () => {

    const scheduleData = [
        {
            id: 1,
            title: "Product Sync - Mobile App v2",
            date: "2026-08-02",
            time: "10:30 AM - 11:30 AM",
        },
        {
            id: 2,
            title: "Bi-Weekly Engineering All-Hands",
            date: "2026-08-03",
            time: "02:00 PM - 03:00 PM",
        },
    ];

    const filteredScheduleData = scheduleData.filter((schedule)=>
        isUpcomingDate(schedule.date, 10)
    );

  return (
    <Card>
        
        <div className='border-b border-slate-200 dark:border-slate-700 p-4 lg:p-6'>
            <h4 
                className='text-lg font-semibold tracking-wide 
                text-slate-900 dark:text-slate-100'
            >
                My Schedule
            </h4>
        </div>

        <div className='space-y-4 p-4 lg:p-6'>

            {
                filteredScheduleData.map((schedule)=>(
                    <ScheduleItem 
                        key={schedule.id} 
                        data={schedule}
                    />
                ))
            }

        </div>

    </Card>

    // <EmptyState
    //     title='No upcoming schedules'
    //     description='There are no upcoming schedules in 10 days.'
    // />
    // <ErrorState 
    //     title='Failed to load schedules' 
    //     description='Upcoming schedules and events couldnt be loaded.'
    // />
    // <ListSkeleton/>
  )
}

export default MySchedule