import React from 'react'

const InfoItem = ({
    label,
    value,
}) => {
  return (
    <div className='grid grid-cols-[140px_1fr] gap-x-4'>
        <span className='text-sm text-slate-500'>
            {label}
        </span>

        <p className='text-sm font-medium text-slate-900'>
            {value}
        </p>
    </div>
  )
}

export default InfoItem