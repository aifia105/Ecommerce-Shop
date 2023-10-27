import { BackendErrors } from 'src/app/models/backendErrors';
import { User } from 'src/app/models/user';

export interface AuthStateInterface {
  currentUser: User | null | undefined;
  validatonError: BackendErrors | null;
  status: string;
  isLogin: boolean;
}
