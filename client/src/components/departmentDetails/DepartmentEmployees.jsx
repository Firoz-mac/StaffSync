import React, { useCallback, useState } from 'react'
import EmployeeList from '../employees/EmployeeList'
import FilterBar from '../employees/filterBar/FilterBar';

const DepartmentEmployees = () => {

    const pageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [filters, setFilters] = useState({
        search:"",
        role: "", 
    });

    const handleFilterChange = useCallback((key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));

        setCurrentPage(1);
    }, []);

  return (

    <div className='space-y-3'>

        <FilterBar 
            filters={filters}
            department={false} 
            onFilterChange={handleFilterChange}
        />

        <EmployeeList 
            pageSize={pageSize} 
            currentPage={currentPage} 
            filters={filters}
        />

    </div>
  )
}

export default DepartmentEmployees