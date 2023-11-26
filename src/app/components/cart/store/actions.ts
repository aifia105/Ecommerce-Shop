import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CartProduct } from "src/app/models/cartProduct";


export const cartActions = createActionGroup({
    source: 'cart',
    events:{
        'Add to cart': props<{cartProduct: CartProduct}>(),
        'Remove from cart': props<{productId: string | undefined}>(),
        'Update quantity': props<{productId: string | undefined, quantity: number}>(),
        'Update total': props<{productId: string | undefined, total: number}>(),
        'Clear cart': emptyProps(),
    }
})