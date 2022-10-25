import { Router } from 'express';
import UserController from '../controllers/UserController';

const routers = Router();
const userController = new UserController();

routers.post('/users', userController.newUser);

export default routers;