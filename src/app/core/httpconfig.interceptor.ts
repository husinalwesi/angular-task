import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    // Add headers to the request.
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json').set('Content-Type', 'application/json'),
    });
  
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // success case..
        return event;
      }),
      catchError( response => {
        // error handing..
        return throwError(response);
      })
     )

  }
}