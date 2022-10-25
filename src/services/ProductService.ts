import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import NewProduct from '../interfaces/NewProduct';
import Product from '../interfaces/Product';

export default class ProductService {
  private model: ProductModel;
    
  constructor() {
    this.model = new ProductModel(connection);
  }
    
  public async createProduct(newProduct: Omit<NewProduct, 'id'>): Promise<NewProduct> {
    const createdProduct = await this.model.createProduct(newProduct);
    return createdProduct;
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}