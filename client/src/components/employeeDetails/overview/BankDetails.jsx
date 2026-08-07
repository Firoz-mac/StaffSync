import React from 'react'
import { Landmark } from 'lucide-react';
import Card from '../../Card'
import InfoCardHeader from './infoCard/InfoCardHeader'
import InfoSection from './infoCard/InfoSection';
import InfoCardSkeleton from '../../skeleton/InfoCardSkeleton';

const BankDetails = ({ data }) => {
  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Bank Details' 
        icon={Landmark}
      />

      <InfoSection data={data}/>

    </Card>
    // <InfoCardSkeleton/>
  )
}

export default BankDetails