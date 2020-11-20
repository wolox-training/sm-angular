import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAllBooksHTTPResponse, IBookDetailResponse, IBooksResponse } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BookCart = new BehaviorSubject<IBooksResponse[]>([]);

  constructor(
    private _http: HttpClient,
  ) { }

  addBookToCart(book: IBooksResponse) {
    const newCurrentBooks: IBooksResponse[] = [...this.BookCart.value, book];
    this.BookCart.next(newCurrentBooks)
  }

  get bookCart(): Observable<IBooksResponse[]> {
    return this.BookCart.asObservable();
  }

  getAllBooks(): Observable<IAllBooksHTTPResponse> {
    return this._http.get<IAllBooksHTTPResponse>(`${environment.api}/books`);
  }

  getBookById(id: string | number): Observable<IBookDetailResponse> {
    return this._http.get<IBookDetailResponse>(`${environment.api}/books/${id}`);
  }
}
