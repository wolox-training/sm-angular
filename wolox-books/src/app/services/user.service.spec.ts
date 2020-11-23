import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { IUserBasic, IUserComplete, IUserHTTPResponse } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '@angular/common/http';

const dummyUserRegisterResponse: IUserComplete = {
  email: 'seromarin@gmail.com',
  first_name: 'Sebastian',
  last_name: 'Rodriguez Marin',
  password: 'Sebis1993',
  password_confirmation: 'Sebis1993',
  locale: 'es'
};

const dummyLoginRequest: IUserBasic = {
  email: 'seromarin@gmail.com',
  password: 'Sebis1993',
};

const dummyUserLoginResponse: IUserHTTPResponse = {
  data: {
    id: 1,
    email: 'seromarin@gmail.com',
    provider: 'email',
    uid: 'seromarin@gmail.com',
    allow_password_change: false,
    first_name: 'Sebastian',
    last_name: 'Rodriguez Marin',
    locale: 'es'
  }
}
const API_URI: string = `${environment.api}/users`;

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createUser() should return data with the created user', () => {
    service.createUser(dummyUserRegisterResponse).subscribe((res) => {
      expect(res).toEqual(dummyUserRegisterResponse);
    });

    const req = httpMock.expectOne(API_URI);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUserRegisterResponse);
  });

  it('loginUser() should return data with the created user', () => {
    service.loginUser(dummyLoginRequest).subscribe((res) => {
      console.log(res)
      expect(res.body).toEqual(dummyUserLoginResponse);
    });

    const req = httpMock.expectOne(`${API_URI}/sign_in`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUserLoginResponse);
  });

  it('isUserLoggedIn() should return false', () => {
    expect(service.isUserLoggedIn).toBeFalse();
  })

  it('persistSession() should be called', () => {
    const spy = spyOn(service, 'persistSession');
    service.persistSession({} as HttpResponse<IUserHTTPResponse>);
    expect(spy).toHaveBeenCalled();
  })

  afterEach(() => {
    httpMock.verify();
  });
});
