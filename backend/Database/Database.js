import mongoose from 'mongoose';

const ConnectDB = async(req, res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
    } catch (error) {
        
    }
}