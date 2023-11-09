import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import {  Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Category } from "src/app/models/category";
import { CategoryService } from "src/app/services/category.service";
import { categoryActions } from "./actions";

export const getCategoryEffect = createEffect(
    (action$ = inject(Actions), categoryService = inject(CategoryService)) => {
      return action$.pipe(
        ofType(categoryActions.getCategory),
        switchMap(() => {
          return categoryService.getAllCategorys().pipe(
            map((categories: Category[]) => {
              return categoryActions.getCategorySuccess({ category: categories });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                categoryActions.getCategoryFailure({
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

  export const addCategoryEffect = createEffect(
    (action$ = inject(Actions), categoryService = inject(CategoryService)) => {
      return action$.pipe(
        ofType(categoryActions.addCategory),
        switchMap(({ request }) => {
          return categoryService.addCategory(request).pipe(
            map((category: Category) => {
              return categoryActions.addCategorySuccess({ category });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                categoryActions.addCategoryFailure({
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