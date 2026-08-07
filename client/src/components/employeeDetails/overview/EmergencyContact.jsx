import React from 'react'
import { Phone } from 'lucide-react';
import Card from '../../Card'
import InfoCardHeader from './infoCard/InfoCardHeader'
import InfoSection from './infoCard/InfoSection';
import InfoCardSkeleton from '../../skeleton/InfoCardSkeleton';

const EmergencyContact = ({ data }) => {
  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Emergency Contact' 
        icon={Phone}
      />

      <InfoSection data={data}/>
      
    </Card>
    // <InfoCardSkeleton/>
  )
}

export default EmergencyContact