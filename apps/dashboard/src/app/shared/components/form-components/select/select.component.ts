import { Component, computed, inject, input, signal } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectModule, SelectPassThrough } from 'primeng/select';
import { FormDefaultClasses, SelectPT } from '../form-default-classes';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-select',
  imports: [SelectModule, LabelComponent, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class SelectComponent {
  private readonly controlContainer = inject(ControlContainer);

  id = input.required<string>();
  fieldControlName = input.required<string>();
  options = input.required<any[]>();
  optionLabel = input<string>();
  optionValue = input<string>();
  placeholder = input<string>('');
  label = input<string>('');
  required = input<boolean>(false);
  errorMessages = input<string[]>();

  defaultClass = signal<string>(FormDefaultClasses.input.default);
  errorClass = signal<string>(FormDefaultClasses.input.error);
  pt = signal<SelectPassThrough>(SelectPT);

  get parentFormGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.fieldControlName()) as FormControl;
  }

  name = computed(() => this.fieldControlName() || this.id());
  disabled = computed(() => this.control.disabled ?? false);

  inputClass = computed(() =>
    this.errorMessages()?.length ? this.errorClass() : this.defaultClass(),
  );
}
