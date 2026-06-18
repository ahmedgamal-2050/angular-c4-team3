import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-dashboard-wrapper',
  imports: [RouterOutlet, SidebarComponent, BottomNavbarComponent],
  templateUrl: './dashboard-wrapper.component.html',
})
export class DashboardWrapperComponent {}
