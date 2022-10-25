import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public newUser = async (req: Request, res: Response) => {
    const user = req.body;
    const auth = await this.userService.createUser(user);
    res.status(statusCodes.CREATED).json({ token: auth });
  };
}