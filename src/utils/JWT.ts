import jwt from 'jsonwebtoken';

export default class Token {
  TOKEN_SECRET = process.env.JWT_SECRET as string;

  public generateToken = (username: string) => {
    const payload = { username };
    const token = jwt.sign(payload, this.TOKEN_SECRET);
    return token;
  };
}