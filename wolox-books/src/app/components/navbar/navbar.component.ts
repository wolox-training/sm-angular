import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/app/services/book.service';
import { EMPTY, Observable } from 'rxjs';
import { IBooksResponse } from 'src/app/interfaces/book.interface';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';

@Component({
  selector: 'wb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentBooksOnCart$: Observable<IBooksResponse[]> = EMPTY;
  currentBooksOnStoreCart$: Observable<IBooksResponse[]> = EMPTY;
  faShoppingCart = faShoppingCart;

  constructor(
    private _localStorageService: LocalStorageService,
    private _bookService: BookService,
    private _store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.currentBooksOnCart$ = this._bookService.bookCart;
    this.currentBooksOnStoreCart$ = this._store.select('book');
  }

  logout(): void {
    this._localStorageService.clearStorage();
  }
}
