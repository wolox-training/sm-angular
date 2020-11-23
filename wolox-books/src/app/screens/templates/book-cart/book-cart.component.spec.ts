import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IBooksResponse } from 'src/app/interfaces/book.interface';

import { BookCartComponent } from './book-cart.component';

describe('BookCartComponent', () => {
  let component: BookCartComponent;
  let fixture: ComponentFixture<BookCartComponent>;
  let store: MockStore;
  const initialState: IBooksResponse[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCartComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
