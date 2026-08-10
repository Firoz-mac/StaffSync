import React from 'react'
import Card from '../../Card'

const Description = () => {

    const description = 'The Engineering department is the core engine of EMS Enterprise innovation. We focus on building scalable, resilient HR and Enterprise Management systems using cutting-edge cloud-native technologies. Our team manages the full lifecycle from architectural design to dev-ops automation and security hardening.'
  return (
    <Card className='p-6'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>Description</h3>
        <p className='mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400'>
            {description}
        </p>
    </Card>
  )
}

export default Description