import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';
import { DashboardTopNavbarComponent } from '../../shared/components/dashboard-top-navbar/dashboard-top-navbar.component';

@Component({
  selector: 'app-dashboard-wrapper',
  imports: [
    RouterOutlet,
    SidebarComponent,
    BottomNavbarComponent,
    DashboardTopNavbarComponent,
  ],
  templateUrl: './dashboard-wrapper.component.html',
})
export class DashboardWrapperComponent {}
