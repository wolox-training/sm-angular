import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { bestSellerAuthor } from 'src/app/constants/best-seller-author.constant';
import { BookService } from 'src/app/services/book.service';
import { IBookDetailResponse } from '../../../interfaces/book.interface';

@Component({
  selector: 'wb-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  bookDetailData$: Observable<IBookDetailResponse> = EMPTY;
  bestSellerAuthor: string = bestSellerAuthor;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _route: ActivatedRoute,
    private _bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookDetailData$ = this._route.params
      .pipe(
        takeUntil(this.destroy$),
        map(params => params['id']),
        switchMap(id => id ? this._bookService.getBookById(id) : EMPTY)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
