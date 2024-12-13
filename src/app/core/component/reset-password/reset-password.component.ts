import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { AuthLibraryService } from '../../../../../projects/auth-library/src/public-api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [InputTextModule , ReactiveFormsModule , CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  constructor(private _authservices:AuthLibraryService , private _router:Router){

  }
  message:string | undefined 
  errormsg:string | undefined 
  resetPassword: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Check if the email field is invalid
  isFieldInvalid(): boolean {
    const control = this.resetPassword.get('email');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  // Handle form submission
  onSubmit() {
   this._authservices.forgotPassword(this.resetPassword.value).subscribe({
    next: (response) => {
      // console.log(response)
    
      this.message = response.message
    this._router.navigate(['/auth/verify'])
    },
    error: (error) => {
      // console.log(error)
      this.errormsg = error.error.message
     }
   })
  }
}
