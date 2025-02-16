// src/app/services/api-url.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  private readonly STORAGE_KEY = 'api_url';

  constructor() {}

  setApiUrl(url: string): void {
    localStorage.setItem(this.STORAGE_KEY, url);
  }

  getApiUrl(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  clearApiUrl(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
