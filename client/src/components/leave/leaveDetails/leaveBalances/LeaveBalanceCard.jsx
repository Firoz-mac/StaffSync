import React from 'react'
import Card from '../../../Card'
import ProgressBar from '../../../ProgressBar'

const LeaveBalanceCard = ({
    leaveType='casual',
    remaining=6,
    used=4,
    total=10,
}) => {

    const barVariants = {
        sick:'#B91C1C',
        vacation:'#1D4ED8',
        casual:'#B45309',
    };

    const leaveTypeKey = leaveType
        .toLowerCase()
        .split(' ')[0];

    const percentage = total > 0 
        ? (used/total)*100 
        : 0;

    const barColor = barVariants[leaveTypeKey] ?? '#2563eb';

  return (
    <Card className='p-5'>

        <div className='flex items-center justify-between gap-3'>
            <h6 className='text-base font-medium text-slate-800 dark:text-slate-200'>
                {leaveType}
            </h6>

            <div className='flex items-baseline gap-1'>
                <span className='text-2xl font-bold text-slate-950 dark:text-white'>
                    {remaining}
                </span>

                <span className='text-sm text-slate-500 dark:text-slate-400'>
                    Left
                </span>
            </div>
   
        </div>

        <ProgressBar 
            showPercentage={false} 
            percentage={percentage}
            barColor={barColor}
        />

        <p className='mt-3 text-sm text-slate-500 dark:text-slate-400'>
            {used} of {total} days used this year
        </p>

        

    </Card>
  )
}

export default LeaveBalanceCard