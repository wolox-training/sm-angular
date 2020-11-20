import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBooksResponse, IAllBooksHTTPResponse } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'wb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<IBooksResponse[]> = EMPTY;
  userSearch = '';

  constructor(
    private _bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookList$ = this._bookService.getAllBooks().pipe(map((response: IAllBooksHTTPResponse) => response.page));
  }

  updateSearch(searchString: string): void {
    this.userSearch = searchString;
  }

}
