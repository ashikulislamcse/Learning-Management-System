import express from 'express';
import { Login, Logout, Register, UpdateProfile } from '../Controllers/userController.js';
import isAuthenticated from '../Middlewares/isAuthenticated.js';


const Router = express.Router();

Router.post('/register', Register);
Router.post('/login', Login);
Router.get('/logout', Logout);
Router.post('/profile/update',isAuthenticated, UpdateProfile);


export default Router;