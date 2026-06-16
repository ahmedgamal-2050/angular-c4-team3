import {
  Component,
  computed,
  inject,
  input,
  signal,
  TemplateRef,
} from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormDefaultClasses } from '../form-default-classes';
import { LabelComponent } from '../label/label.component';
import { NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [
    InputTextModule,
    LabelComponent,
    NgTemplateOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class InputComponent {
  private readonly controlContainer = inject(ControlContainer);

  endIconTemplate = input<TemplateRef<any> | null>(null);

  id = input.required<string>();
  fieldControlName = input.required<string>();

  placeholder = input<string>('');
  label = input<string>('');
  type = input<string>('text');
  invalid = input<boolean>(false);
  required = input<boolean>(false);
  inputClass = input<string>();
  labelClass = input<string>();
  autocomplete = input<string>('off');
  error = input<boolean>(false);
  errorMessages = input<string[]>();

  defaultClass = signal<string>(FormDefaultClasses.input.default);
  errorClass = signal<string>(FormDefaultClasses.input.error);
  value = signal<string>('');

  get parentFormGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.fieldControlName()) as FormControl;
  }

  name = computed(() => this.fieldControlName() || this.id());
  disabled = computed(() => this.control.disabled ?? false);
  defaultInputClass = computed(() =>
    this.errorMessages()?.length ? this.errorClass() : this.defaultClass(),
  );
}
