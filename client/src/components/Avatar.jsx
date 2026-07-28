import React from 'react'

const Avatar = ({name, avatar}) => {

  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-slate-100">

        {
            avatar ? (
                <img 
                    className="h-full w-full object-cover" 
                    src={avatar} 
                    alt={name} 
                />
            )
            :
            (
                <span className="text-lg font-semibold text-slate-700">
                    {
                        name
                            .split("")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()
                    }
                </span>
            )
        }
        
    </div>
  )
}

export default Avatar