import { Category } from './category';

export interface Product {
  id?: string;
  name: string;
  description: string;
  priceTTC: number;
  priceHt: number;
  tva:number;
  pricture: string;
  category: Category;
  avg_rating: number;
  CreationDate: Date;
  brand: string;
}
