import jwt from 'jsonwebtoken';
import { UserToken } from '../interfaces/User';
import HttpException from './http.exception';

export default class Token {
  TOKEN_SECRET = process.env.JWT_SECRET as string;

  public generateToken = ({ username, id }: UserToken) => {
    const payload = { username, id };
    const token = jwt.sign(payload, this.TOKEN_SECRET);
    return token;
  };

  public authTokenValidation = async (token: string) => {
    if (!token) {
      const err: HttpException = new Error('Token not found');
      err.status = 401;
      throw err;
    }

    try {
      const instrospection = jwt.verify(token, this.TOKEN_SECRET);
      return instrospection as UserToken;
    } catch (error) {
      const err: HttpException = new Error('Invalid token');
      err.status = 401;
      throw err;
    }
  };
}