import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, map, throwError } from "rxjs";
import { ProductService } from "./products.service";

@Injectable({
    providedIn: 'root'
})

export class HeroService {
    constructor(private productService: ProductService) {}


  getPopularProducts(): Observable<Product[]> {
    return this.productService.getAllProducts().pipe(
      map((products) => {
        return products.sort((a, b) => b.avg_rating - a.avg_rating);
      })
    ).pipe(catchError(this.handleError));
  }

  getNewProducts(): Observable<Product[]> {
    return this.productService.getAllProducts().pipe(
      map((products: Product[]) => {
        return products.sort((a, b) => new Date(b.CreationDate).getTime() - new Date(a.CreationDate).getTime());
      })
    ).pipe(catchError(this.handleError));
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