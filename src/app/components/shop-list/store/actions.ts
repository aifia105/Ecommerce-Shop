import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/models/backendErrors';
import { Category } from 'src/app/models/category';

export const shopActions = createActionGroup({
  source: 'shop',
  events: {
    'Get category': emptyProps(),
    'Get category success': props<{ category: Category[] }>(),
    'Get category failure': props<{ erros: BackendErrors }>(),
  },
});
