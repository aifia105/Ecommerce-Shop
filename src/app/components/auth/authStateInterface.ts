import { BackendErrors } from 'src/app/models/backendErrors';
import { User } from 'src/app/models/user';

export interface AuthStateInterface {
  validatonError: BackendErrors | null;
  status: string;
  isLogin: boolean;
  currentUser: User | null;
}
