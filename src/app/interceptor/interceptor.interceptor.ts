import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from '../services/persistance.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private persistence: PersistanceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.persistence.get("token");
    if(token != null){
      request.clone({
        setHeaders: {
          Authorization:  `Bearer ${token}`
        },
      });
    }
    return next.handle(request);
  }
}
