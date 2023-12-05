export interface RegisterRequest {
  fullName: string;
  birthday: Date;
  address: string;
  image: number[] | string;
  email: string;
  password: string;
  phone: string;
  role: string;
}
