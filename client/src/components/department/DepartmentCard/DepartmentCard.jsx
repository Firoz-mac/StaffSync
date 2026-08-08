import React from 'react'
import Card from '../../Card'
import Avatar from '../../Avatar'
import Button from '../../Button'

const DepartmentCard = () => {
  return (
    <Card className='p-6 cursor-pointer'>

      <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
        Engineering
      </h3>

      <div>
        <span className='text-sm text-slate-500 dark:text-slate-400'>Department Head</span>

        <div className='mt-3 flex items-center gap-3'>

          <Avatar 
            name='mac' 
            size='w-10 h-10'
          />

          <p className='min-w-0 wrap-break-word text-md font-medium text-slate-900 dark:text-slate-100'>
            Mac
          </p>

        </div>
      </div>

      <Button variant='secondary' className='w-full mt-4'>View Details</Button>

    </Card>
  )
}

export default DepartmentCard