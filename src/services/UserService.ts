import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { User } from '../interfaces/User';
import Token from '../utils/JWT';

export default class UserService {
  private model: UserModel;

  private token: Token;

  constructor() {
    this.model = new UserModel(connection);
    this.token = new Token();
  }

  public async createUser(newUser: User): Promise<string> {
    const createdUser = await this.model.createUser(newUser);
    console.log(createdUser);
    if (createdUser === 0) throw new Error('User not created');
    const { username } = newUser;
    const auth = this.token.generateToken(username);
    return auth;
  }
}