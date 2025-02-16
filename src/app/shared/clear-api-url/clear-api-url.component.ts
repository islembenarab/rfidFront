// src/app/components/clear-api-url/clear-api-url.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlService } from '../../services/api-url.service';

@Component({
  selector: 'app-clear-api-url',
  standalone: true,
  template: '<p>Clearing API URL...</p>',
  styleUrls: ['./clear-api-url.component.css']
})
export class ClearApiUrlComponent implements OnInit {
  constructor(
    private apiUrlService: ApiUrlService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Clear the API URL
    this.apiUrlService.clearApiUrl();
    alert('API URL has been cleared.');

    // Redirect to the dashboard or another page
    this.router.navigate(['/dashboard']);
  }
}
