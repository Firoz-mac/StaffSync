import React, { useState } from 'react'
import { Search } from 'lucide-react';
import SearchBar from '../../SearchBar/SearchBar'
import Select from '../../Select';

const FilterBar = ({filters, onFilterChange}) => {

    const departments = [
        { value: "Engineering", label: "Engineering" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "Finance", label: "Finance" },
    ];

    const roles = [
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Senior Software Engineer", label: "Senior Software Engineer" },
        { value: "Team Lead", label: "Team Lead" },
        { value: "Engineering Manager", label: "Engineering Manager" },
        { value: "HR Executive", label: "HR Executive" },
        { value: "HR Manager", label: "HR Manager" },
        { value: "Product Manager", label: "Product Manager" },
        { value: "UI/UX Designer", label: "UI/UX Designer" },
        { value: "QA Engineer", label: "QA Engineer" },
        { value: "DevOps Engineer", label: "DevOps Engineer" },
        { value: "Business Analyst", label: "Business Analyst" },
        { value: "Finance Manager", label: "Finance Manager" },
        { value: "Marketing Specialist", label: "Marketing Specialist" },
        { value: "Sales Executive", label: "Sales Executive" },
        { value: "Intern", label: "Intern" },  
    ];

  return (
    <div className="flex flex-col gap-3 lg:flex-row">

        <SearchBar 
            type="search"
            value={filters.search} 
            placeholder="Search by name, ID..."
            icon={<Search size={18}/>}
            inputClassName="pl-10"
            className="flex-1"
            onChange={(e) => onFilterChange("search", e.target.value)}
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>

            <Select 
                placeholder="Department" 
                options={departments}
                value={filters.department}
                onChange={(e) => onFilterChange("department", e.target.value)}
            />

            <Select 
                placeholder="Role" 
                options={roles}
                value={filters.role}
                onChange={(e) => onFilterChange("role", e.target.value)}
            />

        </div>

    </div>
  )
}

export default FilterBar