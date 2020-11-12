import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import patternPasswordValidation from 'src/app/constants/pattern-password-validation.constant';
import IRegisterResponse from 'src/app/interfaces/register-response.interface';
import IUser from 'src/app/interfaces/user.interface';
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
  ) {
    this.registerForm = fb.group({
      'first_name': [ null, [ Validators.required ] ],
      'last_name': [ null, [ Validators.required ] ],
      'email': [ null, [ Validators.required, Validators.email ] ],
      'password': [ null, [ Validators.required, Validators.pattern(patternPasswordValidation) ] ],
      'password_confirmation': [ null, [ Validators.required, passwordConfirmation() ] ],
    })
  }

  registerUser(user: IUser) {
    console.log({ user });
    this.userService.createUser(user).subscribe((respose: IRegisterResponse) => console.log('success', respose))
  }

  get firstNameFC(): FormControl {
    return this.registerForm.controls['first_name'] as FormControl;
  }

  get lastNameFC(): FormControl {
    return this.registerForm.controls['last_name'] as FormControl;
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
