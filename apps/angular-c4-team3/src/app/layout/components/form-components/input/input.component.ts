import { Component, computed, inject, input, signal } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input',
  imports: [InputTextModule],
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
  
  id = input.required<string>();
  fieldControlName = input.required<string>();
  placeholder = input<string>('');
  type = input<string>('text');
  invalid = input<boolean>(false);
  required = input<boolean>(false);
  inputClass = input<string>('rounded-lg! border! border-zinc-300! placeholder:text-zinc-400! p-4! text-zinc-800! text-sm! w-full!');

  value = signal<string>('');
  disabled = signal<boolean>(false);

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  name = computed(() => this.fieldControlName() || this.id());

  get parentFormGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.fieldControlName()) as FormControl;
  }

  isInvalid = computed(() => this.control.invalid ?? false);

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const nextValue = target?.value ?? '';
    this.value.set(nextValue);
    this.onChange(nextValue);
  }

  handleBlur(): void {
    this.onTouched();
  }
}
