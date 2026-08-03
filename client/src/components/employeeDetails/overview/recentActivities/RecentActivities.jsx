import React from 'react'
import { ListFilter } from 'lucide-react';
import Card from '../../../Card'
import InfoCardHeader from '../infoCard/InfoCardHeader';
import ActivityItem from '../../../dashboard/admin/recentActivities/ActivityItem';
import Activity from './Activity';
import ErrorState from '../../../errorState/ErrorState';
import EmptyState from '../../../emptyState/EmptyState';
import TimelineSkeleton from '../../../skeleton/TimelineSkeleton';

const RecentActivities = ({ data }) => {

  const totalActivities = data.length;

  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Recent Activities'
      />

      <div className='mt-6'>

        {
          data.map((data, i)=>(

            <Activity
              key={data.id} 
              data={data}
              isLast={i === totalActivities - 1}
            />

          ))
        }

      </div>
    </Card>

    // <ErrorState
    //   title='Failed to load activities' 
    //   description='Recent activities are currently unavailable.'
    // />
    // <EmptyState
    //   icon={ListFilter} 
    //   title="No recent activities" 
    //   description="New activities will appear here."
    // />
    // <TimelineSkeleton/>

  )
}

export default RecentActivities