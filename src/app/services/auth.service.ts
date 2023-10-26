import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { RegisterRequest } from "../models/auth/registerRequest";
import { Observable, map } from "rxjs";
import { User } from "../models/user";
import { AuthResponse } from "../models/auth/authResponse";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient){}

    register(data : RegisterRequest): Observable<User> {
        const url =environment.apiUrl + 'user'
        var headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          });
        return this.http
        .post<AuthResponse>(url,data,{ headers: headers })
        .pipe(map((response) => response.user));
    }
}