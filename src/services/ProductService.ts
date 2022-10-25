import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import NewProduct from '../interfaces/NewProduct';

export default class ProductService {
  private model: ProductModel;
    
  constructor() {
    this.model = new ProductModel(connection);
  }
    
  public async createProduct(newProduct: Omit<NewProduct, 'id'>): Promise<NewProduct> {
    const createdProduct = await this.model.createProduct(newProduct);
    return createdProduct;
  }
}