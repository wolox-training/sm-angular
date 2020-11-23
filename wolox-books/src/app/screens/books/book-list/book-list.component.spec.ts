import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IAllBooksHTTPResponse, IBooksResponse } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';
import { BookListComponent } from './book-list.component';
import { FilterArrayObjectByKeyValuePipe } from '../../../pipes/filter-array-object-by-key-value.pipe'
import { Observable, of } from 'rxjs';

export class bookServiceStub {
  getAllBooks(): Observable<Partial<IAllBooksHTTPResponse>> {
    return of({
      page: [
        {
          author: 'Sebastian Rodriguez',
          created_at: '30-11-2020',
          editor: 'Sebastian Marin',
          genre: 'Suspense',
          id: 0,
          image_url: '',
          title: 'Hostorias de terror',
          updated_at: 'now',
          year: '2020',
        },
        {
          author: 'Sebastian Rodriguez',
          created_at: '30-11-2020',
          editor: 'Sebastian Marin',
          genre: 'Suspense',
          id: 1,
          image_url: '',
          title: 'Hostorias de terror',
          updated_at: 'now',
          year: '2020',
        },
      ]
    })
  }
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let store: MockStore;
  const initialState: IBooksResponse[] = [];

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        FilterArrayObjectByKeyValuePipe,
        BookListComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: BookService,
          useClass: bookServiceStub,
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// describe('loadTodoList', () => {
//   it('should dispatch load todolist action', () => {
//     const expectedAction = new LoadTodoList();
//     const store = jasmine.createSpyObj<Store<TodoListState>>('store', ['dispatch']);

//     const todoListActions = new TodoListActions(store);
//     todoListActions.loadTodoList();

//     expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
//   });
// });
