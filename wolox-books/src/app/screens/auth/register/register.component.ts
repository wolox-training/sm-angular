import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import patternPasswordValidation from 'src/app/constants/pattern-password-validation.constant';
import { IUserComplete } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import passwordConfirmation from 'src/app/validators/password-confirmation.validator';

@Component({
  selector: 'wb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.registerForm = fb.group({
      first_name: [ null, [ Validators.required ] ],
      last_name: [ null, [ Validators.required ] ],
      email: [ null, [ Validators.required, Validators.email ] ],
      password: [ null, [ Validators.required, Validators.pattern(patternPasswordValidation) ] ],
      password_confirmation: [ null, [ Validators.required, passwordConfirmation() ] ],
      locale: [ 'es' ]
    });
  }

  registerUser(user: IUserComplete): void {
    this.userService.createUser(user).subscribe((respose: IUserComplete) => {
      console.log('success', respose);
      this.router.navigate(['login']);
    });
  }

  get firstNameFC(): FormControl {
    return this.registerForm.controls.first_name as FormControl;
  }

  get lastNameFC(): FormControl {
    return this.registerForm.controls.last_name as FormControl;
  }

  get emailFC(): FormControl {
    return this.registerForm.controls.email as FormControl;
  }

  get passwordFC(): FormControl {
    return this.registerForm.controls.password as FormControl;
  }

  get passwordConfirmationFC(): FormControl {
    return this.registerForm.controls.password_confirmation as FormControl;
  }
}
