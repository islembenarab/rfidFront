import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {catchError, Observable} from 'rxjs';
import {PaginatedResponse} from '../modules/pagination-response/pagination-response.module';

@Injectable({
  providedIn: 'root'
})
export class ReadersService {
  private apiUrl = environment.api_url;
  constructor(private http: HttpClient) { }
  // Fetch paginated readers
  getReaders(page: number = 0, size: number = 5): Observable<PaginatedResponse<any>> {
    const params = new HttpParams()
      .set('page', page.toString()) // Current page (0-based index)
      .set('size', size.toString()); // Number of items per page

    return this.http.get<PaginatedResponse<any>>(this.apiUrl + 'rfid', { params }).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }

  // Connect to a reader
  connectReader(id: string): Observable<any> {
    console.log('Connect reader:', id);
    return this.http.patch(`${this.apiUrl}rfid/connect/${id}`, {});
  }

  // Disconnect from a reader
  disconnectReader(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}rfid/disconnect/${id}`, {});
  }
}
