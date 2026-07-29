import React from 'react'
import ProgressBar from './ProgressBar'
import { leaveStatisticsData } from '../../../../constants/dashboard/leaveStatisticsData'
import { leaveStatisticsBarPercentage } from '../../../../utils/chartUtils'
import ListSkeleton from '../../../skeleton/ListSkeleton'
import EmptyState from '../../../emptyState/EmptyState'
import ErrorState from '../../../errorState/ErrorState'
import Card from '../../../Card'

const LeaveStatistics = () => {

  const progressBarData = leaveStatisticsBarPercentage(leaveStatisticsData);

  return (
    <Card className='p-4 lg:p-6'>
  
      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Leave Statistics</h4>

      <div className="mt-6 space-y-8">
        {
          progressBarData.map((leave)=>(
            <ProgressBar 
              key={leave.type} 
              leave={leave}
            />
          ))
        }
      </div>

    </Card>
    // <EmptyState 
    //   title='No leave data' 
    //   description='Leave statistics will be shown here.'
    // />
    // <ErrorState 
    //   title='Failed to load leave statistics' 
    //   description='Leave data is currently unavailable.'
    // />
    // <ListSkeleton/>
  )
}

export default LeaveStatistics