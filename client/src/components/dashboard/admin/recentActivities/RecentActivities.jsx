import React from 'react'
import { Activity } from "lucide-react";
import ActivityItem from './ActivityItem'
import TimelineSkeleton from '../../../skeleton/TimelineSkeleton';
import EmptyState from '../../../emptyState/EmptyState';
import ErrorState from '../../../errorState/ErrorState';
import Card from '../../../Card';

const RecentActivities = () => {

  const recentActivitiesData = [
    {
      id: 1,
      title: "New payroll cycle initiated",
      description: "Finance Team",
      time: "10:45 AM",
      date: "2026-07-29",
      type: "payroll",
    },
    {
      id: 2,
      title: "Policy document updated",
      description: "HR Dept",
      time: "09:30 AM",
      date: "2026-07-29",
      type: "document",
    },
    {
      id: 3,
      title: "Server maintenance alert",
      description: "IT Support",
      time: "Yesterday",
      date: "2026-07-28",
      type: "alert",
    },
    {
      id: 4,
      title: "Q3 Anniversary event",
      description: "Admin",
      time: "2 days ago",
      date: "2026-07-27",
      type: "event",
    },
  ];


  return (
    <Card className="p-4 lg:p-6">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Activities</h4>


      <div className='mt-6'>

        {
          recentActivitiesData.map((data, i)=> (
            <ActivityItem 
              key={data.id} 
              data={data}
              isLast={i === recentActivitiesData.length - 1}
            />
          ))
        }
        
      </div>
    </Card>
    // <EmptyState 
    //   icon={Activity}
    //   title="No recent activities"
    //   description="New activities will appear here."
    // />
    // <ErrorState 
    //   title='Failed to load activities' 
    //   description='Recent activities are currently unavailable.'
    // />
    // <TimelineSkeleton/>
  )
}

export default RecentActivities