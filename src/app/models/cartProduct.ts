import { Product } from './product';

export interface CartProduct {
  id?: string;
  productDto: Product;
  quantity: number;
  total: number;
}
