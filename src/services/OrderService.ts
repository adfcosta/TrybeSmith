import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import Order from '../interfaces/Order';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}