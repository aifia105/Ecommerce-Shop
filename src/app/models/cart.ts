import { User } from "./user";

export interface Cart {
  id: string | null;
  cardNumber: number;
  cardholderName: string;
  expirationDate: Date;
  cvv: number;
}
