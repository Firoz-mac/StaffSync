import Employee from "../models/Employee.js";
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Email and password are required.'
            })
        }

        const normalizedEmail = email.toLowerCase().trim()

        if (password.length < 8){
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 8 characters.'
            })
        }

        //finding employee
        const employee = await Employee.findOne({
            email: normalizedEmail,
        })

        if (!employee){
            return res.status(400).json({
                success: false,
                message: 'No employee found with this email address.'
            })
        }

        //checking already registered
        const isUserExisting = await User.findOne({
            employee: employee._id
        })

        if (isUserExisting){
            return res.status(400).json({
                success: false,
                message: 'An account already exists for this employee.'
            })
        }

        //hashing password
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        //create user
        const user = await User.create({
            email: normalizedEmail,
            password: hashedPassword,
            role: 'employee',
            employee: employee._id
        })

        return res.status(201).json({
            success: true,
            message: 'Employee account created successfully.',
            user:{
                id: user._id,
                email: user.email,
                role: user.role,
                employee: user.employee
            },
        })

    } catch (error) {
        console.error('Signup error:', error)

        return res.status(500).json({
            success: false,
            message: 'Failed to create employee account.',
        })
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Email and password are required.'
            })
        }

        const normalizedEmail = email.toLowerCase().trim()

        //finding user
        const user = await User.findOne({
            email: normalizedEmail,
        })

        if (!user){
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password.',
            })
        }

        //comparing passwords
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        )

        if (!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password.',
            })
        }

        //creating token
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        )

        //storing token in cookies
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                employee: user.employee,
            },
        })
        
    } catch (error) {

        console.error('Login error:', error)

        return res.status(500).json({
            success: false,
            message: 'Failed to login.'
        })
        
    }
}