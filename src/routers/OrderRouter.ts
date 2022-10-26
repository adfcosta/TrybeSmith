import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import authMiddlware from '../middlewares/authMiddleware';
import { newOrderValidation } from '../middlewares/validation';

const routers = Router();
const orderController = new OrderController();

routers.get('/orders', orderController.getAll);
routers.post('/orders', authMiddlware, newOrderValidation, orderController.create);

export default routers;