import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-navbar-action-button',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, NgTemplateOutlet],
  templateUrl: './navbar-action-button.component.html',
})
export class NavbarActionButtonComponent {
  icon = input.required<LucideIconData>();
  type = input<'link' | 'action'>('action');
  count = input<number>(0);
  link = input<string[] | string>('');
  action = output<void>();

  handleAction() {
    this.action.emit();
  }
}
