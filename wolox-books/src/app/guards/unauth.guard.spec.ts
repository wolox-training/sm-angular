import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';

import { UnauthGuard } from './unauth.guard';

class MockUserService extends UserService {
  private _logged: boolean = false;

  get isUserLoggedIn() {
    return this._logged;
  }

  set isUserLoggedIn(value: boolean) {
    this._logged = value;
  }
}

describe('UnauthGuard', () => {
  let guard: UnauthGuard;
  const dummyRoute = {} as ActivatedRouteSnapshot;
  const fakeUrls = [
    '/',
    '/admin',
    '/crisis-center',
    '/a/deep/route',
  ];
  let routerSpy: jasmine.SpyObj<Router>;
  let serviceStub: Partial<MockUserService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ]
    });
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    serviceStub = {};
    guard = new UnauthGuard(routerSpy, serviceStub as MockUserService)
    // guard = TestBed.inject(UnauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('when the user is logged in', () => {
    beforeEach(() => {
      serviceStub.isUserLoggedIn = true;
    });
  });

  describe('when the user is logged out', () => {
    beforeEach(() => {
      serviceStub.isUserLoggedIn = false;
    });
  });
});
