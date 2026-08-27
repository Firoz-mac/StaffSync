import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js';


dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.use(express.json())

app.get('/', (req,res)=>{
    res.json({
        success: true,
        message: 'StaffSync API is running',
    })
})

const PORT = process.env.PORT || 5000;



const startServer = async ()=>{
    await connectDB();

    app.listen(PORT, ()=> {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer()