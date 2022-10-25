import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/User';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(newUser: User): Promise<number> {
    const { username, classe, level, password } = newUser;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { affectedRows } = dataInserted;
    return affectedRows;
  }
}