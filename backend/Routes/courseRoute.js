import express from 'express';
import { CreateCourse } from '../Controllers/courseController';



const Router = express.Router();

Router.post("/createcourse", CreateCourse);


export default Router;