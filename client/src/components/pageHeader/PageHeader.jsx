import React from 'react'
import Button from '../Button'
import Title from './Title'

const PageHeader = ({
    title,
    description,
    buttonText,
    buttonIcon,
    buttonVariant="primary",
    buttonProps,
    onButtonClick,
    children,
}) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center'>

        <Title 
            title={title} 
            description={description}
        />

        {
            children ? (
                children
            )
            : (

                buttonText && (

                    <Button
                        type='button'
                        variant={buttonVariant} 
                        onClick={onButtonClick}
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