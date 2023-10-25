import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
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
        return this.http
        .post<AuthResponse>(url,data)
        .pipe(map((response) => response.user));
    }
}