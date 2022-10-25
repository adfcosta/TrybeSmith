import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import ProductServices from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductServices()) { }

  public newProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await this.productService.createProduct(product);
    res.status(statusCodes.CREATED).json(createdProduct);
  };
}