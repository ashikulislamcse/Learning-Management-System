import express from 'express';
import { CreateCourse } from '../Controllers/courseController.js';



const Router = express.Router();

Router.post("/createcourse", CreateCourse);


export default Router;