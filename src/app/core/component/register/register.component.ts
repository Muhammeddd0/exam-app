import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthLibraryService } from '../../../../../projects/auth-library/src/public-api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  [x: string]: any;
  constructor(private _authservice: AuthLibraryService ,private _router:Router) {}

  msg : string = ''
  errmsg:string = ''

  register: FormGroup = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(6),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(6),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^[A-Z](?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,19}$/
        ),
      ]),
      rePassword: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  // Custom Validator: Check if password and rePassword match
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { passwordsMismatch: true };
  }

  // Check if a form control is invalid
  isFieldInvalid(field: string): boolean {
    const control = this.register.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  // Handle form submission
  onSubmit() {
    this._authservice.signup(this.register.value).subscribe({
      next: (res) => {
        // console.log(res);
        this.msg = res.message
        this._router.navigate(['/auth/login'])
      },
      error: (err) => {
        // console.log(err);
        this.errmsg = err.message
      },
    });
  }
}
