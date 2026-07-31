import React from 'react'
import { Plus } from 'lucide-react';
import PageHeader from '../components/pageHeader/PageHeader'
import FilterBar from '../components/employees/filterBar/FilterBar';

const Employees = () => {
  return (
    <div className='p-6 space-y-3'>
      <PageHeader 
        title="Employees"
        description="Manage and view all members of the organization."
        buttonText="New Employee"
        buttonIcon={<Plus size={18} />}
      />

      <FilterBar/>
      
    </div>
  )
}

export default Employees