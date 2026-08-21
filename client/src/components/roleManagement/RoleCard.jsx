import React from 'react'
import { Pencil, ShieldUser, UserRound } from 'lucide-react';
import Card from '../Card'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const RoleCard = ({
    role='admin',
    count=5,
}) => {

    const naviagte=useNavigate();

  return (
    <Card className='flex items-center justify-between p-6 gap-4'>

        <div className='flex min-w-0 items-center gap-3'>

            <ShieldUser 
                size={24} 
                strokeWidth={1.5}
                className='shrink-0 text-blue-600 dark:text-blue-400'
            />

            <p className='truncate text-sm font-semibold text-slate-900 dark:text-slate-100 capitalize'>
                {role}
            </p>

        </div>

        <div className='flex items-center gap-1'>

            <span className='text-md font-medium text-slate-700 dark:text-slate-300'>
                {count}
            </span>
            <UserRound 
                size={18}
            />

        </div>

        <Button 
            variant='outline' 
            aria-label='Edit role'
            onClick={()=> naviagte(`/roles/manage/${role}`)}
        >
            <Pencil size={16}/>
        </Button>

    </Card>
  )
}

export default RoleCard