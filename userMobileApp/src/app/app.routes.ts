import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage),
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },

  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },

  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () => import('./users/users.page').then(m => m.UsersPage),
  },

  {
    path: 'new-user',
    canActivate: [authGuard],
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
  },
];
