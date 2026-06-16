import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DashboardWrapperComponent } from './app/layout/dashboard-wrapper/dashboard-wrapper.component';

bootstrapApplication(DashboardWrapperComponent, appConfig).catch(err =>
  console.error(err)
);
