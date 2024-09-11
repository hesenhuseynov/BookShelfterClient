import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private apiUrl = 'http://localhost:5287/api/Category/GetAll';

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<{totalCount:number,category:Category[]}>(`${this.apiUrl}`).pipe(
      map(response=>response.category)
    )
  }


}
