import { Component, computed, inject, input, signal } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormDefaultClasses } from '../form-default-classes';
import { LabelComponent } from '../label/label.component';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';

@Component({
  selector: 'app-password',
  imports: [
    InputTextModule,
    LabelComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class PasswordComponent {
  private readonly controlContainer = inject(ControlContainer);

  readonly Eye = Eye;
  readonly EyeOff = EyeOff;

  id = input.required<string>();
  fieldControlName = input.required<string>();
  placeholder = input<string>('********');
  label = input<string>('');
  required = input<boolean>(false);

  errorMessages = input<string[]>();

  defaultClass = signal<string>(FormDefaultClasses.input.default);
  errorClass = signal<string>(FormDefaultClasses.input.error);

  showPassword = signal<boolean>(false);

  get parentFormGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.fieldControlName()) as FormControl;
  }

  name = computed(() => this.fieldControlName() || this.id());
  disabled = computed(() => this.control.disabled ?? false);
  inputType = computed(() => (this.showPassword() ? 'text' : 'password'));

  inputClass = computed(() =>
    this.errorMessages()?.length ? this.errorClass() : this.defaultClass(),
  );

  toggleVisibility() {
    this.showPassword.update((value) => !value);
  }
}
