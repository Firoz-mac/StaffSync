import React from 'react'
import { User, Pencil } from 'lucide-react';

const ProfileImage = ({
    image,
    onChange,
}) => {
  return (
    <div className='relative flex w-34 h-34'>

        <div 
            className='flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-slate-100
            text-slate-400 ring-4 ring-white dark:bg-slate-800 dark:text-slate-500 dark:ring-slate-900'
        >
            {
                image ? (
                    <img 
                        src={image} 
                        alt="profile" 
                        className='h-full w-full object-cover'
                    />
                ) : (
                    <User 
                        size={40} 
                        strokeWidth={1.5}
                    />
                )
            }
        </div>

        <label 
            htmlFor='profile-image'
            className='absolute bottom-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center
            rounded-full border-2 border-white bg-violet-600 text-white shadow-sm transition-colors
            hover:bg-violet-700 dark:border-slate-900'
        >
            <Pencil 
                size={14} 
                strokeWidth={2}
            />

            <input 
                id='profile-image' 
                type="file"
                name='profileImg' 
                accept="image/png,image/jpeg,image/jpg" 
                className="hidden" 
                onChange={onChange}
            />
        </label>

    </div>
  )
}

export default ProfileImage