import mongoose from "mongoose";


const ConnectDB = async(req, res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected Successfully..!")
    } catch (error) {
        console.log("Error :", error);
    }
}

export default ConnectDB;