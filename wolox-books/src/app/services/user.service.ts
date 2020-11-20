import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserBasic, IUserComplete, IUserHTTPResponse } from '../interfaces/user.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URI: string = `${environment.api}/users`;

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService,
  ) { }

  createUser(newUser: IUserComplete): Observable<IUserComplete> {
    return this._http.post<IUserComplete>(this.API_URI, newUser);
  }

  loginUser(existingUser: IUserBasic): Observable<HttpResponse<IUserHTTPResponse>> {
    return this._http.post<IUserHTTPResponse>(`${this.API_URI}/sign_in`, existingUser, {observe: 'response'});
  }

  persistSession(userSession: HttpResponse<IUserHTTPResponse>): void {
    this._localStorageService.storeOnLocalStorage('access-token', userSession.headers.get('access-token') as string);
    this._localStorageService.storeOnLocalStorage('client', userSession.headers.get('client') as string);
    this._localStorageService.storeOnLocalStorage('uid', userSession.headers.get('uid') as string);
  }
}
