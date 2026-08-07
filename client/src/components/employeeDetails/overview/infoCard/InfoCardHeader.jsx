import React from 'react'
import { User } from 'lucide-react';

const InfoCardHeader = ({
    title,
    icon,
    action,
}) => {
    
    const Icon = icon;

  return (
    <div className='flex items-center mb-5 justify-between'>
        <div className='flex items-center gap-2'>
            {
                icon && (
                    <Icon 
                        size={18} 
                        className="text-blue-600 dark:text-blue-400"
                    />
                )
            }
            
            <h5 className='text-md font-medium text-slate-900 dark:text-slate-100'>
                {title}
            </h5>
        </div>

        {
            action && (
                <div className="shrink-0">
                    {action}
                </div>
            )
        }

        
    </div>
  )
}

export default InfoCardHeader