import React from 'react'
import Button from '../Button'
import Title from './Title'

const PageHeader = ({
    title,
    description,
    buttonText,
    buttonIcon,
    buttonVariant="primary",
    buttonProps = {},
    onClick,
    children,
}) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center'>

        <Title 
            title={title} 
            description={description}
        />

        {
            children ?? (

                buttonText && (

                    <Button
                        type='button'
                        variant={buttonVariant} 
                        onClick={onClick}
                        {...buttonProps}
                    >
                        <span className="flex items-center gap-2">
                            {buttonIcon}
                            {buttonText}
                        </span>
                    </Button>

                )

            )
        }

    </div>
  )
}

export default PageHeader