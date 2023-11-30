import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { NewPassword } from "../models/newPassword";
import { Cart } from "../models/cart";
import { UpdateUser } from "../models/updateUser";

@Injectable({
    providedIn: 'root'
})

export class UserServie {
    constructor(private http: HttpClient) {}
    getUser() {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }

    updateUser(user: UpdateUser): Observable<User> {
        const url = environment.apiUrl + 'User'; 
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          });
        return this.http.post<User>(url, user, {headers: headers})
        .pipe(catchError(this.handleError));
    }

    updatePassword(body: NewPassword) : Observable<User> {
        const url = environment.apiUrl + 'User/updatePassword'; 
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          });
        return this.http.post<User>(url, body, {headers: headers})
        .pipe(catchError(this.handleError));
    }

    addCard(card: Cart): Observable<User> {
        const url = environment.apiUrl + 'Cart/create'; 
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          });
        return this.http.post<User>(url, card, {headers: headers})
        .pipe(catchError(this.handleError));
    }

    getAllCards(id: string): Observable<Cart[]> {
        const url = environment.apiUrl + 'Cart/filter/User/all/'; 
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          });
        return this.http.get<Cart[]>(url + + `${id}`, {headers: headers})
        .pipe(catchError(this.handleError));
    }

    deleteCard(id: string | null) {
      const url = environment.apiUrl + 'Cart/'; 
      var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      });
      return this.http.delete(url + `${id}`, {headers: headers})
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