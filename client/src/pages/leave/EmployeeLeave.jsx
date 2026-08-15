import React, { useState } from 'react'
import FilterTabMenu from '../../components/FilterTabMenu'
import { leaveTabs } from '../../constants/leaveTabs'
import Button from '../../components/Button';
import { Plus } from 'lucide-react';
import LeaveRequestsTable from '../../components/leave/leaveRequestsTable/LeaveRequestsTable';
import { useNavigate } from 'react-router-dom';

const EmployeeLeave = () => {

  const naviagate = useNavigate()

  const tabs = leaveTabs;
  const [filter, setFilter] = useState('all');

  const empId = 'EMP-01';

  return (
    <div className='p-6 space-y-4'>

      <div className='flex flex-col-reverse lg:flex-row gap-3'>
        <FilterTabMenu 
          tabs={tabs} 
          value={filter} 
          onChange={setFilter}
        />

        <Button 
          onClick={()=>naviagate(`/leave/newRequest/${empId}`)}
        >

          <Plus size={18}/>
          <p>
            <span className='lg:hidden'>Create </span>
            Request
          </p>

        </Button>

      </div>

      <LeaveRequestsTable filter={filter}/>

    </div>
  )
}

export default EmployeeLeave