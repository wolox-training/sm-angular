import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { IBooksResponse } from 'src/app/interfaces/book.interface';
import { State } from 'src/app/store';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { bookCartColumns } from 'src/app/constants/book-cart-columns.constant';
import { removeBooks } from 'src/app/store/books/book.actions';


@Component({
  selector: 'wb-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss']
})
export class BookCartComponent implements OnInit {

  bookStoreCart$: Observable<IBooksResponse[]> = EMPTY;
  bookCartColumns = bookCartColumns;
  faTrashAlt = faTrashAlt;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit(): void {
    this.bookStoreCart$ = this._store.select('book');
  }

  removeBookStoreCart(book: IBooksResponse) {
    this._store.dispatch(removeBooks(book))
  }

}
