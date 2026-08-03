import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Pagination from '../pagination/Pagination'
import EmployeeCard from './employeeCard/EmployeeCard'
import { filterEmployees } from '../../utils/employeeUtils'
import { paginate } from '../../utils/paginationUtils'
import EmptyState from '../emptyState/EmptyState'
import ErrorState from '../errorState/ErrorState'
import ListSkeleton from '../skeleton/ListSkeleton'
import EmployeeCardSkeleton from '../skeleton/EmployeeCardSkeleton'

const EmployeeList = ({
    filters, 
    currentPage, 
    onPageChange, 
    pageSize,
}) => {

    const employees = [
        {
            id: 1,
            name: "Sarah Jenkins",
            avatar:"",
            empId: "EMP-2024-001",
            position: "Senior Frontend Engineer",
            department: "Engineering",
            email: "s.jenkins@staffsync.com",
            phone: "+1 (555) 012-3456",
            joinedDate: "Oct 12, 2021",
        },
        {
            id: 2,
            name: "Michael Carter",
            avatar:"",
            empId: "EMP-2024-002",
            position: "Backend Engineer",
            department: "Engineering",
            email: "m.carter@staffsync.com",
            phone: "+1 (555) 234-5678",
            joinedDate: "Mar 18, 2022",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            avatar:"",
            empId: "EMP-2024-003",
            position: "UI/UX Designer",
            department: "Product Design",
            email: "e.rodriguez@staffsync.com",
            phone: "+1 (555) 345-6789",
            joinedDate: "Jul 08, 2020",
        },
        {
            id: 4,
            name: "David Wilson",
            avatar:"",
            empId: "EMP-2024-004",
            position: "HR Manager",
            department: "Human Resources",
            email: "d.wilson@staffsync.com",
            phone: "+1 (555) 456-7890",
            joinedDate: "Jan 15, 2019",
        },
        {
            id: 5,
            name: "Sophia Anderson",
            avatar:"",
            empId: "EMP-2024-005",
            position: "Product Manager",
            department: "Product",
            email: "s.anderson@staffsync.com",
            phone: "+1 (555) 567-8901",
            joinedDate: "Nov 25, 2021",
        },
        {
            id: 6,
            name: "James Thompson",
            avatar:"",
            empId: "EMP-2024-006",
            position: "QA Engineer",
            department: "Quality Assurance",
            email: "j.thompson@staffsync.com",
            phone: "+1 (555) 678-9012",
            joinedDate: "May 09, 2023",
        },
        {
            id: 7,
            name: "Olivia Martinez",
            empId: "EMP-2024-007",
            avatar:"",
            position: "DevOps Engineer",
            department: "Infrastructure",
            email: "o.martinez@staffsync.com",
            phone: "+1 (555) 789-0123",
            joinedDate: "Sep 30, 2022",
        },
        {
            id: 8,
            name: "Daniel Lee",
            avatar:"",
            empId: "EMP-2024-008",
            position: "Business Analyst",
            department: "Business",
            email: "d.lee@staffsync.com",
            phone: "+1 (555) 890-1234",
            joinedDate: "Apr 05, 2021",
        },
        {
            id: 9,
            name: "Ava Brown",
            avatar:"",
            empId: "EMP-2024-009",
            position: "Finance Manager",
            department: "Finance",
            email: "a.brown@staffsync.com",
            phone: "+1 (555) 901-2345",
            joinedDate: "Dec 14, 2018",
        },
        {
            id: 10,
            name: "William Harris",
            avatar:"",
            empId: "EMP-2024-010",
            position: "Marketing Specialist",
            department: "Marketing",
            email: "w.harris@staffsync.com",
            phone: "+1 (555) 112-2334",
            joinedDate: "Aug 21, 2023",
        },
    ];

    const filteredEmployees = filterEmployees(employees, filters);

    const totalItems = filteredEmployees.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const resourceName = "employees";

    const paginatedEmployees = paginate(filteredEmployees, currentPage, pageSize);


  return (
    <Card>

        { paginatedEmployees.length > 0 ? (
            <div className='divide-y divide-slate-200 dark:divide-slate-700'>

                {
                    paginatedEmployees.map((employee)=>(
                        <EmployeeCard
                            key={employee.id} 
                            employee={employee}
                        />
                    ))
                }

            </div>
        ) : 
            <EmptyState 
                title="No employees found"
                description="Try adjusting your search or filters."
            />
        }

        {
            totalPages > 1 && (
                <Pagination 
                    currentPage={currentPage} 
                    pageSize={pageSize}
                    totalItems={totalItems} 
                    resourceName={resourceName}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )
        }
        
        

    </Card>
    
    // <ErrorState/>
    // <div className='divide-y divide-slate-200 dark:divide-slate-700'>
    //     {Array.from({length: pageSize}).map((_, i) => (
    //         <EmployeeCardSkeleton key={i}/>
    //     ))}
    // </div>
    
  )
}

export default EmployeeList