import { Injectable, Signal, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  getErrorMessage(
    control: AbstractControl | null,
    label?: string,
  ): Signal<string[]> {
    if (!control) {
      return signal([]);
    }

    return toSignal(
      control.statusChanges.pipe(map(() => this.handleErrors(control, label))),
      { initialValue: [] },
    );
  }

  handleErrors(control: AbstractControl | null, label?: string): string[] {
    if (control?.errors && (control.touched || control.dirty)) {
      const errors: string[] = [];
      const controlErrors = control.errors;

      if (controlErrors?.['required']) {
        errors.push(`${label || 'Field'} is required.`);
      }

      if (controlErrors?.['email']) {
        errors.push('Enter a valid email address.');
      }

      if (controlErrors?.['minlength']) {
        errors.push(
          `${label || 'Field'} must be at least ${
            controlErrors['minlength'].requiredLength
          } characters.`,
        );
      }

      return errors;
    }
    return [];
  }
}
