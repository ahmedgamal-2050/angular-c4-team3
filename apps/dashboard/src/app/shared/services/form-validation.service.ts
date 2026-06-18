import { DestroyRef, Injectable, WritableSignal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  readonly destroyRef = inject(DestroyRef);
  private readonly controlSignals = new Map<AbstractControl, WritableSignal<number>>();

  private registerControlDependency(control: AbstractControl): void {
    let sig = this.controlSignals.get(control);
    if (!sig) {
      sig = signal<number>(0);
      this.controlSignals.set(control, sig);

      // Subscribe to value and status changes
      combineLatest([control.statusChanges, control.valueChanges])
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          sig!.update(n => n + 1);
        });

      // Monkeypatch markAsTouched and markAsUntouched to trigger signal updates
      const originalMarkAsTouched = control.markAsTouched;
      control.markAsTouched = (...args) => {
        originalMarkAsTouched.apply(control, args);
        sig!.update(n => n + 1);
      };

      const originalMarkAsUntouched = control.markAsUntouched;
      control.markAsUntouched = (...args) => {
        originalMarkAsUntouched.apply(control, args);
        sig!.update(n => n + 1);
      };
    }
    // Access the signal to register it as a dependency in computed()
    sig();
  }

  getErrors(
    control: AbstractControl | null,
    messages: { [key: string]: string }
  ): string[] {
    if (!control) {
      return [];
    }
    this.registerControlDependency(control);

    if (!(control.touched || control.dirty)) {
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

  getFormErrors(control: AbstractControl): string[] {
    this.registerControlDependency(control);

    if (!(control.touched || control.dirty)) {
      return [];
    }

    const errorMessage: string[] = [];
    const controlErrors: ValidationErrors | null = control.errors;

    if (!controlErrors) return errorMessage;

    for (const key in controlErrors) {
      switch (key) {
        case 'required':
          errorMessage.push('This field is required');
          break;
        case 'minlength':
          errorMessage.push(
            `This field must be at least ${controlErrors['minlength'].requiredLength} characters long`
          );
          break;
        case 'maxlength':
          errorMessage.push(
            `This field must be at most ${controlErrors['maxlength'].requiredLength} characters long`
          );
          break;
        case 'pattern':
          errorMessage.push('This field must match the pattern');
          break;
        case 'min':
          errorMessage.push(
            `This field must be at least ${controlErrors['min'].min} `
          );
          break;
        case 'max':
          errorMessage.push(
            `This field must be at most ${controlErrors['max'].max} `
          );
          break;
        default:
          break;
      }
    }
    return errorMessage;
  }
}
