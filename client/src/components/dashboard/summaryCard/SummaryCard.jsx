import React from 'react'
import { TrendingUp, TrendingDown } from "lucide-react";
import ErrorState from '../../errorState/ErrorState';
import Card from '../../Card';

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
    blue: "lg:bg-sky-100 text-sky-600 dark:lg:bg-sky-900/30 dark:text-sky-400",
    danger: "lg:bg-red-100 text-red-600 dark:lg:bg-red-900/30 dark:text-red-400",
    success: "lg:bg-emerald-100 text-emerald-600 dark:lg:bg-emerald-900/30 dark:text-emerald-400",
    amber: "lg:bg-amber-100 text-amber-600 dark:lg:bg-amber-900/30 dark:text-amber-400",
  }

  return (
    <Card className='h-full p-3 lg:p-6'>

      <div className='flex gap-2 lg:block'>

        <div className='flex items-center justify-between'>

          <div 
            className={`flex h-5 w-5 lg:h-12 lg:w-12 items-center justify-center rounded-lg 
              ${iconVariants[iconVariant] ?? iconVariants.blue}
            `}
          >
            <Icon 
              aria-hidden="true" 
              className="h-5 w-5 lg:h-6 lg:w-6"
            />
          </div>


          <div className="hidden lg:flex items-center">
            {
              trendValue !== null && trendValue !== undefined 
              ? (
                  <div 
                    className={`flex items-center gap-1 text-sm font-medium 
                      ${
                        trendDirection === "positive"
                          ?"text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      }
                    `}
                  >
                    {TrendIcon && <TrendIcon size={16}/>}
                    {trendValue}
                  </div>
                ) 
              : 
              tag 
              ? (
                  <div 
                    className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 
                    text-xs font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </div>
                )
              : null
            }

          </div>

        </div>

        <p className="lg:mt-4 text-sm text-slate-500 dark:text-slate-400">
          {title}
        </p>

      </div>
          
      <h2 className="mt-2 lg:mt-0 text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-slate-100">
        {value}
      </h2>

    </Card>
    // <ErrorState 
    //   title='Failed to load summary' 
    //   description='Employee statistics are currently unavailable. Please try again.'
    // />
  )
}

export default SummaryCard