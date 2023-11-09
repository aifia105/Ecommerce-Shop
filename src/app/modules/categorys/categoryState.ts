import { BackendErrors } from 'src/app/models/backendErrors';
import { Category } from 'src/app/models/category';

export interface CategoryState {
  validatonError: BackendErrors | null;
  status: string;
  isLoading: boolean;
  newCategory:  Category | null | undefined,
  Categorys: Category[] | null;
}
