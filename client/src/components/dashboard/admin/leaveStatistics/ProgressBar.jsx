import React from 'react'

const ProgressBar = ({leave}) => {

  const { 
    type="", 
    percentage=0, 
    color = "#2563eb", 
  } = leave;

  const progress = Math.max(0, Math.min(percentage, 100));
  
  return (
    <div>
        <div className='mb-3 flex items-center justify-between'>
            <span className="text-base font-medium text-slate-900 dark:text-slate-100">
              {type}
            </span>
            <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {progress}%
            </span>
        </div>
        
        {/* Bar */}
        <div 
          className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label={type}
        >
            <div 
              className='h-full rounded-full transition-all duration-700 ease-out' 
              style={{ 
                width: `${progress}%`, 
                backgroundColor: color
              }}
            />
        </div>

    </div>
  )
}

export default ProgressBar