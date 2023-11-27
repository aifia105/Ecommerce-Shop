import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "src/app/models/product";

export const wishlistActions = createActionGroup({
    source: 'wishlist',
    events :{
        'Add to wishlist': props<{product: Product}>(),
        'Remove from wishlist': props<{productId: string}>(),
        'clear wishlist': emptyProps()
    }
})