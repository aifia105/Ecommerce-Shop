import { createFeature, createReducer, on } from "@ngrx/store";
import { CartStateInterface } from "../cartSateInterface";
import { cartActions } from "./actions";
import { state } from "@angular/animations";

const initialState : CartStateInterface = {
    items: [],
    validatonError: null,
   status: 'pending',
};

const cartFeature = createFeature({
    name: 'cart',
    reducer: createReducer(
        initialState,
        on(cartActions.addToCart, (state, action) => ({
            ...state,
            status: 'submitting',
            validatonError: null,
            items: [...state.items, action.cartProduct],
        })),
        on(cartActions.removeFromCart, (state, action) => ({
            ...state,
            status: 'deleting',
            validatonError: null,
            items: state.items.filter(item => item.product.id !== action.productId)
        })),
        on(cartActions.updateQuantity, (state, action) => ({
            ...state,
            status: 'updating',
            validatonError: null,
            items: state.items.map(item => {
                if(item.product.id === action.productId){
                    return {
                        ...item,
                        quantity: action.quantity
                    };
                }
                return item;
            })
        })),
        on(cartActions.updateTotal, (state, action) => ({
            ...state,
            status: 'updating',
            validatonError: null,
            items: state.items.map(item => {
                if(item.product.id === action.productId){
                    return {
                        ...item,
                        total: action.total
                        
                    };
                }
                return item;
            })
        })),
        on(cartActions.clearCart, (state) => ({
            ...state,
            status: 'clearing',
            validatonError: null,
            items: []
        }))
    )
});

export const {
    name: cartFeatureKey,
    reducer: cartReducer,
    selectStatus,
    selectItems,
    selectValidatonError,
} = cartFeature;
