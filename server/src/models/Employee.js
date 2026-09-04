import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    empId: {
        type: String,
        unique: true,
        required: true,
        immutable: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
    dateOfBirth:{
        type: Date,
        required: true,
    },
    gender:{
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    maritalStatus:{
        type: String,
        enum: ['single', 'married'],
        required: true,
    },
    department:{
        type: String,
        required: true,
        trim: true,
    },
    designation:{
        type: String,
        required: true,
        trim: true,
    },
    salary:{
        basicSalary:{
            type: Number,
            required: true,
            min: 0,
        },
        hra:{
            type: Number,
            default: 0,
            min: 0,
        },
        specialAllowance:{
            type: Number,
            default: 0,
            min: 0,
        },
        retirementFund:{
            type: Number,
            default: 0,
            min: 0,
        },
    },
    image:{
        type: String,
        default: null,
    }
},{ timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;