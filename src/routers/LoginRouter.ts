import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginValidation from '../middlewares/validation';

const routers = Router();
const userController = new UserController();

routers.post('/login', loginValidation, userController.login);

export default routers;