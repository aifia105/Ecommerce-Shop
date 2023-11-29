import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OrderClient } from "../models/order";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class OrderService {
  order!: OrderClient;
    constructor(private http: HttpClient) {}

    createOrder(order: OrderClient): Observable<OrderClient> {
        const url = environment.apiUrl + 'order/create';
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          });
        return this.http.post<OrderClient>(url, order, {headers: headers})
        .pipe(catchError(this.handleError));
    }

    getOrders(id: string): Observable<OrderClient[]> {
        const url = environment.apiUrl + 'order/all';
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          });
        return this.http.get<OrderClient[]>(url + `${id}`, { headers: headers })
        .pipe(catchError(this.handleError));
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