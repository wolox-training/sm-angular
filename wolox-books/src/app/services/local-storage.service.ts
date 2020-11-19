import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get keysStored(): string[] {
    return Object.keys(localStorage);
  }

  storeOnLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  clearStorage(): void {
    Object.keys(localStorage).forEach((key: string) => localStorage.removeItem(key));
  }
}
