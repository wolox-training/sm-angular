import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAllBooksHTTPResponse } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private _http: HttpClient,
  ) { }

  getAllBooks(): Observable<IAllBooksHTTPResponse> {
    return this._http.get<IAllBooksHTTPResponse>(`${environment.api}/books`)
  }
}
