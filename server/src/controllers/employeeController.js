import Employee from "../models/Employee.js";

export const createEmployee = async (req, res) => {
    try{
        const { 
            firstName,
            lastName,
            email,
            phone,
            dateOfBirth,
            gender,
            maritalStatus,
            department,
            designation,
            salary,
        } = req.body;


        //Validate required fields
        const requiredFields = [
            'firstName',
            'lastName',
            'email',
            'phone',
            'dateOfBirth',
            'gender',
            'maritalStatus',
            'department',
            'designation',
            'salary',
        ];

        const missingFields = requiredFields.filter(
            (field) => !req.body[field]
        );

        if(missingFields.length > 0){
            return res.status(400).json({
                success: false,
                message: 'Required fields are missing.',
                fields: missingFields,
            })
        }

        const normalizedEmail = email.toLowerCase().trim()

        //if employee is already registered
        const isEmployeeExisting = await Employee.findOne({
            email: normalizedEmail,
        });

        if(isEmployeeExisting){
            return res.status(409).json({
                success: false,
                message: 'An employee with this email already exists.',
            })
        }

        //create employee
        const employee = await Employee.create({
            firstName,
            lastName,
            email,
            phone,
            dateOfBirth,
            gender,
            maritalStatus,
            department,
            designation,
            salary,
        });

        res.status(201).json({
            success: true,
            message: 'Employee added successfully.',
            employee,
        });

    }catch(err){
        console.log('Create employee error:', err)

        res.status(500).json({
            success: false,
            message: 'Failed to add new employee.'
        })
    }
}