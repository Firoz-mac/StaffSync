import React from 'react'
import Modal from '../../modal/Modal'
import ModalCard from '../../modal/ModalCard'
import Input from '../../Input'
import { Search } from 'lucide-react';
import ModalRow from './ModalRow';

const AddRoleModal = ({
    open,
    onClose,
}) => {

    const data = {
        title: 'Add Role',
    }

  return (
    <Modal 
        open={open} 
        onClose={onClose}
    >
        <ModalCard 
            onClose={onClose}
            data={data}
        >
            <div>
                <Input 
                    type='text' 
                    placeholder='Search by name, ID' 
                    leftIcon={<Search/>}
                />
            </div>

            <div className='mt-5 max-h-80 overflow-y-auto'>
                <ModalRow/>
                <ModalRow/>
                <ModalRow/>
                <ModalRow/>
                <ModalRow/>
                <ModalRow/>
                <ModalRow/>
            </div>

        </ModalCard>
    </Modal>
  )
}

export default AddRoleModal