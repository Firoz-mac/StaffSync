import { Cake } from 'lucide-react'
import React from 'react'
import BirthdayCard from './BirthdayCard'
import { isUpcomingBirthday } from '../../../../utils/formatDate';
import ListSkeleton from '../../../skeleton/ListSkeleton';
import EmptyState from '../../../emptyState/EmptyState';
import ErrorState from '../../../errorState/ErrorState';
import Card from '../../../Card';

const UpcomingBirthdays = () => {

    const upcomingBirthdaysData = [
        {
            id: 1,
            name: "Fana Miller",
            department: "Marketing",
            birthday: "1999-07-30",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            name: "Kevin Brown",
            department: "Sales",
            birthday: "1999-08-02",
            avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            name: "Kevin Brown",
            department: "Sales",
            birthday: "1999-08-03",
            avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const birthdays = upcomingBirthdaysData.filter((employee)=>
        isUpcomingBirthday(employee.birthday, 3)
    )

  return (
    <Card className='p-4 lg:p-6'>

        <div className='flex items-center gap-3'>
            <Cake className='text-pink-700'/>
            <h4 className="text-md font-medium text-slate-900 dark:text-slate-100">
                Upcoming Birthday
            </h4>
        </div>

        <div className='mt-6 space-y-2'>
            {
                birthdays.map((data)=>(
                    <BirthdayCard 
                        key={data.id} 
                        data={data}
                    />
                ))
            }
            
        </div>

    </Card>
    // <EmptyState
    //     icon={Cake} 
    //     title='No upcoming birthdays' 
    //     description='No employees have birthdays in the next 3 days.'
    // />
    // <ErrorState 
    //     title='Failed to load birthdays' 
    //     description='Birthday information couldnt be retrieved.'
    // />
    // <ListSkeleton/>
  )
}

export default UpcomingBirthdays