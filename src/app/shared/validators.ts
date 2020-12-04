import{AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms'


export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
    return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
      const areTheSame = targetControl.value === control.value;
      return areTheSame ? null : { rePasswordValidator: true };
    }
}