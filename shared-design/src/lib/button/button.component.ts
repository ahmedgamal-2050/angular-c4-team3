import { Component, output, input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [],
})
export class ButtonComponent {
  label = input('Click me');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  size = input<'small' | 'medium' | 'large'>('medium');

  clicked = output<void>();
  icon = input<string | null>(null);
  iconPosition = input<'left' | 'right'>('left');

  onClick() {
    this.clicked.emit();
  }
}
