import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NavbarComponent } from './navbar.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BookService } from 'src/app/services/book.service';
import { IBooksResponse } from 'src/app/interfaces/book.interface';
import { of } from 'rxjs';

class MdDialogMock {
  open() {
    return {
      afterClosed: () => of([])
    };
  }
};

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let loader: HarnessLoader;
  let localStorageServiceStub: Partial<LocalStorageService>;
  let bookServiceStub: Partial<BookService>;
  let MatDialogStub: MdDialogMock;
  let store: MockStore;
  const initialState: IBooksResponse[] = [];

  beforeEach(async () => {
    localStorageServiceStub = {};
    bookServiceStub = {};

    await TestBed.configureTestingModule({
      // imports: [ MatDialogModule ],
      declarations: [ NavbarComponent ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: LocalStorageService,
          useValue: localStorageServiceStub,
        },
        {
          provide: BookService,
          useValue: bookServiceStub,
        },
        {
          provide: MatDialog,
          useClass: MdDialogMock,
        }
      ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
