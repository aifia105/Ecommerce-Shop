import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Interceptor } from './interceptor.interceptor';
import { jest } from '@jest/globals';



import { of } from 'rxjs';


describe('InterceptorInterceptor', () => {
  let interceptor: Interceptor;
  let persistence: any;
  let request: HttpRequest<any>;

  describe('InterceptorInterceptor', () => {
    let interceptor: Interceptor;
    let persistence: any;
    let request: HttpRequest<any>;
    let next: HttpHandler;

    describe('InterceptorInterceptor', () => {
      beforeEach(() => {
        persistence = { get: jest.fn() };
        interceptor = new Interceptor(persistence);
        request = new HttpRequest('GET', 'https://example.com');
        next = { handle: jest.fn(() => of(new HttpResponse<any>({body: {}} as any))) };
      });

      it('should add Authorization header when token is present', () => {
        const token = 'test-token';
        persistence.get.mockReturnValue(token);
        interceptor.intercept(request, next).subscribe((response: any) => {
          expect(request.headers.has('Authorization')).toBe(true);
          expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`);
        });
      });
    });
  });

  const next = {
    handle: jest.fn(() => of(new HttpResponse<any>({body: {}} as any)))
  };
});