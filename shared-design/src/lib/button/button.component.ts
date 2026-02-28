import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconData, LucideAngularModule } from 'lucide-angular';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
})

export class ButtonComponent {
  label = input('Click me');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  size = input<'small' | 'medium' | 'large'>('medium');
  icon = input<LucideIconData | undefined>(undefined);
  iconPosition = input<'left' | 'right'>('left');

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
