import React from 'react'
import TabItem from './TabItem'

const Tabs = ({
    value,
    onChange,
    children,
    className = "",
}) => {
  return (
    <div 
        className={`flex items-center gap-1 overflow-x-auto whitespace-nowrap border-b 
        border-slate-200 dark:border-slate-700 scrollbar-hide
        ${className}`}
    >
        {
            React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;

                return React.cloneElement(child, {
                    active: child.props.value === value,
                    onSelect: () => onChange?.(child.props.value),
                })
            }
                
            )
        }
        
    </div>
  )
}

export default Tabs