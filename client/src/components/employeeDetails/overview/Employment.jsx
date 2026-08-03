import React from 'react'
import { Briefcase } from 'lucide-react';
import Card from '../../Card'
import InfoCardHeader from './infoCard/InfoCardHeader'
import InfoSection from './infoCard/InfoSection';
import InfoCardSkeleton from '../../skeleton/InfoCardSkeleton';

const Employment = ({ data }) => {
  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Employment' 
        icon={Briefcase}
      />

      <InfoSection data={data}/>

    </Card>
    // <InfoCardSkeleton/>
  )
}

export default Employment