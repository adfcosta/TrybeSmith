import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { productValidation } from '../middlewares/validation';

const routers = Router();
const productController = new ProductController();

routers.get('/products', productController.getAll);
routers.post('/products', productValidation, productController.newProduct);

export default routers;