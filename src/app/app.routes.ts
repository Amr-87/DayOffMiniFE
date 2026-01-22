import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login-component/login-component';
import { authGuard } from './guards/auth-guard';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
