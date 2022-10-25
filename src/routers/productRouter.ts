import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const routers = Router();
const productController = new ProductController();

routers.get('/products', productController.getAll);
routers.post('/products', productController.newProduct);

export default routers;