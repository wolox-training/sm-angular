import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookResponse, IAllBooksHTTPResponse } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'wb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  bookList$: Observable<BookResponse[]>;

  constructor(
    private _bookService: BookService,
  ) {
    this.bookList$ = this._bookService.getAllBooks().pipe(map((response: IAllBooksHTTPResponse) => response.page))
  }

}
