import React from 'react'
import { Building2 } from 'lucide-react'
import Card from '../Card'

const TotalDepartments = () => {
  return (
    <Card 
        className='relative overflow-hidden p-6 
        bg-blue-600 dark:border-blue-700 border-blue-600 dark:bg-blue-950' 
        withDefaultBackground={false}
        withDefaultBorder={false}
    >
        <div className='relative z-10'>

            <p className='text-sm font-semibold uppercase tracking-wider text-blue-100'>Total Departments</p>

            <div className='mt-4 flex items-end gap-3 text-white'>
                <h2 className='text-4xl font-bold leading-none tracking-tight'>
                    0 Active
                </h2>
            </div>

        </div>

        <Building2 
            className='absolute -bottom-6 -right-2 h-36 w-36 text-blue-400/70' 
            strokeWidth={1.5}
        />

    </Card>
  )
}

export default TotalDepartments