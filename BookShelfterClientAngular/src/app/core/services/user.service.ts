import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ='http://localhost:5287/api/Users'

  constructor(private http:HttpClient) {}



  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  getUserPanel(): Observable<any> {
    return this.http.get(`${this.baseUrl}/panel`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
