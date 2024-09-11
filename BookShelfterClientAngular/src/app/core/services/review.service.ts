import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddReviewResponse, Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:5287/api/Review';

  constructor(private http:HttpClient) {


   }

   addReview(review:Review):Observable<AddReviewResponse>{ 
    return this.http.post<AddReviewResponse>(`${this.baseUrl}/AddReviews`,review)
   }

   getReviews(bookId:number):Observable<{reviews:Review[]}>{
    return this.http.get<{reviews:Review[]}>(`${this.baseUrl}/books/${bookId}/reviews`);

   }

  
}
