import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Authentication = 'register' | 'login';

@Component({
  selector: 'wb-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  @Input() authType: Authentication = 'register';

  constructor(
    private router: Router,
  ) { }

  redirectAuth() {
    this.authType === 'register'
      ? this.router.navigate(['login'])
      : this.router.navigate(['sign-up']);
  }

}
