import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SidebarProfileComponent } from '../sidebar/components/sidebar-profile/sidebar-profile.component';

@Component({
  selector: 'app-dashboard-top-navbar',
  imports: [BreadcrumbComponent, SidebarProfileComponent],
  templateUrl: './dashboard-top-navbar.component.html',
})
export class DashboardTopNavbarComponent {}
