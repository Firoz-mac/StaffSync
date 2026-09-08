import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res) =>{
    try {
        const employeeId = req.user.employee._id;

        if (!employeeId){
            return res.status(400).json({
                success: false,
                message: 'Employee not found.',
            });
        }

        const now = new Date();
        const workDate = new Date(now);
        workDate.setHours(0, 0, 0, 0);

        // checking if there's an open attendance session
        const openSession = await Attendance.findOne({
            employee: employeeId,
            status: "Open"
        });

        //clockOut
        if (openSession){

            const workingMinutes = Math.round((now - openSession.clockIn) / 60000);

            openSession.clockOut = now;
            openSession.workingMinutes = workingMinutes;
            openSession.status = "Closed";

            await openSession.save();

            return res.status(200).json({
                success: true,
                message: 'Clocked out successfully.',
                attendance: openSession,
            });

        }

        //clockIn
        const attendance = await Attendance.create({
            employee: employeeId,
            workDate: workDate,
            clockIn: now,
            status: "Open"
        });

        return res.status(201).json({
            success: true,
            message: 'Clocked in successfully.',
            attendance,
        });

    } catch (error) {
        console.error('Clock in/out error:', error);

        return res.status(500).json({
            success: false,
            message: 'Failed to update attendance.',
        });
    }
}