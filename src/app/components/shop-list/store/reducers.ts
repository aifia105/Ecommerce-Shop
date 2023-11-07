import { createFeature, createReducer, on } from '@ngrx/store';
import { ShopStateInterface } from '../shopStateInterface';
import { shopActions } from './actions';

const initialState: ShopStateInterface = {
  validatonError: null,
  status: 'pending',
  isLoading: false,
  Categorys: [],
  Products: [],
};

export const shopFeature = createFeature({
  name: 'shop',
  reducer: createReducer(
    initialState,
    on(shopActions.getCategory, (state) => ({
      ...state,
      status: 'loading',
      isLoading: true,
      validatonError: null,
    })),
    on(shopActions.getCategorySuccess, (state, action) => ({
      ...state,
      status: 'success',
      isLoading: false,
      Categorys: action.category,
    })),
    on(shopActions.getCategoryFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLoading: false,
    }))
  ),
});

export const {
  name: shopFeatureKey,
  reducer: shopReducer,
  selectStatus,
  selectCategorys,
  selectValidatonError,
  selectIsLoading,
} = shopFeature;
