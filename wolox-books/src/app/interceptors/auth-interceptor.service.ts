import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private _userService: UserService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this._userService.isUserLoggedIn) {
      const copyReq = req.clone({
        setHeaders: {
          'access-token': localStorage.getItem('access-token') as string,
          client: localStorage.getItem('client') as string,
          uid: localStorage.getItem('uid') as string,
        }
      });
      return next.handle(copyReq);
    }

    return next.handle(req);
  }
}
