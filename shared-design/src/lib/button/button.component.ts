import { Component, input, output } from '@angular/core';
import { LucideIconData, LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'shared-ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [LucideAngularModule],
})
export class ButtonComponent {
  label = input('Click me');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  size = input<'small' | 'medium' | 'large'>('medium');
  gap = input<string>('');
  icon = input<LucideIconData | undefined>(undefined);
  iconPosition = input<'left' | 'right'>('left');
  buttonClass = input<string>(
    'bg-maroon-600 dark:bg-soft-pink-300 text-white dark:text-zinc-800'
  );
  iconSize = input<number>(16);
  hideLabelOnMobile = input<boolean>(false);

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
