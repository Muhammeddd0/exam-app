import { Observable } from "rxjs";

export abstract class methods{
    
    abstract signin(data:any):Observable<any>;
    abstract signup(data:any):Observable<any>;
    abstract forgotPassword(data:any):Observable<any>;
    abstract verifyCode(data:any):Observable<any>;
    abstract createNewPass(data:any):Observable<any>;
}