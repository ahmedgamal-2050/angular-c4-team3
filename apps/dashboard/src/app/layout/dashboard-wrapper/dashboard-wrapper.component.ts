import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard-wrapper',
  imports: [RouterOutlet, SidebarComponent, BreadcrumbComponent],
  templateUrl: './dashboard-wrapper.component.html',
})
export class DashboardWrapperComponent {}
