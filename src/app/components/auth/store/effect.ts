import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { authActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { User } from "src/app/models/user";
import { HttpErrorResponse } from "@angular/common/http";

export const registerEffect = createEffect((
    actions$ = inject(Actions),
    authService = inject(AuthService)
) => {
    return actions$.pipe(
        ofType(authActions.register),
        switchMap(({request}) => {
            return authService.register(request).pipe(
                map((user: User) => {
                    return authActions.registerSuccess({user})
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(authActions.registerFailure({
                        erros: errorResponse.error.erros,
                    }))
                })
            )
        })
    )
}, {functional: true} )