import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import employeeRouter from './routes/employeeRouter.js'
import authRouter from './routes/authRouter.js'
import attendanceRouter from './routes/attendanceRouter.js'

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API is running',
    });
});


//employee
app.use('/api/employee', employeeRouter);

//auth
app.use('/api/auth', authRouter);

//attendance
app.use('/api/attendance', attendanceRouter);

export default app