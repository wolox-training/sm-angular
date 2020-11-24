import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { AuthInterceptorService } from './auth-interceptor.service';
import { UserService } from '../services/user.service';

class userServiceMock extends UserService {
  private _logged = false;

  get isUserLoggedIn(): boolean {
    return this._logged;
  }

  set isUserLoggedIn(value: boolean) {
    this._logged = value;
  }
}

describe('AuthInterceptorService', () => {
  let service: AuthInterceptorService;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: UserService,
          useClass: userServiceMock,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        },
      ],
    });
    service = TestBed.inject(AuthInterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
