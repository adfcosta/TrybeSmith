import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const routers = Router();
const orderController = new OrderController();

routers.get('/orders', orderController.getAll);

export default routers;