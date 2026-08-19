import React, { useEffect, useState } from 'react'
import Card from '../../Card'
import LeaveRequestRow from './LeaveRequestRow'
import Pagination from '../../pagination/Pagination'
import { paginate } from '../../../utils/paginationUtils'

const LeaveRequestsTable = ({ 
    filter='all',
}) => {

    const leaveRequests = [
        {
            id: 1,
            name: "Sarah Jenkins",
            avatar: "",
            empId: "EMP-2024-001",
            position: "Senior Frontend Engineer",
            department: "Engineering",
            leaveType: "Casual",
            startingDate: "OCT 24",
            endingDate: "OCT 26",
            duration: "3",
            status: "pending",
        },
        {
            id: 2,
            name: "David Chen",
            avatar: "",
            empId: "EMP-2024-002",
            position: "Backend Developer",
            department: "Engineering",
            leaveType: "Sick",
            startingDate: "OCT 20",
            endingDate: "OCT 21",
            duration: "2",
            status: "approved",
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            avatar: "",
            empId: "EMP-2024-003",
            position: "HR Manager",
            department: "Human Resources",
            leaveType: "Vacation",
            startingDate: "NOV 01",
            endingDate: "NOV 10",
            duration: "10",
            status: "rejected",
        },
        {
            id: 4,
            name: "James Wilson",
            avatar: "",
            empId: "EMP-2024-004",
            position: "DevOps Engineer",
            department: "Engineering",
            leaveType: "Maternity/Paternity",
            startingDate: "OCT 30",
            endingDate: "DEC 30",
            duration: "60",
            status: "pending",
        },
        {
            id: 5,
            name: "Olivia Brown",
            avatar: "",
            empId: "EMP-2024-005",
            position: "UI/UX Designer",
            department: "Design",
            leaveType: "Casual",
            startingDate: "NOV 05",
            endingDate: "NOV 06",
            duration: "2",
            status: "approved",
        },
        {
            id: 6,
            name: "Michael Anderson",
            avatar: "",
            empId: "EMP-2024-006",
            position: "Product Manager",
            department: "Product",
            leaveType: "Vacation",
            startingDate: "NOV 12",
            endingDate: "NOV 16",
            duration: "5",
            status: "pending",
        },
        {
            id: 7,
            name: "Sophia Martinez",
            avatar: "",
            empId: "EMP-2024-007",
            position: "Frontend Developer",
            department: "Engineering",
            leaveType: "Sick",
            startingDate: "NOV 08",
            endingDate: "NOV 09",
            duration: "2",
            status: "approved",
        },
        {
            id: 8,
            name: "Daniel Thompson",
            avatar: "",
            empId: "EMP-2024-008",
            position: "Sales Executive",
            department: "Sales",
            leaveType: "Casual",
            startingDate: "NOV 14",
            endingDate: "NOV 15",
            duration: "2",
            status: "rejected",
        },
        {
            id: 9,
            name: "Emily Davis",
            avatar: "",
            empId: "EMP-2024-009",
            position: "Marketing Specialist",
            department: "Marketing",
            leaveType: "Vacation",
            startingDate: "DEC 02",
            endingDate: "DEC 06",
            duration: "5",
            status: "pending",
        },
        {
            id: 10,
            name: "Christopher Lee",
            avatar: "",
            empId: "EMP-2024-010",
            position: "Software Engineer",
            department: "Engineering",
            leaveType: "Sick",
            startingDate: "DEC 10",
            endingDate: "DEC 11",
            duration: "2",
            status: "approved",
        },
        {
            id: 11,
            name: "Ava Johnson",
            avatar: "",
            empId: "EMP-2024-011",
            position: "Finance Analyst",
            department: "Finance",
            leaveType: "Casual",
            startingDate: "DEC 14",
            endingDate: "DEC 16",
            duration: "3",
            status: "pending",
        },
        {
            id: 12,
            name: "Matthew Harris",
            avatar: "",
            empId: "EMP-2024-012",
            position: "QA Engineer",
            department: "Engineering",
            leaveType: "Vacation",
            startingDate: "DEC 18",
            endingDate: "DEC 22",
            duration: "5",
            status: "approved",
        },
        {
            id: 13,
            name: "Isabella Clark",
            avatar: "",
            empId: "EMP-2024-013",
            position: "Graphic Designer",
            department: "Design",
            leaveType: "Sick",
            startingDate: "JAN 04",
            endingDate: "JAN 05",
            duration: "2",
            status: "rejected",
        },
        {
            id: 14,
            name: "Andrew Lewis",
            avatar: "",
            empId: "EMP-2024-014",
            position: "Business Analyst",
            department: "Operations",
            leaveType: "Casual",
            startingDate: "JAN 08",
            endingDate: "JAN 10",
            duration: "3",
            status: "pending",
        },
        {
            id: 15,
            name: "Mia Walker",
            avatar: "",
            empId: "EMP-2024-015",
            position: "Content Strategist",
            department: "Marketing",
            leaveType: "Vacation",
            startingDate: "JAN 15",
            endingDate: "JAN 19",
            duration: "5",
            status: "approved",
        },
        {
            id: 16,
            name: "William Hall",
            avatar: "",
            empId: "EMP-2024-016",
            position: "System Administrator",
            department: "IT",
            leaveType: "Sick",
            startingDate: "JAN 22",
            endingDate: "JAN 24",
            duration: "3",
            status: "pending",
        },
        {
            id: 17,
            name: "Charlotte Young",
            avatar: "",
            empId: "EMP-2024-017",
            position: "Recruitment Specialist",
            department: "Human Resources",
            leaveType: "Casual",
            startingDate: "FEB 03",
            endingDate: "FEB 04",
            duration: "2",
            status: "approved",
        },
        {
            id: 18,
            name: "Benjamin King",
            avatar: "",
            empId: "EMP-2024-018",
            position: "Cloud Engineer",
            department: "Engineering",
            leaveType: "Vacation",
            startingDate: "FEB 10",
            endingDate: "FEB 14",
            duration: "5",
            status: "rejected",
        },
        {
            id: 19,
            name: "Amelia Wright",
            avatar: "",
            empId: "EMP-2024-019",
            position: "Account Executive",
            department: "Sales",
            leaveType: "Sick",
            startingDate: "FEB 17",
            endingDate: "FEB 18",
            duration: "2",
            status: "pending",
        },
        {
            id: 20,
            name: "Ethan Scott",
            avatar: "",
            empId: "EMP-2024-020",
            position: "Technical Lead",
            department: "Engineering",
            leaveType: "Maternity/Paternity",
            startingDate: "FEB 20",
            endingDate: "MAR 20",
            duration: "30",
            status: "approved",
        },
    ];

    const filteredLeaveRequests=leaveRequests.filter((request)=>{
        if(filter === "all"){
            return true;
        }
        return request.status === filter;
    });

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        setCurrentPage(1);
    },[filter]);
    
    const pageSize=5;
    const totalItems= filteredLeaveRequests.length;
    
    const totalPages = Math.ceil(totalItems/pageSize);
    const resourceName='requests';

    const paginatedLeaveRequests = paginate(filteredLeaveRequests, currentPage, pageSize);

  return (
    <Card>

        <div className='divide-y divide-slate-200 dark:divide-slate-700'>

            {
                paginatedLeaveRequests.map((request)=>(
                    <LeaveRequestRow
                        key={request.id} 
                        {...request}
                    />
                ))
            }
            
        </div>

        {
            totalPages > 1 && (
                <Pagination 
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItems={totalItems}
                    resourceName={resourceName}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )
        }
        
    </Card>
  )
}

export default LeaveRequestsTable