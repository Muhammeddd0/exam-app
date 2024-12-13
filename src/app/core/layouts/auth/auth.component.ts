import { Component } from '@angular/core';
import { LoginComponent } from '../../component/login/login.component';
import { RegisterComponent } from '../../component/register/register.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResetPasswordComponent } from '../../component/reset-password/reset-password.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    RouterOutlet,
    RouterLink,
    ResetPasswordComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
