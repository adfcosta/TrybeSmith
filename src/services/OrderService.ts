import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import ProductService from './ProductService';
import Order from '../interfaces/Order';

export default class OrderService {
  private model: OrderModel;

  private productService = new ProductService();

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(userId: number): Promise<number> {
    const orderId = await this.model.create(userId);
    return orderId;
  }

  public async generateOrder(userId: number, productsIds: number[]): Promise<object> {
    const orderId = await this.create(userId);
    productsIds.forEach(async (productId) => {
      await this.productService.updateProductOrder(orderId, productId);
    });
    return { userId, productsIds };
  }
}