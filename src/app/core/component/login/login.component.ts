import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { Router, RouterLink } from '@angular/router';
import { AuthLibraryService } from '../../../../../projects/auth-library/src/public-api';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ResetPasswordComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _authServices: AuthLibraryService,
    private _router: Router
  ) {}

  errormsg: string = '';
  msg: string = '';

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

 
  onSubmit() {
    this._authServices.signin(this.login.value).subscribe({
      next: (res) => {
        // console.log(res)
        this.msg = res.message;
        this._router.navigate(['/dashboard']);
        localStorage.setItem('token' , res.token)
      },
      error: (err) => {
        // console.error(err);
        this.errormsg = err.error.message;
      },
    });
  }
}
