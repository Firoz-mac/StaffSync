import React from 'react'

const ProgressBar = ({leave}) => {
  
  return (
    <div>
        <div className='mb-3 flex items-center justify-between'>
            <span className="text-base font-medium text-slate-900">
              {leave.type}
            </span>
            <span className="text-base font-semibold text-slate-900">
              {leave.percentage}%
            </span>
        </div>
        
        {/* Bar */}
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div 
              className='h-full rounded-full transition-all duration-700 ease-out' 
              style={{ 
                width: `${leave.percentage}%`, 
                backgroundColor: leave.color
              }}
            />
        </div>

    </div>
  )
}

export default ProgressBar