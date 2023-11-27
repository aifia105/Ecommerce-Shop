import { createFeature, createReducer, on } from "@ngrx/store";
import { WishListStateInterface } from "../wishlistStateInterface";
import { wishlistActions } from "./actions";

const initialState : WishListStateInterface = {
    items: [],
    status: null
};

export const wishlistFeature = createFeature({
    name: 'wishlist',
    reducer: createReducer(
        initialState,
        on(wishlistActions.addToWishlist, (state, action) => ({
            ...state,
            status : 'adding',
            items: [...state.items, action.product]
        })),
        on(wishlistActions.removeFromWishlist, (state, action) => ({
            ...state,
            status : 'removing',
            items : state.items.filter(item => item.id !== action.productId)
        })),
        on(wishlistActions.clearWishlist, (state) => ({
            ...state,
            status: 'clearing',
            items: []
        }))
    )
});

export const {
    name: wishlistFeatureKey,
    reducer: wishlistReducer,
    selectStatus,
    selectItems,
} = wishlistFeature;