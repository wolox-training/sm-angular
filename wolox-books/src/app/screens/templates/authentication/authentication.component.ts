import { Component, Input } from '@angular/core';
import { AuthenticationPath, AuthenticationContent } from 'src/app/types/authentication.types';

@Component({
  selector: 'wb-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  readonly authPath: string = '/auth';

  @Input() buttonPath: AuthenticationPath = '/sign-up';
  @Input() buttonContent: AuthenticationContent = 'Sign-up';

}
