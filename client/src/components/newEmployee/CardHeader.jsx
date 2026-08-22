import React from 'react'

const CardHeader = ({
    title,
    subTitle,
    icon,
}) => {

    const Icon = icon;

  return (
    <div className='flex items-start gap-3'>

        <div 
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 
            text-violet-600 dark:bg-violet-900/20 dark:text-violet-400'
        >
            <Icon 
                size={22} 
                strokeWidth={1.8}
            />
        </div>

        <div>
            <h4 className='text-base font-semibold text-slate-900 dark:text-slate-100'>
                {title}
            </h4>
            <p className='text-xs text-slate-500 dark:text-slate-400'>
                {subTitle}
            </p>
        </div>

    </div>
  )
}

export default CardHeader