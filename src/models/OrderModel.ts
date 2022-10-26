import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/Order';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT
      O.id, U.id AS userId, JSON_ARRAYAGG(P.id) AS productsIds 
      FROM Trybesmith.Orders AS O INNER JOIN  Trybesmith.Users AS U 
      ON O.userId = U.id INNER JOIN Trybesmith.Products AS P ON P.orderId = O.id GROUP BY O.id`,
    );
    const [rows] = result;
    return rows as Order[];
  }

  public async create(userdId: number): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userdId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }
}
