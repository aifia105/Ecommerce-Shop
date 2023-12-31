import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { authActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PersistanceService } from 'src/app/services/persistance.service';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    route = inject(Router),
    persistance = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          tap(response => console.log('API Response: from effect', response)),
          map((user: User) => {
            route.navigate(['hero']);
            persistance.set('user', user);
            persistance.set('token', user.token);
            return authActions.registerSuccess({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                erros: { error: errorResponse.message },
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    route = inject(Router),
    persistance = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          tap(response => console.log('API Response: from effect', response)),
          map((user: User) => {
            route.navigate(['hero']);
            persistance.set('user', user);
            persistance.set('token', user.token);
            return authActions.loginSuccess({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({
                erros: { error: errorResponse.message },
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
