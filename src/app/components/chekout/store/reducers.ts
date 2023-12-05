import { createFeature, createReducer, on } from "@ngrx/store";
import { chekoutStateInterface } from "../chekoutStateInterface";
import { chekoutActions } from "./actions";

const initialState: chekoutStateInterface = {
    order: {
        dateOrder: new Date(),
        orderStatus: 'pending',
        userDto: JSON.parse(localStorage.getItem('user') || '{}'),
        itemOrderUserDtos:[],
        total: 0,
        cartDto: {
            id: '',
            cardNumber: 0,
            cardholderName: '',
            expirationDate: new Date(),
            cvv: 0,
            user : JSON.parse(localStorage.getItem('user') || '{}')
        }
    
    },
    status: 'pending',
    validatonError: null,
};

const chekoutFeature = createFeature({
    name: 'chekout',
    reducer: createReducer(
        initialState,
        on(chekoutActions.addToChekout, (state, action) => ({
            ...state,
            status: 'submitting',
            validatonError: null,
            order: action.orderClient,
        })),
        on(chekoutActions.addToChekoutSuccess, (state, action) => ({
            ...state,
            status: 'success',
            validatonError: null,
            order: action.orderClient,
        })),
        on(chekoutActions.addToChekoutFailure, (state, action) => ({
            ...state,
            status: 'failure',
            validatonError: action.erros,
        }))
    )
});


export const {
    name: chekoutFeatureKey,
    reducer: chekoutReducer,
    selectStatus,
    selectOrder,
    selectValidatonError,
} = chekoutFeature;