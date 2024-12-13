import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthLibraryService } from '../../../../../projects/auth-library/src/public-api';
import {  Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-create-new-pass',
  standalone: true,
  imports: [CommonModule ,
     RouterLink , 
     FormsModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule],
  templateUrl: './create-new-pass.component.html',
  styleUrl: './create-new-pass.component.css'
})
export class CreateNewPassComponent {
  constructor(
    private _authServices: AuthLibraryService,
    private _router: Router
  ) {}

  errormsg: string = '';
  msg: string = '';

  CreateNewPass: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });


  onSubmit() {
    this._authServices.createNewPass(this.CreateNewPass.value).subscribe({
      next: (res) => {
        console.log(res)
        this.msg = res.message;
        this._router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error(err);
        this.errormsg = err.error.message;
      },
    });
  }
}
