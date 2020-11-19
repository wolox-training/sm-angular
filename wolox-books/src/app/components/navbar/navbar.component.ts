import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'wb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private _localStorageService: LocalStorageService,
  ) { }

  logout(): void {
    this._localStorageService.clearStorage();
  }
}
