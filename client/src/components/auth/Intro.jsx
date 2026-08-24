import React from 'react'

const Intro = () => {
  return (
    <div className='hidden lg:flex lg:flex-col w-full h-screen justify-center items-center py-6 px-15'>

        <div className='max-w-lg h-50'>

            <div className='flex gap-3'>
                <img src="/favicon.svg" alt="StaffSync" />
                <h2 className='text-5xl font-semibold text-slate-200'>StaffSync</h2>
            </div>

            <div className='space-y-6 mt-8'>

                <h2 className='text-5xl text-slate-200 font-semibold'>
                    Employee 
                    <br/> 
                    Management System
                </h2>

                <p className='text-slate-300'>
                    Streamline your workforce operations, track attendance,
                    manage payroll, and empower your team securely.
                </p>
                
            </div>

        </div>

    </div>
  )
}

export default Intro