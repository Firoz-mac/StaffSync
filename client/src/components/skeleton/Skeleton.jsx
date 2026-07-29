import React from 'react'

const Skeleton = ({className= ""}) => {
  return (
    <div className={`animate-pulse rounded-md bg-slate-200 ${className}`}></div>
  )
}

export default Skeleton