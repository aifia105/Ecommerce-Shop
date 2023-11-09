import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/models/backendErrors';
import { Category } from 'src/app/models/category';

export const categoryActions = createActionGroup({
  source: 'category',
  events: {
    'Get category': emptyProps(),
    'Get category success': props<{ category: Category[] }>(),
    'Get category failure': props<{ erros: BackendErrors }>(),

    'Add category':  props<{ request: Category }>(),
    'Add category success': props<{ category: Category }>(),
    'Add category failure': props<{ erros: BackendErrors }>(),
  },
});
