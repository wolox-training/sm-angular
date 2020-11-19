import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { sessionKeys } from '../constants/session-keys.constant';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _localStorageService: LocalStorageService,
  ) { }

  canActivate(): boolean {
    const isUserLogged = this._localStorageService.sessionStorage.size === sessionKeys.length;

    if (isUserLogged) this._router.navigate(['app', 'list']);
    return !isUserLogged;
  }
}
