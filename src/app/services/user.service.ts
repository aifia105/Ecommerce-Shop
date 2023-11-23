import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserServie {
    getUser() {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }
}