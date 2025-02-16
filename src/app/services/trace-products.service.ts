import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PaginatedResponse} from '../modules/pagination-response/pagination-response.module';
import {catchError, Observable, SubscriptionLike} from 'rxjs';
import {environment} from '../../environments/environment.development';
import {EventSourceService} from './event-source.service';
import {ApiUrlService} from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class TraceProductsService {
  private readonly apiUrl: string | null ;
  private readonly eventSourceSubscription!: SubscriptionLike;
  private options = { };
  private eventNames = ['rfid-tag'];
  constructor(private http:HttpClient,private eventSourceService: EventSourceService , private apiService:ApiUrlService) {
    this.apiUrl=apiService.getApiUrl();
  }
  getTraceProducts(page: number = 0, size: number = 5) : Observable<PaginatedResponse<any>> {
    const params = new HttpParams()
      .set('page', page.toString()) // Current page (0-based index)
      .set('size', size.toString()) // Number of items per page
      .set('sort', 'lastSeen,desc'); // Sort by timestamp in descending order

    return this.http.get<PaginatedResponse<any>>(this.apiUrl + 'trace', { params }).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
  getServerSentEvents():Observable<any>  {
    return this.eventSourceService.connectToServerSentEvents(this.apiUrl+'rfid/stream', this.options, this.eventNames);
  }

  // Method to close the connection
  closeConnection() {
    this.eventSourceService.close();
  }

}
