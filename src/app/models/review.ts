import { Product } from './product';

export interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
  product: Product;
}
