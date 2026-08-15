import React from 'react'
import Card from '../../Card'
import ProgressBar from '../../ProgressBar'
import Button from '../../Button'
import ListSkeleton from '../../skeleton/ListSkeleton'
import ProfileCompletionSkeleton from '../../skeleton/ProfileCompletionSkeleton'

const ProfileCompletionCard = () => {
  return (
    <Card 
        withDefaultBackground={false} 
        withDefaultBorder={false}
        className='p-4 lg:p-6 space-y-5 
        bg-blue-600 dark:border-blue-700 
        border-blue-600 dark:bg-blue-950'
    >
      
      <div className='text-blue-100'>
        <h4 className='text-xl font-medium text-white'>Complete Your Profile</h4>
        <p>A complete profile helps the HR team process your benefits faster.</p>
      </div>

      <ProgressBar 
        type={"Current Progress"} 
        percentage={90}
        textClass={'text-blue-100'} 
        barColor={"#F1F5F9"}
        barBgColor={'bg-blue-500 dark:bg-blue-900'}
      />

      <Button variant='white' className='w-full'>
        Update Now
      </Button>
        
    </Card>
    // <ProfileCompletionSkeleton/>
  )
}

export default ProfileCompletionCard