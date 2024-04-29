import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private apiUrl = 'https://paginated-api.onrender.com';

  constructor(private http: HttpClient) {}


}
