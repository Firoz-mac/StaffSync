import React from 'react'
import { EllipsisVertical } from 'lucide-react';
import EmployeeBasicInfo from './EmployeeBasicInfo'
import Avatar from '../../Avatar'
import Button from '../../Button';
import Dropdown from '../../dropdown/Dropdown';
import DropdownItem from '../../dropdown/DropdownItem';

const EmployeeProfileHeader = () => {
  return (
    <div className='relative'>

        <div className='flex lg:items-center'>

            <div className='flex-1 flex flex-col items-center gap-5 lg:flex-row'>

                <Avatar
                    name='Mac'
                    size='w-28 h-28'
                />

                <EmployeeBasicInfo 
                    name='mac' 
                    role='Developer' 
                    department='Engineering'
                />

            </div>   

        </div>

        <div className='absolute top-0 right-0'>

            <Dropdown
                    trigger={
                        <Button
                            variant='ghost' 
                        >
                            <EllipsisVertical size={18} />
                        </Button>
                    }
                >
                    <DropdownItem>Copy Id</DropdownItem>
                    <DropdownItem 
                        variant="danger"
                    >
                        Delete Employee
                    </DropdownItem>

            </Dropdown>
        </div>

    </div>
  )
}

export default EmployeeProfileHeader