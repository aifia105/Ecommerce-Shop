import { createActionGroup, props } from "@ngrx/store";
import { BackendErrors } from "src/app/models/backendErrors";
import { OrderClient } from "src/app/models/order";

export const chekoutActions = createActionGroup({
    source: 'chekout',
    events:{
        'Add to chekout': props<{orderClient: OrderClient}>(),
        'Add to chekout success': props<{orderClient: OrderClient}>(),
        'Add to chekout failure': props<{erros: BackendErrors}>(),
    }
})