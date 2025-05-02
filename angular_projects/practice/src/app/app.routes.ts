import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,  // Display Dashboard by default
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Display Dashboard on /dashboard route
  },
  {
    path: 'layout',
    component: LayoutComponent,    // Display LayoutComponent on /layout route
  }
];