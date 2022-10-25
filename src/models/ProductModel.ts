import { Pool, ResultSetHeader } from 'mysql2/promise';
import NewProduct from '../interfaces/NewProduct';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(newProduct: Omit<NewProduct, 'id'>): Promise<NewProduct> {
    const { name, amount } = newProduct;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...newProduct };
  }
}