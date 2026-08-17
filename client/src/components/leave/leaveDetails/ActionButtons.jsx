import React from 'react'
import Button from '../../Button'

const ActionButtons = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-3 p-6 border-t border-slate-200 dark:border-slate-700'>

        <Button 
            variant='secondary' 
            className='w-full'
        >
            Reject
        </Button>

        <Button 
            variant='primary' 
            className='w-full'
        >
            Accept
        </Button>

    </div>
  )
}

export default ActionButtons