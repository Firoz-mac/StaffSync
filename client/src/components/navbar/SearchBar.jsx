import React from 'react'
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className='relative hidden md:block'>

            <Search
                size={18}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500'
            />

            <input
                type="text"
                placeholder="Search..."
                className='w-72 pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 text-slate-900 
                dark:text-slate-100 border border-slate-300 dark:border-slate-700 hover:border-slate-400 
                dark:hover:border-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                placeholder:text-slate-400 dark:placeholder:text-slate-500'
            />

        </div>
    )
}

export default SearchBar