import React from 'react'

const Avatar = ({
    name, 
    avatar,
    size = "h-14 w-14",
    className = '',
}) => {

  return (
    <div 
        className={`flex items-center justify-center overflow-hidden rounded-full 
        bg-slate-100 dark:bg-slate-800 shrink-0 
        ${size} ${className}`}
    >

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
                <span className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                    {
                        name
                            ?.split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase() || "?"
                    }
                </span>
            )
        }
        
    </div>
  )
}

export default Avatar