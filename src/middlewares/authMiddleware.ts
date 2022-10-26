import { NextFunction, Request, Response } from 'express';
import Token from '../utils/JWT';

const auth = new Token();

const authMiddlware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string;
  const { id } = await auth.authTokenValidation(token);
  req.headers.userId = id.toString();
  next();
};

export default authMiddlware;
