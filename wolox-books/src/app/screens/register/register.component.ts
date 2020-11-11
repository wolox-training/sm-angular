import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import patternPasswordValidation from 'src/app/constants/pattern-password-validation.constant';
import IUser from 'src/app/interfaces/user.interface';
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
  ) {
    console.log('passwordConfirmation :>> ', passwordConfirmation);
    this.registerForm = fb.group({
      'first_name': [ null ],
      'last_name': [ null ],
      'email': [ null, [ Validators.required, Validators.email ] ],
      'password': [ null, [ Validators.required, Validators.pattern(patternPasswordValidation) ] ],
      'password_confirmation': [ null, [ Validators.required, passwordConfirmation() ] ],
    })
  }

  registerUser(user: IUser) {
    console.log({ user });
  }

  get emailFC(): FormControl {
    return this.registerForm.controls['email'] as FormControl;
  }

  get passwordFC(): FormControl {
    return this.registerForm.controls['password'] as FormControl;
  }

  get passwordConfirmationFC(): FormControl {
    return this.registerForm.controls['password_confirmation'] as FormControl;
  }
}
