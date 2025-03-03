import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import ConnectDB from './Database/Db.js';
ConnectDB();
const app = express();
app.use(express.json());
app.use(cors());
const PORT  = process.env.PORT || 5001;


app.get('/', (req,res)=>{
    res.send('API Running Successfully..!')
})

app.use('/auth', )



app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`);
});



