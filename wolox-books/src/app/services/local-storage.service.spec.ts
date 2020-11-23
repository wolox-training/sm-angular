import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

// let store: any = {};
// const mockLocalStorage = {
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

// spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
// spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
// spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
// spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
