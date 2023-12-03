import { Role } from './Role';

export interface UpdateUser {
  id?: string;
  fullName: string;
  birthday: Date;
  adress: string;
  picture: File | null;
  email: string;
  password: string;
  phone: string;
  role: string;
}