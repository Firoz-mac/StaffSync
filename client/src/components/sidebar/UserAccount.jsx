import { LogOut } from 'lucide-react'
import React from 'react'

const UserAccount = () => {
  return (
    <div className='flex items-center justify-between py-3'>

      <div className='flex items-center gap-3'>
        <div className='flex w-10 h-10 rounded-full bg-violet-100 
        text-violet-700 items-center justify-center font-semibold'
        >
          MC
        </div>

        <div className='flex flex-col text-left'>
          <span className='text-sm font-semibold text-slate-800'>Mac</span>
          <span className="text-xs text-slate-500">Administrator</span>
        </div>

      </div>

      <button 
        type='button'
        aria-label="Log out" 
        className='hover:bg-slate-100 text-slate-500 hover:text-red-600 
        rounded-full p-2 transition-colors cursor-pointer'
      >
        <LogOut size={18}/>

      </button>
      
    </div>
  )
}

export default UserAccount