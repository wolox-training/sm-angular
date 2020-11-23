import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IBooksResponse } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';
import { BookDetailComponent } from './book-detail.component';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let store: MockStore;
  let bookServiceStub: Partial<BookService>;
  const initialState: IBooksResponse[] = [];

  beforeEach(async () => {

    bookServiceStub = {};

    await TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: BookService,
          useValue: bookServiceStub,
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
