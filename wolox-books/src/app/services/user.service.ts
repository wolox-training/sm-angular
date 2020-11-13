import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserBasic, IUserComplete } from '../interfaces/user.interface';

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

  loginUser(existingUser: IUserBasic): Observable<IUserBasic> {
    return this.http.post<IUserBasic>(this.API_URI, existingUser);
  }
}
