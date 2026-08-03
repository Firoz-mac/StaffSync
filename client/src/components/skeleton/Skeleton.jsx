import React from 'react'

const Skeleton = ({className= ""}) => {
  return (
    <div className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-700 ${className}`}/>
  )
}

export default Skeleton