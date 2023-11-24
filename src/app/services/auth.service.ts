import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterRequest } from '../models/auth/registerRequest';
import { Observable, map, tap } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth/authResponse';
import { environment } from 'src/environments/environment';
import { AuthentificationRequest } from '../models/auth/authenticationRequest';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  register(data: RegisterRequest): Observable<User> {
    const url = environment.apiUrl + 'singin';
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    });
    return this.http
      .post<User>(url, data, { headers: headers })
      .pipe(map((response) => response));
  }

  login(data: AuthentificationRequest): Observable<User> {
    const url = environment.apiUrl + 'login';
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    });
    return this.http
      .post<User>(url, data, { headers: headers })
      .pipe( map((response) => response));
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.route.navigate(['/auth/login'])

  }
}
