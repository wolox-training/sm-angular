import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
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
  faPlusCircle = faPlusCircle;
  userSearch = '';

  constructor(
    private _bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookList$ = this._bookService.getAllBooks().pipe(map((response: IAllBooksHTTPResponse) => response.page));
  }

  addBookToCart(book: IBooksResponse) {
    this._bookService.addBookToCart(book);
  }

  updateSearch(searchString: string): void {
    this.userSearch = searchString;
  }

}
