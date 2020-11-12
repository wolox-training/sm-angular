import { Component, Input, OnInit } from '@angular/core';

type Authentication = 'register' | 'login';

@Component({
  selector: 'wb-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  @Input() authType: Authentication = 'register';

}
