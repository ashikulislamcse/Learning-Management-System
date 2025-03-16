import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5001;
app.listen(PORT, (req,res)=>{
    console.log(`Backend Server is Running on Port: ${PORT}`);
});