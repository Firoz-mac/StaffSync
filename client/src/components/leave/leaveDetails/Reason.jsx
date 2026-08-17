import React from 'react'

const Reason = ({
    reason,
}) => {
  return (
    <div className='px-6 py-3'>
        <h6 className='text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500'>Reason</h6>
        <p className='mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300'>
            Family event out of town. I will be attending my brother's graduation ceremony and subsequent
            family gatherings. I have ensured all my current sprints are up to date.
        </p>
    </div>
  )
}

export default Reason