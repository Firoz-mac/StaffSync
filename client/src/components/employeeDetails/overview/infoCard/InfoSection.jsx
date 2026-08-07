import React from 'react'
import InfoItem from './InfoItem'

const InfoSection = ({ data }) => {
  return (
    <div className=''>
        {
            data.map((field)=> (
                <InfoItem 
                    key={field.label} 
                    label={field.label} 
                    value={field.value}
                />
            ))
        }
        
    </div>
  )
}

export default InfoSection