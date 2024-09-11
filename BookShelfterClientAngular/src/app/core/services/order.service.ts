import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDTO } from '../models/order/orderDto';
import { map, Observable } from 'rxjs';
import { Order } from '../models/order/order';
import { OrderWithDetailsDTO } from '../models/order/orderwithdetails';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 private baseUrl ="http://localhost:5287/api/Orders";


   
  constructor(private http:HttpClient) { }

  createOrder(order:OrderDTO):Observable<OrderDTO> {
    return this.http.post<OrderDTO>(`${this.baseUrl}`,order);

  }
  
  getOrders(): Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(`${this.baseUrl}`);
  }


  getAllOrders(): Observable<OrderDTO[]> {
    return this.http.get<{ success: boolean, message: string, orders: OrderDTO[] }>(`${this.baseUrl}/getAll`)
      .pipe(
        map(response => response.orders)  
      );
  }


  getOrderWithDetailsById(orderId: number): Observable<OrderWithDetailsDTO> {
    return this.http.get<OrderWithDetailsDTO>(`${this.baseUrl}/GetOrderWithDetailsById/${orderId}`);
  }
  
  // getAllOrders(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/getAll`);
  // }
  getOrderById(orderId: number): Observable<OrderDTO> {
    return this.http.get<OrderDTO>(`${this.baseUrl}/${orderId}`);
  }

}
