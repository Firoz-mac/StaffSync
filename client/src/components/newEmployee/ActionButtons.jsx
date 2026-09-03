import React from 'react'
import Button from '../Button'
import { ArrowRight } from 'lucide-react';

const ActionButtons = ({
    handleSubmit,
    loading ,
}) => {
  return (
    <div className='flex justify-between py-6'>

        <Button
            variant='outline'
        >
            Close
        </Button>

        <Button 
            onClick={handleSubmit}
            disabled={loading}
        >
            <span>Add Employee</span>
            <ArrowRight size={18}/>
        </Button>

    </div>
  )
}

export default ActionButtons