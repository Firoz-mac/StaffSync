import React from 'react'
import Intro from '../components/auth/Intro'
import AuthFormCard from '../components/auth/AuthFormCard'

const Auth = () => {
  return (
    <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-violet-900'>

      <Intro/>

      <div className='flex items-center justify-center p-6'>
        <AuthFormCard/>
      </div>

    </div>
  )
}

export default Auth