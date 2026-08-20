import React from 'react'
import DefaultRole from './DefaultRole'

const Header = () => {
  return (
    <div className='space-y-4'>
        <div>
            <h5 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>Role</h5>
            <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>Use roles assign permissions.</p>
        </div>

        <DefaultRole/>
    </div>
  )
}

export default Header