import { Component, computed, inject, input, signal } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LabelComponent } from '../label/label.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SelectModule, SelectPassThrough } from 'primeng/select';
import { FormDefaultClasses, PhonePT } from '../form-default-classes';
import { COUNTRIES } from '../../../constants/countries';

@Component({
  selector: 'app-phone',
  imports: [
    InputTextModule,
    SelectModule,
    LabelComponent,
    ReactiveFormsModule,
    KeyFilterModule,
    FormsModule,
  ],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class PhoneComponent {
  private readonly controlContainer = inject(ControlContainer);

  id = input.required<string>();
  fieldControlName = input.required<string>();
  placeholder = input<string>('');
  label = input<string>('');
  required = input<boolean>(false);
  errorMessages = input<string[]>();

  defaultClass = signal<string>(FormDefaultClasses.input.default);
  errorClass = signal<string>(FormDefaultClasses.input.error);
  countries = signal(COUNTRIES);
  selectedCountry = signal(this.countries()[0]);
  pt = signal<SelectPassThrough>(PhonePT);

  get parentFormGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.fieldControlName()) as FormControl;
  }

  name = computed(() => this.fieldControlName() || this.id());
  disabled = computed(() => this.control.disabled ?? false);

  // Custom class to merge with dropdown
  inputClass = computed(() => {
    const base = this.errorMessages()?.length
      ? this.errorClass()
      : this.defaultClass();
    return `${base.replace('rounded-lg!', 'rounded-r-lg!')} w-[calc(100%-8.75rem)] border-l-0 rounded-l-none!`;
  });

  dropdownClass = computed(() => {
    const base = this.errorMessages()?.length
      ? this.errorClass()
      : this.defaultClass();
    return `${base.replace('rounded-lg!', 'rounded-l-lg!').replace('w-full!', 'w-[8.75rem]!')} border-r-0! rounded-r-none! focus:ring-0`;
  });
}
