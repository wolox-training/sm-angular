import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function passwordConfirmation(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return control.value !== control.parent?.get('password')?.value ? { incorrectPassword: true } : null;
  };
}
