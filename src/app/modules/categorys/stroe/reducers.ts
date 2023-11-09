import { createFeature, createReducer, on } from '@ngrx/store';
import { CategoryState } from '../categoryState';
import { categoryActions } from './actions';

const initialState: CategoryState = {
  validatonError: null,
  status: 'pending',
  isLoading: false,
  newCategory: undefined,
  Categorys: [],
};

export const categoryFeature = createFeature({
  name: 'category',
  reducer: createReducer(
    initialState,
    on(categoryActions.getCategory, (state) => ({
      ...state,
      status: 'loading',
      isLoading: true,
      validatonError: null,
    })),
    on(categoryActions.getCategorySuccess, (state, action) => ({
      ...state,
      status: 'success',
      isLoading: false,
      Categorys: action.category,
    })),
    on(categoryActions.getCategoryFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLoading: false,
    })),
    on(categoryActions.addCategory, (state) => ({
      ...state,
      status: 'submitting',
      validatonError: null,
      isLoading: true,
    })),
    on(categoryActions.addCategorySuccess, (state, action) => ({
      ...state,
      status: 'success',
      isLoading: false,
      newCategory: action.category,
    })),
    on(categoryActions.addCategoryFailure, (state, action) => ({
      ...state,
      status: 'error',
      validatonError: action.erros,
      isLoading: false,
      newCategory: null,
    }))
  ),
});

export const {
    name: categoryFeatureKey,
    reducer: categoryReducer,
    selectStatus,
    selectCategorys,
    selectValidatonError,
  } = categoryFeature;
