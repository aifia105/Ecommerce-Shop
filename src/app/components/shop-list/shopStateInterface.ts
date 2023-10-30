import { BackendErrors } from 'src/app/models/backendErrors';
import { Category } from 'src/app/models/category';

export interface ShopStateInterface {
  validatonError: BackendErrors | null;
  status: string;
  isLoading: boolean;
  Categorys: Category[] | null;
}
