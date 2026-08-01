import React from 'react'
import { 
    Calendar, 
    Mail, 
    Phone 
} from 'lucide-react';
import InfoItem from './InfoItem';

const EmployeeContact = ({
    email="example@mac",
    phone="+97 78542954",
    joinedDate="01-08-2026",
}) => {
  return (
    <div className='text-slate-500 dark:text-slate-400'>
        <InfoItem icon={Mail}>
            {email}
        </InfoItem>

        <InfoItem icon={Phone}>
            {phone}
        </InfoItem>

        <InfoItem icon={Calendar}>
            {joinedDate}
        </InfoItem>

    </div>
  )
}

export default EmployeeContact