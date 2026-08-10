import React from 'react'
import Card from '../Card'
import ModalHeader from './ModalHeader'
import Button from '../Button'

const ModalCard = ({
    data, 
    onClose, 
    children,
}) => {
  return (
    <Card className='p-6'>

        <ModalHeader 
            title={data.title}
            onClose={onClose}
        />

        <div>
            {children}
        </div>

        <Button className='mt-4 w-full'>Save</Button>
        
    </Card>
  )
}

export default ModalCard