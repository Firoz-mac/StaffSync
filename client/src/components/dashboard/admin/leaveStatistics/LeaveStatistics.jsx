import React from 'react'
import ProgressBar from './ProgressBar'
import { leaveStatisticsData } from '../../../../constants/dashboard/leaveStatisticsData'
import { leaveStatisticsBarPercentage } from '../../../../utils/chartUtils'
import ListSkeleton from '../../../skeleton/ListSkeleton'
import EmptyState from '../../../emptyState/EmptyState'
import ErrorState from '../../../errorState/ErrorState'

const LeaveStatistics = () => {

  const progressBarData = leaveStatisticsBarPercentage(leaveStatisticsData);

  return (
    <div className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-6'>
      <h4 className="text-lg font-semibold text-slate-900">Leave Statistics</h4>

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
    </div>
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