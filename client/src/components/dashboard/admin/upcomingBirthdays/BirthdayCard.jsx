import React from 'react'
import { PartyPopper } from 'lucide-react'
import Avatar from '../../../Avatar'
import { formatBirthday, isTodayBirthday } from '../../../../utils/formatDate'

const BirthdayCard = ({data}) => {
    
    const isToday = isTodayBirthday(data.birthday);

  return (
    <div 
        className={`flex w-full justify-between rounded-lg px-6 py-3 transition-colors duration-300 
        ${isToday ? "bg-pink-100 border border-pink-200" : "bg-white"}`}
    >

        <div className='flex min-w-0 flex-1 gap-3'>

            <Avatar 
                name={data.name} 
                avatar={data.avatar || null}
            />

            <div className='min-w-0'>
                <h4 className="truncate font-semibold text-slate-900">
                    {data.name}
                </h4>
                <p className="truncate text-sm text-slate-500">
                    {data.department} 
                    {" • "}
                    {formatBirthday(data.birthday)}
                </p>
            </div>

        </div>

        {
            isToday && (
                <button 
                    type='button'
                    title="Wish Happy Birthday"
                    aria-label="Celebrate birthday" 
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink-700 
                    shadow-sm transition-all duration-200 hover:scale-105 hover:bg-pink-50 cursor-pointer"
                >
                    <PartyPopper size={20}/>
                </button>
            )
        }

    </div>
  )
}

export default BirthdayCard