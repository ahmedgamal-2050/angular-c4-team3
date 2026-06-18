import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-wrapper',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './dashboard-wrapper.component.html',
})
export class DashboardWrapperComponent {}
