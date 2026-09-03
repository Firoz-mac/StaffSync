import express from 'express'
import cors from 'cors'

import employeeRouter from './routes/employeeRouter.js'

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API is running',
    });
});


//employee
app.use('/api/employee', employeeRouter)

export default app