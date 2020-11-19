import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'wb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<any> = new Observable();

  constructor(
    private _bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookList$ = this._bookService.getAllBooks().pipe(map((response: any) => response.page))
  }

}
