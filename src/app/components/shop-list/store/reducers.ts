import { createFeature, createReducer, on } from '@ngrx/store';
import { ShopStateInterface } from '../shopStateInterface';
import { shopActions } from './actions';

const initialState: ShopStateInterface = {
  validatonError: null,
  status: 'pending',
  isLoading: false,
  Categorys: [],
  Products: [],
  category: undefined,
  product: undefined,
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
    })),
    on(shopActions.getProducts, (state) => ({
      ...state,
      status: 'loading',
      isLoading: true,
      validatonError: null,
    })),
    on(shopActions.getProductsSuccess, (state, action) => ({
      ...state,
      status: 'success',
      isLoading: false,
      Products: action.products,
    })),
    on(shopActions.getProductsFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLoading: false,
    })),
    on(shopActions.addCategory, (state) => ({
      ...state,
      status: 'submitting',
      isLoading: false,
      validatonError: null,
    })),
    on(shopActions.addCategorySuccess, (state, action) => ({
      ...state,
      status: 'success',
      isLoading: false,
      category: action.category,
    })),
    on(shopActions.addCategoryFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLoading: false,
    })),
    on(shopActions.addProduct, (state) => ({
      ...state,
      status: 'submitting',
      isLoading: false,
      validatonError: null,
    })),
    on(shopActions.addProductSuccess, (state, action) => ({
      ...state,
      status: 'success',
      isLoading: false,
      product: action.product,
    })),
    on(shopActions.addProductFailure, (state, action) => ({
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
  selectProducts,
} = shopFeature;
