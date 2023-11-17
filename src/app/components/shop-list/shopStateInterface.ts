import { BackendErrors } from 'src/app/models/backendErrors';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

export interface ShopStateInterface {
  validatonError: BackendErrors | null;
  status: string;
  isLoading: boolean;
  Categorys: Category[] | null;
  Products: Product[] | null;
  category: Category | null | undefined;
  product: Product | null | undefined;
}
