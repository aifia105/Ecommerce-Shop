import { Role } from './Role';

export interface User {
  id?: string;
  fullName: string;
  birthday: Date;
  address: string;
  image: number[] | string  ;
  email: string;
  password: string;
  phone: string;
  token: string;
  role: string;
}
