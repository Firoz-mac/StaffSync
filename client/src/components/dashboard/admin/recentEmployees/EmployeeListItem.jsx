import { User } from 'lucide-react'
import React from 'react'
import Avatar from '../../../Avatar'

const EmployeeListItem = ({data}) => {
  return (
    <div className='flex gap-3'>
        
        <Avatar name={data.name} avatar={data.avatar}/>
        
        <div className='min-w-0 flex-1'>
            <h5 className="truncate font-semibold text-slate-900 text-wrap">
                {data.name}
            </h5>

            <p className="truncate text-sm text-slate-500">
                {data.role}
                {" • "}
                {data.joined}
            </p>
        </div>
    </div>
  )
}

export default EmployeeListItem