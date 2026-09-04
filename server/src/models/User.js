import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,

    },
    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
        unique: true,
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;