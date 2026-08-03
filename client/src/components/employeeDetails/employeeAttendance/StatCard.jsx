import React from 'react'
import Card from '../../Card'

const StatCard = ({ 
    title, 
    value=0, 
    subtitle,
    titleColor = 'text-slate-400', 
    className='',
}) => {
  return (
    <Card className={`p-6 ${className}`}>

        <h4 
            className={`text-sm font-semibold tracking-wider 
            ${titleColor} uppercase`}
        >
            {title}
        </h4>

        <div className='flex items-end gap-2 mt-3'>

            <p 
                className='text-4xl font-semibold leading-none 
                text-slate-900 dark:text-slate-100'
            >
                {value}
            </p>
            {
                subtitle && (
                    <span 
                        className='text-sm font-medium text-slate-400 pb-1'
                    >
                        {subtitle}
                    </span>
                )
            }
            

        </div>

    </Card>
  )
}

export default StatCard