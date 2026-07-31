import React from 'react'
import { Plus } from 'lucide-react';
import PageHeader from '../components/pageHeader/PageHeader'

const Employees = () => {
  return (
    <div className='p-6'>
      <PageHeader 
        title="Employees"
        description="Manage and view all members of the organization."
        buttonText="New Employee"
        buttonIcon={<Plus size={18} />}
      />
    </div>
  )
}

export default Employees