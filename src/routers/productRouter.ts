import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const routers = Router();
const productController = new ProductController();

routers.post('/products', productController.newProduct);

export default routers;