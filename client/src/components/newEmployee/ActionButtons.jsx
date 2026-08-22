import React from 'react'
import Button from '../Button'
import { ArrowRight } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className='flex justify-between py-6'>

        <Button
            variant='outline'
        >
            Close
        </Button>

        <Button>
            <span>Add Employee</span>
            <ArrowRight size={18}/>
        </Button>

    </div>
  )
}

export default ActionButtons