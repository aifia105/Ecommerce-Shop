import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../authStateInterface';
import { authActions } from './actions';

const initialState: AuthStateInterface = {
  currentUser: null,
  validatonError: null,
  status: 'pending',
  isLogin: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      status: 'submitting',
      validatonError: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      status: 'success',
      currentUser: action.user,
      isLogin: true,
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLogin: false,
    })),
    on(authActions.login, (state) => ({
      ...state,
      status: 'submitting',
      validatonError: null,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      status: 'success',
      currentUser: action.user,
      isLogin: true,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLogin: false,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectStatus,
  selectCurrentUser,
  selectValidatonError,
} = authFeature;
