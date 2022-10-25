import NewProduct from './NewProduct';

export default interface Product extends NewProduct {
  orderId: number;
}