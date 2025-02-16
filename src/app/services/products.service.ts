import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {catchError, Observable} from 'rxjs';
import {PaginatedResponse} from '../modules/pagination-response/pagination-response.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.api_url;

  constructor(private http:HttpClient) { }
  // return all products
  getProducts(page: number = 0, size: number = 5):Observable<PaginatedResponse<any>>{
    const params = new HttpParams()
      .set('page', page.toString()) // Current page (0-based index)
      .set('size', size.toString()); // Number of items per page

    return this.http.get<PaginatedResponse<any>>(this.apiUrl + 'products', { params }).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
}
