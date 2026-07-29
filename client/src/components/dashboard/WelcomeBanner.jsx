import { Download, Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import Button from '../Button'
import { formatCurrentDate } from '../../utils/formatDate'
import ErrorState from '../errorState/ErrorState'

const WelcomeBanner = () => {

    const today = formatCurrentDate();

  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>

        <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Welcome Mac</h1>
            <p className="text-slate-500 dark:text-slate-400">{today}</p>
        </div>

        <div className='flex flex-wrap gap-2'>

            <Button variant='outline'>
                <Download size={18} />
                Export
            </Button>

            <Button variant='primary' className="flex-1 sm:flex-none justify-center">
                <Plus size={18}/>
                New Employee
            </Button>

        </div>

    </div>
    // <ErrorState 
    //     description='We couldnt load your dashboard information. Please refresh the page.'
    // />
  )
}

export default WelcomeBanner