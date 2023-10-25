import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../authStateInterface";
import { authActions } from "./actions";

const initialState: AuthStateInterface ={
    currentUser : undefined,
    validatonError : null,
    status : 'pending'

} ;

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state)=> ({...state, status:'submitting', validatonError: null})),
        on(authActions.registerSuccess, (state, action)=> ({...state, status:'loading', currentUser: action.user})),
        on(authActions.registerFailure, (state, action)=> ({...state, status:'error', validatonError: action.erros}))
    )
})

export const {name: authFeatureKey, reducer: authReducer, selectStatus, selectCurrentUser, selectValidatonError} = authFeature