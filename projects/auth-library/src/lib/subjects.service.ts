import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private _httpClient:HttpClient) { }

  

  getSubjects():Observable<any>{
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found in localStorage');
      throw new Error('Token is required');
    }

    const headers = new HttpHeaders({
      'token': token
    });


      return this._httpClient.get<any>("https://exam.elevateegy.com/api/v1/subjects", { headers });

  }

}




