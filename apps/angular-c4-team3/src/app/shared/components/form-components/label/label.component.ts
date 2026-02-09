import { Component, computed, input, signal } from '@angular/core';
import { FormDefaultClasses } from '../form-default-classes';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
})
export class LabelComponent {
  text = input.required<string>();
  for = input.required<string>();
  labelClass = input<string>();
  error = input<boolean>(false);
  disabled = input<boolean>(false);

  defaultClass = signal<string>(FormDefaultClasses.label.default);
  errorClass = signal<string>(FormDefaultClasses.label.error);

  defaultLabelClass = computed(() =>
    this.error() ? this.errorClass() : this.defaultClass(),
  );
}
