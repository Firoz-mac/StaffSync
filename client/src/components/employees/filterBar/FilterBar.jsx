import React, { useState } from 'react'
import { Search } from 'lucide-react';
import SearchBar from '../../SearchBar/SearchBar'
import Select from '../../Select';

const FilterBar = () => {

    const [filters, setFilters] = useState({
        department: "",
        role: "",
    });

    const departments = [
        { value: "engineering", label: "Engineering" },
        { value: "hr", label: "Human Resources" },
        { value: "finance", label: "Finance" },
    ];

    const roles = [
        { value: "software_engineer", label: "Software Engineer" },
        { value: "senior_software_engineer", label: "Senior Software Engineer" },
        { value: "team_lead", label: "Team Lead" },
        { value: "engineering_manager", label: "Engineering Manager" },
        { value: "hr_executive", label: "HR Executive" },
        { value: "hr_manager", label: "HR Manager" },
        { value: "product_manager", label: "Product Manager" },
        { value: "ui_ux_designer", label: "UI/UX Designer" },
        { value: "qa_engineer", label: "QA Engineer" },
        { value: "devops_engineer", label: "DevOps Engineer" },
        { value: "business_analyst", label: "Business Analyst" },
        { value: "finance_manager", label: "Finance Manager" },
        { value: "marketing_specialist", label: "Marketing Specialist" },
        { value: "sales_executive", label: "Sales Executive" },
        { value: "intern", label: "Intern" },  
    ];

  return (
    <div className="flex flex-col gap-3 lg:flex-row">

        <SearchBar 
            type="search" 
            placeholder="Search by name, ID..."
            icon={<Search size={18}/>}
            inputClassName="pl-10"
            className="flex-1"
        />

        <div className='grid grid-cols-2 gap-3'>

            <Select 
                placeholder="Department" 
                options={departments}
                onChange={(e) => setFilters((prev)=> ({
                    ...prev,
                    department: e.target.value,
                }))}
            />

            <Select 
                placeholder="Role" 
                options={roles}
                onChange={(e) => setFilters((prev)=> ({
                    ...prev,
                    role: e.target.value,
                }))}
            />

        </div>

    </div>
  )
}

export default FilterBar