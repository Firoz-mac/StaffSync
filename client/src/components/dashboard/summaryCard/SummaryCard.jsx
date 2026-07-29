import React from 'react'
import { UsersRound, TrendingUp, TrendingDown } from "lucide-react";
import ErrorState from '../../errorState/ErrorState';

const SummaryCard = ({
  title,
  icon: Icon,
  value,
  tag = null,
  trendValue = null,
  trendDirection = null,
  iconVariant = "blue",
}) => {

  const TrendIcon = 
    trendDirection  
      ? trendDirection === "positive" 
        ? TrendingUp 
        : TrendingDown 
      : null

  const iconVariants = {
    blue: "lg:bg-sky-100 text-sky-600",
    danger: "lg:bg-red-100 text-red-600",
    success: "lg:bg-emerald-100 text-emerald-600",
    amber: "lg:bg-amber-100 text-amber-600",
  }

  return (
    <div 
      className='flex h-full flex-col rounded-md lg:rounded-xl 
      border border-slate-200 bg-white p-3 lg:p-6 shadow-sm cursor-pointer'
    >

      <div className='flex gap-2 lg:block'>

        <div className='flex items-center justify-between'>

          <div 
            className={`flex h-5 w-5 lg:h-12 lg:w-12 items-center justify-center rounded-lg 
              ${iconVariants[iconVariant]}
            `}
          >
            <Icon 
              aria-hidden="true" 
              className="h-5 w-5 lg:h-6 lg:w-6"
            />
          </div>


          <div className="hidden lg:flex items-center">
            {
              trendValue 
              ? (
                  <div 
                    className={`flex items-center gap-1 text-sm font-medium 
                      ${
                        trendDirection === "positive"
                          ?"text-emerald-600"
                          : "text-red-600"
                      }
                    `}
                  >
                    <TrendIcon size={16}/>
                    {trendValue}
                  </div>
                ) 
              : 
              tag 
              ? (
                  <div 
                    className="rounded-full bg-slate-100 px-3 py-1 
                    text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </div>
                )
              : null
            }

          </div>

        </div>

        <p className="lg:mt-4 text-sm text-slate-500">
          {title}
        </p>

      </div>
          
      <h2 className="mt-2 lg:mt-0 text-2xl lg:text-3xl font-semibold text-slate-900">
        {value}
      </h2>

    </div>
    // <ErrorState 
    //   title='Failed to load summary' 
    //   description='Employee statistics are currently unavailable. Please try again.'
    // />
  )
}

export default SummaryCard