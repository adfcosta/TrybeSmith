import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User, UserLogin } from '../interfaces/User';

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
    const { insertId } = dataInserted;
    return insertId;
  }

  public async verifyLogin({ username, password }: UserLogin): Promise<UserLogin> {
    const [[row]] = await this.connection.execute<(
    User & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
      );
    return row;
  }
}