import jwt from 'jsonwebtoken';
import { UserToken } from '../interfaces/User';

export default class Token {
  TOKEN_SECRET = process.env.JWT_SECRET as string;

  public generateToken = ({ username, id }: UserToken) => {
    const payload = { username, id };
    const token = jwt.sign(payload, this.TOKEN_SECRET);
    return token;
  };
}