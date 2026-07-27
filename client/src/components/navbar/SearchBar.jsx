import React from 'react'
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className='relative hidden md:block'>

            <Search
                size={18}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
            />

            <input
                type="text"
                placeholder="Search..."
                className='w-72 pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 
                focus:border-blue-500'
            />

        </div>
    )
}

export default SearchBar