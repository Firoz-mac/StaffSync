import React, { useCallback, useState } from 'react'
import { Plus } from 'lucide-react';
import PageHeader from '../components/pageHeader/PageHeader'
import FilterBar from '../components/employees/filterBar/FilterBar';
import EmployeeList from '../components/employees/EmployeeList';

const pageSize = 10;

const Employees = () => {

  const [currentPage, setCurrentPage] = useState(1);
  

  const [filters, setFilters] = useState({
    search:"",
    department: "", 
    role: "", 
  });

  const handleFilterChange = useCallback((key, value) =>{
    setFilters((prev)=>({
      ...prev,
      [key]: value,
    }));

    setCurrentPage(1);
  },[]);
  
  return (
    <div className='p-6 space-y-3'>
      <PageHeader 
        title="Employees"
        description="Manage and view all members of the organization."
        buttonText="New Employee"
        buttonIcon={<Plus size={18} />}
      />

      <FilterBar 
        filters={filters} 
        onFilterChange={handleFilterChange}
      />
      
      <EmployeeList
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        filters={filters}
      />
    </div>
  )
}

export default Employees