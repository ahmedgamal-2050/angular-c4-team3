import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,          
  imports: [CommonModule]    
})
export class ButtonComponent {
  @Input() label = 'Click me';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
