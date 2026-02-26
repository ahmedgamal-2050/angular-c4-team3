import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-navbar-action-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './navbar-action-button.component.html',
  styleUrl: './navbar-action-button.component.css'
})
export class NavbarActionButtonComponent {
  icon = input.required<LucideIconData>();
  count = input<number>(0);
}
