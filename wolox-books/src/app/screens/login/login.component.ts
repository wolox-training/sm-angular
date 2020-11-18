import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import patternPasswordValidation from 'src/app/constants/pattern-password-validation.constant';
import { IUserBasic, IUserHTTPResponse } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'wb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.loginForm = fb.group({
      'email': [ null, [ Validators.required, Validators.email ] ],
      'password': [ null, [ Validators.required, Validators.pattern(patternPasswordValidation) ] ],
    })
  }

  loginUser(user: IUserBasic) {
    this.userService.loginUser(user).subscribe((respose: HttpResponse<IUserHTTPResponse>) => {
      const keys = respose.headers.keys();
      const headers = keys.map(key => `${key}: ${respose.headers.get(key)}`);
      console.log('access-token', respose.headers.get('access-token'))
      this.router.navigate(['/'])
    });
  }

  get emailFC(): FormControl {
    return this.loginForm.controls['email'] as FormControl;
  }

  get passwordFC(): FormControl {
    return this.loginForm.controls['password'] as FormControl;
  }

}
