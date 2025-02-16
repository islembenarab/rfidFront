// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ApiUrlService} from '../../services/api-url.service';
import {ApiUrlDialogComponent} from '../api-url-dialog/api-url-dialog.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private apiUrlService: ApiUrlService
  ) {}

  ngOnInit(): void {
    const apiUrl = this.apiUrlService.getApiUrl();
    if (!apiUrl) {
      this.openApiUrlDialog();
    }
  }

  openApiUrlDialog(): void {
    const dialogRef = this.dialog.open(ApiUrlDialogComponent, {
      width: '400px',
      disableClose: true // Prevent closing the dialog by clicking outside
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.apiUrlService.setApiUrl(result);
        alert(`API URL set to: ${result}`);
      } else {
        alert('API URL was not set. Please set it later.');
      }
    });
  }
}
