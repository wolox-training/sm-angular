import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { sessionKeys } from '../constants/session-keys.constant';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  canActivate(): boolean {
    const isUserLoggedIn = this._userService.isUserLoggedIn;

    if (isUserLoggedIn) {
      this._router.navigate(['app', 'list']);
      return false;
    }

    return true;
  }
}
