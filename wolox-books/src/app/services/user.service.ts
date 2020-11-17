import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserBasic, IUserComplete, IUserHTTPResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URI: string = `${environment.api}/users`;

  constructor(
    private http: HttpClient
  ) { }

  createUser(newUser: IUserComplete): Observable<IUserComplete> {
    return this.http.post<IUserComplete>(this.API_URI, newUser);
  }

  loginUser(existingUser: IUserBasic): Observable<HttpResponse<IUserHTTPResponse>> {
    return this.http.post<IUserHTTPResponse>(`${this.API_URI}/sign_in`, existingUser, {observe: 'response'});
  }
}
