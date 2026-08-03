import React from 'react'
import Card from '../../Card'
import InfoCardHeader from './infoCard/InfoCardHeader'
import { User } from 'lucide-react'
import InfoSection from './infoCard/InfoSection'
import InfoCardSkeleton from '../../skeleton/InfoCardSkeleton'

const Personal = ({ data }) => {

  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Personal' 
        icon={User} 
        action={
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
            Edit
          </button>
        }
      />

      <InfoSection data={data}/>

    </Card>
    // <InfoCardSkeleton/>
  )
}

export default Personal