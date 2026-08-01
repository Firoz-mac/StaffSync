import React from 'react'

const InfoItem = ({
    icon,
    children,
    className = "",
}) => {
    const Icon = icon;
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Icon size={16} aria-hidden="true"/>
            <span >{children}</span>
        </div>
    )
}

export default InfoItem