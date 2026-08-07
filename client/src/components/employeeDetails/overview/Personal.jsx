import React, { useState } from 'react'
import Card from '../../Card'
import InfoCardHeader from './infoCard/InfoCardHeader'
import { User } from 'lucide-react'
import InfoSection from './infoCard/InfoSection'
import InfoCardSkeleton from '../../skeleton/InfoCardSkeleton'
import EditPersonalModal from './EditPersonalModal'

const Personal = ({ data }) => {

  const [open, setOpen] = useState(false);

  return (
    <Card className='p-6'>
      <InfoCardHeader 
        title='Personal' 
        icon={User} 
        action={
          <button
            type='button'
            onClick={()=> setOpen(true)} 
            className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            Edit
          </button>
        }
      />

      <EditPersonalModal 
        open={open} 
        onClose={() => setOpen(false)} 
        data={data}
      />

      <InfoSection data={data}/>

    </Card>
    // <InfoCardSkeleton/>
  )
}

export default Personal