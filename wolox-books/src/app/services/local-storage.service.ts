import { Injectable } from '@angular/core';
import { sessionKeys } from '../constants/session-keys.constant';
import { GeneralObject } from '../interfaces/general-object.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get keysStored(): string[] {
    return Object.keys(localStorage);
  }

  get sessionStorage(): Set<string | null> {
    const sessionStorage: Set<string | null> = new Set([]);
    sessionKeys.forEach((key: string) => sessionStorage.add(localStorage.getItem(key)));
    return sessionStorage;
  }

  storeOnLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  clearStorage(): void {
    Object.keys(localStorage).forEach((key: string) => localStorage.removeItem(key));
  }
}
