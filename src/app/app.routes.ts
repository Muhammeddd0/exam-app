import { Routes } from '@angular/router';
import { authGuardGuard } from './core/authGurds/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./core/component/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/component/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'reset',
        loadComponent: () =>
          import(
            './core/component/reset-password/reset-password.component'
          ).then((m) => m.ResetPasswordComponent),
      },{
        path: 'verify',
        loadComponent: () =>
          import(
            './core/component/verify-code/verify-code.component'
          ).then((m) => m.VerifyCodeComponent),
      },
      {
        path: 'create-new-password',
        loadComponent: () =>
          import(
            './core/component/create-new-pass/create-new-pass.component'
          ).then((m) => m.CreateNewPassComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/component/home/home.component').then(
        (m) => m.HomeComponent
      ),
       canActivate: [authGuardGuard],
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/component/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),canActivate: [authGuardGuard],
      },
      {
        path: 'quiz',
        loadComponent: () =>
          import('./features/components/quizes/quizes.component').then(
            (m) => m.QuizesComponent
          ),canActivate: [authGuardGuard],
      },
  

    ],
  },
];
