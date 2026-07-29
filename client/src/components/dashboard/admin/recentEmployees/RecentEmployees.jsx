import React from 'react'
import EmployeeListItem from './EmployeeListItem';
import ListSkeleton from '../../../skeleton/ListSkeleton';
import EmptyState from '../../../emptyState/EmptyState';
import ErrorState from '../../../errorState/ErrorState';
import Card from '../../../Card';

const RecentEmployees = () => {

    const recentEmployeesData = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "UX Designer",
            joined: "Joined Today",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: true,
        },
        {
            id: 2,
            name: "Aiony Haust",
            role: "Backend Dev",
            joined: "Joined 2d ago",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false,
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            role: "Product Lead",
            joined: "Joined 3d ago",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false,
        },
        {
            id: 4,
            name: "David Smith",
            role: "QA Engineer",
            joined: "Joined 1w ago",
            avatar: "https://images.unsplash.com/photo-1667127752169-74c7e4d8822f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false,
        },
        {
            id: 5,
            name: "David Smith",
            role: "QA Engineer",
            joined: "Joined 1w ago",
            avatar: "https://images.unsplash.com/photo-1667127752169-74c7e4d8822f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false,
        },
        {
            id: 6,
            name: "David Smith",
            role: "QA Engineer",
            joined: "Joined 1w ago",
            avatar: "https://images.unsplash.com/photo-1667127752169-74c7e4d8822f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false,
        },
        {
            id: 7,
            name: "David Smith",
            role: "QA Engineer",
            joined: "Joined 1w ago",
            avatar: "https://images.unsplash.com/photo-1667127752169-74c7e4d8822f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false,
        },
    ];
    
  return (
    <Card className="p-4 lg:p-6">

        <div className="mb-6 flex items-center justify-between">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Employees</h4>
            <button 
                type='button' 
                className="text-sm font-medium text-blue-600 hover:text-blue-700 
                dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
            >
                View All
            </button>
        </div>

        <div className='flex flex-col gap-7 h-150'>
            {
                recentEmployeesData.map((employee)=>(
                    <EmployeeListItem 
                        key={employee.id} 
                        data={employee}
                    />
                ))
            }
        </div>

    </Card>
    // <EmptyState
    //     icon={Users} 
    //     title="No employees found" 
    //     description="Employees will appear here once they're added."
    // />
    // <ErrorState 
    //     title='Failed to load employees' 
    //     description='We couldnt load the latest employee records.'
    // />
    // <ListSkeleton/>
  )
}

export default RecentEmployees