import { User } from './user';
import { CartProduct } from './cartProduct';
import { Cart } from './cart';

export interface OrderClient {
  id?: string;
  dateOrder: Date;
  total: number;
  orderStatus: string;
  userDto: User;
  itemOrderUserDtos: CartProduct[];
  cartDto: Cart;
}
