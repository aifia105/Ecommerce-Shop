import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { shopActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Category } from 'src/app/models/category';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

export const shopCategoryEffect = createEffect(
  (action$ = inject(Actions), categoryService = inject(CategoryService)) => {
    return action$.pipe(
      ofType(shopActions.getCategory),
      switchMap(() => {
        return categoryService.getAllCategorys().pipe(
          map((categories: Category[]) => {
            return shopActions.getCategorySuccess({ category: categories });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              shopActions.getCategoryFailure({
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
export const shopAddCategoryEffect = createEffect(
  (action$ = inject(Actions), category = inject(CategoryService), route = inject(Router)) => {
    return action$.pipe(
      ofType(shopActions.addCategory),
      switchMap(({ request }) => {
        console.log(request);
        return category.addCategory(request).pipe(
          tap((response) => console.log('API Response: from effect', response)),
          map((category: Category) => {
            route.navigate(['/categorys/categoryslist']);
            return shopActions.addCategorySuccess({ category });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              shopActions.addCategoryFailure({
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

export const shopProductEffect = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(shopActions.getProducts),
      switchMap(() => {
        return productService.getAllProducts().pipe(
          map((products: Product[]) => {
            return shopActions.getProductsSuccess({ products: products });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              shopActions.getProductsFailure({
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

export const shopAddProductEffect = createEffect(
  (action$ = inject(Actions), product = inject(ProductService), route = inject(Router)) => {
    return action$.pipe(
      ofType(shopActions.addProduct),
      switchMap(({ request }) => {
        return product.addProduct(request).pipe(
          map((product: Product) => {
            route.navigate(['/products/Productlist']);
            return shopActions.addProductSuccess({ product });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              shopActions.addProductFailure({
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
