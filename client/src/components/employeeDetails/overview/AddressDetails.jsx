import React from 'react'
import { MapPin } from 'lucide-react';
import Card from '../../Card'
import InfoCardHeader from './infoCard/InfoCardHeader'
import EmployeeAddressSkeleton from '../../skeleton/EmployeeAddressSkeleton';

const AddressDetails = () => {
  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Address Details' 
        icon={MapPin}
      />

      <div className='grid gap-6 md:grid-cols-2'>

        <div>
          <h5 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>Current Address</h5>
          <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400'>
            Calle de Alcalá, 12, Floor 4B 28014 Madrid, Spain
          </p>
        </div>

        <div>
          <h5 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>Permanent Address</h5>
          <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400'>Paseo de la Castellana, 108 28046 Madrid</p>
        </div>

      </div>

    </Card>
    // <EmployeeAddressSkeleton/>
  )
}

export default AddressDetails