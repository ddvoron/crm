import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Globals} from "../_global/global";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  constructor(private global: Globals) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (localStorage.getItem('token')) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
      }
      console.log(request.headers.keys());
      return next.handle(request);
  }
}
