import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, map, of, throwError } from "rxjs";
import { ProductService } from "./products.service";
import { Store } from "@ngrx/store";
import { shopActions } from "../components/shop-list/store/actions";
import { selectProducts } from "../components/shop-list/store/reducers";

@Injectable({
    providedIn: 'root'
})

export class HeroService {
  products: Product[] = [];
    constructor( private store: Store) {}


  getAllProducts(): Observable<Product[]> {
    this.store.dispatch(shopActions.getProducts());
    this.store
      .select(selectProducts)
      .pipe()
      .subscribe(async (product: Product[] | null) => {
        if (product !== null) {
          this.products = product.map((product) => {
            if (product.image) {
              return {
                ...product,
                image: 'data:image/jpeg;base64,' + product.image,
              };
            }
            return product;
          });
          console.log(this.products);
        }
      });
      console.log(this.products);
      return of(this.products);     
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}