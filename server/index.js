import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config();
import ConnectDB from './Database/Database.js';
import userRoute from './Routes/userRoute.js';
ConnectDB();


const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001


// All Api Here
app.use('/api/user', userRoute)

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port: ${PORT}`)
})

