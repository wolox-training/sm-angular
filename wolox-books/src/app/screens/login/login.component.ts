import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import patternPasswordValidation from 'src/app/constants/pattern-password-validation.constant';
import { IUserBasic, IUserComplete } from 'src/app/interfaces/user.interface';
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
    this.userService.loginUser(user).subscribe((respose: IUserBasic) => {
      console.log('success', respose)
      this.router.navigate(['login'])
    });
  }

  get emailFC(): FormControl {
    return this.loginForm.controls['email'] as FormControl;
  }

  get passwordFC(): FormControl {
    return this.loginForm.controls['password'] as FormControl;
  }

}
