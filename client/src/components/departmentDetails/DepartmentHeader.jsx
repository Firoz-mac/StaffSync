import React, { useState } from 'react'
import Avatar from '../Avatar'
import Dropdown from '../dropdown/Dropdown'
import Button from '../Button'
import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react'
import DropdownItem from '../dropdown/DropdownItem'
import EditDepartmentModal from './EditDepartmentModal'

const DepartmentHeader = ({
    department = 'Engineering',
    departmentCode = 'ENG-04',
    departmentHead = 'Mac',
}) => {

    const [open, setOpen] = useState(false);

  return (
    <div className='flex justify-between'>

        <div  className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10'>

            <div>
                <h3 className='text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                    {department}
                </h3>

                <span className='text-sm text-slate-500 dark:text-slate-400'>
                    Department Code : {departmentCode}
                </span>
            </div>

            <div className='flex items-center gap-3'>
                <Avatar 
                    name='Mac'
                    size='w-10 h-10'
                />

                <div className='flex flex-col'>
                    <p className='text-md font-medium text-slate-900 dark:text-slate-100'>
                        {departmentHead}
                    </p>
                    
                    <span className='text-xs leading-3 text-slate-500 dark:text-slate-400'>Department Head</span>
                </div>
            </div>

        </div>

        <Dropdown 
            trigger={
                <Button 
                    variant='ghost'
                >
                    <EllipsisVertical size={18} />
                </Button>
            }
        >
            <DropdownItem 
                icon={<Pencil />}
                onClick={()=>setOpen(true)}
            > 
                Edit
            </DropdownItem>

            <DropdownItem
                icon={<Trash2 />} 
                variant="danger"
            >
                Remove
            </DropdownItem>
        </Dropdown>

        <EditDepartmentModal 
            open={open} 
            onClose={()=>setOpen(false)}
        />

    </div>
  )
}

export default DepartmentHeader