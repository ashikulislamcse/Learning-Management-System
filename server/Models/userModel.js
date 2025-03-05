import mongoose from "mongoose";
import { type } from "os";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        enum:["instructor", "student"],
        default:"student"
    },
    enrolledCourses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    photoUrl:{
        type: String,
        default:""
    }
},{timestamps:true});

const userModel = mongoose.model("User", userSchema);
export default userModel;