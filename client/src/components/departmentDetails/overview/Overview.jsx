import React from 'react'
import Description from './Description'
import Card from '../../Card'

const Overview = () => {
  return (
    <div className='space-y-3'>
        <Card className='p-6'>

          <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>Employees</p>

          <div className='mt-3 flex items-end gap-2'>
            <span className='text-4xl font-semibold text-slate-900 dark:text-slate-100'>142</span>
            <span className='pb-1 text-sm text-slate-500 dark:text-slate-400'>Employees</span>
          </div>

        </Card>

        <Description/>
    </div>
  )
}

export default Overview