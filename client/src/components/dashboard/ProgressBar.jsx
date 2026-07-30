import React from 'react'

const ProgressBar = ({

  type = "", 
  percentage = 0,
  textClass= "text-slate-900 dark:text-slate-100",
  barColor = "#2563eb",
  barBgColor = "bg-slate-100 dark:bg-blue-900",
  showPercentage = true,
  className = "",

}) => {

  const progress = Math.max(0, Math.min(Math.round(percentage), 100));
  
  return (
    <div className={className}>

      {
        (type || showPercentage) && (
          <div className={`mb-3 flex items-center justify-between ${textClass}`}>

            {type && (
              <span className="text-base font-medium ">
                {type}
              </span>
              )
            }

            {
              showPercentage && (
                <span className="text-base font-semibold">
                  {progress}%
                </span>
              )
            }

          </div>
        )
      }
        
        {/* Bar */}
        <div 
          className={`h-3 overflow-hidden rounded-full ${barBgColor}`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-valuetext={`${progress}% complete`}
          aria-label={type || "Progress"}
        >
            <div 
              className='h-full rounded-full transition-all duration-700 ease-out' 
              style={{ 
                width: `${progress}%`, 
                backgroundColor: barColor
              }}
            />
        </div>

    </div>
  )
}

export default ProgressBar