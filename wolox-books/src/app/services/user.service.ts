import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IRegisterResponse from '../interfaces/register-response.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URI: string = `${environment.api}/users`;

  constructor(
    private http: HttpClient
  ) { }

  createUser(newUser: IUser): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(this.API_URI, newUser);
  }
}
