import React, { useEffect, useState } from 'react'
import Button from '../Button'
import useAttendance from '../../hooks/useAttendance'
import { toast } from 'sonner'

const ClockInButton = () => {

    const { loading, statusLoading, toggleAttendance, checkAttendanceStatus } = useAttendance();
    const [attendance, setAttendance] = useState(null)

    const getStatus = async () => {
        try {
            const response = await checkAttendanceStatus();

            setAttendance(response.attendance)

        } catch (error) {
            toast.error('Failed to get attendance status.', {
                description: error.message,
            })
        }
    }

    useEffect(()=> {
        getStatus()
    },[]);

    const handleClick = async () => {
        try {
            const response = await toggleAttendance();

            toast.success(response.message);

            setAttendance(response.attendance)

        } catch (error) {
            toast.error('Failed to process attendance.', {
                description: error.message,
            })
        }
    }

    return (
        <Button
            variant='primary'
            className="flex-1 sm:flex-none justify-center"
            onClick={handleClick}
            disabled={loading}
        >

            {statusLoading ? 
                'Loading..'
                : loading 
                    ? 'Processing...' 
                    : attendance?.status === 'Open' 
                        ? 'Clock Out' 
                        : 'Clock In'
            }

        </Button>
    )
}

export default ClockInButton