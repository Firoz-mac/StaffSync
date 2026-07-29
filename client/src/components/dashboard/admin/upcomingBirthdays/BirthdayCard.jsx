import React from 'react'
import { PartyPopper } from 'lucide-react'
import Avatar from '../../../Avatar'
import { formatBirthday, isTodayBirthday } from '../../../../utils/formatDate'

const BirthdayCard = ({data}) => {

    const { name, avatar, department, birthday, } = data;
    
    const isToday = isTodayBirthday(birthday);

  return (
    <div 
        className={`flex w-full items-center justify-between rounded-lg px-6 py-3 transition-all duration-300 
            ${
                isToday 
                ? "border border-pink-200 bg-pink-100 dark:border-pink-900 dark:bg-pink-950/40" 
                : "bg-white dark:bg-slate-900"
            }
        `}
    >

        <div className='flex min-w-0 flex-1 items-center gap-3'>

            <Avatar 
                name={name} 
                avatar={avatar}
            />

            <div className='min-w-0'>
                <h4 className="truncate font-semibold text-slate-900 dark:text-slate-100">
                    {name}
                </h4>
                <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                    {department} 
                    <span className='mx-1'>•</span>
                    {formatBirthday(birthday)}
                </p>
            </div>

        </div>

        {
            isToday && (
                <button 
                    type='button'
                    title="Wish Happy Birthday"
                    aria-label="Celebrate birthday" 
                    className="flex h-12 w-12 items-center justify-center rounded-full 
                    bg-white dark:bg-slate-800 text-pink-700 dark:text-pink-300 
                    shadow-sm transition-all duration-200 hover:scale-105 shrink-0 
                    hover:bg-pink-50 dark:hover:bg-slate-700 cursor-pointer"
                >
                    <PartyPopper 
                        aria-hidden="true" 
                        size={20}
                    />
                </button>
            )
        }

    </div>
  )
}

export default BirthdayCard