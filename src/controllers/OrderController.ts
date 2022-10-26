import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { userId } = req.headers;
    const order = await this.orderService.generateOrder(Number(userId), productsIds);
    res.status(statusCodes.CREATED).json(order);
  };
}