import { User } from './user';
import { CartProduct } from './cartProduct';

export interface OrderClient {
  id?: string;
  dateOrder: Date;
  total: number;
  orderStatus: string;
  user: User;
  product: CartProduct[];
}
