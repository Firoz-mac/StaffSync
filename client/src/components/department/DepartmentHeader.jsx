import React from 'react'
import { Plus } from 'lucide-react';
import Button from '../Button'

const DepartmentHeader = () => {
  return (
    <div className='flex justify-between items-center py-3'>
        <h6 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>Directory</h6>
        <Button 
            className='flex items-center gap-2'
        >
            <Plus size={18}/>

            <span className='flex gap-1'>
                New 
                <span className='hidden lg:block'>Department</span>
            </span>
            
        </Button>
    </div>
  )
}

export default DepartmentHeader