import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IUser from 'src/app/interfaces/user.interface';
import passwordConfirmation from 'src/app/validators/password-confirmation.validator';

@Component({
  selector: 'wb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  patternPasswordValidation: RegExp = /.*[A-Z]+.*[0-9]+.*/;

  constructor(
    private fb: FormBuilder,
  ) {
    this.registerForm = fb.group({
      'name': [ null ],
      'last-name': [ null ],
      'email': [ null, [ Validators.required, Validators.email ] ],
      'password': [ null, [ Validators.required, Validators.pattern(this.patternPasswordValidation) ] ],
      'password-confirmation': [ null, [ Validators.required, passwordConfirmation() ] ],
    })
  }

  ngOnInit(): void {
  }

  registerUser(user: IUser) {
    console.log({ user });
  }

}
