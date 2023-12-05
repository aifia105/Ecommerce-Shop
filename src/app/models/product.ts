import { Category } from './category';

export interface Product {
  id?: string;
  name: string;
  description: string;
  priceTTC: number;
  image: number[] | string;
  category: Category;
  rating: number;
  brand: string;
  CreationDate: Date;
}
