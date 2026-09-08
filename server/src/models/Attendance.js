import mongoose from "mongoose";

export const attendanceSchema = new mongoose.Schema({
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    workDate:{
        type: Date,
        required: true,
    },
    clockIn:{
        type: Date,
        default: null,
    },
    clockOut:{
        type: Date,
        default: null,
    },
    workingMinutes:{
        type: Number,
        default: 0,
        min: 0,
    },
    status:{
        type: String,
        enum: ["Open", "Closed"],
        default: "Open",
    }
},{ timestamps: true });

attendanceSchema.index(
    { employee: 1 },
    {
        unique: true,
        partialFilterExpression: {
            status: "Open",
        },
    }
)

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;