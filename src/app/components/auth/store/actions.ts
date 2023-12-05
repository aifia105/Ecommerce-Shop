import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthentificationRequest } from 'src/app/models/auth/authenticationRequest';
import { RegisterRequest } from 'src/app/models/auth/registerRequest';
import { BackendErrors } from 'src/app/models/backendErrors';
import { User } from 'src/app/models/user';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequest }>(),
    'Register success': props<{ user: User }>(),
    'Register failure': props<{ erros: BackendErrors }>(),
    Login: props<{ request: AuthentificationRequest }>(),
    'Login success': props<{ user: User }>(),
    'Login failure': props<{ erros: BackendErrors }>(),
    'Get user': props<{ user: User }>(),

  },
});
