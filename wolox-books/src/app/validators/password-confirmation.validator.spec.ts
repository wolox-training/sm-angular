import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule } from '@angular/forms/';
import passwordConfirmation from './password-confirmation.validator';

describe('passwordConfirmation', () => {

  const passwordConfirmationValidator = passwordConfirmation();
  let fGroup: FormGroup;
  let fControlPass: FormControl;
  let fControlPassConfirmation: FormControl;

  beforeEach(() => {
    fGroup = new FormGroup({
      password: new FormControl(null),
      password_confirmation: new FormControl(null),
    })
    fControlPass = fGroup.get('password') as FormControl;
    fControlPassConfirmation = fGroup.get('password_confirmation') as FormControl;
  })

  it('should return null both passwords are correct', () => {
    fControlPass.setValue('12345');
    fControlPassConfirmation.setValue('12345')
    expect(passwordConfirmationValidator(fControlPassConfirmation)).toBeNull();
  });

  it('should return object error if confirmation password is incorrect', () => {
    fControlPass.setValue('12345');
    fControlPassConfirmation.setValue('1234')
    expect(passwordConfirmationValidator(fControlPassConfirmation)).toEqual({ incorrectPassword: true });
  });

});
