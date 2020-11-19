import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private _http: HttpClient,
  ) { }

  getAllBooks() {
    return this._http.get(`${environment.api}/books`)
  }
}
