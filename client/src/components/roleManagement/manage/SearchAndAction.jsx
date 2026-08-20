import React, { useState } from 'react'
import { Search } from 'lucide-react';
import Input from '../../Input';
import Button from '../../Button';
import AddRoleModal from '../addRoleModal/AddRoleModal';

const SearchAndAction = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='flex gap-2'>

      <Input 
        type='text' 
        placeholder='Search by name, ID' 
        leftIcon={<Search/>}
      />

      <Button 
        onClick={()=>setOpen(true)}
      >
        Add
      </Button>

      <AddRoleModal 
        open={open}
        onClose={()=>setOpen(false)}
      />

    </div>
  )
}

export default SearchAndAction