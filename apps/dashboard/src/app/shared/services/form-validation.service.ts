import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  getErrors(control: AbstractControl | null, messages: { [key: string]: string }): string[] {
    if (!control || !(control.touched || control.dirty)) {
      return [];
    }

    const errors: string[] = [];
    const controlErrors: ValidationErrors | null = control.errors;

    if (!controlErrors) return errors;

    for (const key in controlErrors) {
      if (messages[key]) {
        errors.push(messages[key]);
      }
    }
    return errors;
  }
}
