import { Router } from 'express';
import UserController from '../controllers/UserController';
import { newUserValidation } from '../middlewares/validation';

const routers = Router();
const userController = new UserController();

routers.post('/users', newUserValidation, userController.newUser);

export default routers;