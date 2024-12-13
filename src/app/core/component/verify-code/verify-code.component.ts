import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { AuthLibraryService } from '../../../../../projects/auth-library/src/public-api';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , InputTextModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent {

  constructor(private _auth:AuthLibraryService , private _router:Router){}

  message:string = ''
  errormsg:string = ''


  verify: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  });

  onSubmit(){
    this._auth.verifyCode(this.verify.value).subscribe({
      next: (res) => {
        // console.log(res);

 this._router.navigate(['/auth/create-new-password'])
      }
      ,
      error: (err) => {
        console.log(err);
        this.errormsg = err.error.message
        
      }
    })
  }
}
