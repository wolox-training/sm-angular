import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let store: any;
  let mockLocalStorage: any;

  beforeEach(() => {

    // store = {};
    // mockLocalStorage = {
    //   getItem: (key: string): string => {
    //     return key in store ? store[key] : null;
    //   },
    //   setItem: (key: string, value: string) => {
    //     store[key] = `${value}`;
    //   },
    //   removeItem: (key: string) => {
    //     delete store[key];
    //   },
    //   clear: () => {
    //     store = {};
    //   },
    // };

    // spyOn(localStorage, 'getItem')
    //   .and.callFake(mockLocalStorage.getItem);
    // spyOn(localStorage, 'setItem')
    //   .and.callFake(mockLocalStorage.setItem);
    // spyOn(localStorage, 'removeItem')
    //   .and.callFake(mockLocalStorage.removeItem);
    // spyOn(localStorage, 'clear')
    //   .and.callFake(mockLocalStorage.clear);

    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('storeOnLocalStorage() should store key-value in the localStorage', () => {
    service.storeOnLocalStorage('access-key', 'abcd')
    expect(localStorage.getItem('access-key')).toBe('abcd');
  });

  it('keysStored() should return array with all keys stored in localStorage (length)', () => {
    service.storeOnLocalStorage('access-key', 'abcd')
    service.storeOnLocalStorage('access', 'abcd')

    // expect(Object.keys(store).length).toBe(2);
    expect(service.keysStored.length).toBe(2);
  });

  it('keysStored() should return array with all keys stored in localStorage (values)', () => {
    service.storeOnLocalStorage('access-key', 'abcd')
    service.storeOnLocalStorage('access', 'abcd')

    expect(Object.keys(localStorage)).toEqual(['access-key', 'access']);
  });

  it('sessionStorage() should return and array with all user session values', () => {
    service.storeOnLocalStorage('access-key', 'abcd')
    service.storeOnLocalStorage('client', '1234')
    service.storeOnLocalStorage('uid', 'ab12')
    expect(service.sessionStorage.size).toBe(3);
  });

  it('clearStorage() should remove all items in localStorage', () => {
    service.storeOnLocalStorage('access-key', 'abcd')
    service.storeOnLocalStorage('client', '1234')
    service.storeOnLocalStorage('uid', 'ab12')

    service.clearStorage()

    expect(Object.keys(localStorage).length).toBe(0);
  });

  afterEach(() => {
    Object.keys(localStorage).forEach((value: string) => localStorage.removeItem(value))
  })

});
