import mongoose from 'mongoose'
import dns from 'node:dns'

const connectDB = async ()=>{
    try{
        dns.setServers([
            '8.8.8.8',
            '8.8.4.4',
        ])

        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);

        console.log('DB connected successfully');
    }catch(err){
        console.error('DB connected failed:', err.message);
        process.exit(1);
    }
}

export default connectDB;