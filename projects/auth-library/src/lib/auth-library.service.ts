import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { methods } from './methods/authApiMethods';
import { Observable } from 'rxjs';
import { apiEndpoints } from './endpoints/apiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class AuthLibraryService implements methods {

  constructor(private _httpclient:HttpClient) { }

 signin(data: any): Observable<any> {
  return this._httpclient.post(apiEndpoints.signin,data);
}
 signup(data: any): Observable<any> {
  return this._httpclient.post(apiEndpoints.signup,data);
}

forgotPassword(data:any):Observable<any>{
  return this._httpclient.post(apiEndpoints.forgot_password, data);
}

verifyCode(data:string):Observable<any>{
  return this._httpclient.post(apiEndpoints.Verify_Reset_Code, data);
}

createNewPass(data:string):Observable<any>{
  return this._httpclient.put(apiEndpoints.resetPassword, data);
}
  
}
